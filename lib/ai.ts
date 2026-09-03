import { GoogleGenAI } from '@google/genai'
import { INDIANA_TECH_SYSTEM_PROMPT } from './indiana-tech-kb'

const cleanEnv = (val?: string) => {
  if (!val) return ''
  return val.replace(/^["']|["',]+$/g, '').trim()
}

export interface MessageInput {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface StreamCallbacks {
  onChunk: (chunk: string) => void
  onDone: (fullText: string) => void
  onError: (error: Error) => void
}

function getIndianaTechOfflineAnswer(query: string): string {
  const q = query.toLowerCase().trim()

  // Out of scope check for offline fallback
  const isOutOfScope =
    q.includes('weather') ||
    q.includes('super bowl') ||
    q.includes('football champion') ||
    q.includes('python') ||
    q.includes('javascript') ||
    q.includes('write code') ||
    q.includes('programming') ||
    q.includes('capital of') ||
    q.includes('purdue') ||
    q.includes('harvard') ||
    q.includes('mit ') ||
    q.includes('stanford') ||
    q.includes('other university') ||
    q.includes('recipe') ||
    q.includes('poem') ||
    q.includes('joke')

  if (isOutOfScope) {
    return (
      `I am the **Indiana Tech Virtual Assistant**, designed exclusively to answer questions about **Indiana Tech** (academics, admissions, tuition, leadership, campus life, research & IRB, and programs).\n\n` +
      `❌ **I cannot answer questions or tasks outside of Indiana Tech.**\n\n` +
      `Please feel free to ask any question regarding Indiana Tech, or explore our official website at [indianatech.edu](https://www.indianatech.edu).`
    )
  }

  // 1. Specific Individual Person / Faculty Lookups
  if (q.includes('anne gull')) {
    return (
      `### 👤 Dr. Anne Gull\n\n` +
      `**Dr. Anne Gull** is the **Dean of the College of Arts and Sciences** and a **Professor of Chemistry** at Indiana Tech.\n\n` +
      `• **Role:** Dean, College of Arts and Sciences\n` +
      `• **Academic Title:** Professor of Chemistry\n` +
      `• **Institution:** Indiana Tech (Fort Wayne, IN)\n` +
      `• **Faculty Profile:** [Dr. Anne Gull Biography](https://academics.indianatech.edu/faculty-member/dr-anne-gull/)`
    )
  }

  if (q.includes('courtney shull')) {
    return (
      `### 👤 Dr. Courtney Shull\n\n` +
      `**Dr. Courtney Shull** is the **Associate Dean of the College of Arts and Sciences** and an **Associate Professor of Psychology** at Indiana Tech.\n\n` +
      `• **Role:** Associate Dean, College of Arts and Sciences\n` +
      `• **Academic Title:** Associate Professor of Psychology\n` +
      `• **Institution:** Indiana Tech\n` +
      `• **Faculty Profile:** [Dr. Courtney Shull Biography](https://academics.indianatech.edu/faculty-member/courtney-shull/)`
    )
  }

  if (q.includes('dawn anderson')) {
    return (
      `### 👤 Dr. Dawn Anderson\n\n` +
      `**Dr. Dawn Anderson** is the **Director of the Exercise and Sport Performance Laboratory** and a **Professor of Exercise Science** in the College of Arts and Sciences at Indiana Tech.\n\n` +
      `• **Faculty Profile:** [Dr. Dawn Anderson Biography](https://academics.indianatech.edu/faculty-member/dawn-anderson/)`
    )
  }

  if (q.includes('mark bauer')) {
    return (
      `### 👤 Dr. Mark Bauer\n\n` +
      `**Dr. Mark Bauer** is an **Assistant Professor of Physics** in the College of Arts and Sciences at Indiana Tech.\n\n` +
      `• **Faculty Profile:** [Dr. Mark Bauer Biography](https://academics.indianatech.edu/faculty-member/mark-bauer/)`
    )
  }

  if (q.includes('michael bechill')) {
    return (
      `### 👤 Dr. Michael Bechill\n\n` +
      `**Dr. Michael Bechill** is an **Associate Professor of Biology** and College of Arts & Sciences Representative on the Institutional Review Board (IRB) at Indiana Tech.\n\n` +
      `• **Faculty Profile:** [Dr. Michael Bechill Biography](https://academics.indianatech.edu/faculty-member/michael-bechill/)`
    )
  }

  if (q.includes('suzanne beyeler')) {
    return (
      `### 👤 Dr. Suzanne Beyeler\n\n` +
      `**Dr. Suzanne Beyeler** is an **Associate Professor of Biology**, **Biology Program Co-Lead**, and **Environmental Science Program Lead** at Indiana Tech.\n\n` +
      `• **Faculty Profile:** [Dr. Suzanne Beyeler Biography](https://academics.indianatech.edu/faculty-member/suzanne-beyeler/)`
    )
  }

  if (q.includes('justin boyce')) {
    return (
      `### 👤 Dr. Justin Boyce\n\n` +
      `**Dr. Justin Boyce** is a **Professor of Psychology** in the College of Arts and Sciences at Indiana Tech.\n\n` +
      `• **Faculty Profile:** [Dr. Justin Boyce Biography](https://academics.indianatech.edu/faculty-member/justin-boyce/)`
    )
  }

  if (q.includes('jonathan brownlee')) {
    return (
      `### 👤 Dr. Jonathan Brownlee\n\n` +
      `**Dr. Jonathan Brownlee** is an **Associate Professor of English and Humanities** in the College of Arts and Sciences at Indiana Tech.\n\n` +
      `• **Faculty Profile:** [Dr. Jonathan Brownlee Biography](https://academics.indianatech.edu/faculty-member/jonathan-brownlee/)`
    )
  }

  if (q.includes('alexander sinelnikov') || q.includes('sinelnikov')) {
    return (
      `### 👤 Dr. Alexander Sinelnikov\n\n` +
      `**Dr. Alexander Sinelnikov** is the **Chair of Biological and Physical Sciences**, **Program Lead for Forensic Science**, and an **Associate Professor of Biology and Forensic Science** at Indiana Tech.\n\n` +
      `• **Faculty Profile:** [Dr. Alexander Sinelnikov Biography](https://academics.indianatech.edu/faculty-member/dr-alexander-sinelnikov/)`
    )
  }

  if (q.includes('dominic lombardo') || q.includes('lombardo')) {
    return (
      `### 👤 Dominic Lombardo\n\n` +
      `**Dominic Lombardo** is the **Program Lead for Criminal Justice** and an **Associate Professor** in the College of Arts and Sciences at Indiana Tech.\n\n` +
      `• **Faculty Profile:** [Dominic Lombardo Biography](https://academics.indianatech.edu/faculty-member/dominic-lombardo/)`
    )
  }

  if (q.includes('eve-lynn clarke') || (q.includes('dean') && q.includes('business'))) {
    return (
      `### 👤 Dr. Eve-Lynn Clarke\n\n` +
      `**Dr. Eve-Lynn Clarke** is the **Dean of the College of Business** and an **Associate Professor of Business** at Indiana Tech.\n\n` +
      `• **Office:** Cunningham Business Center\n` +
      `• **Phone:** 260.287.0744\n` +
      `• **Email:** exclarke@indianatech.edu`
    )
  }

  if (q.includes('amie anderson') || (q.includes('academic affairs') && q.includes('vice president'))) {
    return (
      `### 👤 Dr. Amie Anderson\n\n` +
      `**Dr. Amie Anderson** is the **Vice President for Academic Affairs** at Indiana Tech.\n\n` +
      `• **Office:** Snyder Academic Center\n` +
      `• **Phone:** 260.399.2818\n` +
      `• **Email:** akanderson@indianatech.edu`
    )
  }

  if (q.includes('bottomley')) {
    return (
      `### 👤 Dr. Kevin Bottomley\n\n` +
      `**Kevin Bottomley, PhD** is an **Assistant Professor of PhD in Global Leadership** and serves as the **Chair of the Institutional Review Board (IRB)** at Indiana Tech.\n\n` +
      `• **Faculty Profile:** [Dr. Kevin Bottomley Biography](https://academics.indianatech.edu/faculty/full-time/dr-kevin-bottomley/)`
    )
  }

  // 2. General Leadership & Faculty Directory
  if (
    q.includes('arts and sciences') ||
    q.includes('coas') ||
    q.includes('faculty') ||
    q.includes('leadership') ||
    q.includes('staff') ||
    q.includes('academic affairs') ||
    q.includes('dean') ||
    q.includes('trent grable') ||
    q.includes('robert turick') ||
    q.includes('mary beth graham') ||
    q.includes('angie mosier') ||
    q.includes('amy dumford')
  ) {
    return (
      `### 👥 Indiana Tech Academic Leadership & Faculty Directory\n\n` +
      `#### University Academic Leadership:\n` +
      `• **Dr. Amie Anderson** — Vice President for Academic Affairs (📞 260.399.2818 | ✉️ akanderson@indianatech.edu | Snyder Academic Center)\n` +
      `• **Mary Beth Graham** — Director of Online Learning (📞 260.209.0390 | ✉️ MGraham@indianatech.edu | Online)\n` +
      `• **Angie Mosier** — Executive Administrative Assistant (📞 260.244.4890 | ✉️ ADMosier@indianatech.edu | Snyder Academic Center 149)\n\n` +
      `#### College of Arts and Sciences Leadership & Faculty:\n` +
      `• **Dr. Anne Gull** — Dean of College of Arts and Sciences, Professor of Chemistry\n` +
      `• **Dr. Courtney Shull** — Associate Dean, College of Arts and Sciences, Associate Professor of Psychology\n` +
      `• **Dr. Alexander Sinelnikov** — Chair of Biological and Physical Sciences, Program Lead for Forensic Science\n` +
      `• **Dominic Lombardo** — Program Lead for Criminal Justice, Associate Professor\n` +
      `• **Dr. Dawn Anderson** — Director of Exercise and Sport Performance Laboratory, Professor of Exercise Science\n` +
      `• **Dr. Suzanne Beyeler** — Associate Professor of Biology, Environmental Science Program Lead\n` +
      `• **Dr. Megan Patton** — Director of Health Information Management & HIT\n` +
      `• **Dr. Alicia Wireman** — Program Lead and Associate Professor of Communication\n` +
      `• **Dr. Justin Boyce** & **Dr. Brandy Everett** — Psychology Faculty\n` +
      `• **Dr. Michael Bechill**, **Dr. Sharon Drapala**, **Amy Shank** — Biology Faculty\n` +
      `• **Dr. Mark Bauer** — Assistant Professor of Physics | **Dr. Satya Sadhu** — Assistant Professor of Chemistry\n` +
      `• **Dr. Susan McGrade**, **Dr. Cortney Robbins**, **Dr. Carrie Rodesiler**, **Steven Malloris** — English & Humanities\n\n` +
      `#### College of Business Leadership:\n` +
      `• **Dr. Eve-Lynn Clarke** — Dean, College of Business (📞 260.287.0744 | ✉️ exclarke@indianatech.edu | Cunningham Business Center)\n` +
      `• **Dr. Trent Grable** — Acting Associate Dean, Graduate & Online (📞 260.344.4830 | ✉️ tlgrable01@indianatech.edu)\n` +
      `• **Dr. Robert Turick** — Acting Associate Dean, Undergraduate Programs (📞 260.344.4814 | ✉️ rmturick@indianatech.edu)\n` +
      `• **Amy Dumford** — Administrative Assistant, College of Business (📞 260.344.4821 | ✉️ aldumford@indianatech.edu)`
    )
  }

  // 2. IRB (Institutional Review Board) & Research Policy
  if (
    q.includes('irb member') ||
    q.includes('irb chair') ||
    q.includes('chair of') ||
    (q.includes('irb') && (q.includes('member') || q.includes('who') || q.includes('chair') || q.includes('roster') || q.includes('people') || q.includes('team'))) ||
    q.includes('bottomley') ||
    q.includes('onsorynezhad') ||
    q.includes('bechill') ||
    q.includes('sadhu') ||
    q.includes('kindred') ||
    q.includes('erik bean') ||
    q.includes('wireman') ||
    q.includes('crystal karn') ||
    q.includes('lisa morgan')
  ) {
    return (
      `### 👥 Indiana Tech Institutional Review Board (IRB) Members\n\n` +
      `• **Kevin Bottomley, PhD** — *Chair of IRB*, Assistant Professor of PhD in Global Leadership (Ph.D. Program Representative)\n` +
      `• **Saeed Onsorynezhad, PhD** — Assistant Professor of Mechatronics & Robotics Engineering (*Talwar College of Engineering & CS Representative*)\n` +
      `• **Satya Sadhu** — Assistant Professor of Chemistry (*College of Arts and Sciences Representative*)\n` +
      `• **Michael Bechill, PhD** — Associate Professor of Biology (*College of Arts & Sciences Representative*)\n` +
      `• **Lisa Kindred, PhD** — Professor of Business (*College of Business Representative*)\n` +
      `• **Erik Bean, EdD** — Professor of Practice (*College of Business Representative*)\n` +
      `• **Dr. Alicia Wireman** — Associate Professor of Communication (*General Representative*)\n` +
      `• **Dr. Crystal Karn** — Associate Professor of Business (*General Representative*)\n` +
      `• **Lisa Morgan, BSN, RN, CNRN** — Educator Professional Development & Clinical Care, Parkview Health (*External Representative*)\n\n` +
      `✉️ **Contact IRB:** \`IRB@IndianaTech.edu\``
    )
  }

  if (
    q.includes('irb') ||
    q.includes('institutional review board') ||
    q.includes('human subject') ||
    q.includes('citi') ||
    q.includes('informed consent') ||
    q.includes('assent') ||
    q.includes('minimal risk') ||
    q.includes('deception') ||
    q.includes('post-approval') ||
    q.includes('adverse event') ||
    q.includes('data retention') ||
    q.includes('data handling')
  ) {
    return (
      `### 🔬 Indiana Tech Institutional Review Board (IRB) & Research Policies\n\n` +
      `• **Purpose of IRB:** Ensures all university-affiliated research involving human subjects includes necessary safeguards in compliance with federal regulations **45 CFR 46** and **21 CFR**.\n\n` +
      `• **Who Needs Approval:** Any research involving humans, human tissue, or surveys conducted by university faculty, staff, or students, on campus premises, or using university equipment/facilities.\n\n` +
      `• **Who Submits:**\n` +
      `  - *Undergrad & Master's Students:* Submit as co-investigators; supervising faculty instructor must sign as the **Principal Investigator (PI)**.\n` +
      `  - *Doctoral Students:* Submit as **Principal Investigator (PI)** for dissertations.\n\n` +
      `• **IRB Leadership:** **Kevin Bottomley, PhD** (Chair of IRB, Assistant Professor of PhD in Global Leadership).\n\n` +
      `• **Review Types & Turnaround:**\n` +
      `  - *Exempt & Expedited:* Reviewed by a 3-member panel (requires unanimous approval).\n` +
      `  - *Full Board:* Reviewed by the entire IRB with quorum and majority vote.\n` +
      `  - *Timeline:* Review takes up to **20 business days** (active during holidays & breaks).\n\n` +
      `• **Key Compliance Rules:**\n` +
      `  - **CITI Training:** Mandatory certification since Jan 1, 2020 via *Let Me In* apps (*Biomedical* or *Social-Behavioral* track).\n` +
      `  - **12-Month Approval:** Approvals expire in 1 year; submit *Post-Approval Change Form* at least 1 month prior to extend.\n` +
      `  - **Adverse Events:** Report within **48 hours** using the *Adverse or Unexpected Event Report*.\n` +
      `  - **Data Retention:** Retain all research records for at least **3 years** after study discontinuation.\n\n` +
      `✉️ **Contact IRB:** \`IRB@IndianaTech.edu\``
    )
  }

  // 3. President
  if (q.includes('president') || q.includes('who leads') || q.includes('chancellor') || q.includes('einolf')) {
    return (
      `**Dr. Karl W. Einolf** has served as the president of Indiana Tech since July 2017.\n\n` +
      `Under his leadership, Indiana Tech has expanded career-focused STEM, business, online degrees (CPS), and invested heavily in modern campus facilities in Fort Wayne.`
    )
  }

  // 4. Location & Campus
  if (q.includes('where') || q.includes('location') || q.includes('address') || q.includes('campus')) {
    return (
      `**Indiana Tech Main Campus Location:**\n` +
      `📍 **Address:** 1600 E. Washington Blvd., Fort Wayne, Indiana 46803, USA.\n\n` +
      `The university spans a vibrant 45-acre campus in Fort Wayne, with additional regional and enrollment centers in Indianapolis, Elkhart, Jeffersonville, Mishawaka, Louisville (KY), and the Chicago area.`
    )
  }

  // 5. Tuition & Financial Aid
  if (q.includes('tuition') || q.includes('cost') || q.includes('fee') || q.includes('price') || q.includes('scholarship')) {
    return (
      `**Indiana Tech Tuition & Financial Aid Overview:**\n\n` +
      `• **Traditional Undergraduate Tuition:** ~$16,436 per semester (12–18 credit hours) / ~$32,872 per academic year.\n` +
      `• **Online & CPS Tuition:** Charged per credit hour (~$415–$530/credit depending on degree level).\n` +
      `• **Scholarships:** Over 90% of traditional undergrads receive institutional aid. International merit scholarships offer up to **$18,000/year**, plus two full-tuition Presidential scholarships.\n\n` +
      `For detailed estimates, visit [indianatech.edu/tuition](https://www.indianatech.edu).`
    )
  }

  // 6. International Admissions & I-20
  if (q.includes('international') || q.includes('toefl') || q.includes('ielts') || q.includes('visa') || q.includes('i-20')) {
    return (
      `**International Admissions at Indiana Tech:**\n\n` +
      `• **English Proficiency Requirements:** TOEFL iBT: 70 | IELTS: 6.0 | Duolingo DET: 105 | PTE: 51\n` +
      `• **Admissions Process:** Free online application on rolling admission basis (no application fee).\n` +
      `• **Visa / I-20:** Once accepted and financial guarantee documents are verified, an official Form I-20 is issued for your F-1 student visa.\n` +
      `• **Merit Scholarships:** Eligible international students can receive up to $18,000/year in merit scholarships.\n\n` +
      `Apply online or contact: \`international@indianatech.edu\`.`
    )
  }

  // 7. Academic Programs & PhD
  if (
    q.includes('program') ||
    q.includes('major') ||
    q.includes('degree') ||
    q.includes('course') ||
    q.includes('engineering') ||
    q.includes('business') ||
    q.includes('phd') ||
    q.includes('global leadership')
  ) {
    return (
      `**Indiana Tech Academic Colleges & Programs:**\n\n` +
      `1. **Talwar College of Engineering & Computer Sciences:** Computer Science, Cybersecurity, Biomedical Engineering, Electrical Engineering, Mechanical Engineering, Software Engineering, Information Technology.\n` +
      `2. **College of Business:** Accounting, Business Administration (Management, Marketing, HR, Sports Management), Fashion Marketing & Management, Organizational Leadership.\n` +
      `3. **College of Arts & Sciences:** Criminal Justice, Psychology, Forensic Science, Digital Media, Communication, Pre-Law, Pre-Health.\n` +
      `4. **PhD Program:** Ph.D. in Global Leadership (Organizational Leadership and Higher Education Administration tracks).\n` +
      `5. **College of Professional Studies (CPS):** 100% online and accelerated degrees for undergraduate, master's (MBA, MS Cybersecurity, MS Management).\n\n` +
      `Explore all majors at [indianatech.edu/academics](https://www.indianatech.edu).`
    )
  }

  return (
    `**Indiana Tech (Indiana Institute of Technology)**\n\n` +
    `I can help you with official information from [indianatech.edu](https://www.indianatech.edu) regarding:\n` +
    `• **Academic Majors & Colleges** (Engineering, Computer Science, Business, Arts & Sciences, Ph.D.)\n` +
    `• **Leadership & Staff Contacts** (Academic Affairs, Deans, Program Directors)\n` +
    `• **IRB Human Subjects Research Policies & CITI Training**\n` +
    `• **Tuition, Costs & Scholarships**\n` +
    `• **Admissions & International Requirements** (TOEFL/IELTS, Form I-20)\n` +
    `• **Campus Life, President & NAIA Warriors Athletics**\n\n` +
    `Please ask any specific question about Indiana Tech!`
  )
}

export async function streamGeminiChat(
  message: string,
  history: MessageInput[] = [],
  callbacks: StreamCallbacks
) {
  const apiKey =
    cleanEnv(process.env.GEMINI_API_KEY) ||
    cleanEnv(process.env.AI_API_KEY) ||
    cleanEnv(process.env.NEXT_PUBLIC_GEMINI_API_KEY) ||
    ''

  const candidateModels = [
    'gemini-2.0-flash',
    'gemini-1.5-flash',
    'gemini-2.0-flash-lite-preview-02-05',
    'gemini-1.5-pro',
    'gemini-2.5-flash',
    'gemini-2.5-pro',
  ]

  const formattedContents: any[] = [
    ...history
      .filter((h) => (h.role === 'user' || h.role === 'assistant') && h.content?.trim() !== '')
      .map((h) => ({
        role: h.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: h.content }],
      })),
    {
      role: 'user',
      parts: [{ text: message }],
    },
  ]

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey })

      for (const modelName of candidateModels) {
        try {
          const stream = await ai.models.generateContentStream({
            model: modelName,
            contents: formattedContents,
            config: {
              systemInstruction: INDIANA_TECH_SYSTEM_PROMPT,
              temperature: 0.2, // low temperature for high precision and adherence to strict guardrails
            },
          })

          let fullText = ''
          for await (const chunk of stream) {
            const chunkText = chunk.text || ''
            if (chunkText) {
              fullText += chunkText
              callbacks.onChunk(chunkText)
            }
          }

          if (fullText.trim()) {
            callbacks.onDone(fullText)
            return
          }
        } catch (modelErr: any) {
          console.warn(`Model ${modelName} notice:`, modelErr?.message?.substring(0, 120))
        }
      }
    } catch (err: any) {
      console.error('Google GenAI client initialization error:', err)
    }
  }

  // Graceful fallback responding strictly within Indiana Tech scope
  const fallbackAnswer = getIndianaTechOfflineAnswer(message)
  const words = fallbackAnswer.split(' ')
  let accumulated = ''
  for (let i = 0; i < words.length; i++) {
    const chunk = (i === 0 ? '' : ' ') + words[i]
    accumulated += chunk
    callbacks.onChunk(chunk)
    await new Promise((resolve) => setTimeout(resolve, 20))
  }
  callbacks.onDone(accumulated)
}
