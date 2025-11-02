<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useGalleryStore } from '@/stores/gallery'

const router = useRouter()
const authStore = useAuthStore()
const galleryStore = useGalleryStore()

const fileInput = ref<HTMLInputElement | null>(null)
const editingImageId = ref<string | null>(null)
const captionDraft = ref('')

const isQuotaReached = computed(() => galleryStore.remainingQuota <= 0)
const uploadInProgress = computed(() => galleryStore.uploadStatus === 'uploading')
const hasSelection = computed(() => galleryStore.selectedImageIds.length > 0)

const sortedImages = computed(() => galleryStore.sortedImages)
const uploadProgress = computed(() => galleryStore.uploadProgress)

watch(
  () => authStore.activeUserId,
  (uid) => {
    galleryStore.clearSelection()
    galleryStore.unsubscribe()
    if (!uid) return
    galleryStore.subscribe(uid)
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  galleryStore.unsubscribe()
})

const openFileDialog = () => {
  fileInput.value?.click()
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!target.files) return
  galleryStore.queueUpload(Array.from(target.files))
  target.value = ''
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  const files = event.dataTransfer?.files
  if (!files || files.length === 0) return
  galleryStore.queueUpload(Array.from(files))
}

const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
}

const toggleSelection = (imageId: string) => {
  galleryStore.toggleSelection(imageId)
}

const removeImage = (imageId: string) => {
  if (!window.confirm('確定要刪除這張圖片嗎？刪除後將無法復原。')) {
    return
  }
  galleryStore.deleteImage(imageId)
}

const bulkDelete = () => {
  if (!window.confirm('確定要刪除所選圖片嗎？刪除後將無法復原。')) {
    return
  }
  galleryStore.deleteSelected()
}

const beginEditCaption = (imageId: string, currentCaption: string) => {
  editingImageId.value = imageId
  captionDraft.value = currentCaption
}

const cancelEdit = () => {
  editingImageId.value = null
  captionDraft.value = ''
}

const saveCaption = () => {
  if (!editingImageId.value) return
  const sanitized = captionDraft.value.trim().slice(0, 200)
  galleryStore.updateCaption(editingImageId.value, sanitized)
  cancelEdit()
}

const signOut = async () => {
  await authStore.signOut()
  router.replace({ name: 'login' })
}
</script>

<template>
  <main class="mx-auto flex min-h-dvh w-full max-w-6xl flex-col gap-8 p-6">
    <header class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow">
      <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 class="text-2xl font-semibold text-white">作品管理</h1>
          <p class="text-sm text-slate-300">你可以上傳、標註與刪除最多 30 張作品。</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">
            <img
              v-if="authStore.profile?.photoURL"
              :src="authStore.profile.photoURL"
              alt="avatar"
              class="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
            />
            <div>
              <p class="text-sm font-medium text-white">{{ authStore.profile?.displayName ?? '未命名' }}</p>
              <p class="text-xs text-slate-400">{{ authStore.profile?.email }}</p>
            </div>
          </div>
          <button
            class="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/40 hover:text-white"
            @click="signOut"
          >
            登出
          </button>
        </div>
      </div>
      <dl class="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
        <div class="rounded-2xl bg-white/5 p-4">
          <dt class="text-xs uppercase tracking-widest text-slate-400">已上傳</dt>
          <dd class="text-lg font-semibold text-white">{{ galleryStore.images.length }} / 30</dd>
        </div>
        <div class="rounded-2xl bg-white/5 p-4">
          <dt class="text-xs uppercase tracking-widest text-slate-400">剩餘可用</dt>
          <dd class="text-lg font-semibold text-white">{{ galleryStore.remainingQuota }}</dd>
        </div>
        <div class="rounded-2xl bg-white/5 p-4">
          <dt class="text-xs uppercase tracking-widest text-slate-400">上傳狀態</dt>
          <dd class="text-lg font-semibold text-white">
            <span v-if="uploadInProgress">上傳中...</span>
            <span v-else>閒置</span>
          </dd>
        </div>
      </dl>
    </header>

    <p
      v-if="galleryStore.error"
      class="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
    >
      {{ galleryStore.error }}
    </p>

    <section
      class="flex flex-col gap-6 rounded-3xl border border-dashed border-white/20 bg-white/5 p-10 text-center transition hover:border-white/40"
      :class="{ 'opacity-60': isQuotaReached || uploadInProgress }"
      @drop="handleDrop"
      @dragover="handleDragOver"
    >
      <input ref="fileInput" type="file" class="hidden" accept="image/*" multiple @change="handleFileChange" />
      <p class="text-lg font-medium text-white">拖放圖片到這裡，或</p>
      <div class="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
        <button
          class="rounded-full bg-white px-6 py-2 font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          :disabled="isQuotaReached || uploadInProgress"
          @click="openFileDialog"
        >
          選擇檔案
        </button>
        <span>單檔 5 MB 以下，支援 png / jpg / webp。最多 30 張。</span>
      </div>
      <p v-if="isQuotaReached" class="text-sm text-amber-300">
        已達上限，請刪除部分作品後再嘗試上傳。
      </p>
      <div v-if="uploadProgress.length" class="flex flex-col gap-2">
        <div
          v-for="task in uploadProgress"
          :key="task.id"
          class="flex items-center justify-between rounded-full bg-white/10 px-4 py-2 text-xs text-slate-200"
        >
          <span class="truncate">{{ task.fileName }}</span>
          <span>{{ Math.round(task.progress) }}%</span>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h2 class="text-lg font-semibold text-white">我的作品</h2>
        <div class="flex items-center gap-2 text-sm">
          <button
            class="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:border-white/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="!hasSelection"
            @click="bulkDelete"
          >
            刪除所選（{{ galleryStore.selectedImageIds.length }}）
          </button>
          <button
            class="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:border-white/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="!hasSelection"
            @click="galleryStore.clearSelection"
          >
            清除選取
          </button>
        </div>
      </div>

      <p v-if="!galleryStore.images.length" class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-300">
        目前尚未上傳任何作品。你可以拖放圖片或點擊上方按鈕開始上傳。
      </p>

      <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="image in sortedImages"
          :key="image.id"
          class="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5"
        >
          <div class="relative aspect-square overflow-hidden">
            <img :src="image.downloadURL" alt="" class="h-full w-full object-cover transition group-hover:scale-105" />
            <input
              type="checkbox"
              class="absolute left-4 top-4 h-5 w-5 rounded border-white/40 bg-black/40 text-indigo-400 transition"
              :checked="galleryStore.selectedImageIds.includes(image.id)"
              @change="toggleSelection(image.id)"
            />
            <button
              class="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white transition hover:bg-red-600"
              @click="removeImage(image.id)"
            >
              刪除
            </button>
          </div>
          <div class="flex flex-1 flex-col gap-3 p-4 text-sm text-slate-200">
            <p class="text-xs uppercase tracking-widest text-slate-400">
              上傳於 {{ new Date(image.createdAt).toLocaleString() }}
            </p>

            <div v-if="editingImageId === image.id" class="flex flex-1 flex-col gap-2">
              <textarea
                v-model="captionDraft"
                class="min-h-[80px] rounded-2xl border border-white/20 bg-black/40 p-3 text-sm text-white placeholder:text-slate-500"
                placeholder="為這張圖片寫點描述..."
              />
              <div class="flex items-center gap-2">
                <button class="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-900" @click="saveCaption">
                  儲存
                </button>
                <button class="rounded-full border border-white/20 px-4 py-1.5 text-xs text-slate-200" @click="cancelEdit">
                  取消
                </button>
              </div>
            </div>
            <div v-else class="flex flex-1 flex-col gap-2">
              <p class="flex-1 whitespace-pre-wrap text-sm text-slate-100">
                {{ image.caption || '尚未新增註解' }}
              </p>
              <button
                class="self-start rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200 transition hover:border-white/40 hover:text-white"
                @click="beginEditCaption(image.id, image.caption)"
              >
                編輯註解
              </button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>
