'use client'

import React from 'react'
import { Menu, Plus, Sparkles, ExternalLink, GraduationCap } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface ChatHeaderProps {
  title?: string
  onToggleSidebar: () => void
  onNewChat: () => void
}

export function ChatHeader({
  title = 'Indiana Tech Assistant',
  onToggleSidebar,
  onNewChat,
}: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-neutral-200 bg-white/90 px-5 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-[#131314]/90">
      <div className="flex items-center gap-3.5">
        <button
          onClick={onToggleSidebar}
          aria-label="Open sidebar menu"
          className="flex size-9 items-center justify-center rounded-xl border border-neutral-300 bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 md:hidden cursor-pointer"
        >
          <Menu className="size-4" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="hidden size-7 items-center justify-center rounded-xl bg-[#fbbf24] text-black md:flex shadow-sm">
            <GraduationCap className="size-4" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white truncate max-w-[180px] sm:max-w-md leading-tight">
              {title}
            </h2>
            <span className="hidden sm:inline text-[11px] text-amber-600 dark:text-amber-400 font-medium">
              Official Knowledge from indianatech.edu
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-2.5">
        <a
          href="https://www.indianatech.edu"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1 rounded-xl border border-amber-500/30 bg-amber-500/10 px-2.5 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
          title="Visit official website"
        >
          <span>indianatech.edu</span>
          <ExternalLink className="size-3" />
        </a>
        <ThemeToggle variant="icon" />
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
