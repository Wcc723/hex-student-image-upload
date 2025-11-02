import { defineStore } from 'pinia'
import { get, onValue, ref as dbRef, type Unsubscribe, type DataSnapshot } from 'firebase/database'
import { database } from '@/lib/firebase'
import type { GalleryImage } from '@/stores/gallery'
import { useGalleryStore } from '@/stores/gallery'
import { useAuthStore } from '@/stores/auth'

export interface AdminUserSummary {
  uid: string
  displayName: string | null
  email: string | null
  photoURL: string | null
  count: number
  quota: number
}

interface AdminState {
  users: AdminUserSummary[]
  usersStatus: 'idle' | 'loading'
  selectedUserId: string | null
  selectedUserImages: GalleryImage[]
  selectedImageIds: string[]
  imagesStatus: 'idle' | 'loading'
  error: string | null
  usersUnsubscribe: Unsubscribe | null
  imagesUnsubscribe: Unsubscribe | null
}

export const useAdminStore = defineStore('admin', {
  state: (): AdminState => ({
    users: [],
    usersStatus: 'idle',
    selectedUserId: null,
    selectedUserImages: [],
    selectedImageIds: [],
    imagesStatus: 'idle',
    error: null,
    usersUnsubscribe: null,
    imagesUnsubscribe: null,
  }),
  actions: {
    assertAdmin() {
      const authStore = useAuthStore()
      if (!authStore.isAdmin) {
        throw new Error('只有管理者可執行此操作')
      }
    },

    startWatchingUsers() {
      this.assertAdmin()
      if (this.usersUnsubscribe) return
      const usersRef = dbRef(database, 'users')
      this.usersStatus = 'loading'

      this.usersUnsubscribe = onValue(
        usersRef,
        (snapshot) => {
          this.users = this.normalizeUsers(snapshot)
          this.usersStatus = 'idle'
        },
        (error) => {
          console.error('[admin] startWatchingUsers error', error)
          this.error = '無法載入使用者列表'
          this.usersStatus = 'idle'
        },
      )
    },

    stopWatchingUsers() {
      if (this.usersUnsubscribe) {
        this.usersUnsubscribe()
        this.usersUnsubscribe = null
      }
      this.users = []
      this.usersStatus = 'idle'
    },

    async refreshUsers() {
      this.assertAdmin()
      this.usersStatus = 'loading'
      try {
        const snapshot = await get(dbRef(database, 'users'))
        this.users = this.normalizeUsers(snapshot)
      } catch (error) {
        console.error('[admin] refreshUsers error', error)
        this.error = '重新整理使用者列表失敗'
      } finally {
        this.usersStatus = 'idle'
      }
    },

    setSelectedUserId(uid: string) {
      this.assertAdmin()
      this.selectedUserId = uid
      this.selectedImageIds = []
    },

    subscribeToUserImages(uid: string) {
      this.assertAdmin()
      if (this.imagesUnsubscribe) {
        this.imagesUnsubscribe()
        this.imagesUnsubscribe = null
      }

      const imagesRef = dbRef(database, `users/${uid}/images`)
      this.imagesStatus = 'loading'

      this.imagesUnsubscribe = onValue(
        imagesRef,
        (snapshot) => {
          const data = snapshot.val() as Record<string, GalleryImage> | null
          if (!data) {
            this.selectedUserImages = []
          } else {
            this.selectedUserImages = Object.entries(data)
              .map(([id, value]) => ({
                id,
                fileName: value.fileName,
                storagePath: value.storagePath,
                downloadURL: value.downloadURL,
                caption: value.caption ?? '',
                createdAt: value.createdAt ?? Date.now(),
                updatedAt: value.updatedAt ?? value.createdAt ?? Date.now(),
              }))
              .sort((a, b) => b.createdAt - a.createdAt)
          }
          this.imagesStatus = 'idle'
        },
        (error) => {
          console.error('[admin] subscribeToUserImages error', error)
          this.error = '無法載入圖片資料'
          this.imagesStatus = 'idle'
        },
      )
    },

    unsubscribeFromSelectedUser() {
      if (this.imagesUnsubscribe) {
        this.imagesUnsubscribe()
        this.imagesUnsubscribe = null
      }
      this.selectedUserImages = []
      this.selectedImageIds = []
      this.imagesStatus = 'idle'
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

    async deleteImage(uid: string, imageId: string) {
      this.assertAdmin()
      const galleryStore = useGalleryStore()
      await galleryStore.deleteImageForUser(uid, imageId)
    },

    async deleteSelectedForUser(uid: string) {
      this.assertAdmin()
      if (!this.selectedImageIds.length) return

      const imageIds = [...this.selectedImageIds]
      this.clearSelection()
      const galleryStore = useGalleryStore()
      await Promise.all(imageIds.map((imageId) => galleryStore.deleteImageForUser(uid, imageId)))
    },

    async updateCaption(uid: string, imageId: string, caption: string) {
      this.assertAdmin()
      const galleryStore = useGalleryStore()
      await galleryStore.updateCaptionForUser(uid, imageId, caption)
    },

    normalizeUsers(snapshot: DataSnapshot): AdminUserSummary[] {
      const users: AdminUserSummary[] = []
      snapshot.forEach((childSnapshot) => {
        const uid = childSnapshot.key
        if (!uid) return
        const profile = childSnapshot.child('profile').val() ?? {}
        const stats = childSnapshot.child('stats').val() ?? {}
        users.push({
          uid,
          displayName: profile.displayName ?? null,
          email: profile.email ?? null,
          photoURL: profile.photoURL ?? null,
          count: stats.count ?? 0,
          quota: stats.quota ?? 30,
        })
      })

      return users.sort((a, b) => {
        const labelA = (a.displayName ?? a.email ?? a.uid).toLowerCase()
        const labelB = (b.displayName ?? b.email ?? b.uid).toLowerCase()
        return labelA.localeCompare(labelB, 'zh-Hant')
      })
    },
  },
})
