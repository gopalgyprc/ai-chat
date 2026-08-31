import React from 'react'
import {
  ArrowRight,
  Bell,
  Bookmark,
  ChevronDown,
  Copy,
  Ellipsis,
  Image as ImageIcon,
  Mic,
  Paperclip,
  Play,
  Search,
  Send,
  Sparkles,
  Star,
  WandSparkles,
} from 'lucide-react'

const featureChips = [
  { label: 'Photo edition', icon: ImageIcon, color: 'text-violet-700 bg-violet-100 dark:text-violet-200 dark:bg-violet-500/20' },
  { label: 'Video generation', icon: Play, color: 'text-orange-700 bg-orange-100 dark:text-orange-200 dark:bg-orange-500/20' },
  { label: 'Photo generation', icon: WandSparkles, color: 'text-sky-700 bg-sky-100 dark:text-sky-200 dark:bg-sky-500/20' },
  { label: 'Code generation', icon: Sparkles, color: 'text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-500/20' },
  { label: 'Audio generation', icon: Mic, color: 'text-amber-700 bg-amber-100 dark:text-amber-200 dark:bg-amber-500/20' },
]

const history = [
  ['Weekly Healthy Meal Plan', 'Give me a healthy meal plan for a week.', '1:02'],
  ['Improve English Speaking', 'How can I improve my English speaking?', 'Just Now'],
  ['Generate Picture', 'I wanna generate a picture that it’s perfect.', ''],
]

export function ProductPreview() {
  return (
    <div className="preview-frame relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl sm:rounded-[24px] border border-neutral-300 bg-white p-2 sm:p-3.5 shadow-2xl transition-colors duration-200 dark:border-[#5b3027] dark:bg-[#160b0a] dark:shadow-[0_-25px_120px_rgba(244,71,28,0.25)]">
      <div className="flex w-full overflow-hidden rounded-xl sm:rounded-[18px] border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-[#1b0d0c]">
        {/* Left Navigation Panel (Visible on md and above) */}
        <aside className="hidden md:flex w-[190px] lg:w-[220px] shrink-0 flex-col border-r border-neutral-200 bg-[#f4f5f7] p-4 text-xs text-neutral-600 transition-colors duration-200 dark:border-white/10 dark:bg-[#1c0d0c] dark:text-white/60">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-neutral-900 dark:text-white">Ai Chat</p>
              <p className="text-[10px] text-neutral-500 dark:text-white/50">Ayra product team</p>
            </div>
            <ChevronDown className="size-3.5 rotate-90 text-neutral-500 dark:text-white/60" />
          </div>

          <div className="mb-4 flex items-center justify-between text-neutral-900 dark:text-white">
            <span className="font-semibold text-xs">Home</span>
            <ChevronDown className="size-3" />
          </div>

          <div className="mb-3 flex items-center gap-2 rounded-full bg-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-900 dark:bg-white/10 dark:text-white">
            <Sparkles className="size-3 text-orange-500 dark:text-orange-400" /> Chats
          </div>

          {['Search', 'Manage subscription', 'Updates & FAQ'].map((item, i) => (
            <div key={item} className="mb-3 flex items-center gap-2 px-2 text-xs text-neutral-600 dark:text-white/65">
              <Search className={i === 0 ? 'size-3 text-emerald-600 dark:text-emerald-300' : 'size-3'} />
              <span className="truncate">{item}</span>
            </div>
          ))}

          <p className="mb-2.5 mt-6 flex items-center justify-between text-[10px] text-neutral-400 dark:text-white/40 uppercase tracking-wider font-semibold">
            <span>Chat list</span>
            <ChevronDown className="size-3" />
          </p>

          {['Welcome', 'Favorites', 'Travel plans'].map((item, i) => (
            <div key={item} className="mb-2.5 flex items-center justify-between px-1 text-xs">
              <span className="flex items-center gap-1.5 text-neutral-700 dark:text-white/80 truncate">
                <span
                  className={`size-1.5 rounded-xs shrink-0 ${i === 1 ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-neutral-300 dark:bg-white/20'}`}
                />
                <span className="truncate">{item}</span>
              </span>
              <span className="rounded bg-neutral-200 px-1.5 py-0.5 text-[9px] text-neutral-600 dark:bg-white/10 dark:text-white/60">
                {i === 0 ? '48' : i === 1 ? '32' : ''}
              </span>
            </div>
          ))}
        </aside>

        {/* Central Chat Window (100% full-width on mobile) */}
        <section className="flex-1 min-w-0 bg-white p-4 sm:p-6 transition-colors duration-200 dark:bg-[#1c0e0d]">
          {/* Mobile Top App Bar (Only visible on mobile screens) */}
          <div className="flex md:hidden items-center justify-between border-b border-neutral-200 pb-3 mb-3 dark:border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-[#fbbf24] text-black">
                <Sparkles className="size-3.5 fill-black" />
              </div>
              <span className="text-xs font-bold text-neutral-900 dark:text-white">Ai Chat</span>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              ● Online
            </span>
          </div>

          <div className="mb-4 sm:mb-5 flex items-center justify-between border-b border-neutral-200 pb-3.5 dark:border-white/10">
            <div className="flex items-center gap-2.5 sm:gap-3.5 text-sm sm:text-base font-medium text-neutral-900 dark:text-white truncate">
              <span className="truncate">Create welcome form</span>
              <Star className="size-3.5 sm:size-4 shrink-0 text-neutral-400 dark:text-white/70 hidden sm:inline" />
              <Bookmark className="size-3.5 sm:size-4 shrink-0 text-neutral-400 dark:text-white/70 hidden sm:inline" />
              <Ellipsis className="size-3.5 sm:size-4 shrink-0 text-neutral-400 dark:text-white/70" />
            </div>
            <div className="flex gap-1.5 sm:gap-2 shrink-0">
              <button aria-label="Attach file" className="rounded-full bg-neutral-100 p-1.5 sm:p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 cursor-pointer">
                <Paperclip className="size-3 sm:size-3.5" />
              </button>
              <button aria-label="Send message" className="rounded-full bg-neutral-100 p-1.5 sm:p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 cursor-pointer">
                <Send className="size-3 sm:size-3.5" />
              </button>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:p-6 text-xs sm:text-[13px] leading-relaxed text-neutral-800 dark:border-white/5 dark:bg-[#2a1512] dark:text-white/85">
            <p>
              I&apos;m Brainwave - a versatile and powerful tool for users seeking to enhance their
              experience with ChatGPT. It offers a wide range of advanced features to improve
              functionality and efficiency.
            </p>
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2.5">
              {featureChips.map(({ label, icon: Icon, color }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 rounded-full bg-neutral-200/60 px-2.5 py-1 text-[11px] sm:text-xs text-neutral-800 dark:bg-white/5 dark:text-white"
                >
                  <span className={`rounded-full p-0.5 sm:p-1 ${color}`}>
                    <Icon className="size-3" />
                  </span>
                  <span>{label}</span>
                </span>
              ))}
            </div>
            <div className="mt-4 sm:mt-5 flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-500 dark:text-white/50">
              <span>Just now</span>
              <span className="flex items-center gap-2">
                <span className="rounded bg-neutral-200 px-2 py-0.5 text-neutral-800 font-medium dark:bg-white/10 dark:text-white/80">
                  Regenerate
                </span>
                <Copy className="size-3 text-neutral-500 dark:text-white/70" />
              </span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 flex h-16 sm:h-20 items-center justify-between rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50 px-3 sm:px-4 text-xs text-neutral-400 dark:border-white/5 dark:bg-[#291512] dark:text-white/40">
            <span className="text-xs sm:text-sm truncate">Text to speech voice...</span>
            <button
              aria-label="Send prompt"
              className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition-transform hover:scale-105 cursor-pointer ml-2"
            >
              <ArrowRight className="size-3.5 sm:size-4" />
            </button>
          </div>
        </section>

        {/* Right History Panel (Visible on lg and above) */}
        <aside className="hidden lg:flex w-[190px] lg:w-[220px] shrink-0 flex-col border-l border-neutral-200 bg-[#f4f5f7] p-4 text-xs text-neutral-600 transition-colors duration-200 dark:border-white/10 dark:bg-[#1b0c0b] dark:text-white/60">
          <div className="mb-5 flex items-center justify-between">
            <Bell className="size-3.5 text-neutral-500 dark:text-white/70" />
            <div className="flex items-center gap-2">
              <span className="size-5 rounded-full bg-gradient-to-br from-orange-300 to-rose-500 shadow-xs" />
              <button className="rounded-full bg-neutral-900 px-2.5 py-0.5 text-[11px] font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black">
                Share
              </button>
            </div>
          </div>

          <div className="mb-3 flex items-center justify-between text-[11px] text-neutral-500 dark:text-white/70">
            <span>Chat history</span>
            <span className="rounded bg-neutral-200 px-1.5 py-0.5 font-medium text-neutral-800 dark:bg-white/10 dark:text-white">65/250</span>
          </div>

          {history.map(([title, body, time]) => (
            <div key={title} className="mb-3.5 border-b border-neutral-200 pb-3 dark:border-white/5">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-neutral-900 dark:text-white truncate">
                <span className="size-1.5 rounded-xs border border-neutral-400 dark:border-white/40 shrink-0" />
                <span className="truncate">{title}</span>
              </p>
              <p className="pl-3 leading-relaxed text-[10px] text-neutral-500 dark:text-white/50 line-clamp-2">{body}</p>
              <div className="mt-1.5 flex items-center justify-between pl-3 text-[9px] text-neutral-400 dark:text-white/40">
                <span className="h-1.5 w-12 rounded-full bg-neutral-300 dark:bg-white/10" />
                <span>{time}</span>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
