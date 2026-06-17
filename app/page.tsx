import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { LoxoneSection } from '@/components/sections/LoxoneSection'
import { UnifiSection } from '@/components/sections/UnifiSection'
import { IndustriesGrid } from '@/components/sections/IndustriesGrid'
import { WhyForceX } from '@/components/sections/WhyForceX'
import { Testimonials } from '@/components/sections/Testimonials'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ContactForm } from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <HowItWorks />
        <LoxoneSection />
        <UnifiSection />
        <IndustriesGrid />
        <WhyForceX />
        <Testimonials />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
