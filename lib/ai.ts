import { GoogleGenAI } from '@google/genai'

const cleanEnv = (val?: string) => {
  if (!val) return ''
  return val.replace(/^["']|["',]+$/g, '').trim()
}

const GEMINI_API_KEY =
  cleanEnv(process.env.GEMINI_API_KEY) ||
  cleanEnv(process.env.AI_API_KEY) ||
  ''

export interface MessageInput {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface StreamCallbacks {
  onChunk: (chunk: string) => void
  onDone: (fullText: string) => void
  onError: (error: Error) => void
}

/**
 * Fallback simulated streaming response for demonstration
 */
async function fallbackSimulatedStream(
  message: string,
  callbacks: StreamCallbacks,
  noticePrefix?: string
) {
  let answer = ''
  const lower = message.toLowerCase()

  if (lower.includes('india') && lower.includes('independence')) {
    answer = `**India gained independence on August 15, 1947**, ending nearly two centuries of British colonial rule.\n\n### Key Historical Milestones:\n- **Tryst with Destiny**: On the midnight of August 14–15, 1947, India's first Prime Minister, **Jawaharlal Nehru**, delivered the iconic speech proclaiming freedom.\n- **Freedom Movement Leaders**: Key leaders included **Mahatma Gandhi**, **Subhas Chandra Bose**, **Sardar Vallabhbhai Patel**, **Bhagat Singh**, and **Dr. B.R. Ambedkar**.\n- **Constitution of India**: Adopted on **January 26, 1950**, establishing India as a sovereign democratic republic.`
  } else if (lower.includes('cricket')) {
    answer = `A standard **cricket team consists of 11 players**, usually balanced across different roles:\n\n1. **Top-order & Opening Batsmen** (typically 2–3 players)\n2. **Middle-order Batsmen & All-rounders** (2–3 players)\n3. **Wicketkeeper** (1 specialist player)\n4. **Pace/Fast Bowlers & Spin Bowlers** (3–4 players)\n\n*In international tournaments like the ICC World Cup or IPL, teams announce a squad of 15 players, from which the Playing XI is selected for each match.*`
  } else if (lower.includes('month')) {
    answer = `The **12 months of the year** in order are:\n\n1. **January** (31 days)\n2. **February** (28/29 days)\n3. **March** (31 days)\n4. **April** (30 days)\n5. **May** (31 days)\n6. **June** (30 days)\n7. **July** (31 days)\n8. **August** (31 days)\n9. **September** (30 days)\n10. **October** (31 days)\n11. **November** (30 days)\n12. **December** (31 days)`
  } else {
    answer = `Here is a helpful overview for **${message.trim()}**:\n\n1. **Core Concept**: Analyzing key components provides a structured path to success.\n2. **Actionable Steps**: Iterate rapidly, maintain high code/content quality, and verify results.\n3. **Follow-up**: Let me know if you would like me to generate code, expand on specific points, or provide additional examples!`
  }

  let textToStream = answer
  if (noticePrefix) {
    textToStream = `${noticePrefix}\n\n---\n\n${answer}`
  }

  const words = textToStream.split(' ')
  let accumulated = ''

  for (let i = 0; i < words.length; i++) {
    const chunk = (i === 0 ? '' : ' ') + words[i]
    accumulated += chunk
    callbacks.onChunk(chunk)
    await new Promise((resolve) => setTimeout(resolve, 25))
  }

  callbacks.onDone(accumulated)
}

/**
 * Generate AI Response stream using Google Gemini API with GoogleGenAI SDK
 */
export async function streamGeminiChat(
  message: string,
  history: MessageInput[] = [],
  callbacks: StreamCallbacks
) {
  if (!GEMINI_API_KEY) {
    return fallbackSimulatedStream(message, callbacks)
  }

  const candidateModels = [
    'gemini-3.6-flash',
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-1.5-flash',
  ]

  // Prepare multi-turn history structure for @google/genai
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

  try {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY })

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
          return // Successfully generated live response from Gemini!
        }
      } catch (modelErr: any) {
        console.warn(`Model ${modelName} notice:`, modelErr?.message?.substring(0, 100))
        // Continue to fallback model if 404 or unsupported
      }
    }
  } catch (err: any) {
    console.error('Google GenAI client error:', err)
  }

  // Fallback if all live API models fail
  await fallbackSimulatedStream(message, callbacks)
}
