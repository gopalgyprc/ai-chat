import Link from 'next/link'
import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'
import {
  GraduationCap,
  Building2,
  Globe,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from 'lucide-react'

export default function AboutPage() {
  const colleges = [
    {
      icon: GraduationCap,
      title: 'Talwar College of Engineering & CS',
      desc: 'ABET-accredited programs in Biomedical, Mechanical, Electrical, Industrial Engineering, plus Computer Science and Cybersecurity.',
      color: 'text-amber-500 bg-amber-500/10 dark:text-amber-400 dark:bg-amber-400/10',
    },
    {
      icon: BookOpen,
      title: 'College of Business',
      desc: 'Applied degrees in Accounting, Business Administration, Sports Management, Marketing, MBA tracks, and Ph.D. in Global Leadership.',
      color: 'text-orange-500 bg-orange-500/10 dark:text-orange-400 dark:bg-orange-400/10',
    },
    {
      icon: Globe,
      title: 'College of Arts and Sciences',
      desc: 'Programs in Criminal Justice, Psychology, Forensic Science, Digital Media, Communication, Pre-Law, and Pre-Health.',
      color: 'text-emerald-500 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-400/10',
    },
    {
      icon: Building2,
      title: 'College of Professional Studies',
      desc: 'Flexible 100% online and accelerated degree programs designed specifically for working adults and lifelong learners.',
      color: 'text-sky-500 bg-sky-500/10 dark:text-sky-400 dark:bg-sky-400/10',
    },
  ]

  const stats = [
    { label: 'Founded', value: '1930' },
    { label: 'Fort Wayne Campus', value: '45+ Acres' },
    { label: 'Undergrads Receiving Aid', value: '90%+' },
    { label: 'Athletic Teams', value: 'NAIA Warriors' },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#f8f9fa] text-neutral-900 transition-colors duration-200 dark:bg-[#050505] dark:text-white flex flex-col justify-between">
      <div className="pointer-events-none absolute left-1/2 top-[200px] h-[600px] w-full max-w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(246,110,70,0.2)_0%,rgba(251,191,36,0.1)_40%,transparent_70%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,rgba(246,71,31,0.45)_0%,rgba(204,48,20,0.18)_40%,transparent_70%)]" />

      <Header />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-12 sm:py-24 flex-1">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 shadow-sm backdrop-blur-md">
            <Building2 className="size-3.5" />
            <span>Official Knowledge • indianatech.edu</span>
          </div>
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-white leading-[1.15]">
            Empowering Students at{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Indiana Tech
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-white/75 leading-relaxed">
            Indiana Tech (Indiana Institute of Technology) is a comprehensive, private university in Fort Wayne, Indiana, dedicated to career-focused education and real-world leadership since 1930.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-neutral-200 bg-white/90 p-6 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#121214]/90"
            >
              <p className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-neutral-500 dark:text-white/50">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-neutral-200 bg-white/80 p-8 sm:p-12 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-[#161619]/90">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">University Leadership & Mission</h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-white/80 leading-relaxed">
              Led by President <strong>Dr. Karl W. Einolf</strong> (since July 2017), Indiana Tech provides learners with professional education; prepares them for active participation, career advancement, and leadership in the global 21st-century workforce; and motivates them toward a life of significance and worth.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 font-medium">
              <MapPin className="size-4 text-amber-500" />
              <span>Main Campus: 1600 E. Washington Blvd., Fort Wayne, IN 46803</span>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-10">
            Our Academic Colleges
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {colleges.map((col) => {
              const Icon = col.icon
              return (
                <div
                  key={col.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-[#141416]"
                >
                  <div className={`flex size-12 items-center justify-center rounded-xl ${col.color} mb-5`}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{col.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-white/70 leading-relaxed">
                    {col.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 sm:p-12 text-center text-black shadow-2xl shadow-amber-500/20">
          <h3 className="text-3xl font-bold sm:text-4xl text-black">Have Questions About Admissions?</h3>
          <p className="mt-3 text-sm sm:text-base font-medium opacity-90 max-w-xl mx-auto">
            Use the Indiana Tech Virtual Assistant to explore degree requirements, tuition scholarships, and international visa checklists.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/chat"
              className="flex items-center gap-2 rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-xl"
            >
              Ask Assistant Now <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
