export type MessageRole = 'user' | 'assistant' | 'system'

export interface ChatMessage {
  id: string
  role: MessageRole
  content: string
  createdAt: number
}

export interface SendMessagePayload {
  conversationId: string
  message: string
  history?: Array<{
    role: MessageRole
    content: string
  }>
}
