import { GoogleGenAI } from '@google/genai'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const key = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || ''
console.log('Testing Key:', key ? `${key.substring(0, 8)}... (Length: ${key.length})` : 'NO KEY')

async function test() {
  try {
    const ai = new GoogleGenAI({ apiKey: key })
    console.log('Testing model: gemini-2.0-flash...')
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [{ role: 'user', parts: [{ text: 'Hello, what is 2+2?' }] }]
    })
    console.log('SUCCESS! Response:', response.text)
  } catch (err) {
    console.error('API Error Details:')
    console.error('Message:', err.message)
    console.error('Status/Code:', err.status || err.code || 'N/A')
    console.error('Full Error:', err)
  }
}

test()
