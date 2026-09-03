'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/components/auth/AuthProvider'
import { Sparkles, ArrowLeft, ShieldCheck, Zap, GraduationCap } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function LoginPage() {
  const router = useRouter()
  const { user, loading, signInWithGoogle, signInAsDemoUser } = useAuth()
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    if (!loading && user) {
      router.push('/chat')
    }
  }, [user, loading, router])

  const handleGoogleLogin = async () => {
    setIsSigningIn(true)
    setErrorMsg(null)
    try {
      const loggedUser = await signInWithGoogle()
      if (loggedUser) {
        router.push('/chat')
      }
    } catch (err: any) {
      console.error('Login error:', err)
      setErrorMsg(err?.message || 'Failed to sign in with Google. Please try again.')
    } finally {
      setIsSigningIn(false)
    }
  }

  const handleDemoLogin = async () => {
    setIsSigningIn(true)
    setErrorMsg(null)
    try {
      await signInAsDemoUser()
      router.push('/chat')
    } catch (err: any) {
      setErrorMsg('Demo sign-in failed')
    } finally {
      setIsSigningIn(false)
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f9fa] text-neutral-900 transition-colors duration-200 dark:bg-[#0a0a0c] dark:text-white p-5">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(246,110,70,0.2)_0%,rgba(251,191,36,0.12)_40%,transparent_70%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,rgba(246,71,31,0.25)_0%,rgba(245,158,11,0.15)_40%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-neutral-200 bg-white/90 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#161619]/90">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:text-white/60 dark:hover:text-white"
          >
            <ArrowLeft className="size-3.5" /> Back to home
          </Link>
          <ThemeToggle variant="icon" />
        </div>
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 shadow-lg shadow-orange-500/30">
            <GraduationCap className="size-6 text-black" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Indiana Tech AI Assistant</h1>
          <p className="mt-2 text-xs text-neutral-500 dark:text-white/60">
            Sign in to access your admissions guidance and saved university inquiries
          </p>
        </div>

        {errorMsg && (
          <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-600 dark:text-red-300">
            {errorMsg}
          </div>
        )}
        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            disabled={isSigningIn}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-300 bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 shadow-md dark:border-white/15 dark:bg-white dark:text-black dark:hover:bg-neutral-100 cursor-pointer"
          >
            <svg className="size-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24Z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
              />
            </svg>
            {isSigningIn ? 'Signing in...' : 'Continue with Google'}
          </button>
          <button
            onClick={handleDemoLogin}
            disabled={isSigningIn}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-3 text-xs font-medium text-neutral-800 transition-all hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
          >
            <Zap className="size-3.5 text-amber-500 dark:text-amber-400" />
            Quick Demo Login (Alex Rivera)
          </button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-neutral-400 dark:text-white/40">
          <ShieldCheck className="size-3.5 text-emerald-500 dark:text-emerald-400" />
          <span>Encrypted connection & secure Firebase authentication</span>
        </div>
      </div>
    </main>
  )
}
