'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth/AuthProvider'
import { ChatWelcome } from '@/components/chat/ChatWelcome'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Sparkles, GraduationCap, LogOut, ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function ChatPage() {
  const router = useRouter()
  const { user, loading, signOut } = useAuth()
  const [starterInput, setStarterInput] = useState('')

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#f8f9fa] text-neutral-900 dark:bg-[#131314] dark:text-white">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="size-8 animate-spin text-amber-500 dark:text-amber-400" />
          <p className="text-xs text-neutral-500 dark:text-white/60">Verifying session...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa] text-neutral-900 transition-colors duration-200 dark:bg-[#131314] dark:text-white">
      {/* Week 1 Foundation Header */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-neutral-200 bg-white/90 px-4 sm:px-6 backdrop-blur-md dark:border-white/10 dark:bg-[#131314]/90">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-xl bg-[#fbbf24] text-black shadow-sm">
            <GraduationCap className="size-5" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-none">
              Indiana Tech AI
            </h1>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold tracking-wide">
              Week 1 • Foundation & Auth Milestone
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle variant="icon" />

          {/* User Profile Badge */}
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-100 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
            <div className="flex size-6 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-[11px] font-bold text-black">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <span className="hidden sm:inline text-xs font-semibold text-neutral-800 dark:text-white/90">
              {user.name}
            </span>
          </div>

          <button
            onClick={signOut}
            className="flex items-center gap-1.5 rounded-xl border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title="Sign out"
          >
            <LogOut className="size-3.5 text-red-500" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Preview Container */}
      <main className="flex flex-1 flex-col justify-between px-4 py-6 max-w-4xl mx-auto w-full">
        <div className="flex-1 flex flex-col justify-center">
          <ChatWelcome onSelectPrompt={(prompt) => setStarterInput(prompt)} />
        </div>

        {/* Foundation Input Shell */}
        <div className="sticky bottom-0 pt-4 bg-gradient-to-t from-[#f8f9fa] via-[#f8f9fa]/95 to-transparent dark:from-[#131314] dark:via-[#131314]/95 dark:to-transparent">
          <div className="flex items-center gap-2.5 rounded-2xl border border-neutral-300 bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-[#202022]">
            <Sparkles className="size-5 text-amber-500 dark:text-amber-400 shrink-0" />
            <input
              type="text"
              value={starterInput}
              onChange={(e) => setStarterInput(e.target.value)}
              placeholder="Week 1 UI Preview: Ask anything about Indiana Tech..."
              className="flex-1 bg-transparent text-sm text-neutral-900 placeholder-neutral-400 outline-none dark:text-white dark:placeholder-white/40"
            />
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg">
                UI & Auth Ready
              </span>
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-xl bg-neutral-200 text-neutral-700 dark:bg-white/10 dark:text-white/70"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-neutral-500 dark:text-white/40">
            Indiana Tech AI Assistant • Week 1 Milestone: Foundation, UI/UX System & Authentication
          </p>
        </div>
      </main>
    </div>
  )
}
