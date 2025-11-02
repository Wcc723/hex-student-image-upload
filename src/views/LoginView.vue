<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()

const isLoading = computed(() => authStore.status === 'loading')
const redirectPath = computed(() => (route.query.redirect as string) ?? '/gallery')

const handleGoogleLogin = async () => {
  if (isLoading.value) return
  try {
    await authStore.signInWithGoogle()
    router.replace(redirectPath.value)
  } catch (error) {
    console.error('[login] sign-in failed', error)
  }
}
</script>

<template>
  <main class="mx-auto flex min-h-dvh w-full max-w-4xl flex-col items-center justify-center px-6">
    <section class="w-full rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur">
      <header class="mb-8 space-y-2 text-center">
        <h1 class="text-3xl font-semibold tracking-tight text-white">學生作品牆</h1>
        <p class="text-sm text-slate-300">
          使用 Google 帳號登入後即可上傳、整理並分享你的作品。
        </p>
      </header>

      <div class="space-y-6 text-center">
        <button
          class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-base font-medium text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
          :disabled="isLoading"
          @click="handleGoogleLogin"
        >
          <span v-if="isLoading" class="h-4 w-4 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
          <span>使用 Google 登入</span>
        </button>

        <p class="text-xs text-slate-400">
          登入即代表你同意平台遵守作品上傳的使用規範。
        </p>

        <p v-if="authStore.error" class="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {{ authStore.error }}
        </p>
      </div>
    </section>
  </main>
</template>
