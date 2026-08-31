/**
 * Smart contextual follow-up question generator
 */
export function getSuggestedQuestions(userMessage?: string, assistantMessage?: string): string[] {
  const combined = `${userMessage || ''} ${assistantMessage || ''}`.toLowerCase()

  // 1. Greetings / Introduction
  if (
    combined.includes('hello') ||
    combined.includes('hi there') ||
    combined.includes('hey') ||
    combined.includes('how can i help') ||
    (userMessage && userMessage.trim().length <= 4)
  ) {
    return [
      '✨ What are the most powerful capabilities of Alchat?',
      '💻 Help me write a Next.js 16 component with TypeScript',
      '🚀 Give me 5 high-growth online startup ideas for 2026',
      '🔬 Explain quantum computing like I am 12 years old',
      '✍️ Draft a professional follow-up email after an interview',
    ]
  }

  // 2. Coding / Software Engineering / Tech
  if (
    combined.includes('code') ||
    combined.includes('function') ||
    combined.includes('react') ||
    combined.includes('python') ||
    combined.includes('typescript') ||
    combined.includes('javascript') ||
    combined.includes('api') ||
    combined.includes('bug') ||
    combined.includes('database') ||
    combined.includes('css') ||
    combined.includes('html') ||
    combined.includes('sql')
  ) {
    return [
      '🔍 Can you optimize this code for maximum performance and readability?',
      '🧪 Write comprehensive unit tests with edge case handling for this',
      '🛡️ What security vulnerabilities or error cases should I protect against?',
      '📝 Can you explain how this works step-by-step with comments?',
      '⚡ How can I refactor this using modern asynchronous best practices?',
    ]
  }

  // 3. Leaders / Politics / Geography / History / Facts
  if (
    combined.includes('pm') ||
    combined.includes('prime minister') ||
    combined.includes('president') ||
    combined.includes('india') ||
    combined.includes('country') ||
    combined.includes('history') ||
    combined.includes('war') ||
    combined.includes('constitution') ||
    combined.includes('election')
  ) {
    return [
      '📜 What are the most significant policy achievements during this tenure?',
      '🌐 How did this impact global foreign relations and trade agreements?',
      '📊 What were the major economic reforms and infrastructure milestones?',
      '⏳ What were the key challenges and turning points in this era?',
      '📚 Can you provide a chronological timeline of the most critical events?',
    ]
  }

  // 4. Business / Career / Marketing / Finance
  if (
    combined.includes('business') ||
    combined.includes('startup') ||
    combined.includes('marketing') ||
    combined.includes('money') ||
    combined.includes('invest') ||
    combined.includes('career') ||
    combined.includes('growth') ||
    combined.includes('revenue') ||
    combined.includes('budget')
  ) {
    return [
      '📈 What is the most effective go-to-market strategy for this concept?',
      '💰 How can I estimate the startup costs and break-even timeline?',
      '🎯 How do I define the ideal customer persona and value proposition?',
      '⚖️ What are the top 3 risks in this space and how can I mitigate them?',
      '🚀 Outline a practical 30-day step-by-step execution roadmap',
    ]
  }

  // 5. Creative Writing / Storytelling / Philosophy / Music / Art
  if (
    combined.includes('story') ||
    combined.includes('write') ||
    combined.includes('poem') ||
    combined.includes('philosophy') ||
    combined.includes('album') ||
    combined.includes('music') ||
    combined.includes('art') ||
    combined.includes('character')
  ) {
    return [
      '🎨 Can you provide 3 contrasting creative variations of this theme?',
      '📖 Expand this scene with vivid sensory details and natural dialogue',
      '💡 What is an unexpected narrative plot twist we could introduce?',
      '🎭 How can we explore the philosophical implications of this idea further?',
      '🎬 Describe the visual lighting, camera angles, and atmosphere for this scene',
    ]
  }

  // 6. General / Contextual Deep Dive
  return [
    '💡 Can you illustrate this with a practical real-world case study?',
    '🔍 What are the key advantages and drawbacks I should be aware of?',
    '🚀 What actionable steps should I take next to implement this?',
    '❓ What are the most common misconceptions or mistakes to avoid?',
    '📋 Can you summarize the core takeaways as a quick reference checklist?',
  ]
}
