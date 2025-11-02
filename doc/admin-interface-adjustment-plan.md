# 完整計劃：Admin 介面調整

## 背景與目標
- 目前一般用戶頁面未提供管理者入口，且 AdminDashboard 需要更直觀的使用者總覽與刪除流程。
- 管理者應能快速在單一介面檢視所有用戶、掌握各自使用額度，並對任一用戶的作品進行單張或批次刪除。
- 計劃聚焦於強化權限判斷、路由引導與介面資訊量，確保管理者體驗順暢。

## 需求摘要
1. **Gallery 視圖**：登入後若 `authStore.isAdmin === true`，在頁首顯示導向 `admin` 路由的按鈕（僅管理者可見）。
2. **AdminDashboard 視圖**：
   - 列出所有用戶，顯示姓名、Email、UID 與「已用 / 配額」統計。
   - 提供搜尋與即時統計，便於切換目標使用者。
3. **管理者操作**：在 AdminDashboard 中可以對選定用戶的圖片：
   - 進行單張刪除。
   - 透過勾選後批次刪除。
   - 操作需同步更新 Realtime Database 與 Firebase Storage。

## 技術方案與調整
- **Pinia 權限流程**
  - 確保 `useAuthStore` 初始化後會正確解析 `profile.isAdmin`，避免 falsy 型別問題。
  - Gallery 使用 `authStore.isAdmin` 控制管理者按鈕顯示；AdminDashboard 進入時二次驗證，未授權則導回 `gallery`。
- **Admin Store 調整**
  - `startWatchingUsers()` 維持監聽 `/users`，補強錯誤處理與狀態提示。
  - `deleteImage`、`deleteSelectedForUser` 使用 `useGalleryStore` 既有的跨使用者刪除方法，確保 Storage 物件一併移除。
  - 於 `selectedUserImages` 記錄 `count` 變動，更新 stats。
- **介面更新**
  - `GalleryView.vue` 頁首資訊區增加「前往管理後台」按鈕，導向 `name: 'admin'`。
  - `AdminDashboard.vue`：
    - 使用卡片呈現所有使用者，顯示 `count/quota`。
    - 保留搜尋與「重新整理」功能，選取用戶後載入圖片列表。
    - 圖片列表支援勾選、刪除按鈕、批次操作，並提供刪除確認。
- **路由互動**
  - 確認 router 使用 hash 模式後，`admin` 路由需搭配 `meta.requiresAdmin` 等守衛，以 `authStore.isAdmin` 判斷是否放行。

## 任務分解
1. 更新 `GalleryView.vue`：引入 `computed` 判斷並渲染管理者入口按鈕。
2. 強化 `useAuthStore` getter 與訂閱邏輯，確保 `isAdmin` 解析準確（必要時加入 `parseBoolean` 使用說明）。
3. 審視 `src/router/index.ts` 守衛，確保 admin 路由依據 `authStore.isAdmin` 決策；必要時補上初始化等待。
4. 微調 `AdminDashboard.vue` 使用者列表區塊，加入使用量顯示與互動提示。
5. 確認 `useAdminStore` 的刪除、批次刪除流程仍會同步更新 Storage 與 Database；若缺少，補上對 `useGalleryStore` 對應方法的呼叫。
6. 進行手動測試：管理者登入後流程、一般用戶進入時應無 admin 入口；刪除動作是否同步更新 UI 與 Firebase。

## 測試與驗證
- **情境測試**
  - 使用 admin 帳戶登入，從 Gallery 按鈕進入 AdminDashboard，需能看見所有用戶與使用額度。
  - 選擇任一用戶後，刪除單張與批次刪除皆成功（並在 Storage 中確認物件移除）。
  - 一般用戶登入時，不應看到 admin 入口，且若手動輸入 `#/admin` 需要被導回 `#/gallery`。
- **回歸驗證**
  - 確認原有上傳、註解、分享連結複製流程未受影響。
  - 檢查刪除後 Realtime Database 的 `users/{uid}/stats/count` 是否正確減少。

## 風險與緩解
- **權限判斷延遲**：若 `authStore.init()` 尚未完成就執行守衛可能造成誤判，須在 Router 守衛等待初始化或在頁面中處理 loading 狀態。
- **批次刪除失敗**：如任一圖片刪除失敗需提示並回滾選取，建議在 `useAdminStore` 中加入錯誤通知。
- **資料量增加**：一次列出所有使用者可能造成載入壓力，可視情況改為分頁或 lazy load（本計劃先維持即時監聽，如後續使用者量大再調整）。

## 更新後的 Firebase Realtime Database 規則
以下規則延續既有資料結構，移除字串型別的 `auth.token.role` 判斷，改採布林值 `auth.token.admin == true`，搭配自訂 Claims 或後端同步布林旗標以控管管理者權限。

```json
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      ".read": "auth != null && auth.token.admin == true",
      "$uid": {
        ".read": "auth != null && (auth.uid == $uid || auth.token.admin == true)",
        ".write": "auth != null && (auth.uid == $uid || auth.token.admin == true)",

        "profile": {
          ".read": "auth != null && (auth.uid == $uid || auth.token.admin == true)",
          ".write": "auth != null && (auth.uid == $uid || auth.token.admin == true)",
          "displayName": { ".validate": "newData.isString() && newData.val().length > 0 && newData.val().length <= 50" },
          "email":       { ".validate": "newData.isString() && newData.val().matches(/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/)" },
          "photoURL":    { ".validate": "newData.isString()" },
          "isAdmin": {
            ".write": "auth != null && auth.token.admin == true",
            ".validate": "newData.isBoolean()"
          }
        },

        "images": {
          "$imageId": {
            ".read": "auth != null && (auth.uid == $uid || auth.token.admin == true)",
            ".write": "auth != null && (auth.uid == $uid || auth.token.admin == true) && (data.exists() || auth.token.admin == true || (root.child('users').child($uid).child('stats').child('count').val() < root.child('users').child($uid).child('stats').child('quota').val()))"
          },
          ".indexOn": ["createdAt"]
        },

        "stats": {
          ".read": "auth != null && (auth.uid == $uid || auth.token.admin == true)",
          ".write": "auth != null && auth.token.admin == true"
        }
      }
    }
  }
}
```

> 除了將每位使用者節點的條件改成 `auth.token.admin == true`，也特別補上 `/users` 根節點的 `.read` 規則，讓管理者能透過 `onValue('users')` 讀取所有使用者資料；一般用戶仍只能透過 `$uid` 節點規則訪問自己的資料。
