'use client'

import React, { useState } from 'react'
import {
  Sparkles,
  Plus,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  LogOut,
  Trash2,
  MessageSquare,
  Sparkle,
} from 'lucide-react'
import { Conversation, GroupedConversations } from '@/types/conversation'
import { AppUser } from '@/types/user'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface ChatSidebarProps {
  conversations: Conversation[]
  grouped: GroupedConversations
  activeConversationId: string | null
  user: AppUser | null
  isCollapsed: boolean
  onToggleCollapse: () => void
  onSelectConversation: (conv: Conversation) => void
  onNewChat: () => void
  onDeleteConversation: (id: string, e: React.MouseEvent) => void
  onSignOut: () => void
}

export function ChatSidebar({
  conversations,
  grouped,
  activeConversationId,
  user,
  isCollapsed,
  onToggleCollapse,
  onSelectConversation,
  onNewChat,
  onDeleteConversation,
  onSignOut,
}: ChatSidebarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false)

  if (isCollapsed) {
    return (
      <aside className="relative flex h-screen w-16 flex-col items-center justify-between border-r border-neutral-200 bg-[#f0f1f3] py-4 transition-all duration-300 dark:border-white/10 dark:bg-[#121214]">
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={onNewChat}
            className="flex size-10 items-center justify-center rounded-xl bg-[#fbbf24] text-black shadow-lg shadow-amber-500/20 transition-transform hover:scale-105 cursor-pointer"
            title="Alchat"
          >
            <Sparkle className="size-5 fill-black" />
          </button>
          <button
            onClick={onToggleCollapse}
            aria-label="Expand sidebar"
            className="flex size-9 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-700 transition-colors hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
            title="Expand Sidebar"
          >
            <ChevronRight className="size-4" />
          </button>
          <button
            onClick={onNewChat}
            aria-label="New chat"
            className="flex size-9 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-700 transition-colors hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
            title="New Chat"
          >
            <Plus className="size-4" />
          </button>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex size-9 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-xs font-semibold text-black ring-2 ring-emerald-400/40 transition-transform hover:scale-105 cursor-pointer"
            title={user?.name || 'Account'}
          >
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </button>
          {showUserMenu && (
            <div className="absolute bottom-12 left-2 z-50 w-48 rounded-xl border border-neutral-200 bg-white p-2 shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-[#1e1e22]">
              <div className="border-b border-neutral-200 px-3 py-2 dark:border-white/10">
                <p className="text-xs font-semibold text-neutral-900 dark:text-white truncate">{user?.name || 'Your name'}</p>
                <p className="text-[10px] text-neutral-500 dark:text-white/50 truncate">{user?.email || 'user@alchat.ai'}</p>
              </div>
              <div className="py-1">
                <ThemeToggle />
              </div>
              <button
                onClick={onSignOut}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-red-600 dark:text-red-300 transition-colors hover:bg-red-500/10 cursor-pointer"
              >
                <LogOut className="size-3.5" /> Sign out
              </button>
            </div>
          )}
        </div>
      </aside>
    )
  }

  const renderGroup = (title: string, items: Conversation[]) => {
    if (!items || items.length === 0) return null
    return (
      <div className="mb-5">
        <h3 className="mb-2 px-3 text-xs font-semibold text-neutral-500 dark:text-white/50 tracking-tight uppercase">
          {title}
        </h3>
        <div className="space-y-1">
          {items.map((conv) => {
            const isActive = conv.id === activeConversationId
            return (
              <div
                key={conv.id}
                onClick={() => onSelectConversation(conv)}
                className={`group flex items-center justify-between rounded-xl px-3 py-2 text-[13px] sm:text-sm cursor-pointer transition-all ${isActive
                  ? 'bg-neutral-300/80 font-semibold text-neutral-900 dark:bg-white/15 dark:font-medium dark:text-white shadow-sm'
                  : 'text-neutral-700 hover:bg-neutral-200/60 dark:text-white/75 dark:hover:bg-white/5 dark:hover:text-white'
                  }`}
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <Sparkles className="size-4 shrink-0 text-neutral-400 dark:text-white/50 group-hover:text-amber-500 dark:group-hover:text-amber-400" />
                  <span className="truncate">{conv.title}</span>
                </div>
                <button
                  onClick={(e) => onDeleteConversation(conv.id, e)}
                  aria-label="Delete conversation"
                  className="opacity-0 group-hover:opacity-100 p-1 text-neutral-400 hover:text-red-500 dark:text-white/40 dark:hover:text-red-400 transition-opacity cursor-pointer"
                  title="Delete chat"
                >
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <aside className="relative flex h-screen w-[270px] shrink-0 flex-col justify-between border-r border-neutral-200 bg-[#f0f1f3] text-neutral-900 transition-colors duration-200 dark:border-white/10 dark:bg-[#121214] dark:text-white">
      {/* Top Header Actions */}
      <div className="p-3 pb-2 border-b border-neutral-200 dark:border-white/5">
        <div className="flex items-center justify-between gap-2">
          {/* Gold Sparkle Logo Button */}
          <button
            onClick={onNewChat}
            className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#fbbf24] text-black shadow-md shadow-amber-500/20 transition-transform hover:scale-105 cursor-pointer"
            title="Alchat Home"
          >
            <Sparkle className="size-5 fill-black text-black" />
          </button>

          {/* Plus Button: + ... */}
          <button
            onClick={onNewChat}
            className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 cursor-pointer"
            title="Create new conversation"
          >
            <Plus className="size-4" />
            <span className="tracking-widest font-semibold">...</span>
          </button>

          {/* Collapse Button: < */}
          <button
            onClick={onToggleCollapse}
            aria-label="Collapse sidebar"
            className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-700 transition-colors hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
            title="Collapse Sidebar"
          >
            <ChevronLeft className="size-4" />
          </button>
        </div>
      </div>

      {/* Grouped Conversation History */}
      <div className="flex-1 overflow-y-auto px-2.5 py-3 custom-scrollbar">
        {renderGroup('Previous 30 Days', grouped.previous30Days)}
        {renderGroup('July', grouped.july)}
        {renderGroup('June', grouped.june)}
        {renderGroup('May', grouped.may)}
        {renderGroup('Earlier', grouped.earlier)}

        {conversations.length === 0 && (
          <div className="px-4 py-8 text-center text-sm text-neutral-500 dark:text-white/40">
            <MessageSquare className="mx-auto mb-2 size-6 opacity-40" />
            No conversations yet. Start a new chat!
          </div>
        )}
      </div>

      {/* Bottom Footer: User Profile */}
      <div className="border-t border-neutral-200 p-3 dark:border-white/10 bg-[#f0f1f3] dark:bg-[#121214]">
        <div className="relative">
          <div
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center justify-between rounded-xl px-2.5 py-2 text-sm text-neutral-800 dark:text-white cursor-pointer hover:bg-neutral-200/70 dark:hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-xs font-bold text-black ring-2 ring-emerald-400/40">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'Y'}
                <span className="absolute bottom-0 right-0 size-2 rounded-full bg-emerald-400 ring-1 ring-black" />
              </div>
              <span className="truncate font-medium text-neutral-900 dark:text-white/90">
                {user?.name || 'Your name'}
              </span>
            </div>
            <MoreVertical className="size-4 text-neutral-500 dark:text-white/50 hover:text-neutral-900 dark:hover:text-white" />
          </div>

          {/* User Popover Menu */}
          {showUserMenu && (
            <div className="absolute bottom-14 left-0 right-0 z-50 rounded-xl border border-neutral-200 bg-white p-2.5 shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-[#1a1a1d]">
              <div className="border-b border-neutral-200 px-3 py-2 dark:border-white/10">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white truncate">{user?.name || 'Your name'}</p>
                <p className="text-xs text-neutral-500 dark:text-white/50 truncate">{user?.email || 'user@alchat.ai'}</p>
              </div>
              <div className="py-1">
                <ThemeToggle />
              </div>
              <button
                onClick={onSignOut}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-red-600 dark:text-red-300 transition-colors hover:bg-red-500/10 cursor-pointer"
              >
                <LogOut className="size-4" /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
