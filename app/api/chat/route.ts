import { NextRequest, NextResponse } from 'next/server'
import { streamGeminiChat } from '@/lib/ai'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { message, history = [] } = body

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json({ error: 'Message content is required.' }, { status: 400 })
    }

    const encoder = new TextEncoder()
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          await streamGeminiChat(message, history, {
            onChunk: (chunk: string) => {
              const payload = JSON.stringify({ type: 'chunk', text: chunk }) + '\n'
              controller.enqueue(encoder.encode(payload))
            },
            onDone: (fullText: string) => {
              const payload = JSON.stringify({ type: 'done', fullText }) + '\n'
              controller.enqueue(encoder.encode(payload))
              controller.close()
            },
            onError: (err: Error) => {
              const payload = JSON.stringify({ type: 'error', error: err.message }) + '\n'
              controller.enqueue(encoder.encode(payload))
              controller.close()
            },
          })
        } catch (streamErr: any) {
          const payload =
            JSON.stringify({ type: 'error', error: streamErr?.message || 'Streaming failed' }) +
            '\n'
          controller.enqueue(encoder.encode(payload))
          controller.close()
        }
      },
    })

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'application/x-ndjson; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    })
  } catch (error: any) {
    console.error('Chat API Route Error:', error)
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
