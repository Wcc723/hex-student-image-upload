<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminStore } from '@/stores/admin'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const adminStore = useAdminStore()

const searchTerm = ref('')
const editingImageId = ref<string | null>(null)
const captionDraft = ref('')
const copyFeedback = ref<string | null>(null)
let copyFeedbackTimer: ReturnType<typeof setTimeout> | null = null

const filteredUsers = computed(() => {
  if (!searchTerm.value) return adminStore.users
  const keyword = searchTerm.value.toLowerCase()
  return adminStore.users.filter((user) => {
    return (
      user.displayName?.toLowerCase().includes(keyword) ||
      user.email?.toLowerCase().includes(keyword) ||
      user.uid.includes(keyword)
    )
  })
})

const selectedUser = computed(() =>
  adminStore.users.find((user) => user.uid === adminStore.selectedUserId),
)

const images = computed(() => adminStore.selectedUserImages)
const hasSelection = computed(() => adminStore.selectedImageIds.length > 0)
const totalImageCount = computed(() =>
  adminStore.users.reduce((total, user) => total + (user.count ?? 0), 0),
)

watch(
  () => [authStore.isInitialized, authStore.isAdmin] as const,
  ([initialized, isAdmin]) => {
    if (!initialized) return
    if (isAdmin) {
      adminStore.startWatchingUsers()
    } else {
      router.replace({ name: 'gallery' })
    }
  },
  { immediate: true },
)

watch(
  () => adminStore.selectedUserId,
  (uid) => {
    adminStore.unsubscribeFromSelectedUser()
    if (!uid) return
    adminStore.subscribeToUserImages(uid)
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  adminStore.unsubscribeFromSelectedUser()
  adminStore.stopWatchingUsers()
  if (copyFeedbackTimer) {
    clearTimeout(copyFeedbackTimer)
  }
})

const selectUser = (uid: string) => {
  adminStore.setSelectedUserId(uid)
}

const toggleSelection = (imageId: string) => {
  adminStore.toggleSelection(imageId)
}

const deleteImage = async (imageId: string) => {
  if (!adminStore.selectedUserId) return
  if (!window.confirm('確定要刪除此圖片嗎？')) {
    return
  }
  await adminStore.deleteImage(adminStore.selectedUserId, imageId)
}

const deleteSelected = async () => {
  if (!adminStore.selectedUserId) return
  if (!window.confirm('確定要刪除所有選中的圖片嗎？')) {
    return
  }
  await adminStore.deleteSelectedForUser(adminStore.selectedUserId)
}

const copyFolderPath = async (uid: string) => {
  const path = `images/${uid}/`
  try {
    await navigator.clipboard.writeText(path)
    showCopyFeedback(`已複製 ${path}`)
  } catch (error) {
    console.error('[admin] copyFolderPath error', error)
    showCopyFeedback('複製失敗，請手動複製資料夾路徑。')
  }
}

const beginEdit = (imageId: string, caption: string) => {
  editingImageId.value = imageId
  captionDraft.value = caption
}

const cancelEdit = () => {
  editingImageId.value = null
  captionDraft.value = ''
}

const saveCaption = () => {
  if (!adminStore.selectedUserId || !editingImageId.value) return
  const sanitized = captionDraft.value.trim().slice(0, 200)
  adminStore.updateCaption(adminStore.selectedUserId, editingImageId.value, sanitized)
  cancelEdit()
}

const copyImageUrl = async (downloadURL: string) => {
  if (!downloadURL) {
    showCopyFeedback('無法取得圖片連結')
    return
  }
  try {
    await navigator.clipboard.writeText(downloadURL)
    showCopyFeedback('已複製圖片連結，可直接分享')
  } catch (error) {
    console.error('[admin] copyImageUrl error', error)
    showCopyFeedback('複製失敗，請手動複製連結')
  }
}

const showCopyFeedback = (message: string) => {
  copyFeedback.value = message
  if (copyFeedbackTimer) {
    clearTimeout(copyFeedbackTimer)
  }
  copyFeedbackTimer = setTimeout(() => {
    copyFeedback.value = null
    copyFeedbackTimer = null
  }, 2400)
}
</script>

<template>
  <main class="mx-auto flex min-h-dvh w-full max-w-7xl flex-col gap-8 p-6">
    <header class="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 class="text-2xl font-semibold text-white">管理後台</h1>
          <p class="text-sm text-slate-300">檢視所有使用者的作品，並協助處理資料。</p>
        </div>
        <div class="rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
          管理者：{{ authStore.profile?.displayName ?? authStore.profile?.email }}
        </div>
      </div>

      <div class="flex flex-col gap-2 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <span>已註冊使用者：{{ adminStore.users.length }} 位｜總圖片數：{{ totalImageCount }} 張</span>
        <span v-if="selectedUser" class="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
          目前檢視：images/{{ selectedUser.uid }}/
        </span>
      </div>
    </header>

    <p
      v-if="adminStore.error"
      class="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
    >
      {{ adminStore.error }}
    </p>

    <section class="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6">
      <header class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="text-lg font-semibold text-white">使用者圖片資料夾</h2>
          <p class="text-xs text-slate-400">選取資料夾後可檢視 Storage 中的 <code class="text-slate-200">images/&lt;uid&gt;/</code>。</p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            v-model="searchTerm"
            type="search"
            placeholder="搜尋名稱、Email 或 UID"
            class="w-full rounded-full border border-white/10 bg-black/40 px-5 py-2 text-sm text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:w-72"
          />
          <button
            class="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:border-white/40 hover:text-white"
            @click="adminStore.refreshUsers"
          >
            重新整理
          </button>
        </div>
      </header>

      <p
        v-if="copyFeedback"
        class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-100"
      >
        {{ copyFeedback }}
      </p>

      <p
        v-if="filteredUsers.length === 0"
        class="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-slate-300"
      >
        目前沒有符合搜尋條件的資料夾。
      </p>

      <div
        v-else
        class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        <article
          v-for="user in filteredUsers"
          :key="user.uid"
          class="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/40"
          :class="{
            'border-white/60 ring-1 ring-white/40': adminStore.selectedUserId === user.uid,
          }"
        >
          <div class="flex items-start justify-between gap-3">
            <div class="flex flex-col">
              <span class="text-sm font-semibold text-white">
                {{ user.displayName ?? '未命名使用者' }}
              </span>
              <span class="text-xs text-slate-400">{{ user.email }}</span>
            </div>
            <span class="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">
              {{ user.count }}/{{ user.quota }}
            </span>
          </div>

          <div class="space-y-1">
            <p class="text-xs uppercase tracking-widest text-slate-500">資料夾路徑</p>
            <p class="truncate rounded-xl bg-black/30 px-3 py-2 text-xs text-slate-200">
              <code class="text-slate-100">images/{{ user.uid }}/</code>
            </p>
          </div>

          <div class="flex flex-col gap-2 sm:flex-row">
            <button
              class="flex-1 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-200"
              @click="selectUser(user.uid)"
            >
              檢視內容
            </button>
            <button
              class="flex-1 rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 hover:text-white"
              @click="copyFolderPath(user.uid)"
            >
              複製路徑
            </button>
          </div>
        </article>
      </div>
    </section>

    <section class="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6">
      <header class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="text-lg font-semibold text-white">資料夾內容</h2>
          <p class="text-xs text-slate-400">
            <template v-if="selectedUser">
              目前瀏覽：<code class="text-slate-200">images/{{ selectedUser.uid }}/</code>
            </template>
            <template v-else>請先選擇上方資料夾以載入圖片。</template>
          </p>
        </div>
        <div class="flex items-center gap-2 text-sm text-slate-300">
          <button
            class="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="!hasSelection || !adminStore.selectedUserId"
            @click="deleteSelected"
          >
            刪除所選（{{ adminStore.selectedImageIds.length }}）
          </button>
          <button
            class="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="!adminStore.selectedUserId"
            @click="adminStore.clearSelection"
          >
            清除選取
          </button>
        </div>
      </header>

      <p v-if="!adminStore.selectedUserId" class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-300">
        先從上方「使用者圖片資料夾」選擇一位使用者即可載入內容。
      </p>

      <p
        v-else-if="!images.length"
        class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-300"
      >
        此資料夾目前尚無圖片。
      </p>

      <ul v-else class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <li v-for="image in images" :key="image.id" class="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div class="relative aspect-square overflow-hidden">
            <img :src="image.downloadURL" alt="" class="h-full w-full object-cover" />
            <input
              type="checkbox"
              class="absolute left-4 top-4 h-5 w-5 rounded border-white/40 bg-black/40 text-indigo-400"
              :checked="adminStore.selectedImageIds.includes(image.id)"
              @change="toggleSelection(image.id)"
            />
            <button
              class="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white transition hover:bg-red-600"
              @click="deleteImage(image.id)"
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
                placeholder="為這張圖片補上註解..."
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
                @click="beginEdit(image.id, image.caption)"
              >
                編輯註解
              </button>
            </div>
            <div class="flex flex-wrap items-center gap-2 border-t border-white/10 pt-3 text-xs text-slate-300">
              <button
                class="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200 transition hover:border-white/40 hover:text-white"
                @click="copyImageUrl(image.downloadURL)"
              >
                複製圖片連結
              </button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>
