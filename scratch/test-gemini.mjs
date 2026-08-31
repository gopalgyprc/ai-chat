import { GoogleGenerativeAI } from '@google/generative-ai'
import { GoogleGenAI } from '@google/genai'

const key = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || ''
console.log('Testing key length:', key.length, 'key prefix:', key.substring(0, 8))

const modelsToTest = [
  'gemini-2.0-flash',
  'gemini-2.0-flash-exp',
  'gemini-1.5-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash-8b',
  'gemini-1.5-pro',
  'gemini-pro'
]

async function testSDK1() {
  console.log('\n--- Testing with @google/generative-ai ---')
  const genAI = new GoogleGenerativeAI(key)
  for (const m of modelsToTest) {
    try {
      const model = genAI.getGenerativeModel({ model: m })
      const result = await model.generateContent('Hi, say testing')
      console.log(`[SUCCESS] @google/generative-ai with model ${m}:`, result.response.text().trim().substring(0, 40))
      return m
    } catch (e) {
      console.log(`[FAILED] @google/generative-ai with model ${m}:`, e.message.substring(0, 100))
    }
  }
}

async function testSDK2() {
  console.log('\n--- Testing with @google/genai ---')
  const ai = new GoogleGenAI({ apiKey: key })
  for (const m of modelsToTest) {
    try {
      const result = await ai.models.generateContent({
        model: m,
        contents: 'Hi, say testing'
      })
      console.log(`[SUCCESS] @google/genai with model ${m}:`, result.text?.trim().substring(0, 40))
      return m
    } catch (e) {
      console.log(`[FAILED] @google/genai with model ${m}:`, e.message.substring(0, 100))
    }
  }
}

async function run() {
  await testSDK1()
  await testSDK2()
}

run()
