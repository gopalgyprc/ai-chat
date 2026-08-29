'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { AppUser } from '@/types/user'
import {
  signInWithGoogle as authSignInWithGoogle,
  signInAsDemoUser as authSignInAsDemoUser,
  signOut as authSignOut,
  subscribeToAuth,
} from '@/lib/auth'

interface AuthContextType {
  user: AppUser | null
  loading: boolean
  signInWithGoogle: () => Promise<AppUser | null>
  signInAsDemoUser: (name?: string) => Promise<AppUser>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => null,
  signInAsDemoUser: async () => ({ uid: '', name: '', email: '' }),
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = subscribeToAuth((currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const handleGoogleSignIn = async () => {
    setLoading(true)
    try {
      const loggedUser = await authSignInWithGoogle()
      setUser(loggedUser)
      return loggedUser
    } finally {
      setLoading(false)
    }
  }

  const handleDemoSignIn = async (name?: string) => {
    setLoading(true)
    try {
      const demoUser = await authSignInAsDemoUser(name)
      setUser(demoUser)
      return demoUser
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await authSignOut()
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle: handleGoogleSignIn,
        signInAsDemoUser: handleDemoSignIn,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
