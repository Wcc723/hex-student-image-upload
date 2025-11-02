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

const filteredUsers = computed(() => {
  if (!searchTerm.value) return adminStore.users
  return adminStore.users.filter((user) => {
    const keyword = searchTerm.value.toLowerCase()
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
})

const selectUser = (uid: string) => {
  adminStore.setSelectedUserId(uid)
}

const toggleSelection = (imageId: string) => {
  adminStore.toggleSelection(imageId)
}

const deleteImage = (imageId: string) => {
  if (!adminStore.selectedUserId) return
  if (!window.confirm('確定要刪除此圖片嗎？')) {
    return
  }
  adminStore.deleteImage(adminStore.selectedUserId, imageId)
}

const deleteSelected = () => {
  if (!adminStore.selectedUserId) return
  if (!window.confirm('確定要刪除所有選中的圖片嗎？')) {
    return
  }
  adminStore.deleteSelectedForUser(adminStore.selectedUserId)
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
</script>

<template>
  <main class="mx-auto flex min-h-dvh w-full max-w-7xl flex-col gap-10 p-6">
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

      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex items-center gap-3 text-sm text-slate-300">
          <span>已註冊使用者：{{ adminStore.users.length }} 位</span>
          <span v-if="selectedUser" class="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            檢視中：{{ selectedUser.displayName ?? selectedUser.email }}
          </span>
        </div>
        <div class="flex items-center gap-3">
          <input
            v-model="searchTerm"
            type="search"
            placeholder="搜尋使用者名稱、電子郵件或 UID"
            class="w-full rounded-full border border-white/10 bg-black/40 px-5 py-2 text-sm text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 lg:w-80"
          />
          <button
            class="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:border-white/40 hover:text-white"
            @click="adminStore.refreshUsers"
          >
            重新整理
          </button>
        </div>
      </div>
    </header>

    <p
      v-if="adminStore.error"
      class="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
    >
      {{ adminStore.error }}
    </p>

    <section class="grid gap-6 lg:grid-cols-[18rem,1fr]">
      <aside class="flex max-h-[70vh] flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-slate-400">使用者列表</h2>
        <ul class="flex-1 space-y-1 overflow-y-auto pr-2 text-sm text-slate-200">
          <li
            v-for="user in filteredUsers"
            :key="user.uid"
            class="rounded-2xl transition hover:bg-white/10"
          >
            <button
              class="flex w-full items-center gap-3 px-4 py-3 text-left"
              :class="{
                'bg-white/15': adminStore.selectedUserId === user.uid,
              }"
              @click="selectUser(user.uid)"
            >
              <img
                v-if="user.photoURL"
                :src="user.photoURL"
                alt=""
                class="h-9 w-9 rounded-full object-cover"
              />
              <div class="flex flex-1 flex-col">
                <span class="text-sm font-medium text-white">{{ user.displayName ?? '未命名使用者' }}</span>
                <span class="text-xs text-slate-400">{{ user.email }}</span>
              </div>
              <span class="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">
                {{ user.count }}/30
              </span>
            </button>
          </li>
        </ul>
      </aside>

      <section class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
        <header class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 class="text-lg font-semibold text-white">使用者作品</h2>
            <p class="text-xs text-slate-400">
              可協助刪除圖片或調整註解；這些操作會記錄於 Realtime Database。
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
              class="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 hover:text-white"
              :disabled="!adminStore.selectedUserId"
              @click="adminStore.clearSelection"
            >
              清除選取
            </button>
          </div>
        </header>

        <p v-if="!adminStore.selectedUserId" class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-300">
          請從列表中選取一位使用者，開始檢視並管理其圖片。
        </p>

        <p
          v-else-if="!images.length"
          class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-300"
        >
          尚未上傳任何圖片。
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
            </div>
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>
