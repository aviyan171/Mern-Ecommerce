import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const {
  VITE_AUTH_DOMAIN,
  VITE_FIREBASE_KEY,
  VITE_PROJECT_ID,
  VITE_STORE_BUCKET,
  VITE_MESSAGING_ID,
  VITE_FIREBASE_APP_ID,
  VITE_MEASUREMENT_ID
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_FIREBASE_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORE_BUCKET,
  messagingSenderId: VITE_MESSAGING_ID,
  appId: VITE_FIREBASE_APP_ID,
  measurementId: VITE_MEASUREMENT_ID
}

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(fireBaseApp)
