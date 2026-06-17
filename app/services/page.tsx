import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FadeUp } from '@/components/animations/FadeUp'

export const metadata = {
  title: 'Services — ForceX Tech LLC | IT, Networking, Security & Smart Systems',
  description: 'IT support, managed IT, UniFi networking, security cameras, access control, structured cabling, smart office, and audio/video systems in Sacramento, CA.',
}

const process = [
  { step: '01', title: 'Discovery', description: 'We assess your current environment, understand your needs, and identify gaps.' },
  { step: '02', title: 'Design', description: 'We design a solution with the right technology for your space, budget, and goals.' },
  { step: '03', title: 'Deployment', description: 'Our team installs and configures everything — clean, professional, tested.' },
  { step: '04', title: 'Support', description: 'We stay with you. Ongoing monitoring, maintenance, and support on demand.' },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page Hero */}
        <section
          className="relative py-28 overflow-hidden grid-bg"
          style={{ backgroundColor: 'var(--bg)' }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: '600px', height: '300px',
              background: 'radial-gradient(ellipse, rgba(14,165,233,0.15) 0%, transparent 70%)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>
                What We Do
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl max-w-2xl" style={{ color: 'var(--text-2)' }}>
                Complete technology infrastructure solutions — from the cabling in your walls to the managed IT above it.
              </p>
            </FadeUp>
          </div>
        </section>

        <ServicesGrid />

        {/* Process Section */}
        <section className="section" style={{ backgroundColor: 'var(--bg-2)', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp className="mb-16 text-center">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>How We Work</p>
              <h2 className="text-4xl font-black text-white">The ForceX Process</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--bg-4)' }}>
              {process.map((p, i) => (
                <FadeUp key={p.step} delay={i * 0.1}>
                  <div className="p-8" style={{ backgroundColor: 'var(--bg-2)' }}>
                    <span className="block text-4xl font-black mb-4" style={{ color: 'rgba(14,165,233,0.3)', fontFamily: 'monospace' }}>{p.step}</span>
                    <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>{p.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
