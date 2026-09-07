import { GoogleGenAI } from '@google/genai'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const key = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || ''
console.log('Testing Key:', key ? `${key.substring(0, 8)}... (Length: ${key.length})` : 'NO KEY')

const testModels = [
  'gemini-3.6-flash',
  'gemini-2.5-flash',
  'gemini-2.5-pro',
  'gemini-1.5-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-pro',
  'gemini-1.5-pro-latest',
  'gemini-pro'
]

async function testAll() {
  const ai = new GoogleGenAI({ apiKey: key })
  for (const m of testModels) {
    try {
      console.log(`\nTesting: ${m}...`)
      const res = await ai.models.generateContent({
        model: m,
        contents: [{ role: 'user', parts: [{ text: 'Hello, reply in 5 words.' }] }]
      })
      console.log(`✅ [${m}] WORKED! Response:`, res.text)
    } catch (e) {
      console.log(`❌ [${m}] Failed:`, e.message?.substring(0, 150))
    }
  }
}

testAll()
