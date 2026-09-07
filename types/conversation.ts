import { ChatMessage } from './chat'

export interface Conversation {
  id: string
  title: string
  userId: string
  createdAt: number
  updatedAt: number
  lastMessage?: string
  isPinned?: boolean
}

export interface GroupedConversations {
  pinned: Conversation[]
  previous30Days: Conversation[]
  july: Conversation[]
  june: Conversation[]
  may: Conversation[]
  earlier: Conversation[]
}

