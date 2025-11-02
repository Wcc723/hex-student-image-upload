# GEMINI.md - 專案背景

這份文件提供了「學生作品牆」專案的全面概述，旨在作為 Gemini 未來互動的教學背景。

## 專案概述

這是一個網路應用程式，作為學生的數位藝術作品畫廊。使用者可以登入、上傳他們的作品、添加說明並管理他們的提交。該應用程式還具有一個管理儀表板，用於管理所有使用者上傳的內容。

### 關鍵技術

-   **前端框架**：[Vue.js](https://vuejs.org/) (v3) 搭配 `<script setup>` 語法。
-   **語言**：[TypeScript](https://www.typescriptlang.org/)
-   **建構工具**：[Vite](https://vitejs.dev/)
-   **狀態管理**：[Pinia](https://pinia.vuejs.org/)
-   **路由**：[Vue Router](https://router.vuejs.org/)
-   **樣式**：[Tailwind CSS](https://tailwindcss.com/)
-   **後端服務**：[Firebase](https://firebase.google.com/)
    -   **身份驗證**：使用 Google OAuth 進行使用者登入。
    -   **資料庫**：Realtime Database 用於儲存圖片中繼資料和使用者資訊。
    -   **儲存**：Firebase Storage 用於託管上傳的圖片檔案。

### 架構

該專案是一個單頁應用程式 (SPA)。

-   **身份驗證**：使用者透過 Google 登入進行身份驗證。應用程式使用 Vue Router 中的路由守衛來管理存取控制，將未經身份驗證的使用者重新導向到登入頁面。同時區分普通使用者和管理員。
-   **狀態管理**：Pinia Store 用於管理全域應用程式狀態，包括當前使用者的身份驗證狀態 (`auth.ts`)、管理員角色和畫廊資料 (`gallery.ts`)。
-   **路由**：應用程式使用基於檔案的路由，並對視圖 (`LoginView`、`GalleryView`、`AdminDashboard`) 進行延遲載入，以優化初始載入時間。
-   **目錄結構**：`src` 目錄按功能組織，包含 `views`、`stores`、`router`、`lib` (用於 Firebase 初始化) 和 `assets` 等獨立資料夾。

## 建構與執行

專案使用 `pnpm` 作為套件管理器。

-   **安裝依賴**：
    ```sh
    pnpm install
    ```

-   **執行開發伺服器**：
    啟動一個熱重載的開發伺服器。
    ```sh
    pnpm dev
    ```

-   **建構生產版本**：
    對生產版本進行型別檢查、編譯和壓縮。
    ```sh
    pnpm build
    ```

-   **程式碼檢查與格式化**：
    專案使用 ESLint 進行程式碼品質檢查，並使用 Prettier 進行格式化。
    ```sh
    # 執行 ESLint 並自動修復問題
    pnpm lint

    # 使用 Prettier 格式化程式碼
    pnpm format
    ```

## 開發慣例

-   **程式碼風格**：程式碼遵循 `.eslintrc.cjs` 和 `.prettierrc.json` 中定義的慣例。它使用標準的 Vue.js 風格指南。
-   **型別**：作為 TypeScript 專案，強制執行靜態型別。
-   **環境變數**：Firebase API 金鑰和其他配置詳細資訊透過 `.env` 檔案 (例如 `.env.local`) 進行管理。範例可以在 `.env.example` 中找到。
-   **API 互動**：所有與後端的通訊都透過 Firebase SDK 處理，該 SDK 在 `src/lib/firebase.ts` 中初始化。
