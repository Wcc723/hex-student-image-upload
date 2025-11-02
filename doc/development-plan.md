# 使用者上傳圖片工具開發計劃

## 專案目標與範圍
- 建立一個透過 Google 登入的圖片牆平台，服務一般用戶與管理者。
- 讓用戶可在 5 MB 限制下上傳、刪除、批次刪除圖片，並為圖片新增與編輯註解。
- 儲存圖片於 Firebase Storage，並將圖片中繼資料與使用者資訊維護在 Realtime Database 中。

## 技術堆疊與工具
- 前端框架：Vue 3（`<script setup>` + TypeScript），使用 Vite 作為建置工具。
- 狀態管理：Pinia 管理登入狀態、使用者圖片、限制計算等。
- UI 樣式：採用 Tailwind CSS，搭配自訂元件樣式指引與設計 token。
- Firebase 服務：Authentication（Google OAuth）、Realtime Database、Storage、Firebase Hosting 或 Netlify/Vercel（前端）與 Firebase Hosting（靜態資源 + 網域限制）組合。
- 開發輔助：ESLint、Prettier、Vitest + Vue Test Utils、Mock Service Worker。

## Tailwind CSS 配置
1. 安裝依賴：`npm install -D tailwindcss postcss autoprefixer`，並執行 `npx tailwindcss init -p` 產生 `tailwind.config.js` 與 `postcss.config.js`。
2. 設定內容掃描：在 `tailwind.config.js` 的 `content` 陣列加入 `./index.html` 與 `./src/**/*.{vue,ts,tsx}`，避免未使用樣式被清除。
3. 自訂 Theme：於 `theme.extend` 定義品牌色、字體與間距標準；若有暗色模式需求，開啟 `darkMode: 'class'`。
4. 建立樣式入口：在 `src/assets/tailwind.css` 引入 `@tailwind base; @tailwind components; @tailwind utilities;`，於 `src/main.ts` 導入該檔案。
5. 公用樣式：建立 `src/styles/utilities.css` 或 Tailwind `@layer components` 自訂常用卡片、按鈕樣式，避免重複寫 class。
6. 插件：評估加入 `@tailwindcss/forms`、`@tailwindcss/typography` 強化表單與文件排版。
7. 設計基準：配合圖片牆布局，預留 12 欄或 4 欄 responsive 配置，並於文件中整理常用 spacing/陰影規則。

## 系統架構
1. 使用者透過 Google OAuth 登入，獲得 `FirebaseUser`。
2. 前端使用 Firebase SDK 讀寫 Realtime Database 與 Storage。
3. Storage 物件路徑格式：`images/{uid}/{imageId}.jpg`。
4. Realtime Database 結構儲存使用者基本資料、圖片列表、註解與操作時間紀錄。
5. 管理者透過額外角色判斷（自訂 `isAdmin` 欄位）取得跨使用者管理權限。

## Firebase 設定與資料模型
### Realtime Database
```json
{
  "users": {
    "{uid}": {
      "profile": {
        "displayName": "...",
        "email": "...",
        "photoURL": "...",
        "isAdmin": false
      },
      "images": {
        "{imageId}": {
          "fileName": "xxx.jpg",
          "storagePath": "images/{uid}/{imageId}.jpg",
          "downloadURL": "...",
          "caption": "圖片說明",
          "createdAt": 1700000000,
          "updatedAt": 1700000000
        }
      },
      "stats": {
        "count": 12,
        "quota": 30
      }
    }
  }
}
```
### Storage 規則重點
- 檢查上傳檔案大小 ≤ 5 MB，副檔名限定為 jpeg/png/webp。
- 限定 `request.auth != null` 且 `request.auth.uid == resource.name.split('/')[1]`。
### Realtime Database 規則重點
- 使用者僅能存取自己的 `users/{uid}` 節點。
- 管理者可讀取全部資料，透過 `auth.token.role == 'admin'` 判斷。
- 寫入圖片資料前需驗證尚未超過 30 張。

## 功能模組
- 身分驗證模組：登入、登出、權限判斷、管理者旗標載入。
- 圖片管理模組：上傳（含前端檔案驗證、進度條）、列表顯示、註解編輯。
- 批次操作模組：勾選多張圖片後刪除；需二次確認避免誤刪。
- 管理者後台：全域搜尋使用者、查看特定用戶圖片、單張刪除與註解編輯。
- 系統提示模組：Toast / Snackbar 告知狀態（上傳成功、配額達上限等）。

## 前端頁面與流程
1. `LoginView`：顯示登入按鈕與平台介紹。
2. `GalleryView`（登入後）：
   - Header 顯示使用者資訊與剩餘配額。
   - 上傳區：拖放或按鈕上傳，顯示 5 MB 限制提示。
   - 圖片牆：卡片呈現縮圖、註解、建立時間；提供編輯與刪除按鈕。
   - 批次刪除：多選 checkbox + 工具列操作。
3. `AdminDashboard`（僅管理者）：
   - 用戶搜尋/列表、切換檢視指定帳號圖片。
   - 代為刪除圖片或更新註解。

## 前端路由配置
- 路由核心：使用 `createRouter` + `createWebHistory`，在 `src/router/index.ts` 定義。
- 路由表
  - `/login` → `LoginView`，未登入時預設導向此頁。
  - `/gallery` → `GalleryView`，需登入；若未登入則透過全域守衛 `router.beforeEach` 導回 `/login`。
  - `/admin` → `AdminDashboard`，需登入且 `currentUser.profile.isAdmin === true`。
  - `/:pathMatch(.*)*` → `NotFoundView`，顯示導覽連結。
- 權限守衛
  - 全域守衛檢查 `useAuthStore().isAuthenticated`；若路由 `meta.requiresAuth` 為真且尚未登入則中止導向。
  - 針對管理者頁面設定 `meta.requiresAdmin`，在守衛中讀取 `useAuthStore().isAdmin` 或從 Firebase Claims 取得角色。
  - 登出後需 `router.replace('/login')`，並清除 Pinia store 與 Firebase 監聽。
- 延遲加載：各 View 採 `() => import('../views/GalleryView.vue')` 動態匯入；登入後可預先載入 `GalleryView` 減少切換延遲。
- 錯誤處理：在守衛中捕捉 Firebase Token 過期或資料抓取失敗情況，顯示通知並導向登入。

## 任務分解與時程建議（依 Sprint 進行）
1. Sprint 1：環境建置（Vite、Vue、Pinia、路由）、Firebase 專案建立、環境變數注入、Google 登入流程。
2. Sprint 2：Realtime Database 與 Storage 服務介接、資料模型定義、Storage/DB 規則草擬與單元測試。
3. Sprint 3：一般用戶功能（上傳限制、圖片列表、註解 CRUD、批次刪除 UI）。
4. Sprint 4：管理者介面與跨帳戶管理、權限驗證、使用者搜尋。
5. Sprint 5：整合測試、非功能性調校（上傳體驗、錯誤處理、Loading 狀態）、文件整理與部署。

## 測試與品質確保
- 單元測試：Pinia store、資料轉換函式、Quota 驗證邏輯。
- 端對端測試：使用 Cypress 或 Playwright，覆蓋登入流程、上傳、刪除、管理者操作。
- 模擬 Firebase：採用 `@firebase/rules-unit-testing` 或本地 Emulator Suite，在 CI 測試安全規則。
- 效能：控制圖片預覽縮圖大小，避免一次載入 30 張原始圖造成延遲。

## 部署與環境管理
- `.env.example` 列出必填變數：`VITE_FIREBASE_API_KEY`、`VITE_FIREBASE_AUTH_DOMAIN`、`VITE_FIREBASE_PROJECT_ID`、`VITE_FIREBASE_STORAGE_BUCKET`、`VITE_FIREBASE_APP_ID`、`VITE_FIREBASE_DATABASE_URL`。
- 區分 dev/staging/prod Project，透過 `firebase use` 切換。
- 建議使用 Firebase Hosting（可設定允許的網域）或前端 CDN + Storage CORS 限制。

## 安全與網域限制
- 啟用 Firebase App Check（reCAPTCHA v3）降低濫用風險。
- Storage CORS 僅允許正式網域與本地開發 `http://localhost:5173`。
- 管理者角色維護於 Realtime Database 中，透過 Cloud Functions 或手動後台設定；禁止前端直接修改。
- 定期檢查安全規則與審計 Firebase usage 日誌。

## Firebase Realtime Database Rules 範例
```json
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$uid": {
        ".read": "auth != null && (auth.uid == $uid || auth.token.role == 'admin')",
        ".write": "auth != null && (auth.uid == $uid || auth.token.role == 'admin')",
        "profile": {
          ".validate": "newData.hasChildren(['displayName','email','photoURL','isAdmin']) && (auth.token.role == 'admin' || newData.child('isAdmin').val() == false)"
        },
        "images": {
          "$imageId": {
            ".read": "auth != null && (auth.uid == $uid || auth.token.role == 'admin')",
            ".write": "auth != null && ((auth.uid == $uid && (data.exists() || root.child('users').child($uid).child('stats').child('count').val() < 30)) || auth.token.role == 'admin')",
            ".validate": "newData.hasChildren(['fileName','storagePath','downloadURL','caption','createdAt']) && newData.child('fileName').isString() && newData.child('storagePath').isString() && newData.child('downloadURL').isString() && newData.child('caption').isString() && newData.child('caption').val().length <= 200 && newData.child('createdAt').isNumber() && (!newData.child('updatedAt').exists() || newData.child('updatedAt').isNumber())"
          }
        },
        "stats": {
          ".read": "auth != null && (auth.uid == $uid || auth.token.role == 'admin')",
          ".write": "auth != null && (auth.uid == $uid || auth.token.role == 'admin')",
          ".validate": "newData.hasChildren(['count','quota']) && newData.child('count').isNumber() && newData.child('quota').isNumber() && newData.child('count').val() <= 30 && newData.child('quota').val() == 30"
        }
      }
    }
  }
}
```

## Firebase Storage Rules 範例
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{uid}/{imageId} {
      allow read: if request.auth != null && (request.auth.uid == uid || request.auth.token.role == 'admin');
      allow write: if request.auth != null
        && (request.auth.uid == uid || request.auth.token.role == 'admin')
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/(jpeg|jpg|png|webp)');
      allow delete: if request.auth != null && (request.auth.uid == uid || request.auth.token.role == 'admin');
    }
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```
