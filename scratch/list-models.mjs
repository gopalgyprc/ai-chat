import { GoogleGenAI } from '@google/genai'

const key = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || ''
const ai = new GoogleGenAI({ apiKey: key })

async function listAllModels() {
  try {
    console.log('Listing models with ai.models.list()...')
    const response = await ai.models.list()
    console.log('Found models:')
    for await (const m of response) {
      console.log('-', m.name, '| supported actions:', m.supportedActions || m.supportedGenerationMethods)
    }
  } catch (e) {
    console.error('Error listing models:', e)
  }
}

listAllModels()
