import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { ProductPreview } from '@/components/landing/ProductPreview'
import { Features } from '@/components/landing/Features'
import { PromptShowcase } from '@/components/landing/PromptShowcase'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { WhyAIchat } from '@/components/landing/WhyAIchat'
import { FaqSection } from '@/components/landing/FaqSection'
import { FinalCta } from '@/components/landing/FinalCta'
import { Footer } from '@/components/landing/Footer'

export function LandingPage() {
  return (
    <main className="min-h-screen w-full bg-white text-neutral-900 transition-colors duration-200 dark:bg-[#09090b] dark:text-neutral-100 flex flex-col justify-between">
      <Header />
      <Hero />
      <ProductPreview />
      <Features />
      <PromptShowcase />
      <HowItWorks />
      <WhyAIchat />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
