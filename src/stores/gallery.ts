import { defineStore } from 'pinia'
import {
  get,
  onValue,
  ref as dbRef,
  remove,
  runTransaction,
  set,
  update,
  type Unsubscribe,
  push,
} from 'firebase/database'
import {
  deleteObject,
  getDownloadURL,
  ref as storageRef,
  uploadBytesResumable,
  type UploadTask,
} from 'firebase/storage'
import type { UploadTaskSnapshot } from 'firebase/storage'
import { useAuthStore } from '@/stores/auth'
import { database, storage } from '@/lib/firebase'

export interface GalleryImage {
  id: string
  fileName: string
  storagePath: string
  downloadURL: string
  caption: string
  createdAt: number
  updatedAt: number
}

interface UploadProgressItem {
  id: string
  fileName: string
  progress: number
}

type GalleryStatus = 'idle' | 'loading'

interface GalleryState {
  images: GalleryImage[]
  status: GalleryStatus
  error: string | null
  selectedImageIds: string[]
  uploadStatus: 'idle' | 'uploading'
  uploadProgress: UploadProgressItem[]
  unsubscribeFn: Unsubscribe | null
}

const MAX_SIZE = 5 * 1024 * 1024 // 5 MB
const MAX_IMAGES = 30
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export const useGalleryStore = defineStore('gallery', {
  state: (): GalleryState => ({
    images: [],
    status: 'idle',
    error: null,
    selectedImageIds: [],
    uploadStatus: 'idle',
    uploadProgress: [],
    unsubscribeFn: null,
  }),
  getters: {
    sortedImages: (state) =>
      [...state.images].sort((a, b) => b.createdAt - a.createdAt),
    remainingQuota(): number {
      const authStore = useAuthStore()
      const quota = authStore.profile?.quota ?? MAX_IMAGES
      const count = authStore.profile?.count ?? this.images.length
      return Math.max(0, quota - count)
    },
  },
  actions: {
    subscribe(uid: string) {
      this.status = 'loading'
      const imagesRef = dbRef(database, `users/${uid}/images`)

      this.unsubscribeFn = onValue(
        imagesRef,
        (snapshot) => {
          const data = snapshot.val() as Record<string, GalleryImage> | null
          if (!data) {
            this.images = []
            this.status = 'idle'
            return
          }

          this.images = Object.entries(data).map(([id, value]) => ({
            id,
            fileName: value.fileName,
            storagePath: value.storagePath,
            downloadURL: value.downloadURL,
            caption: value.caption ?? '',
            createdAt: value.createdAt ?? Date.now(),
            updatedAt: value.updatedAt ?? value.createdAt ?? Date.now(),
          }))
          this.status = 'idle'
        },
        (error) => {
          console.error('[gallery] subscribe error', error)
          this.error = '無法載入圖片列表'
          this.status = 'idle'
        },
      )
    },

    unsubscribe() {
      if (this.unsubscribeFn) {
        this.unsubscribeFn()
        this.unsubscribeFn = null
      }
      this.images = []
      this.selectedImageIds = []
      this.uploadProgress = []
      this.error = null
    },

    addUploadProgress(taskId: string, fileName: string) {
      this.uploadProgress.push({ id: taskId, fileName, progress: 0 })
    },

    updateUploadProgress(taskId: string, snapshot: UploadTaskSnapshot) {
      const item = this.uploadProgress.find((progress) => progress.id === taskId)
      if (!item) return
      item.progress = snapshot.totalBytes
        ? (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        : 0
    },

    removeUploadProgress(taskId: string) {
      this.uploadProgress = this.uploadProgress.filter((item) => item.id !== taskId)
    },

    async queueUpload(files: File[]) {
      const authStore = useAuthStore()
      const uid = authStore.activeUserId
      if (!uid) {
        this.error = '尚未登入。'
        return
      }

      const validFiles = files.filter((file) => {
        if (!ALLOWED_TYPES.includes(file.type)) {
          return false
        }
        if (file.size > MAX_SIZE) {
          return false
        }
        return true
      })

      if (!validFiles.length) {
        this.error = '沒有符合條件的檔案（5 MB 以下且為 jpeg/png/webp）。'
        return
      }

      const availableSlots = this.remainingQuota
      if (availableSlots <= 0) {
        this.error = '已達 30 張限制，請先刪除部分圖片。'
        return
      }

      const filesToUpload = validFiles.slice(0, availableSlots)
      this.uploadStatus = 'uploading'
      this.error = null

      try {
        await Promise.all(filesToUpload.map((file) => this.uploadSingleFile(uid, file)))
      } catch (error) {
        console.error('[gallery] queueUpload error', error)
        if (!this.error) {
          this.error = '上傳失敗，請稍後再試。'
        }
      } finally {
        this.uploadStatus = 'idle'
      }
    },

    async uploadSingleFile(uid: string, file: File) {
      const imagesRef = dbRef(database, `users/${uid}/images`)
      const newImageRef = push(imagesRef)
      if (!newImageRef.key) {
        throw new Error('無法建立圖片節點')
      }

      const extension = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
      const sanitizedExt = ['jpg', 'jpeg', 'png', 'webp'].includes(extension) ? extension : 'jpg'
      const storagePath = `images/${uid}/${newImageRef.key}.${sanitizedExt}`
      const fileName = file.name

      const statsRef = dbRef(database, `users/${uid}/stats`)
      const reserveResult = await runTransaction(statsRef, (stats) => {
        const current = stats ?? { count: 0, quota: MAX_IMAGES }
        const quota = current.quota ?? MAX_IMAGES
        const count = current.count ?? 0
        if (count >= quota) {
          return current
        }
        return { ...current, count: count + 1, quota }
      })

      if (!reserveResult.committed) {
        throw new Error('超過可用額度')
      }

      const taskId = newImageRef.key
      this.addUploadProgress(taskId, fileName)
      const storageReference = storageRef(storage, storagePath)
      const uploadTask: UploadTask = uploadBytesResumable(storageReference, file, {
        contentType: file.type,
      })

      return new Promise<void>((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            this.updateUploadProgress(taskId, snapshot)
          },
          async (error) => {
            this.removeUploadProgress(taskId)
            await this.revertQuota(uid)
            reject(error)
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
              const timestamp = Date.now()
              await set(newImageRef, {
                fileName,
                storagePath,
                downloadURL,
                caption: '',
                createdAt: timestamp,
                updatedAt: timestamp,
              })
              this.removeUploadProgress(taskId)
              resolve()
            } catch (error) {
              this.removeUploadProgress(taskId)
              await this.revertQuota(uid)
              reject(error)
            }
          },
        )
      })
    },

    async revertQuota(uid: string) {
      const statsRef = dbRef(database, `users/${uid}/stats`)
      await runTransaction(statsRef, (stats) => {
        if (!stats) return stats
        const count = stats.count ?? 0
        return {
          ...stats,
          count: Math.max(0, count - 1),
        }
      })
    },

    toggleSelection(imageId: string) {
      if (this.selectedImageIds.includes(imageId)) {
        this.selectedImageIds = this.selectedImageIds.filter((id) => id !== imageId)
      } else {
        this.selectedImageIds.push(imageId)
      }
    },

    clearSelection() {
      this.selectedImageIds = []
    },

    async deleteImage(imageId: string) {
      const authStore = useAuthStore()
      const uid = authStore.activeUserId
      if (!uid) {
        this.error = '尚未登入，無法刪除圖片。'
        return
      }

      await this.deleteImageForUser(uid, imageId)
      this.selectedImageIds = this.selectedImageIds.filter((id) => id !== imageId)
    },

    async deleteImageForUser(uid: string, imageId: string) {
      try {
        const imageRef = dbRef(database, `users/${uid}/images/${imageId}`)
        const snapshot = await get(imageRef)
        if (!snapshot.exists()) {
          return
        }
        const image = snapshot.val() as GalleryImage
        if (image.storagePath) {
          const storageReference = storageRef(storage, image.storagePath)
          await deleteObject(storageReference).catch((error) => {
            console.warn('[gallery] deleteObject warning', error)
          })
        }
        await remove(imageRef)
        await this.revertQuota(uid)
      } catch (error) {
        console.error('[gallery] deleteImageForUser error', error)
        this.error = '刪除失敗，請稍後再試。'
        throw error
      }
    },

    async deleteSelected() {
      const authStore = useAuthStore()
      const uid = authStore.activeUserId
      if (!uid || !this.selectedImageIds.length) return

      const imageIds = [...this.selectedImageIds]
      this.clearSelection()
      await Promise.all(imageIds.map((id) => this.deleteImageForUser(uid, id)))
    },

    async updateCaption(imageId: string, caption: string) {
      const authStore = useAuthStore()
      const uid = authStore.activeUserId
      if (!uid) return

      const imageRef = dbRef(database, `users/${uid}/images/${imageId}`)
      await update(imageRef, {
        caption,
        updatedAt: Date.now(),
      })
    },
  },
})
