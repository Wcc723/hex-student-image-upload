# 分享連結功能調整計劃

## 背景與目標
- 讓用戶可以直接複製 Firebase Storage 產生的公開圖片連結，無需額外的分享頁或 token。
- 所有分享連結採用 Storage 的下載網址（png / jpg / webp），任何人都能直接開啟並瀏覽。
- 維持既有的上傳、刪除與權限控管，僅調整 Storage 讀取規則以支援公開存取。

## 需求摘要
- Gallery 與 Admin 介面提供「複製圖片連結」按鈕，點擊即複製 Storage 下載網址。
- 取消分享啟用 / 停用流程，圖片連結無時間限制與授權門檻。
- 若使用者刪除圖片，對應的 Storage 物件一併清除，避免殘留無引用檔案。

## 技術方案概述
1. **資料模型**
   - `users/{uid}/images/{imageId}` 維持原有欄位（fileName、storagePath、downloadURL、caption）。
   - 不再建立 `sharedImages` 索引節點或 `shareToken` 欄位。
2. **Firebase 規則**
   - Realtime Database：沿用既有結構，限制讀寫為擁有者或管理者。
   - Storage：`images/{uid}/{imageId}` 路徑允許任何人讀取（使用下載連結即可存取），寫入 / 刪除仍需登入且限於資料擁有者或管理者。
   - CORS：維持既有設定（如需限制嵌入來源，可在 Storage CORS 中調整）。
3. **前端流程**
   - Gallery / Admin 直接顯示「複製圖片連結」，呼叫 `navigator.clipboard.writeText` 寫入 `downloadURL`。
   - 取消分享狀態、分享頁面與額外守衛；操作成功後提供提示訊息。
   - 確保刪除圖片時同步刪除 Storage 物件，避免產生無主的公共連結。

## 任務分解
1. **後端 / 資料層**
   - 移除 `sharedImages` 相關程式碼與資料寫入。
   - 調整 Storage 安全規則，允許匿名讀取圖片下載路徑。
2. **前端**
   - Gallery / Admin 改為單一「複製圖片連結」按鈕，提供複製成功 / 失敗提示。
   - 移除分享啟用、停用與公開預覽頁面邏輯。
   - 保留現有的註解編輯、刪除、批次操作功能。
3. **測試與驗證**
   - 單元測試：Pinia store 仍可處理上傳、刪除、caption 更新。
   - 手動測試：複製的下載 URL 可於無痕視窗直接開啟；刪除圖片後連結失效（404）。
   - 安全測試：確認未登入使用者無法對 Realtime Database 或 Storage 寫入。
4. **文件與部署**
   - 更新 `.env.example`、`AGENTS.md`、`development-plan.md` 提及新的分享方式與 Storage 規則。
   - Storage 規則調整後部署，並記錄需要重新整理下載連結的操作步驟（如需）。

## Firebase Storage Rules 範例
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{uid}/{imageId} {
      allow read: if true;
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

## 風險與緩解
- **公共連結濫用**：下載 URL 為長隨機字串，外洩風險低；刪除圖片後即失效。
- **Storage 成本**：持續監控 Storage 使用量與 egress，必要時導入 CDN 或壓縮策略。
- **跨站嵌入**：若需限制圖片引用範圍，可於 Storage CORS 中設定允許網域。
