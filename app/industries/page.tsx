import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { IndustriesGrid } from '@/components/sections/IndustriesGrid'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FadeUp } from '@/components/animations/FadeUp'

export const metadata = {
  title: 'Industries — ForceX Tech LLC | Dental, Medical, Commercial & More',
  description: 'ForceX Tech serves dental offices, medical clinics, commercial businesses, property managers, contractors, and residential clients across Sacramento and Northern California.',
}

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section
          className="relative py-28 overflow-hidden grid-bg"
          style={{ backgroundColor: '#08080A' }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: '600px', height: '300px',
              background: 'radial-gradient(ellipse, rgba(220,38,38,0.15) 0%, transparent 70%)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#DC2626' }}>Who We Serve</p>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Industries We Serve</h1>
              <p className="text-xl max-w-2xl" style={{ color: '#A1A1AA' }}>
                Every industry has unique technology challenges. We have the experience to solve them.
              </p>
            </FadeUp>
          </div>
        </section>
        <IndustriesGrid />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
