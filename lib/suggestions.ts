/**
 * University and Academic contextual follow-up question generator
 */
export function getSuggestedQuestions(userMessage?: string, assistantMessage?: string): string[] {
  const combined = `${userMessage || ''} ${assistantMessage || ''}`.toLowerCase()

  // 1. Greetings / Welcome / General Questions
  if (
    combined.includes('hello') ||
    combined.includes('hi there') ||
    combined.includes('hey') ||
    combined.includes('how can i help') ||
    (userMessage && userMessage.trim().length <= 4)
  ) {
    return [
      '🎓 What are the best final year project ideas in Computer Science & AI?',
      '📚 How can I structure an academic research paper in IEEE format?',
      '📝 Create a 7-day study timetable for semester final exams',
      '💼 Draft an ATS-friendly student resume for campus placements & internships',
      '🧪 Help me write a professional engineering lab report conclusion',
    ]
  }

  // 2. Programming, Coding, Software Engineering & Project Implementation
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
    combined.includes('sql') ||
    combined.includes('algorithm') ||
    combined.includes('project') ||
    combined.includes('data structure')
  ) {
    return [
      '📊 How do I design the system architecture diagram and ERD for this project?',
      '🧪 What are the most common technical viva / presentation questions for this code?',
      '📝 Can you write comprehensive step-by-step comments explaining this for my project report?',
      '⚡ What are the time and space complexities (Big-O) of this implementation?',
      '🛡️ How can I add robust error handling and input validation for the project demo?',
    ]
  }

  // 3. Research, Thesis, Literature Review, Citations & Academic Writing
  if (
    combined.includes('research') ||
    combined.includes('paper') ||
    combined.includes('thesis') ||
    combined.includes('citation') ||
    combined.includes('apa') ||
    combined.includes('ieee') ||
    combined.includes('literature') ||
    combined.includes('abstract') ||
    combined.includes('plagiarism') ||
    combined.includes('methodology')
  ) {
    return [
      '📖 How do I properly format in-text citations and bibliography in APA 7th / IEEE style?',
      '🔍 Can you help me formulate a strong research hypothesis and problem statement?',
      '📊 How do I synthesize findings in the literature review without plagiarism?',
      '📑 What should be included in the project abstract and future scope section?',
      '🎯 Help me prepare 5 challenging defense questions a professor or examiner might ask',
    ]
  }

  // 4. Mathematics, Physics, Engineering Sciences & Problem Solving
  if (
    combined.includes('math') ||
    combined.includes('physics') ||
    combined.includes('matrix') ||
    combined.includes('calculus') ||
    combined.includes('derivative') ||
    combined.includes('integral') ||
    combined.includes('equation') ||
    combined.includes('circuit') ||
    combined.includes('formula')
  ) {
    return [
      '📐 Can you solve this step-by-step showing all intermediate formulas and units?',
      '🔬 What is the practical engineering application of this mathematical concept?',
      '📈 How do I interpret and plot the experimental data results in my lab report?',
      '💡 Explain the fundamental underlying theorem and boundary conditions clearly',
      '📝 Provide a practice examination problem on this topic with detailed solution key',
    ]
  }

  // 5. Exam Preparation, Revision & Study Techniques
  if (
    combined.includes('exam') ||
    combined.includes('study') ||
    combined.includes('test') ||
    combined.includes('quiz') ||
    combined.includes('revision') ||
    combined.includes('semester') ||
    combined.includes('grade') ||
    combined.includes('gpa')
  ) {
    return [
      '⏰ Create an active recall practice quiz with 5 questions on this topic',
      '🧠 Explain this concept using a simple real-world analogy for fast exam revision',
      '📋 Provide a high-yield summary cheat-sheet of key definitions and formulas',
      '🎯 What are the most frequently asked university examination questions on this subject?',
      '💡 How can I memorize these key points using an effective mnemonic technique?',
    ]
  }

  // 6. Campus Placement, Career, Internships & Professor Communications
  if (
    combined.includes('career') ||
    combined.includes('interview') ||
    combined.includes('resume') ||
    combined.includes('internship') ||
    combined.includes('placement') ||
    combined.includes('job') ||
    combined.includes('email') ||
    combined.includes('professor')
  ) {
    return [
      '💼 What are the top technical interview questions asked for this role in campus hiring?',
      '✉️ Draft a polite formal email to a professor requesting project guidance or LOR',
      '🎯 How should I describe this university project on my LinkedIn and resume?',
      '🚀 What key skills and certifications should I learn alongside my university degree?',
      '💡 Provide a framework to answer: "Walk me through your final year project"',
    ]
  }

  // 7. General Academic Deep-Dive Fallback
  return [
    '🎓 How can I apply this concept in a university academic project or coursework?',
    '💡 Can you break this down step-by-step with practical examples for student learning?',
    '📚 What are the standard university textbook references for further reading on this?',
    '❓ What are the most common student mistakes or misconceptions on this topic?',
    '📋 Can you summarize this as bullet points suitable for lecture revision notes?',
  ]
}
