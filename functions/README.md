# Firebase Cloud Functions

This directory contains the Firebase Cloud Functions for the Student Artwork Wall project.

## Environment Variables

Cloud Functions utilize environment variables for configuration, which are managed via the Firebase CLI. For this project, the `imageProxy` function relies on the `ALLOWED_DOMAINS` parameter.

### `ALLOWED_DOMAINS`

-   **Purpose**: Specifies a comma-separated list of domains that are permitted to access images through the `imageProxy` Cloud Function. This acts as a security measure to prevent hotlinking and unauthorized access.
-   **Definition in Code**: In `src/index.ts`, the parameter is declared using `defineString("ALLOWED_DOMAINS", ...)`. This is the modern, recommended approach for handling environment variables.

-   **Setting the Value**:
    -   **For Production (Deployment)**: When you run `firebase deploy --only functions`, the CLI will detect this parameter and prompt you to enter its value for the production environment. You would enter your domains there (e.g., `hexschool.io,hexschool.com`).
    -   **For Local Development (Emulator)**: Create a file named `.env.local` inside this `functions` directory. This file will be used by the Firebase Emulator. Its content should be:
        ```
        ALLOWED_DOMAINS="http://localhost:5173,hexschool.io,hexschool.com"
        ```

## Deployment

### 1. 建置函式程式碼

```sh
pnpm --filter functions build
```

（若使用 `firebase deploy` 內建的自動建置，可跳過此步，但建議保持輸出與 Git 中的 `lib/` 同步。）

### 2. 設定環境參數

部署前請確認 Cloud Functions 的環境參數已設定：

```sh
firebase functions:config:set ALLOWED_DOMAINS="http://localhost:5173,hexschool.io,hexschool.com"
firebase functions:config:get > functions/.env.prod.json      # 可選，備份設定
```

若專案使用 `.env.students-artwork-wall` 等檔案管理，可透過 `firebase functions:config:import` 匯入。

### 3. 部署到 Firebase

在專案根目錄執行：

```sh
firebase deploy --only functions
```

如僅更新特定函式，可使用：

```sh
firebase deploy --only functions:imageProxy
```

## Local Development

You can test functions locally using the Firebase Emulator Suite:

```sh
# Build the functions first
pnpm build
# Then start the emulators
pnpm serve
```
