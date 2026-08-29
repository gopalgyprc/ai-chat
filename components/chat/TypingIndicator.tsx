import { Sparkles } from 'lucide-react'

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3.5 py-4">
      {/* AI Avatar */}
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-black shadow-md shadow-amber-500/20 mt-1">
        <Sparkles className="size-4 text-white" />
      </div>

      <div className="flex items-center gap-1.5 rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-neutral-800 shadow-sm dark:border-white/10 dark:bg-[#202022] dark:text-white">
        <span className="size-2 animate-bounce rounded-full bg-amber-500 [animation-delay:-0.3s] dark:bg-amber-400" />
        <span className="size-2 animate-bounce rounded-full bg-amber-500 [animation-delay:-0.15s] dark:bg-amber-400" />
        <span className="size-2 animate-bounce rounded-full bg-amber-500 dark:bg-amber-400" />
      </div>
    </div>
  )
}
