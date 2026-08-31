import React from 'react'

export function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Open your workspace',
      description:
        'Sign in securely with Google or launch the instant demo. No credit card or setup required.',
    },
    {
      step: '2',
      title: 'Chat and collaborate',
      description:
        'Ask technical questions, debug code, draft content, or use 1-click follow-up question suggestions.',
    },
    {
      step: '3',
      title: 'Stay organized automatically',
      description:
        'Your conversations are saved locally and synced to the cloud, organized by date for easy access.',
    },
  ]

  return (
    <section id="how-it-works" className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          How it works
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
          Get started in seconds with a simple, familiar workflow.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.step}
            className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 sm:p-7 dark:border-neutral-800 dark:bg-[#121214] shadow-2xs"
          >
            <div>
              <span className="flex size-7 items-center justify-center rounded-md bg-neutral-900 text-xs font-bold text-white dark:bg-white dark:text-black">
                {s.step}
              </span>
              <h3 className="mt-4 text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
