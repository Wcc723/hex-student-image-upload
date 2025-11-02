import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
}

if (Object.values(firebaseConfig).some((value) => !value)) {
  console.warn('[firebase] Missing configuration value. Please check your environment variables.')
}

const firebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const googleAuthProvider = new GoogleAuthProvider()
googleAuthProvider.setCustomParameters({ prompt: 'select_account' })

export const database = getDatabase(firebaseApp)
export const storage = getStorage(firebaseApp)

export const allowedImageOrigins = (import.meta.env.VITE_ALLOWED_IMAGE_ORIGINS ?? '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)
