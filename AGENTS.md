# Repository Guidelines

## 專案結構與模組分佈
- `src/`：Vue 3 + TypeScript 程式主體，採用 `script setup`。`router/` 定義頁面路由，`stores/` 放置 Pinia 狀態邏輯。未來元件請依頁面或功能建立子資料夾以便切分。
- `public/`：靜態資源，會原封不動複製到最終建置結果。大型圖像請壓縮後再放入。
- `src/assets/all.css`：Tailwind CSS v4 入口檔，內含 `@import "tailwindcss";` 與自訂樣式。新增 Utility 或 Theme 設定請集中於此。
- `docs/`：放置專案說明或需求文件，新文件需以英文檔名並附日期前綴，例如 `2025-03-UX-brief.md`。
- `env.d.ts`、`tsconfig*.json`、`vite.config.ts`：維護型配置，如修改請同步更新對應說明。

## 建置、測試與本機開發指令
- `npm run dev`：啟動 Vite 開發伺服器，支援 HMR，預設 http://localhost:5173。
- `npm run build`：執行型別檢查與正式建置；CI 環境請使用此指令確保產物可部署。
- `npm run preview`：預覽建置產物，提交前建議檢查路由與資源路徑。
- `npm run lint`：以 ESLint 搭配快取與自動修正。不可跳過錯誤，若為例外情境需在 PR 描述說明。
- `npm run format`：針對 `src/` 執行 Prettier。提交前請先跑 lint，再視需要執行 format。

## 程式風格與命名規範
- 以 Prettier 預設 2 空白縮排；禁止混用 tab 與空白。Vue SFC 優先使用 `<script setup lang="ts">`。
- TypeScript 檔案須明確輸出介面或型別，避免使用 `any`。若無法避免，需加上註解說明原因。
- Pinia store 以 `useXxxStore` 命名，檔名採 kebab-case，如 `use-gallery-store.ts`。
- 元件檔案請使用 PascalCase，例如 `ArtworkWall.vue`，對應的測試檔建議放在同層 `__tests__` 目錄。

## 樣式與 Tailwind 4 指南
- 本專案使用 Tailwind CSS v4 與 `@tailwindcss/vite` 插件（參考 `vite.config.ts`），無需額外 PostCSS 設定。
- 全域樣式集中在 `src/assets/all.css`，可使用 `@theme` 擴充色票、字體與 spacing，或以 `@layer utilities` 定義共用 Utility。
- 元件內盡量以 Tailwind Utility class 撰寫版面；若樣式重複超過三處，改寫成 `@apply` 或抽成元件。
- 僅在需要覆蓋 base 樣式時才引入 Scoped CSS；避免與 Tailwind 冲突，必要時加入 `!` 修飾並註記原因。

## 測試指南
- 專案尚未導入測試框架，若新增功能請同步建立 Vitest + Vue Test Utils 測試。測試檔命名 `*.spec.ts` 且位於 `src/**/__tests__/`。
- 新增測試時至少涵蓋關鍵狀態邏輯與路由守衛。建議以 E2E 整合測試覆蓋主要使用流程，再補單元測試。
- 如測試需依賴 API，請使用 mock service worker 或自製 stub，避免對外部服務發請求。

## Commit 與 Pull Request 指南
- Git 歷史以中文敘述的祈使句摘要為主，例如 `新增作品牆路由`。每個 commit 聚焦單一議題，必要時拆分重構與功能提交。
- PR 描述需包含：變更摘要、測試結果（指令與結論）、截圖或動態錄影（若為 UI 改動）、相關議題連結。
- 若修改設定或依賴，請於 PR 中標註需要的部署動作與環境變數調整，並在 `docs/` 補充細節。
- 任何破壞性變更需在標題加上 `[BREAKING]`，並於描述提供升級步驟。
