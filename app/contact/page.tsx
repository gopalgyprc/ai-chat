'use client'

import React, { useState } from 'react'
import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'
import {
  Mail,
  MessageSquare,
  Sparkles,
  Send,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  MapPin,
  Clock,
} from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  const faqs = [
    {
      q: 'How do I apply for admission to Indiana Tech?',
      a: 'You can submit an online application for free on our rolling admissions basis at indianatech.edu/apply. There is no application fee for undergraduate, graduate, or international applicants.',
    },
    {
      q: 'Where is the Indiana Tech main campus located?',
      a: 'The main campus is located at 1600 E. Washington Blvd., Fort Wayne, Indiana 46803. We also have regional and enrollment centers across Indiana, Kentucky, and the Chicago area.',
    },
    {
      q: 'How do international students receive a Form I-20?',
      a: 'Once accepted academically and proof of English proficiency (TOEFL 70 / IELTS 6.0 / Duolingo 105) along with financial guarantee documents are verified, our International Admissions team promptly issues your official Form I-20.',
    },
    {
      q: 'What degree programs are offered 100% online?',
      a: 'Through the College of Professional Studies (CPS), Indiana Tech offers accelerated associate, bachelor’s, and master’s degrees (including MBA, MS Cybersecurity, and MS Management), as well as a Ph.D. in Global Leadership.',
    },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#f8f9fa] text-neutral-900 transition-colors duration-200 dark:bg-[#050505] dark:text-white flex flex-col justify-between">
      <div className="pointer-events-none absolute left-1/2 top-[200px] h-[600px] w-full max-w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(246,110,70,0.2)_0%,rgba(251,191,36,0.1)_40%,transparent_70%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,rgba(246,71,31,0.45)_0%,rgba(204,48,20,0.18)_40%,transparent_70%)]" />
      <Header />
      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-12 sm:py-24 flex-1">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
            <Mail className="size-3.5 text-amber-500 dark:text-amber-400" />
            <span>Admissions & Inquiries</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-white leading-[1.15]">
            Contact{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Indiana Tech
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-white/75">
            Have questions about degree programs, campus tours, tuition, or international student admissions? Connect with our team.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#141416]">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Official Contacts</h3>
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">Admissions Office</p>
                    <p className="text-xs text-neutral-500 dark:text-white/60 mt-0.5">admissions@indianatech.edu</p>
                    <p className="text-xs text-neutral-400 dark:text-white/40 mt-1">International: international@indianatech.edu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    <MessageSquare className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">Main Telephone</p>
                    <p className="text-xs text-neutral-500 dark:text-white/60 mt-0.5">(800) 937-2448 / (260) 422-5561</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">Main Campus Location</p>
                    <p className="text-xs text-neutral-500 dark:text-white/60 mt-0.5">1600 E. Washington Blvd., Fort Wayne, IN 46803</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-100/70 p-5 text-xs text-neutral-600 dark:border-white/5 dark:bg-[#111113] dark:text-white/70 flex items-center gap-3">
              <Clock className="size-4 text-amber-500 shrink-0" />
              <span>Office hours: Monday–Friday, 8:30 AM – 5:00 PM EST.</span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-lg dark:border-white/10 dark:bg-[#141416]">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Message Received!</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-white/70 max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name}. Our support team will get back to you shortly at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' })
                    }}
                    className="mt-6 rounded-full bg-neutral-900 px-6 py-2.5 text-xs font-semibold text-white dark:bg-white dark:text-black hover:opacity-90"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Send us a Message</h3>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-white/80 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Rivera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-amber-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-white/80 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-amber-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-white/80 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-amber-500 dark:border-white/10 dark:bg-[#1a1a1d] dark:text-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="API Integration">API Integration</option>
                      <option value="Enterprise Solution">Enterprise Solution</option>
                      <option value="Feedback & Feature Request">Feedback & Feature Request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-white/80 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-amber-500 dark:border-white/10 dark:bg-white/5 dark:text-white leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#fbbf24] py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.01] hover:bg-amber-400 active:scale-[0.99] shadow-md shadow-amber-500/20 cursor-pointer"
                  >
                    <Send className="size-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500 dark:text-white/60">
              Quick answers to common questions about Alchat workspace features
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all dark:border-white/10 dark:bg-[#141416]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between text-left text-sm sm:text-base font-semibold text-neutral-900 dark:text-white cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`size-4 text-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-white/75 leading-relaxed border-t border-neutral-100 dark:border-white/5 pt-3">
                      {faq.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
