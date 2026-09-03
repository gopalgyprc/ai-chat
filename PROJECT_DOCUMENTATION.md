# 🎓 Indiana Tech Virtual Assistant — Project Documentation & Presentation Guide

---

## 📌 1. Project Overview

* **Project Title**: Indiana Tech Virtual Assistant & Interactive Academic AI Workspace
* **Project Type**: Full-Stack AI Web Application with Real-Time Streaming & Knowledge Grounding
* **Target Institution**: [Indiana Tech (Indiana Institute of Technology)](https://www.indianatech.edu/)
* **Primary Objective**: Provide prospective students, international applicants, current students, faculty, and parents with 24/7 instant, accurate, and hallucination-free answers regarding admissions, degree programs, tuition costs, scholarships, campus leadership, faculty, and IRB research policies.

---

## 🛠️ 2. Technology Stack Breakdown

### **A. Frontend Layer**
| Technology | Version / Tool | Purpose in Project |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Server-side rendering (SSR), client-side interactivity, fast routing, and nested layout architecture. |
| **UI Library** | **React 19** | Component-driven UI, optimistic UI updates, transitions, and state management. |
| **Language** | **TypeScript 5.7** | End-to-end type safety, eliminating runtime errors and ensuring maintainable code. |
| **Styling** | **Tailwind CSS v4** | Modern utility-first styling with responsive layouts, smooth micro-animations, and glassmorphism. |
| **Icons** | **Lucide React** | Clean, accessible vector icons for all buttons, navigation items, and feature cards. |
| **Markdown Rendering** | **React Markdown** | Formats AI responses into structured typography with headings, bold titles, bullet points, and clickable links. |

---

### **B. Backend & Serverless API Layer**
| Component | Implementation | Description |
| :--- | :--- | :--- |
| **API Endpoints** | Next.js Route Handlers (`/api/chat/route.ts`) | Server-side handler processing POST requests, orchestrating Google GenAI requests, and streaming responses back. |
| **Streaming Protocol** | **NDJSON / Server-Sent Streams** | Chunks token streams in real-time (`{"type":"chunk","text":"..."}\n`) so answers appear character-by-character without waiting for complete generation. |
| **Security & Env** | Node.js Server Runtime | Keeps Google Gemini API keys and Firebase private credentials strictly on the server, never exposing keys to the client browser. |

---

### **C. AI & Large Language Model (LLM) Layer**
| Technology | Details | Purpose |
| :--- | :--- | :--- |
| **Official SDK** | `@google/genai` (v2.19.0) | Official Google SDK for high-performance generative streaming and multi-turn conversations. |
| **AI Models** | `gemini-2.0-flash`, `gemini-1.5-flash`, `gemini-1.5-pro` | Ultra-fast token latency (<25ms) and deep context window for complex academic inquiries. |
| **Guardrail Engine** | Custom System Prompt + Knowledge Base (`lib/indiana-tech-kb.ts`) | Forces strict temperature `0.2` and hard boundaries to ensure the AI **only** answers Indiana Tech questions and politely refuses out-of-scope queries (general coding, sports, weather, other colleges). |
| **Offline Fallback** | Intelligent Keyword Matcher (`lib/ai.ts`) | Provides reliable answers even during network disruption or API rate limits. |

---

### **D. Database, Authentication & Persistence**
| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Cloud Database** | **Google Firebase Cloud Firestore** | NoSQL document database storing chat collections under `/users/{userId}/conversations/{conversationId}/messages/{messageId}`. |
| **Local Cache** | **Browser LocalStorage** | **Local-First Architecture**: Writes messages instantly (0ms) so user never experiences lag or lost history on spotty Wi-Fi. |
| **Authentication** | **Firebase Auth & Demo Mode** | Supports **Google OAuth 2.0 Sign-In** for authenticated users and **1-Click Demo Guest Access** for quick testing. |

---

## 📡 3. APIs Used in the Project

### **1. Google Gemini AI API (`@google/genai`)**
* **Method**: `ai.models.generateContentStream()`
* **Parameters Sent**:
  * `model`: `gemini-2.0-flash`
  * `contents`: Multi-turn conversational history array (`role: 'user' | 'model'`)
  * `config.systemInstruction`: Strict Indiana Tech Knowledge Base & refusal guardrails
  * `config.temperature`: `0.2` (low temperature for factual accuracy)
* **Response**: Asynchronous stream of text chunks.

### **2. Firebase Cloud Firestore & Auth SDK (`firebase/firestore`, `firebase/auth`)**
* **Methods**:
  * `signInWithPopup(auth, googleProvider)` for Google Login
  * `collection()`, `doc()`, `getDocs()`, `setDoc()`, `deleteDoc()` for message and conversation management
  * Synchronous synchronization between browser state and Firestore cloud collections.

### **3. Internal Next.js Chat API (`/api/chat`)**
* **Method**: `POST /api/chat`
* **Request Body**:
  ```json
  {
    "message": "Who is Dr. Anne Gull?",
    "history": [
      { "role": "user", "content": "What is Indiana Tech?" },
      { "role": "assistant", "content": "Indiana Tech is a private university in Fort Wayne, IN..." }
    ]
  }
  ```
* **Streaming Response Format**:
  ```json
  {"type":"chunk","text":"Dr. Anne Gull"}
  {"type":"chunk","text":" is the Dean of the College of Arts and Sciences..."}
  {"type":"done","fullText":"### 👤 Dr. Anne Gull\n\n**Dr. Anne Gull** is the **Dean of the College of Arts and Sciences**..."}
  ```

---

## 🔄 4. Project Architecture & Data Flow

```mermaid
flowchart TD
    A[Student / User] -->|Enters Query| B[Chat UI / ChatInput.tsx]
    B -->|Writes Immediately (0ms)| C[Local Storage Cache]
    B -->|HTTP POST Request| D[Next.js API Route /api/chat]
    D -->|Injects System Prompt & Knowledge Base| E[Google GenAI Client]
    E -->|Streams Tokens| F[Gemini 2.0 Flash Model]
    F -->|NDJSON Chunks| D
    D -->|Real-time Token Stream| B
    B -->|Renders Formatted Markdown| A
    B -->|Syncs in Background| G[Firebase Cloud Firestore]
```

---

## 📁 5. Directory & File Structure

```
├── app/
│   ├── api/chat/route.ts       # Backend streaming route handler for Google GenAI
│   ├── about/page.tsx          # About Indiana Tech, leadership, history & mission
│   ├── contact/page.tsx        # Official admissions & department contacts
│   ├── login/page.tsx          # Google Sign-in & Demo Guest login
│   ├── chat/page.tsx           # Full-featured chat workspace page
│   ├── globals.css             # Tailwind v4 theme styles, dark/light mode tokens
│   └── layout.tsx              # Root layout, fonts, AuthProvider & metadata
├── components/
│   ├── landing/                # Complete Indiana Tech landing page components
│   │   ├── Header.tsx          # Navigation bar with branding & direct links
│   │   ├── Hero.tsx            # Hero headline, badge & primary CTAs
│   │   ├── ProductPreview.tsx  # Interactive live mock chat showcase
│   │   ├── Features.tsx        # 4 college cards & scholarship highlights
│   │   ├── PromptShowcase.tsx  # 4 tabbed interactive student prompts
│   │   ├── HowItWorks.tsx      # 3-step student guidance workflow
│   │   ├── WhyAIchat.tsx       # Benefits & official knowledge accuracy
│   │   ├── FaqSection.tsx      # Accordion with authentic university FAQs
│   │   ├── FinalCta.tsx        # Bottom call-to-action banner
│   │   └── Footer.tsx          # University links & copyright
│   ├── chat/                   # Interactive chat workspace components
│   │   ├── ChatHeader.tsx      # Conversation title, theme toggle, share
│   │   ├── ChatFeed.tsx        # Scrollable stream of user & AI messages
│   │   ├── ChatInput.tsx       # Prompt textarea, suggestion chips, send button
│   │   ├── ChatSidebar.tsx     # Date-grouped history (Today, 7 Days, Older)
│   │   └── ChatWelcome.tsx     # Starter cards (Academics, Admissions, Aid)
├── lib/
│   ├── indiana-tech-kb.ts      # Comprehensive verified knowledge base & strict prompt
│   ├── ai.ts                   # Gemini streaming client & intelligent offline fallback
│   ├── suggestions.ts          # Dynamic contextual question chip generator
│   ├── firestore.ts            # Dual-mode LocalStorage + Cloud Firestore persistence
│   └── auth.ts                 # Firebase authentication helper
└── PROJECT_DOCUMENTATION.md    # This complete documentation file
```

---

## ❓ 6. College Viva / Presentation Q&A (Top Questions & Answers)

### **Q1: What is the primary purpose and scope of this project?**
> **Answer**: The project is a dedicated **Virtual Assistant and AI Workspace for Indiana Tech**. It is engineered to provide prospective and enrolled students, international applicants, and parents with 24/7 verified answers regarding admissions, degrees, tuition, scholarships, campus leadership, faculty, and IRB research compliance. Crucially, it features strict guardrails to prevent AI hallucinations and refuses to answer out-of-scope non-university topics.

---

### **Q2: What is the technology stack used, and why did you choose it?**
> **Answer**:
> * **Next.js 16 (App Router) + React 19**: Provides modern server-side rendering, fast page loads, nested layouts, and serverless route handlers.
> * **TypeScript**: Ensures type safety across all database models, message payloads, and API interfaces.
> * **Tailwind CSS v4**: Enables pixel-perfect dark/light themes, modern typography, and glassmorphism styling.
> * **Google GenAI SDK (`@google/genai`)**: Connects to Google's state-of-the-art **Gemini 2.0 Flash** model for sub-25ms token streaming.
> * **Firebase (Firestore + Auth)**: Provides enterprise-grade NoSQL cloud storage and Google OAuth sign-in.

---

### **Q3: Which AI model is used, and how does real-time token streaming work?**
> **Answer**: We utilize Google's **`gemini-2.0-flash`** model (with fallback to `gemini-1.5-flash`). Instead of waiting several seconds for the full response to generate, our backend API `/api/chat` uses **NDJSON / Server-Sent Events (SSE)**. As Gemini produces each token, it is immediately streamed across the HTTP connection and rendered in real-time in the user interface.

---

### **Q4: How do you prevent AI hallucinations and enforce that the AI only answers Indiana Tech questions?**
> **Answer**: We enforce a 3-layer guardrail architecture:
> 1. **System Prompt Restriction (`lib/indiana-tech-kb.ts`)**: Injected into every Gemini request with temperature set to `0.2` (low temperature ensures strict deterministic behavior).
> 2. **Verified Knowledge Base**: Includes structured data on all colleges (Talwar Engineering, Business, Arts & Sciences, CPS), tuition (~$16,436/semester), international TOEFL/IELTS requirements, and full IRB research policies.
> 3. **Explicit Refusal Rules**: If a query is outside Indiana Tech (e.g. general coding, weather, world trivia), the model is instructed to output a polite refusal and redirect the user back to university resources.

---

### **Q5: Which database is used and how is conversation history persisted?**
> **Answer**: We use a **Dual-Mode Local-First Persistence Architecture**:
> * **Local Storage**: Every user prompt and AI response is saved synchronously to `localStorage` in 0ms. This prevents any UI flicker or data loss even on unstable Wi-Fi.
> * **Cloud Firestore**: If the user is signed in with their Google account, conversations are automatically synced in the background to Firebase Firestore (`/users/{userId}/conversations/{convId}/messages/{msgId}`).

---

### **Q6: How does user authentication work?**
> **Answer**: We use **Firebase Authentication**:
> * **Google OAuth 2.0**: Users can securely sign in with one click using their Google account via `signInWithPopup`.
> * **Demo / Guest Mode**: For evaluation or fast testing, users can log in instantly with a pre-configured guest session without needing credentials.

---

### **Q7: What happens if the user's internet is slow or the Gemini API fails?**
> **Answer**: In `lib/ai.ts`, we implemented an **Intelligent Offline Fallback Engine**. If the API key is missing or the external API call fails, the application performs local keyword matching against the Indiana Tech knowledge base and streams verified answers locally without breaking the user experience.

---

### **Q8: How does the Dual-Theme (Light Mode / Dark Mode) work?**
> **Answer**: The application includes custom CSS variables and Tailwind classes. Theme state is managed via `localStorage` and HTML classes (`dark` / `light`), allowing instant toggling via the navbar icon without page reloads or layout shifts.

---

### **Q9: How are past conversations organized in the sidebar?**
> **Answer**: The sidebar automatically sorts conversations into logical date groups:
> * **Today**
> * **Previous 7 Days**
> * **Previous 30 Days**
> Users can create new chats, switch between past inquiries, rename sessions, or delete conversations with a single click.

---

### **Q10: What are potential future enhancements for this project?**
> **Answer**:
> 1. **Voice AI Integration**: Voice-to-text input and natural text-to-speech output for accessible student navigation.
> 2. **Multilingual Live Translation**: Automatic real-time translation into 20+ languages for international prospective students.
> 3. **Student Portal Integration**: Direct single-sign-on (SSO) with Indiana Tech student accounts to check course schedules, financial aid balances, and degree audits.

---

## 🚀 7. How to Run the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
http://localhost:3000
```
