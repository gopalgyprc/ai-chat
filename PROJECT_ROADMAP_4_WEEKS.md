# 🏛️ Indiana Tech AI Virtual Assistant — 4-Week Project Roadmap & Client Milestones

This document breaks down the end-to-end development of the **Indiana Tech AI Chat Assistant** into **4 distinct weekly milestones**. Each week represents a self-contained, demo-ready deliverable designed to show tangible client progress.

---

```
  ┌──────────────────────────┐      ┌──────────────────────────┐
  │   WEEK 1: FOUNDATION     │      │   WEEK 2: AI & KB CORE   │
  │ • Next.js & Tailwind UI  │ ───► │ • Gemini 3.6 Integration │
  │ • Landing Page (10 Sec.) │      │ • Strict Guardrails      │
  │ • Google & Demo Auth     │      │ • NDJSON Stream API      │
  └──────────────────────────┘      └──────────────────────────┘
                │                                 │
                ▼                                 ▼
  ┌──────────────────────────┐      ┌──────────────────────────┐
  │  WEEK 3: CHAT WORKSPACE  │      │   WEEK 4: ADVANCED & PRO │
  │ • Interactive Chat UI    │ ───► │ • Voice & Audio TTS      │
  │ • Local + Firestore Sync │      │ • Tuition Estimator      │
  │ • Pinned & Search Chats  │      │ • Academic PDF Export    │
  └──────────────────────────┘      └──────────────────────────┘
```

---

## 📅 Week 1: Foundation, UI/UX Design System & Authentication

### 🎯 Objective:
Establish the modern web architecture, responsive branding, landing showcase, and user authentication system.

### 🛠️ What Was Built:
1. **Next.js 16 + React 19 + Tailwind CSS v4 Setup:**
   - Dark/Light mode theme system with smooth CSS variable transitions.
   - Poppins modern typography and glassmorphism styling.
2. **Comprehensive Landing Page (10 Sections):**
   - **Header:** Sticky navigation with university logo and quick access CTA.
   - **Hero Section:** Value proposition with badge animations and quick start prompts.
   - **Product Preview:** Interactive visual preview of the virtual assistant interface.
   - **Features & Capabilities:** Highlights on academics, tuition, international admissions, and research.
   - **Prompt Showcase:** Categorized starter prompts for prospective & current students.
   - **How It Works:** 3-step workflow diagram.
   - **Why Indiana Tech AI:** Value comparison vs. general-purpose AI.
   - **Full-Width FAQ Accordion:** Interactive FAQ covering tuition, application fees, admissions, and athletic programs.
   - **Final CTA & Footer:** Quick access buttons and university links.
3. **Authentication Layer:**
   - Google Sign-In OAuth 2.0 via Firebase Auth.
   - 1-Click Guest Demo user (`Alex Rivera`) for zero-friction client evaluation.
   - Client session observer in [`components/auth/AuthProvider.tsx`](file:///n:/gopal-gyprc/alchat/components/auth/AuthProvider.tsx).

### 🎬 Client Demo (Week 1 Deliverable):
* Client visits `http://localhost:3000/`.
* Can explore the full Indiana Tech landing page on both desktop and mobile.
* Can toggle Dark/Light mode.
* Can click "Try Indiana Tech AI" and log in instantly with 1-click Demo Guest or Google Sign-In.

---

## 📅 Week 2: AI Intelligence, System Prompt Grounding & Streaming API

### 🎯 Objective:
Build the live AI backend, connect Google GenAI SDK, implement university grounding knowledge, and enforce strict out-of-scope refusal guardrails.

### 🛠️ What Was Built:
1. **Serverless Streaming Route Handler (`app/api/chat/route.ts`):**
   - Low-latency `application/x-ndjson` chunked stream pipeline.
   - Formats conversation history and transmits chunks in real-time (`{"type":"chunk", "text":"..."}`).
2. **Google GenAI Integration (`lib/ai.ts`):**
   - Live integration with Google's **`gemini-3.6-flash`** and **`gemini-3.1-pro`** models.
   - Configured with `temperature: 0.2` for precise factual adherence and zero hallucination.
3. **Official Indiana Tech Grounding Knowledge Base (`lib/indiana-tech-kb.ts`):**
   - Official university structure (Colleges of Engineering & CS, Business, Arts & Sciences, CPS Online, Ph.D.).
   - Full Academic Leadership directory (Dr. Amie Anderson, Dr. Eve-Lynn Clarke, Dr. Anne Gull, etc.).
   - IRB Human Subjects Research Policies & CITI training guidelines.
   - Tuition rates (~$16,436/sem) & international admissions checklist (TOEFL 70, IELTS 6.0, Form I-20).
4. **Strict Guardrail & Refusal Engine:**
   - The AI strictly refuses questions unrelated to Indiana Tech (e.g. general coding, other universities, sports trivia, weather) with an official redirect message.

### 🎬 Client Demo (Week 2 Deliverable):
* Client asks *"What degree programs are in the Talwar College?"* ➔ Instant streaming response.
* Client asks *"Who is Dr. Anne Gull?"* ➔ Shows Dean of College of Arts & Sciences details.
* Client asks *"Write a python snake game"* ➔ AI politely refuses and redirects to Indiana Tech topics.

---

## 📅 Week 3: Interactive Chat Workspace, Search & Dual-Mode Persistence

### 🎯 Objective:
Create the conversational workspace with real-time markdown rendering, conversation history, and dual-layer persistence (LocalStorage + Cloud Firestore).

### 🛠️ What Was Built:
1. **Interactive Chat Workspace UI:**
   - [`ChatWelcome.tsx`](file:///n:/gopal-gyprc/alchat/components/chat/ChatWelcome.tsx): Empty state cards with categorized starter prompts.
   - [`MessageBubble.tsx`](file:///n:/gopal-gyprc/alchat/components/chat/MessageBubble.tsx): Clean Markdown rendering with code blocks, headings, copy button, and timestamps.
   - [`TypingIndicator.tsx`](file:///n:/gopal-gyprc/alchat/components/chat/TypingIndicator.tsx): Animated pulsing indicator while the AI thinks.
   - [`SuggestedQuestions.tsx`](file:///n:/gopal-gyprc/alchat/components/chat/SuggestedQuestions.tsx): Dynamic follow-up chips generated based on chat context.
2. **Conversation Management & Sidebar:**
   - Categorized history: **Today, Yesterday, Previous 30 Days, Monthly Archives**.
   - **Live Search Bar:** Real-time keyword filtering of past chats.
   - **Pinned Chats (📌):** Pin/unpin important reference chats to the top.
   - **Inline Renaming (✏️):** Double-click or click pencil to edit chat titles.
   - **Delete & Clear All History:** Safe conversation deletion.
3. **Dual-Mode Persistence Architecture (`lib/firestore.ts`):**
   - **0ms LocalStorage write:** Instant optimistic updates before network requests.
   - **Cloud Firestore sync:** Real-time listeners for authenticated accounts.
   - **Ongoing Session Persistence:** Automatically restores the active conversation when the browser refreshes (`F5`).

### 🎬 Client Demo (Week 3 Deliverable):
* Client creates multiple conversations.
* Client searches past chats using the sidebar search box.
* Client pins an important conversation to the top and renames it.
* Client refreshes the page and sees their ongoing chat restored automatically.

---

## 📅 Week 4: Advanced Academic Tools, Voice/Audio, PDF Export & Polish

### 🎯 Objective:
Integrate specialized university tools, accessibility features (Voice & Audio TTS), transcript export capabilities, and performance optimizations.

### 🛠️ What Was Built:
1. **Stream Controls:**
   - **Stop Generating Button (◼):** Halts active streaming immediately via `AbortController` and saves partial text.
   - **Regenerate Button (🔄):** Re-queries the assistant for a new answer with one click.
2. **Voice Input & Audio Read Aloud:**
   - **Speech-to-Text (🎙️):** Microphone button using Web Speech API with real-time speech transcription.
   - **Text-to-Speech (🔊):** Audio playback on assistant response bubbles with play/stop toggle.
3. **Interactive Tuition & Cost Estimator Modal:**
   - Degree selector (Undergrad, Graduate, Online CPS).
   - Residency selector (Domestic vs. International F-1).
   - Merit scholarship selector ($0 to $18,000/yr).
   - Instant calculation of estimated net annual and semester costs.
   - 1-click **"Ask AI About This"** sends the exact estimate to the assistant.
4. **Official Conversation Transcript Export:**
   - **Export as Markdown (`.md`)**
   - **Export as Plain Text (`.txt`)**
   - **Print / Save as PDF:** Formatted academic consultation document with official Indiana Tech letterhead, timestamps, and clean margins.
5. **Interactive Faculty Contact Action Chips:**
   - Auto-detects faculty emails in responses and renders direct 1-click `mailto:` email action buttons.

### 🎬 Client Demo (Week 4 Final Deliverable):
* Client opens the **Tuition Estimator**, calculates costs, and clicks "Ask AI About This".
* Client speaks into the microphone to ask a question hands-free.
* Client clicks **Read Aloud** to listen to the AI answer.
* Client clicks **Export ➔ Print / Save PDF** and generates an official academic PDF report.

---

# 📊 4-Week Milestone Summary Matrix

| Week | Milestone Name | Key Focus | Client Deliverables |
| :--- | :--- | :--- | :--- |
| **Week 1** | **UI & Authentication** | Brand identity, landing page, OAuth & guest login | Full Landing Page, Dark/Light Mode, Google & Demo Auth |
| **Week 2** | **AI Intelligence & Guardrails** | Gemini 3.6 integration, Indiana Tech system prompt | Real-time Streaming, Grounded KB Answers, Out-of-Scope Refusals |
| **Week 3** | **Chat Workspace & History** | Local-first persistence, multi-chat sidebar, search | Live Chat, Conversation Search, Pinned Chats, Session Auto-Restore |
| **Week 4** | **University Tools & Polish** | Tuition calculator, Voice/TTS, PDF export, Stop stream | Tuition Estimator, Voice Input, Audio Playback, PDF Transcript Export |
