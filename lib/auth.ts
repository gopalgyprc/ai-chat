import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { auth, googleProvider, isFirebaseConfigured } from './firebase'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'
import { AppUser } from '@/types/user'

const LOCAL_STORAGE_USER_KEY = 'alchat_active_user'

export async function signInWithGoogle(): Promise<AppUser | null> {
  if (!isFirebaseConfigured) {
    const demoUser: AppUser = {
      uid: 'demo_user_123',
      name: 'Alex Rivera',
      email: 'alex.rivera@example.com',
      photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      createdAt: Date.now(),
      lastLoginAt: Date.now(),
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(demoUser))
    }
    return demoUser
  }

  try {
    const result = await signInWithPopup(auth, googleProvider)
    const fbUser = result.user
    const appUser: AppUser = {
      uid: fbUser.uid,
      name: fbUser.displayName || 'Anonymous User',
      email: fbUser.email || '',
      photoURL: fbUser.photoURL || undefined,
      lastLoginAt: Date.now(),
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(appUser))
    }

    try {
      const userRef = doc(db, 'users', fbUser.uid)
      setDoc(
        userRef,
        {
          name: appUser.name,
          email: appUser.email,
          photoURL: appUser.photoURL || '',
          lastLoginAt: serverTimestamp(),
        },
        { merge: true }
      ).catch((dbErr) => {
        console.warn('Background Firestore user sync notice:', dbErr?.message)
      })
    } catch (err: any) {
      console.warn('Firestore user sync warning:', err?.message)
    }

    return appUser
  } catch (error) {
    console.error('Google Sign In Error:', error)
    throw error
  }
}

export async function signInAsDemoUser(customName?: string): Promise<AppUser> {
  const demoUser: AppUser = {
    uid: 'demo_user_123',
    name: customName || 'Alex Rivera',
    email: 'alex.rivera@example.com',
    photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    createdAt: Date.now(),
    lastLoginAt: Date.now(),
  }
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(demoUser))
  }
  return demoUser
}

export async function signOut(): Promise<void> {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
  }
  if (isFirebaseConfigured) {
    try {
      await firebaseSignOut(auth)
    } catch (err: any) {
      console.warn('Sign out warning:', err?.message)
    }
  }
}

export function getStoredUser(): AppUser | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function subscribeToAuth(callback: (user: AppUser | null) => void) {
  if (!isFirebaseConfigured) {
    const user = getStoredUser()
    callback(user)
    return () => { }
  }

  return onAuthStateChanged(auth, (fbUser: User | null) => {
    if (fbUser) {
      const user: AppUser = {
        uid: fbUser.uid,
        name: fbUser.displayName || 'Anonymous User',
        email: fbUser.email || '',
        photoURL: fbUser.photoURL || undefined,
        lastLoginAt: Date.now(),
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user))
      }
      callback(user)
    } else {
      const stored = getStoredUser()
      callback(stored)
    }
  })
}
