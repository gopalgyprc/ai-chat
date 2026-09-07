'use client'

import React, { useState } from 'react'
import { ChatSidebar } from './ChatSidebar'
import { ChatHeader } from './ChatHeader'
import { Conversation, GroupedConversations } from '@/types/conversation'
import { AppUser } from '@/types/user'
import { ChatMessage } from '@/types/chat'
import { X } from 'lucide-react'

interface ChatLayoutProps {
  conversations: Conversation[]
  grouped: GroupedConversations
  activeConversation: Conversation | null
  messages?: ChatMessage[]
  user: AppUser | null
  onSelectConversation: (conv: Conversation) => void
  onNewChat: () => void
  onDeleteConversation: (id: string, e: React.MouseEvent) => void
  onTogglePin?: (id: string, e: React.MouseEvent) => void
  onRenameConversation?: (id: string, newTitle: string) => void
  onClearAll?: () => void
  onOpenTuitionModal?: () => void
  onSignOut: () => void
  children: React.ReactNode
}

export function ChatLayout({
  conversations,
  grouped,
  activeConversation,
  messages = [],
  user,
  onSelectConversation,
  onNewChat,
  onDeleteConversation,
  onTogglePin,
  onRenameConversation,
  onClearAll,
  onOpenTuitionModal,
  onSignOut,
  children,
}: ChatLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f8f9fa] text-neutral-900 transition-colors duration-200 dark:bg-[#131314] dark:text-white">
      <div className="hidden md:flex shrink-0">
        <ChatSidebar
          conversations={conversations}
          grouped={grouped}
          activeConversationId={activeConversation?.id || null}
          user={user}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          onSelectConversation={(conv) => {
            onSelectConversation(conv)
            setIsMobileSidebarOpen(false)
          }}
          onNewChat={() => {
            onNewChat()
            setIsMobileSidebarOpen(false)
          }}
          onDeleteConversation={onDeleteConversation}
          onTogglePin={onTogglePin}
          onRenameConversation={onRenameConversation}
          onClearAll={onClearAll}
          onSignOut={onSignOut}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          <div className="relative z-10 flex w-[280px] flex-col bg-white dark:bg-[#121214] shadow-2xl">
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              aria-label="Close sidebar"
              className="absolute right-3 top-4 z-20 flex size-8 items-center justify-center rounded-lg bg-neutral-200 text-neutral-800 dark:bg-white/10 dark:text-white cursor-pointer"
            >
              <X className="size-4" />
            </button>
            <ChatSidebar
              conversations={conversations}
              grouped={grouped}
              activeConversationId={activeConversation?.id || null}
              user={user}
              isCollapsed={false}
              onToggleCollapse={() => setIsMobileSidebarOpen(false)}
              onSelectConversation={(conv) => {
                onSelectConversation(conv)
                setIsMobileSidebarOpen(false)
              }}
              onNewChat={() => {
                onNewChat()
                setIsMobileSidebarOpen(false)
              }}
              onDeleteConversation={onDeleteConversation}
              onTogglePin={onTogglePin}
              onRenameConversation={onRenameConversation}
              onClearAll={onClearAll}
              onSignOut={onSignOut}
            />
          </div>
        </div>
      )}

      {/* Main Chat Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <ChatHeader
          title={activeConversation?.title || 'Indiana Tech Assistant'}
          messages={messages}
          onToggleSidebar={() => setIsMobileSidebarOpen(true)}
          onNewChat={onNewChat}
          onOpenTuitionModal={onOpenTuitionModal}
        />
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  )
}
