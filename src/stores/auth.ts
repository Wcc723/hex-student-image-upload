import { defineStore } from 'pinia'
import type { User } from 'firebase/auth'
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
  updateProfile,
} from 'firebase/auth'
import { get, onValue, ref as dbRef, set, update, type Unsubscribe } from 'firebase/database'
import { auth, database, googleAuthProvider } from '@/lib/firebase'

const parseBoolean = (value: unknown): boolean => {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true'
  }
  return value === true
}

export interface UserProfile {
  uid: string
  displayName: string | null
  email: string | null
  photoURL: string | null
  isAdmin: boolean
  count: number
  quota: number
}

type AuthStatus = 'idle' | 'loading' | 'ready'

interface AuthState {
  status: AuthStatus
  error: string | null
  firebaseUser: User | null
  profile: UserProfile | null
  isInitialized: boolean
  profileUnsubscribe: Unsubscribe | null
  authUnsubscribe: Unsubscribe | null
}

const DEFAULT_QUOTA = 30

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    status: 'idle',
    error: null,
    firebaseUser: null,
    profile: null,
    isInitialized: false,
    profileUnsubscribe: null,
    authUnsubscribe: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.firebaseUser,
    isAdmin: (state) => parseBoolean(state.profile?.isAdmin),
    activeUserId: (state) => state.firebaseUser?.uid ?? null,
  },
  actions: {
    async init() {
      if (this.isInitialized) return

      this.status = 'loading'

      await new Promise<void>((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          this.firebaseUser = user

          if (user) {
            await this.ensureUserRecord(user)
            await this.subscribeToProfile(user.uid)
          } else {
            this.profile = null
            this.unsubscribeFromProfile()
          }

          this.status = 'ready'
          this.isInitialized = true
          resolve()
        })

        this.authUnsubscribe = unsubscribe
      })
    },

    async signInWithGoogle() {
      this.error = null
      this.status = 'loading'
      try {
        await signInWithPopup(auth, googleAuthProvider)
      } catch (error) {
        console.error('[auth] signInWithGoogle error', error)
        this.error = error instanceof Error ? error.message : 'Google 登入失敗，請稍後再試。'
        throw error
      } finally {
        this.status = 'ready'
      }
    },

    async signOut() {
      this.error = null
      this.status = 'loading'
      try {
        await firebaseSignOut(auth)
        this.unsubscribeFromProfile()
        this.profile = null
        this.firebaseUser = null
      } catch (error) {
        console.error('[auth] signOut error', error)
        this.error = error instanceof Error ? error.message : '登出時發生錯誤。'
        throw error
      } finally {
        this.status = 'ready'
      }
    },

    async ensureUserRecord(user: User) {
      const userRef = dbRef(database, `users/${user.uid}`)
      const snapshot = await get(userRef)

      const profilePayload = {
        displayName: user.displayName ?? null,
        email: user.email ?? null,
        photoURL: user.photoURL ?? null,
        isAdmin: parseBoolean(snapshot.child('profile/isAdmin').val()),
      }

      if (!snapshot.exists()) {
        await set(userRef, {
          profile: profilePayload,
          stats: {
            count: 0,
            quota: DEFAULT_QUOTA,
          },
        })
        return
      }

      await update(userRef, {
        'profile/displayName': profilePayload.displayName,
        'profile/email': profilePayload.email,
        'profile/photoURL': profilePayload.photoURL,
      })

      // 同步 Firebase Auth profile 的 displayName/photoURL 避免過期資料
      if (!user.displayName || !user.photoURL) {
        await updateProfile(user, {
          displayName: profilePayload.displayName ?? undefined,
          photoURL: profilePayload.photoURL ?? undefined,
        })
      }
    },

    async subscribeToProfile(uid: string) {
      if (this.profileUnsubscribe) return

      const profileRef = dbRef(database, `users/${uid}`)

      await new Promise<void>((resolve) => {
        let resolved = false
        this.profileUnsubscribe = onValue(
          profileRef,
          (snapshot) => {
            const data = snapshot.val()
            if (!data) {
              this.profile = null
            } else {
              const profileData = data.profile ?? {}
              const statsData = data.stats ?? {}

              this.profile = {
                uid,
                displayName: profileData.displayName ?? this.firebaseUser?.displayName ?? null,
                email: profileData.email ?? this.firebaseUser?.email ?? null,
                photoURL: profileData.photoURL ?? this.firebaseUser?.photoURL ?? null,
                isAdmin: parseBoolean(profileData.isAdmin),
                count: statsData.count ?? 0,
                quota: statsData.quota ?? DEFAULT_QUOTA,
              }
            }

            if (!resolved) {
              resolved = true
              resolve()
            }
          },
          (error) => {
            console.error('[auth] subscribeToProfile', error)
            this.error = '無法同步使用者資料，請重新整理畫面。'
            if (!resolved) {
              resolved = true
              resolve()
            }
          },
        )
      })
    },

    unsubscribeFromProfile() {
      if (this.profileUnsubscribe) {
        this.profileUnsubscribe()
        this.profileUnsubscribe = null
      }
    },

    stop() {
      this.unsubscribeFromProfile()
      if (this.authUnsubscribe) {
        this.authUnsubscribe()
        this.authUnsubscribe = null
      }
      this.isInitialized = false
      this.status = 'idle'
      this.firebaseUser = null
      this.profile = null
    },
  },
})
