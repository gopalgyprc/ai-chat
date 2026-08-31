import { GoogleGenAI } from '@google/genai'

const key = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || ''
const ai = new GoogleGenAI({ apiKey: key })

async function testStreaming() {
  const models = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.5-pro', 'gemini-3.5-flash']
  for (const m of models) {
    try {
      console.log(`\nTesting stream with ${m}...`)
      const stream = await ai.models.generateContentStream({
        model: m,
        contents: [{ role: 'user', parts: [{ text: 'Explain university semester exam strategy in 2 sentences' }] }]
      })
      let out = ''
      for await (const chunk of stream) {
        out += chunk.text || ''
      }
      console.log(`[SUCCESS with ${m}]:\n`, out.trim())
      return m
    } catch (e) {
      console.log(`[FAILED with ${m}]:`, e.message)
    }
  }
}

testStreaming()
