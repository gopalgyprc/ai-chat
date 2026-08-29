'use client'

import React from 'react'
import { Menu, Plus, Sparkles } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface ChatHeaderProps {
  title?: string
  onToggleSidebar: () => void
  onNewChat: () => void
}

export function ChatHeader({
  title = 'Ai Chat',
  onToggleSidebar,
  onNewChat,
}: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-neutral-200 bg-white/90 px-5 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-[#131314]/90">
      <div className="flex items-center gap-3.5">
        {/* Mobile Hamburger toggle */}
        <button
          onClick={onToggleSidebar}
          aria-label="Open sidebar menu"
          className="flex size-9 items-center justify-center rounded-xl border border-neutral-300 bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 md:hidden cursor-pointer"
        >
          <Menu className="size-4" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="hidden size-7 items-center justify-center rounded-xl bg-[#fbbf24] text-black md:flex shadow-sm">
            <Sparkles className="size-4 fill-black" />
          </div>
          <h2 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white truncate max-w-[180px] sm:max-w-md">
            {title}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        {/* Theme Toggle Button in Header */}
        <ThemeToggle variant="icon" />

        {/* New Chat Button */}
        <button
          onClick={onNewChat}
          className="flex items-center gap-1.5 rounded-xl border border-neutral-300 bg-neutral-100 px-3.5 py-2 text-xs font-medium text-neutral-800 transition-all hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 cursor-pointer"
        >
          <Plus className="size-4" />
          <span className="hidden sm:inline font-semibold">New Chat</span>
        </button>
      </div>
    </header>
  )
}
