import { streamGeminiChat } from '../lib/ai.js'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

async function testFull() {
  console.log('Testing streamGeminiChat with message: "I\'m gopal Prasad"...')
  await streamGeminiChat("I'm gopal Prasad", [], {
    onChunk: (chunk) => process.stdout.write(chunk),
    onDone: (full) => console.log('\n\n--- DONE! Length:', full.length),
    onError: (err) => console.error('\n\n--- ERROR:', err.message)
  })
}

testFull()
