'use client'

import React, { useState } from 'react'
import {
  Menu,
  Plus,
  ExternalLink,
  GraduationCap,
  Download,
  Calculator,
  FileText,
  FileCode,
  Printer,
  ChevronDown,
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { ChatMessage } from '@/types/chat'

interface ChatHeaderProps {
  title?: string
  messages?: ChatMessage[]
  onToggleSidebar: () => void
  onNewChat: () => void
  onOpenTuitionModal?: () => void
}

export function ChatHeader({
  title = 'Indiana Tech Assistant',
  messages = [],
  onToggleSidebar,
  onNewChat,
  onOpenTuitionModal,
}: ChatHeaderProps) {
  const [showExportMenu, setShowExportMenu] = useState(false)

  const handleExportMarkdown = () => {
    setShowExportMenu(false)
    if (!messages || messages.length === 0) {
      alert('No messages to export.')
      return
    }

    let md = `# ${title}\n\n*Indiana Tech Virtual Assistant Transcript - ${new Date().toLocaleDateString()}*\n\n---\n\n`
    messages.forEach((msg) => {
      const sender = msg.role === 'user' ? '👤 Student' : '🎓 Indiana Tech Assistant'
      md += `### ${sender} (${new Date(msg.createdAt).toLocaleTimeString()}):\n\n${msg.content}\n\n---\n\n`
    })

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${title.replace(/[^a-zA-Z0-9_-]/g, '_')}_transcript.md`
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleExportText = () => {
    setShowExportMenu(false)
    if (!messages || messages.length === 0) {
      alert('No messages to export.')
      return
    }

    let txt = `INDIANA TECH AI ASSISTANT TRANSCRIPT\nTopic: ${title}\nDate: ${new Date().toLocaleString()}\n${'='.repeat(50)}\n\n`
    messages.forEach((msg) => {
      const sender = msg.role === 'user' ? '[Student]' : '[Indiana Tech Assistant]'
      txt += `${sender} - ${new Date(msg.createdAt).toLocaleTimeString()}\n${msg.content}\n\n${'-'.repeat(40)}\n\n`
    })

    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${title.replace(/[^a-zA-Z0-9_-]/g, '_')}_transcript.txt`
    link.click()
    URL.revokeObjectURL(url)
  }

  const handlePrintPdf = () => {
    setShowExportMenu(false)
    if (!messages || messages.length === 0) {
      alert('No messages to print.')
      return
    }

    if (typeof window === 'undefined') return

    const printWindow = window.open('', '_blank', 'width=850,height=900')
    if (!printWindow) {
      window.print()
      return
    }

    const renderedMessages = messages
      .map((m) => {
        const isUser = m.role === 'user'
        const sender = isUser ? 'Student' : 'Indiana Tech Virtual Assistant'
        const time = new Date(m.createdAt).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })

        const formattedContent = m.content
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/\n\n/g, '<p style="margin: 8px 0;"></p>')
          .replace(/\n/g, '<br/>')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(
            /### (.*?)(<br\/>|<p|$)/g,
            '<h3 style="font-size: 14px; font-weight: bold; margin: 10px 0 4px; color: #111827;">$1</h3>'
          )
          .replace(
            /## (.*?)(<br\/>|<p|$)/g,
            '<h2 style="font-size: 16px; font-weight: bold; margin: 12px 0 6px; color: #111827;">$1</h2>'
          )
          .replace(
            /• (.*?)(<br\/>|<p|$)/g,
            '<li style="margin-left: 20px; margin-bottom: 4px; color: #374151;">$1</li>'
          )

        return `
        <div style="margin-bottom: 18px; padding: 14px 18px; border-radius: 10px; border: 1px solid ${
          isUser ? '#d1d5db' : '#fed7aa'
        }; background: ${isUser ? '#f9fafb' : '#ffffff'}; page-break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; border-bottom: 1px solid ${
            isUser ? '#e5e7eb' : '#ffedd5'
          }; padding-bottom: 4px;">
            <span style="font-weight: 700; font-size: 13px; color: ${
              isUser ? '#1f2937' : '#c2410c'
            };">
              ${isUser ? '👤 ' + sender : '🎓 ' + sender}
            </span>
            <span style="font-size: 11px; color: #6b7280;">${time}</span>
          </div>
          <div style="font-size: 13px; line-height: 1.6; color: #1f2937;">
            ${formattedContent}
          </div>
        </div>
      `
      })
      .join('')

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${title} - Indiana Tech AI Transcript</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 15mm 15mm 15mm 15mm;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              color: #111827;
              background: #ffffff;
              margin: 0;
              padding: 24px;
              box-sizing: border-box;
            }
            .header {
              border-bottom: 2px solid #111827;
              padding-bottom: 12px;
              margin-bottom: 20px;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
            }
            .header h1 {
              font-size: 18px;
              margin: 0 0 4px;
              font-weight: 800;
              color: #111827;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .header p {
              font-size: 12px;
              margin: 0;
              color: #4b5563;
            }
            .topic {
              background: #fffbeb;
              border: 1px solid #fde68a;
              padding: 10px 14px;
              border-radius: 8px;
              margin-bottom: 20px;
              font-size: 13px;
            }
            .topic strong {
              color: #92400e;
            }
            .footer {
              margin-top: 30px;
              border-top: 1px solid #e5e7eb;
              padding-top: 12px;
              text-align: center;
              font-size: 11px;
              color: #6b7280;
            }
            @media print {
              body { padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1>Indiana Tech Virtual Assistant</h1>
              <p>Official Academic & Advisory Consultation Record</p>
            </div>
            <div style="text-align: right; font-size: 11px; color: #4b5563;">
              <p style="font-weight: bold; color: #111827; margin: 0 0 2px;">indianatech.edu</p>
              <p style="margin: 0;">Date: ${new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div class="topic">
            <strong>Conversation Topic:</strong> ${title}
          </div>

          <div class="messages">
            ${renderedMessages}
          </div>

          <div class="footer">
            Indiana Tech • 1600 E. Washington Blvd., Fort Wayne, IN 46803 • Official AI Consultation Record
          </div>

          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 250);
            };
          </script>
        </body>
      </html>
    `)
    printWindow.document.close()
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-neutral-200 bg-white/90 px-4 sm:px-5 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-[#131314]/90">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          aria-label="Open sidebar menu"
          className="flex size-9 items-center justify-center rounded-xl border border-neutral-300 bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 md:hidden cursor-pointer"
        >
          <Menu className="size-4" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="hidden size-7 items-center justify-center rounded-xl bg-[#fbbf24] text-black md:flex shadow-sm">
            <GraduationCap className="size-4" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white truncate max-w-[140px] sm:max-w-xs md:max-w-md leading-tight">
              {title}
            </h2>
            <span className="hidden sm:inline text-[11px] text-amber-600 dark:text-amber-400 font-medium">
              Official Knowledge from indianatech.edu
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2.5">
        {/* Tuition Estimator Button */}
        {onOpenTuitionModal && (
          <button
            onClick={onOpenTuitionModal}
            className="flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-all cursor-pointer"
            title="Open Tuition & Cost Estimator"
          >
            <Calculator className="size-3.5" />
            <span className="hidden md:inline">Tuition Estimator</span>
          </button>
        )}

        {/* Export Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowExportMenu(!showExportMenu)}
            className="flex items-center gap-1 rounded-xl border border-neutral-300 bg-white px-2.5 sm:px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 cursor-pointer"
            title="Export conversation transcript"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">Export</span>
            <ChevronDown className="size-3 opacity-60" />
          </button>

          {showExportMenu && (
            <div className="absolute right-0 top-11 z-50 w-48 rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-[#1a1a1d]">
              <button
                onClick={handleExportMarkdown}
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs text-neutral-700 hover:bg-neutral-100 dark:text-white/80 dark:hover:bg-white/10 cursor-pointer"
              >
                <FileCode className="size-3.5 text-amber-500" />
                <span>Markdown (.md)</span>
              </button>
              <button
                onClick={handleExportText}
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs text-neutral-700 hover:bg-neutral-100 dark:text-white/80 dark:hover:bg-white/10 cursor-pointer"
              >
                <FileText className="size-3.5 text-blue-500" />
                <span>Plain Text (.txt)</span>
              </button>
              <button
                onClick={handlePrintPdf}
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs text-neutral-700 hover:bg-neutral-100 dark:text-white/80 dark:hover:bg-white/10 cursor-pointer"
              >
                <Printer className="size-3.5 text-emerald-500" />
                <span>Print / Save PDF</span>
              </button>
            </div>
          )}
        </div>

        <ThemeToggle variant="icon" />

        <button
          onClick={onNewChat}
          className="flex items-center gap-1.5 rounded-xl border border-neutral-300 bg-neutral-100 px-3 py-1.5 sm:py-2 text-xs font-medium text-neutral-800 transition-all hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 cursor-pointer"
        >
          <Plus className="size-3.5 sm:size-4" />
          <span className="hidden sm:inline font-semibold">New Chat</span>
        </button>
      </div>
    </header>
  )
}

