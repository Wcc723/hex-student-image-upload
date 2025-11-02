# 分享連結功能調整計劃

## 背景與目標
- 讓用戶可以一鍵複製圖片分享連結，並確保分享連結無時間限制。
- 分享連結僅能於 `hexschool.com`、`hexschool.io` 與開發環境 `localhost` 之網域中正常顯示，避免外部濫用。
- 維持現有 Firebase Realtime Database 與 Storage 權限模型的安全性與擴充性。

## 需求摘要
- Gallery 與 Admin 介面需顯示「複製分享連結」按鈕。
- 分享連結可直接在瀏覽器開啟圖片預覽（無需登入），但僅限指定網域。
- 點擊分享連結時需顯示該圖片及註解資訊，提供返回主站或下載的選項。
- 管理者可代使用者關閉分享（撤銷連結），以應對下架需求。

## 技術方案概述
1. **資料模型**
   - 於 `users/{uid}/images/{imageId}` 增加 `shareToken`、`sharedAt`、`isShared` 欄位。
   - 新增 `sharedImages/{token}` 索引節點，儲存 `{ uid, imageId, downloadURL, captionSnapshot, createdAt }`，供分享頁面公開讀取。
2. **Firebase 規則**
   - Realtime Database：允許任何使用者透過精確 token 讀取 `sharedImages/{token}`，並限制寫入/刪除僅由對應擁有者或管理者執行。
   - Storage：維持原本使用者限定讀寫；分享頁面透過取用 `downloadURL`，再由 Cloud Storage CORS 限制來源網域。
   - Storage CORS：設定允許來源為 `https://*.hexschool.com`、`https://*.hexschool.io`、`http://localhost:5173`，封鎖其他網域的跨域載入。
3. **前端流程**
   - Gallery / Admin：新增「分享」按鈕，可建立或停用分享。啟用時產生 token 與鏈接，並呼叫 `navigator.clipboard.writeText` 複製。
   - Share Route：建立新頁 `/#/share/:token`，依 token 從 `sharedImages` 取得資料，若站點 `location.hostname` 不在允許清單則顯示阻擋訊息。
   - 提供失效處理：若篇章被撤銷或 token 不存在，顯示錯誤提示與回首頁按鈕。

## 任務分解
1. **後端/資料層**
   - 建立 `sharedImages` 結構與 Pinia 動作（產生 token、同步、移除）。
   - 更新 Realtime Database 規則，新增 token 驗證邏輯與管理者例外。
   - 調整 Storage CORS 配置（透過 `firebase storage:rules` 或 gcloud CLI）。
2. **前端**
   - 更新 Gallery 與 Admin 介面：分享按鈕、狀態顯示（已分享 / 未分享）、複製成功提示。
   - 新增 Share View：顯示圖片、註解、上傳者暱稱；加入允許網域檢查與錯誤頁面。
   - 擴充 Pinia store：加入分享相關狀態管理與 API 呼叫。
   - 新增環境變數 `VITE_SHARE_ALLOWED_HOSTS`（預設與 Storage CORS 一致）供前端驗證。
3. **測試與驗證**
   - 單元測試：Share token 產生與儲存、Pinia actions 流程。
   - E2E：使用者啟用分享、複製連結、跨視窗驗證；管理者撤銷分享。
   - 安全測試：嘗試於未列入網域開啟分享頁，確認顯示阻擋；檢查非擁有者是否能寫入分享節點。
4. **文件與部署**
   - 更新 `development-plan.md` 及 `AGENTS.md`，加入分享流程與 CORS 設定說明。
   - 補充 `.env.example` 新變數並撰寫 Storage CORS 設定指南。
   - 部署前確認 Firebase 規則、CORS 及前端環境變數同步更新。

## 風險與緩解
- **分享節點外洩風險**：token 使用隨機 UUID，並在撤銷時刪除 `sharedImages/{token}`，避免長期暴露。
- **CORS 限制不足**：部署後需實測 `hexschool.com`、`hexschool.io` 子網域及 `localhost` 取得圖片，並驗證其他網域被拒絕。
- **未登入訪客讀取權限**：公開節點僅暴露單一圖片基本資訊，並可在規則中限制回寫，避免批量洩漏。
