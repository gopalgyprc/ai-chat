import { ChatMessage } from './chat'

export interface Conversation {
  id: string
  title: string
  userId: string
  createdAt: number
  updatedAt: number
  lastMessage?: string
}

export interface GroupedConversations {
  previous30Days: Conversation[]
  july: Conversation[]
  june: Conversation[]
  may: Conversation[]
  earlier: Conversation[]
}
