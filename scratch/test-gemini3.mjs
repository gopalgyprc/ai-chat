import { GoogleGenAI } from '@google/genai'

const key = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || ''
const ai = new GoogleGenAI({ apiKey: key })

async function testGemini3() {
  const models = [
    'gemini-3.6-flash',
    'gemini-3.5-flash',
    'gemini-3.7-flash',
    'gemini-3-flash-preview',
    'gemini-flash-latest'
  ]

  for (const m of models) {
    try {
      console.log(`\nTesting ${m}...`)
      const res = await ai.models.generateContent({
        model: m,
        contents: 'Explain semester exam preparation in 1 sentence.'
      })
      console.log(`[SUCCESS with ${m}]:\n`, res.text?.trim())
      return m
    } catch (e) {
      console.log(`[FAILED with ${m}]:`, e.message?.substring(0, 140))
    }
  }
}

testGemini3()
