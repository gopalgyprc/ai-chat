import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'
import { getAuth, Auth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'

const cleanEnv = (val?: string) => {
  if (!val) return ''
  return val.replace(/^["']|["',]+$/g, '').trim()
}

const rawApiKey = cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
const rawProjectId = cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)

const firebaseConfig = {
  apiKey: rawApiKey || 'AIzaSyDemoDummyKeyForAppInit12345678',
  authDomain: cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN) || 'ai-web-chat-319f0.firebaseapp.com',
  projectId: rawProjectId || 'ai-web-chat-319f0',
  storageBucket: cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET) || 'ai-web-chat-319f0.firebasestorage.app',
  messagingSenderId: cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID) || '924066763127',
  appId: cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_APP_ID) || '1:924066763127:web:a44a842df35cfddbab1172',
}

export const isFirebaseConfigured = Boolean(
  rawApiKey &&
  rawApiKey !== 'AIzaSyDemoDummyKeyForAppInit12345678' &&
  rawProjectId
)

let app: FirebaseApp
let auth: Auth
let db: Firestore

try {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
} catch (error) {
  console.warn('Firebase initialization notice:', error)
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
}

export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export { app, auth, db }
