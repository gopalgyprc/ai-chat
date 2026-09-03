
export function getSuggestedQuestions(userMessage?: string, assistantMessage?: string): string[] {
  const combined = `${userMessage || ''} ${assistantMessage || ''}`.toLowerCase()

  if (
    combined.includes('hello') ||
    combined.includes('hi there') ||
    combined.includes('hey') ||
    combined.includes('how can i help') ||
    (userMessage && userMessage.trim().length <= 4)
  ) {
    return [
      '🎓 What undergraduate and graduate programs does Indiana Tech offer?',
      '💵 What is the tuition cost and what scholarships are available?',
      '🌍 How can international students apply and what are the English requirements?',
      '📍 Where is Indiana Tech located and what is the campus like?',
      '👤 Who is the president of Indiana Tech?',
    ]
  }

  if (
    combined.includes('international') ||
    combined.includes('toefl') ||
    combined.includes('ielts') ||
    combined.includes('duolingo') ||
    combined.includes('visa') ||
    combined.includes('i-20') ||
    combined.includes('country')
  ) {
    return [
      '📜 What are the exact TOEFL, IELTS, and Duolingo score requirements?',
      '💰 What international merit scholarships does Indiana Tech provide?',
      '📋 What documents are needed to receive an official Form I-20?',
      '🛂 How does the rolling admissions timeline work for international applicants?',
      '✉️ How do I contact the Indiana Tech International Admissions team?',
    ]
  }

  if (
    combined.includes('tuition') ||
    combined.includes('cost') ||
    combined.includes('scholarship') ||
    combined.includes('financial aid') ||
    combined.includes('fee') ||
    combined.includes('price') ||
    combined.includes('afford')
  ) {
    return [
      '🎓 What are the GPA requirements for Indiana Tech merit scholarships?',
      '💻 What is the tuition rate for online degrees through College of Professional Studies?',
      '🏠 What are the on-campus housing and meal plan costs in Fort Wayne?',
      '📊 Does Indiana Tech offer a Net Price Calculator for prospective students?',
      '🏆 Are there full-tuition Presidential scholarships available?',
    ]
  }

  if (
    combined.includes('program') ||
    combined.includes('major') ||
    combined.includes('degree') ||
    combined.includes('engineering') ||
    combined.includes('computer science') ||
    combined.includes('business') ||
    combined.includes('cybersecurity') ||
    combined.includes('phd')
  ) {
    return [
      '⚙️ What engineering degrees are offered in the Talwar College?',
      '💼 Tell me about the MBA and business administration concentrations',
      '🔒 What coursework is included in the B.S. / M.S. in Cybersecurity?',
      '🎓 How does the Ph.D. in Global Leadership doctoral program work?',
      '🌐 What degrees are 100% online through the College of Professional Studies?',
    ]
  }

  if (
    combined.includes('admission') ||
    combined.includes('apply') ||
    combined.includes('requirement') ||
    combined.includes('deadline') ||
    combined.includes('gpa') ||
    combined.includes('transfer')
  ) {
    return [
      '📝 Is there an application fee to apply to Indiana Tech?',
      '📅 How does Indiana Tech\'s rolling admission process work?',
      '📊 Are SAT / ACT scores mandatory for undergraduate admissions?',
      '🔄 How can transfer students transfer credits into Indiana Tech?',
      '🎯 What is the minimum GPA required for graduate degree programs?',
    ]
  }

  if (
    combined.includes('leadership') ||
    combined.includes('staff') ||
    combined.includes('dean') ||
    combined.includes('anderson') ||
    combined.includes('clarke') ||
    combined.includes('president') ||
    combined.includes('einolf')
  ) {
    return [
      '👤 Who is the Vice President for Academic Affairs and how do I contact them?',
      '💼 Who is the Dean of the College of Business?',
      '🌐 Who directs International Student Academic Engagement & Online Learning?',
      '🏛️ Who is President Dr. Karl W. Einolf and what is his background?',
      '✉️ How can I contact Indiana Tech academic department offices?',
    ]
  }

  if (
    combined.includes('irb') ||
    combined.includes('institutional review board') ||
    combined.includes('research') ||
    combined.includes('citi') ||
    combined.includes('consent') ||
    combined.includes('assent') ||
    combined.includes('protocol')
  ) {
    return [
      '🔬 Why does Indiana Tech require IRB approval for research?',
      '📋 Who submits the IRB application for undergraduate vs doctoral research?',
      '⏱️ How long does the IRB review process take and what is the turnaround?',
      '🎓 What are the mandatory CITI certification training requirements?',
      '📁 What is Indiana Tech’s data handling and 3-year record retention policy?',
    ]
  }

  if (
    combined.includes('campus') ||
    combined.includes('athletics') ||
    combined.includes('warrior') ||
    combined.includes('sport') ||
    combined.includes('housing') ||
    combined.includes('fort wayne') ||
    combined.includes('life')
  ) {
    return [
      '⚔️ What NAIA athletic teams compete for the Indiana Tech Warriors?',
      '🦁 What is Indiana Tech\'s mascot and athletic conference?',
      '🏢 What facilities and labs are available on the Fort Wayne campus?',
      '🏘️ What residence halls and housing options are available for students?',
      '📍 Where are Indiana Tech\'s regional classroom centers located?',
    ]
  }

  return [
    '🎓 What degree programs does Indiana Tech offer?',
    '💵 What is the cost of tuition and financial aid options?',
    '🌍 How do international admissions and I-20 issuance work?',
    '📍 Tell me about Indiana Tech\'s main campus in Fort Wayne',
    '📝 How do I submit a free online application to Indiana Tech?',
  ]
}

