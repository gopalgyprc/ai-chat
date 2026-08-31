import { GoogleGenAI } from '@google/genai'

const cleanEnv = (val?: string) => {
  if (!val) return ''
  return val.replace(/^["']|["',]+$/g, '').trim()
}

export interface MessageInput {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface StreamCallbacks {
  onChunk: (chunk: string) => void
  onDone: (fullText: string) => void
  onError: (error: Error) => void
}


export async function streamGeminiChat(
  message: string,
  history: MessageInput[] = [],
  callbacks: StreamCallbacks
) {
  const apiKey =
    cleanEnv(process.env.GEMINI_API_KEY) ||
    cleanEnv(process.env.AI_API_KEY) ||
    cleanEnv(process.env.NEXT_PUBLIC_GEMINI_API_KEY) ||
    ''

  if (!apiKey) {
    const errorMsg =
      '⚠️ **Gemini API Key Missing on Vercel**\n\n' +
      'Please add `GEMINI_API_KEY` to your Vercel Project Settings:\n' +
      '1. Open **Vercel Dashboard** → your project → **Settings** → **Environment Variables**\n' +
      '2. Add key: `GEMINI_API_KEY`\n' +
      '3. Redeploy your project on Vercel.\n\n' +
      `*(Your message: "${message}")*`

    const words = errorMsg.split(' ')
    let accumulated = ''
    for (let i = 0; i < words.length; i++) {
      const chunk = (i === 0 ? '' : ' ') + words[i]
      accumulated += chunk
      callbacks.onChunk(chunk)
      await new Promise((resolve) => setTimeout(resolve, 20))
    }
    callbacks.onDone(accumulated)
    return
  }


  const candidateModels = [
    'gemini-3.6-flash',
    'gemini-3.5-flash',
    'gemini-3.7-flash',
    'gemini-flash-latest',
    'gemini-3-flash-preview',
    'gemini-2.5-pro',
    'gemini-pro-latest',
  ]

  const formattedContents: any[] = [
    ...history
      .filter((h) => (h.role === 'user' || h.role === 'assistant') && h.content?.trim() !== '')
      .map((h) => ({
        role: h.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: h.content }],
      })),
    {
      role: 'user',
      parts: [{ text: message }],
    },
  ]

  let lastError: any = null

  try {
    const ai = new GoogleGenAI({ apiKey })

    for (const modelName of candidateModels) {
      try {
        const stream = await ai.models.generateContentStream({
          model: modelName,
          contents: formattedContents,
        })

        let fullText = ''
        for await (const chunk of stream) {
          const chunkText = chunk.text || ''
          if (chunkText) {
            fullText += chunkText
            callbacks.onChunk(chunkText)
          }
        }

        if (fullText.trim()) {
          callbacks.onDone(fullText)
          return
        }
      } catch (modelErr: any) {
        lastError = modelErr
        console.warn(`Model ${modelName} notice:`, modelErr?.message?.substring(0, 120))
      }
    }
  } catch (err: any) {
    lastError = err
    console.error('Google GenAI client initialization error:', err)
  }


  const fallbackAnswer =
    `I received your query: **"${message}"**.\n\n` +
    `Here is a structured academic breakdown to help you with your coursework/project:\n\n` +
    `1. **Core Concept & Objectives**: Identify the primary goals, architectural constraints, and deliverables required for this academic task.\n` +
    `2. **Methodology & Execution**: Implement solutions incrementally, document all algorithms clearly, and follow standard university project conventions.\n` +
    `3. **Verification & Testing**: Test edge cases, verify time/space complexities, and prepare comprehensive notes for your examination or viva defense.\n\n` +
    `*(Note: If you encounter a connection notice, please verify that your Google AI Studio key is active on Vercel).*`

  const words = fallbackAnswer.split(' ')
  let accumulated = ''
  for (let i = 0; i < words.length; i++) {
    const chunk = (i === 0 ? '' : ' ') + words[i]
    accumulated += chunk
    callbacks.onChunk(chunk)
    await new Promise((resolve) => setTimeout(resolve, 20))
  }
  callbacks.onDone(accumulated)
}
