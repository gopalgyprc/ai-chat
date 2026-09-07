import { GoogleGenAI } from '@google/genai'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const key = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || ''

async function testStream() {
  const ai = new GoogleGenAI({ apiKey: key })
  console.log('Testing generateContentStream with gemini-3.6-flash...')
  const stream = await ai.models.generateContentStream({
    model: 'gemini-3.6-flash',
    contents: [{ role: 'user', parts: [{ text: 'Say "Indiana Tech Virtual Assistant is online!"' }] }]
  })

  let out = ''
  for await (const chunk of stream) {
    process.stdout.write(chunk.text || '')
    out += chunk.text || ''
  }
  console.log('\n\nStream Finished! Full output:', out)
}

testStream()
