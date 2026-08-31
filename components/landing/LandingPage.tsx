import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { ProductPreview } from '@/components/landing/ProductPreview'
import { MetricsSection } from '@/components/landing/MetricsSection'
import { FeatureGrid } from '@/components/landing/FeatureGrid'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { PromptShowcase } from '@/components/landing/PromptShowcase'
import { Testimonials } from '@/components/landing/Testimonials'
import { ComparisonFaq } from '@/components/landing/ComparisonFaq'
import { CtaBanner } from '@/components/landing/CtaBanner'
import { Footer } from '@/components/landing/Footer'

export function LandingPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#f8f9fa] text-neutral-900 transition-colors duration-200 dark:bg-[#050505] dark:text-white flex flex-col justify-between">
      {/* Full-width top radial ambient glow background */}
      <div className="pointer-events-none absolute left-1/2 top-[260px] h-[750px] w-full max-w-[1400px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(246,110,70,0.22)_0%,rgba(251,191,36,0.12)_38%,transparent_72%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,rgba(246,71,31,0.65)_0%,rgba(204,48,20,0.25)_38%,transparent_72%)]" />

      {/* Navigation Bar */}
      <Header />

      {/* Section 1: Hero Banner */}
      <div className="relative z-10 w-full px-4 sm:px-8">
        <Hero />
      </div>

      {/* Section 1 (continued): Interactive Product Preview Frame */}
      <div className="relative z-10 mx-auto mt-10 w-full px-4 sm:mt-14 sm:px-8">
        <ProductPreview />
      </div>

      {/* Section 2: Industry Metrics & Tech Badges */}
      <MetricsSection />

      {/* Section 3: Core Capabilities & Features Matrix */}
      <FeatureGrid />

      {/* Section 4: 3-Step Interactive Workflow */}
      <HowItWorks />

      {/* Section 5: Interactive Tabbed Prompt Showcase */}
      <PromptShowcase />

      {/* Section 6: Verified User Testimonials & Wall of Love */}
      <Testimonials />

      {/* Section 7: Comparison Matrix & Interactive FAQ Accordion */}
      <ComparisonFaq />

      {/* Call to Action Banner */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </main>
  )
}
