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

To deploy these functions to your Firebase project, navigate to the root of your project and run:

```sh
npx firebase deploy --only functions
```

## Local Development

You can test functions locally using the Firebase Emulator Suite:

```sh
# Build the functions first
pnpm build
# Then start the emulators
pnpm serve
```
