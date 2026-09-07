async function testServer() {
  console.log('Testing live http://localhost:3000/api/chat with "I\'m gopal Prasad"...')
  try {
    const res = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: "I'm gopal Prasad", history: [] })
    })

    console.log('Status:', res.status)
    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let full = ''
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      const str = decoder.decode(value)
      const lines = str.split('\n').filter(l => l.trim())
      for (const line of lines) {
        try {
          const json = JSON.parse(line)
          if (json.type === 'chunk') {
            process.stdout.write(json.text)
            full += json.text
          } else if (json.type === 'done') {
            console.log('\n\n[DONE RECEIVED]')
          }
        } catch (e) {
          process.stdout.write(line)
        }
      }
    }
    console.log('\nFinal Output:', full)
  } catch (err) {
    console.error('Fetch error:', err)
  }
}

testServer()
