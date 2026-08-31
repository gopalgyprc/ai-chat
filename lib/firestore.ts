import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { db, isFirebaseConfigured } from './firebase'
import { Conversation, GroupedConversations } from '@/types/conversation'
import { ChatMessage, MessageRole } from '@/types/chat'

const LOCAL_STORAGE_CONVERSATIONS_KEY = 'alchat_conversations_v1'
const LOCAL_STORAGE_MESSAGES_KEY_PREFIX = 'alchat_messages_v1_'

const DEFAULT_SEED_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv-july-1',
    title: 'Speak Any Language: Translate phrases...',
    userId: 'demo_user_123',
    createdAt: new Date('2026-07-28T10:00:00Z').getTime(),
    updatedAt: new Date('2026-07-28T10:00:00Z').getTime(),
    lastMessage: 'Translate phrases instantly into 50+ languages.',
  },
  {
    id: 'conv-july-2',
    title: 'Explore Philosophy: Deep dialogue...',
    userId: 'demo_user_123',
    createdAt: new Date('2026-07-20T14:30:00Z').getTime(),
    updatedAt: new Date('2026-07-20T14:30:00Z').getTime(),
    lastMessage: 'Discuss profound questions about consciousness and ethics.',
  },
  {
    id: 'conv-july-3',
    title: 'Code Problem Solver: Debug algorithm...',
    userId: 'demo_user_123',
    createdAt: new Date('2026-07-15T09:15:00Z').getTime(),
    updatedAt: new Date('2026-07-15T09:15:00Z').getTime(),
    lastMessage: 'Optimized binary search tree implementation in TypeScript.',
  },
  {
    id: 'conv-june-1',
    title: 'Virtual Travel Buddy: Tour itineraries...',
    userId: 'demo_user_123',
    createdAt: new Date('2026-06-25T11:00:00Z').getTime(),
    updatedAt: new Date('2026-06-25T11:00:00Z').getTime(),
    lastMessage: '7-day cultural itinerary across Kyoto and Tokyo.',
  },
  {
    id: 'conv-june-2',
    title: 'Healthy Living Tips: Nutrition & habits...',
    userId: 'demo_user_123',
    createdAt: new Date('2026-06-18T16:45:00Z').getTime(),
    updatedAt: new Date('2026-06-18T16:45:00Z').getTime(),
    lastMessage: 'Balanced weekly nutrition plan and morning workout routine.',
  },
  {
    id: 'conv-june-3',
    title: 'Art & Music Picks: Modern compositions...',
    userId: 'demo_user_123',
    createdAt: new Date('2026-06-05T08:20:00Z').getTime(),
    updatedAt: new Date('2026-06-05T08:20:00Z').getTime(),
    lastMessage: 'Curated ambient and neo-classical playlist recommendations.',
  },
  {
    id: 'conv-may-1',
    title: 'Imagination Unleashed: Sci-fi novel...',
    userId: 'demo_user_123',
    createdAt: new Date('2026-05-22T19:10:00Z').getTime(),
    updatedAt: new Date('2026-05-22T19:10:00Z').getTime(),
    lastMessage: 'Chapter draft about an AI discovering forgotten memories.',
  },
  {
    id: 'conv-may-2',
    title: 'Learn Something New: Quantum basics...',
    userId: 'demo_user_123',
    createdAt: new Date('2026-05-14T13:00:00Z').getTime(),
    updatedAt: new Date('2026-05-14T13:00:00Z').getTime(),
    lastMessage: 'Simple explanation of quantum superposition and entanglement.',
  },
  {
    id: 'conv-may-3',
    title: 'Cooking Made Easy: Artisanal pasta...',
    userId: 'demo_user_123',
    createdAt: new Date('2026-05-02T18:00:00Z').getTime(),
    updatedAt: new Date('2026-05-02T18:00:00Z').getTime(),
    lastMessage: 'Step-by-step handmade tagliatelle with roasted garlic butter.',
  },
]

export function getLocalConversations(userId: string): Conversation[] {
  if (typeof window === 'undefined') return DEFAULT_SEED_CONVERSATIONS
  try {
    const raw = localStorage.getItem(`${LOCAL_STORAGE_CONVERSATIONS_KEY}_${userId}`)
    if (!raw) {
      localStorage.setItem(
        `${LOCAL_STORAGE_CONVERSATIONS_KEY}_${userId}`,
        JSON.stringify(DEFAULT_SEED_CONVERSATIONS)
      )
      return DEFAULT_SEED_CONVERSATIONS
    }
    return JSON.parse(raw)
  } catch {
    return DEFAULT_SEED_CONVERSATIONS
  }
}

export function saveLocalConversations(userId: string, convs: Conversation[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(`${LOCAL_STORAGE_CONVERSATIONS_KEY}_${userId}`, JSON.stringify(convs))
}

export function getLocalMessages(conversationId: string): ChatMessage[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(`${LOCAL_STORAGE_MESSAGES_KEY_PREFIX}${conversationId}`)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveLocalMessages(conversationId: string, msgs: ChatMessage[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(`${LOCAL_STORAGE_MESSAGES_KEY_PREFIX}${conversationId}`, JSON.stringify(msgs))
}

export async function createConversation(
  userId: string,
  initialTitle: string = 'New Conversation'
): Promise<Conversation> {
  const convId = 'conv_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7)
  const newConv: Conversation = {
    id: convId,
    title: initialTitle,
    userId,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }

  const local = getLocalConversations(userId)
  saveLocalConversations(userId, [newConv, ...local])

  if (isFirebaseConfigured) {
    try {
      const convRef = doc(db, 'users', userId, 'conversations', convId)
      setDoc(convRef, {
        title: initialTitle,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }).catch((err) => {
        console.warn('Background Firestore createConversation notice:', err?.message)
      })
    } catch (e: any) {
      console.warn('Firestore createConversation notice:', e?.message)
    }
  }

  return newConv
}

export function subscribeToUserConversations(
  userId: string,
  callback: (conversations: Conversation[]) => void
): () => void {
  const initial = getLocalConversations(userId)
  callback(initial)

  if (!isFirebaseConfigured) {
    return () => { }
  }

  try {
    const convsRef = collection(db, 'users', userId, 'conversations')
    const q = query(convsRef, orderBy('updatedAt', 'desc'))

    return onSnapshot(
      q,
      (snapshot) => {
        if (!snapshot.empty) {
          const convs: Conversation[] = snapshot.docs.map((docSnap) => {
            const data = docSnap.data()
            return {
              id: docSnap.id,
              title: data.title || 'Untitled Chat',
              userId,
              createdAt: data.createdAt?.toMillis?.() || Date.now(),
              updatedAt: data.updatedAt?.toMillis?.() || Date.now(),
              lastMessage: data.lastMessage,
            }
          })
          saveLocalConversations(userId, convs)
          callback(convs)
        }
      },
      (error) => {
        console.warn('Firestore conversation subscription notice:', error?.message)
      }
    )
  } catch (err: any) {
    console.warn('Firestore fallback on conversation subscribe:', err?.message)
    return () => { }
  }
}

export async function addMessage(
  userId: string,
  conversationId: string,
  message: { role: MessageRole; content: string }
): Promise<ChatMessage> {
  const msgId = 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7)
  const fullMessage: ChatMessage = {
    id: msgId,
    role: message.role,
    content: message.content,
    createdAt: Date.now(),
  }

  const msgs = getLocalMessages(conversationId)
  saveLocalMessages(conversationId, [...msgs, fullMessage])

  const convs = getLocalConversations(userId)
  const updatedConvs = convs.map((c) =>
    c.id === conversationId
      ? { ...c, updatedAt: Date.now(), lastMessage: message.content.substring(0, 80) }
      : c
  )
  saveLocalConversations(userId, updatedConvs)

  if (isFirebaseConfigured) {
    try {
      const msgRef = doc(db, 'users', userId, 'conversations', conversationId, 'messages', msgId)
      setDoc(msgRef, {
        role: message.role,
        content: message.content,
        createdAt: serverTimestamp(),
      }).catch((err) => {
        console.warn('Background Firestore addMessage notice:', err?.message)
      })

      const convRef = doc(db, 'users', userId, 'conversations', conversationId)
      updateDoc(convRef, {
        updatedAt: serverTimestamp(),
        lastMessage: message.content.substring(0, 80),
      }).catch(() => { })
    } catch (e: any) {
      console.warn('Firestore addMessage notice:', e?.message)
    }
  }

  return fullMessage
}

export function subscribeToMessages(
  userId: string,
  conversationId: string,
  callback: (messages: ChatMessage[]) => void
): () => void {
  if (!conversationId) {
    callback([])
    return () => { }
  }

  const localMsgs = getLocalMessages(conversationId)
  callback(localMsgs)

  if (!isFirebaseConfigured) {
    return () => { }
  }

  try {
    const msgsRef = collection(db, 'users', userId, 'conversations', conversationId, 'messages')
    const q = query(msgsRef, orderBy('createdAt', 'asc'))

    return onSnapshot(
      q,
      (snapshot) => {
        if (!snapshot.empty) {
          const msgs: ChatMessage[] = snapshot.docs.map((docSnap) => {
            const data = docSnap.data()
            return {
              id: docSnap.id,
              role: data.role as MessageRole,
              content: data.content,
              createdAt: data.createdAt?.toMillis?.() || Date.now(),
            }
          })
          saveLocalMessages(conversationId, msgs)
          callback(msgs)
        }
      },
      (error) => {
        console.warn('Firestore message subscription notice:', error?.message)
      }
    )
  } catch (err: any) {
    console.warn('Firestore subscribeToMessages notice:', err?.message)
    return () => { }
  }
}

export async function deleteConversation(userId: string, conversationId: string): Promise<void> {

  const convs = getLocalConversations(userId).filter((c) => c.id !== conversationId)
  saveLocalConversations(userId, convs)
  if (typeof window !== 'undefined') {
    localStorage.removeItem(`${LOCAL_STORAGE_MESSAGES_KEY_PREFIX}${conversationId}`)
  }

  if (isFirebaseConfigured) {
    try {
      const convRef = doc(db, 'users', userId, 'conversations', conversationId)
      deleteDoc(convRef).catch((e) => {
        console.warn('Firestore deleteDoc notice:', e?.message)
      })
    } catch (e: any) {
      console.warn('Firestore deleteConversation notice:', e?.message)
    }
  }
}

export async function updateConversationTitle(
  userId: string,
  conversationId: string,
  title: string
): Promise<void> {
  const convs = getLocalConversations(userId).map((c) =>
    c.id === conversationId ? { ...c, title, updatedAt: Date.now() } : c
  )
  saveLocalConversations(userId, convs)

  if (isFirebaseConfigured) {
    try {
      const convRef = doc(db, 'users', userId, 'conversations', conversationId)
      updateDoc(convRef, {
        title,
        updatedAt: serverTimestamp(),
      }).catch(() => { })
    } catch (e: any) {
      console.warn('Firestore updateConversationTitle notice:', e?.message)
    }
  }
}


export function groupConversations(conversations: Conversation[]): GroupedConversations {
  const grouped: GroupedConversations = {
    previous30Days: [],
    july: [],
    june: [],
    may: [],
    earlier: [],
  }

  const now = Date.now()
  const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000

  conversations.forEach((conv) => {
    const age = now - conv.createdAt
    const date = new Date(conv.createdAt)
    const month = date.getMonth() // 0 = Jan, 4 = May, 5 = June, 6 = July

    if (age <= thirtyDaysMs && conv.id.startsWith('conv_')) {
      grouped.previous30Days.push(conv)
    } else if (month === 6 || conv.id.includes('july')) {
      grouped.july.push(conv)
    } else if (month === 5 || conv.id.includes('june')) {
      grouped.june.push(conv)
    } else if (month === 4 || conv.id.includes('may')) {
      grouped.may.push(conv)
    } else {
      grouped.earlier.push(conv)
    }
  })

  return grouped
}
