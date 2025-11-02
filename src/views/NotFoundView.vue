<template>
  <main class="flex min-h-dvh flex-col items-center justify-center gap-6 bg-slate-950 px-6 text-center text-slate-200">
    <div class="space-y-3">
      <p class="text-sm uppercase tracking-widest text-slate-400">404</p>
      <h1 class="text-3xl font-semibold text-white">找不到頁面</h1>
      <p class="text-sm text-slate-400">你造訪的頁面不存在，或可能已被移除。</p>
    </div>
    <RouterLink
      class="rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
      :to="{ name: 'gallery' }"
    >
      回到作品牆
    </RouterLink>
  </main>
</template>
