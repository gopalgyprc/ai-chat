async function run() {
  const queries = [
    'Who is Dr. Anne Gull?',
    'Who is Dr. Courtney Shull?',
    'Who is Dr. Dawn Anderson?',
    'Who is Dr. Mark Bauer?',
    'Who is Dr. Michael Bechill?',
    'Who is Dr. Suzanne Beyeler?',
    'Who is Dr. Justin Boyce?',
    'Who is Dr. Jonathan Brownlee?'
  ];

  for (const q of queries) {
    console.log('\n======================================');
    console.log('USER QUERY:', q);
    console.log('--------------------------------------');
    try {
      const res = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q })
      });
      const text = await res.text();
      const lines = text.split('\n').filter(l => l.trim());
      let full = '';
      for (const l of lines) {
        try {
          const parsed = JSON.parse(l);
          if (parsed.type === 'chunk') full += parsed.text;
          if (parsed.type === 'done') full = parsed.fullText || full;
        } catch (e) {}
      }
      console.log('AI RESPONSE:\n' + full.trim());
    } catch (err) {
      console.error('Error testing query:', err.message);
    }
  }
}

run();
