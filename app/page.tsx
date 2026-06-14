import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { MarqueeTicker } from '@/components/sections/MarqueeTicker'
import { LoxoneSection } from '@/components/sections/LoxoneSection'
import { UnifiSection } from '@/components/sections/UnifiSection'
import { IndustriesGrid } from '@/components/sections/IndustriesGrid'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { WhyForceX } from '@/components/sections/WhyForceX'
import { SupportPlans } from '@/components/sections/SupportPlans'
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
        <MarqueeTicker />
        <ServicesGrid />
        <IndustriesGrid />
        <MarqueeTicker />
        <LoxoneSection />
        <UnifiSection />
        <FeaturedProjects />
        <WhyForceX />
        <SupportPlans />
        <Testimonials />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
