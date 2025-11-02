# 圖片代理 Cloud Function 開發計劃

## 1. 專案目標

建立一個 HTTP 觸發的 Cloud Function 作為圖片代理伺服器。此函式的核心目標是限制 Firebase Storage 中圖片的存取權限，確保只有來自特定網域（例如我們的應用程式）的請求才能成功載入圖片，從而防止圖片被盜連。

## 2. 技術方案與實作細節

### a. Cloud Function 設定

1.  **初始化 Cloud Functions**:
    -   在專案根目錄執行 `firebase init functions`。
    -   選擇 `TypeScript` 作為開發語言。
    -   安裝所需的 NPM 套件：`firebase-admin` 和 `firebase-functions`。

2.  **環境變數設定**:
    -   我們將使用 Cloud Function 的環境變數來儲存允許存取圖片的網域白名單。
    -   設定一個名為 `ALLOWED_DOMAINS` 的環境變數，其值為一個以逗號分隔的網域字串。
    -   **範例命令**：
        ```sh
        firebase functions:config:set image_proxy.allowed_domains="https://your-app.com,http://localhost:5173"
        ```

### b. Cloud Function 核心邏輯

1.  **建立 HTTP 觸發器**:
    -   建立一個名為 `imageProxy` 的 HTTP 觸發函式。
    -   此函式將接收一個查詢參數 `path`，其值為圖片在 Firebase Storage 中的完整路徑 (例如 `images/{uid}/{imageId}.jpg`)。

2.  **網域驗證**:
    -   在函式中，讀取請求標頭 (Request Header) 的 `Origin` 或 `Referer`。
    -   從環境變數 `functions.config().image_proxy.allowed_domains` 中讀取網域白名單，並將其解析為一個陣列。
    -   檢查請求的 `Origin` 是否存在於白名單中。
    -   **重要說明**：此驗證僅基於請求來源網域，不檢查使用者是否登入。這表示只要請求來自允許的網域，所有訪客（無論是否登入）都能存取圖片。
    -   如果請求來源不合法，則回傳 `403 Forbidden` 狀態碼。

3.  **代理圖片**:
    -   如果網域驗證通過，使用 `firebase-admin` SDK 從 Firebase Storage 取得對應路徑的檔案。
    -   建立一個可讀取流 (Readable Stream) 並將其 pipe 到函式的回應 (Response) 中。
    -   設定正確的 `Content-Type` (例如 `image/jpeg`) 和 `Cache-Control` 標頭，以優化瀏覽器快取。

### c. Firebase Storage 安全規則更新

為了強制所有請求都通過 Cloud Function，我們需要更新 Storage 的安全規則，移除所有客戶端直接讀取的權限。只有 Cloud Function 的服務帳號 (Service Account) 應該被允許讀取。

**更新後的 `storage.rules` 範例**:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // 僅允許後端服務（例如我們的 Cloud Function）讀取
    // 客戶端不再有直接讀取權限
    match /images/{uid}/{imageId} {
      allow read: if false; // 或者更精確地限制給服務帳號
      allow write: if request.auth != null
        && request.auth.uid == uid
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/(jpeg|jpg|png|webp)');
      allow delete: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

### d. 前端整合 (`GalleryView.vue`)

1.  **更新圖片 URL**:
    -   在 `GalleryView.vue` 中，當顯示圖片或提供複製連結功能時，不再使用從 Realtime Database 獲取的 `downloadURL`。
    -   改為動態組合出 Cloud Function 的 URL。

2.  **URL 組合範例**:
    -   假設 Cloud Function 的 URL 為 `https://<region>-<project-id>.cloudfunctions.net/imageProxy`。
    -   組合後的圖片 URL 將是：
        ```javascript
        const imageUrl = `https://<region>-<project-id>.cloudfunctions.net/imageProxy?path=${image.storagePath}`;
        ```
    -   當使用者點擊「複製連結」時，複製這個組合後的 URL。

## 3. 開發步驟

1.  **初始化 Functions**: 在專案中設定 Firebase Functions，並安裝 `firebase-tools` (若尚未安裝)。
2.  **撰寫函式程式碼**: 根據上述邏輯，在 `functions/src/index.ts` 中撰寫 `imageProxy` 函式。
3.  **部署與設定**: 部署函式至 Firebase，並使用 `firebase functions:config:set` 設定 `ALLOWED_DOMAINS` 環境變數。
4.  **更新安全規則**: 修改 `storage.rules` 檔案，並使用 Firebase CLI 部署新的安全規則。
5.  **修改前端**: 更新 `src/views/GalleryView.vue`，將圖片 URL 的生成邏輯改為指向 Cloud Function。
6.  **完整測試**:
    -   在允許的網域中測試圖片是否能正常顯示。
    -   嘗試在不允許的網域或直接在瀏覽器中打開圖片 URL，確認會收到 `403 Forbidden` 錯誤。
    -   測試複製連結功能是否正常。
