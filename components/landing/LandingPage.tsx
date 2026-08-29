import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { ProductPreview } from '@/components/landing/ProductPreview'
import { Footer } from '@/components/landing/Footer'

export function LandingPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#f8f9fa] text-neutral-900 transition-colors duration-200 dark:bg-[#050505] dark:text-white flex flex-col justify-between">
      {/* Full-width radial ambient glow background with light & dark gradients */}
      <div className="pointer-events-none absolute left-1/2 top-[280px] h-[650px] w-full max-w-[1400px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(246,110,70,0.22)_0%,rgba(251,191,36,0.12)_38%,transparent_72%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,rgba(246,71,31,0.65)_0%,rgba(204,48,20,0.25)_38%,transparent_72%)]" />

      {/* Full-width Navigation Bar */}
      <Header />

      {/* Hero Section */}
      <div className="relative z-10 w-full px-4 sm:px-8">
        <Hero />
      </div>

      {/* Interactive Product Preview Card */}
      <div className="relative z-10 mx-auto mt-10 w-full px-4 pb-20 sm:mt-14 sm:px-8">
        <ProductPreview />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
