import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FadeUp } from '@/components/animations/FadeUp'

export const metadata = {
  title: 'About — ForceX Tech LLC | Sacramento Technology Company',
  description: 'ForceX Tech LLC is a California-based technology company specializing in IT support, networking, security, and smart systems for businesses and homes across Sacramento and Northern California.',
}

const values = [
  { title: 'Precision', description: 'Every cable run, every device configured, every system tested — done right.' },
  { title: 'Reliability', description: 'We show up on time, do what we say, and stand behind every project.' },
  { title: 'Transparency', description: 'Honest assessments, clear pricing, no hidden fees or upsells.' },
  { title: 'Longevity', description: 'We build technology infrastructure that lasts — and support it long-term.' },
]

const serviceAreas = [
  'Sacramento', 'Roseville', 'Elk Grove', 'Folsom', 'Rancho Cordova',
  'Citrus Heights', 'Granite Bay', 'Lincoln', 'Davis', 'Woodland',
  'Auburn', 'Rocklin', 'West Sacramento', 'Fairfield', 'Yolo County',
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative py-28 overflow-hidden grid-bg" style={{ backgroundColor: 'var(--bg)' }}>
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(14,165,233,0.15) 0%, transparent 70%)' }}
          />
          <div className="relative max-w-7xl mx-auto px-6">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>About ForceX</p>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Built in California.<br />Built for Business.</h1>
              <p className="text-xl max-w-2xl" style={{ color: 'var(--text-2)' }}>
                ForceX Tech LLC is a Sacramento-based technology company delivering complete IT infrastructure, networking, security, and smart systems to businesses and homeowners across Northern California.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Story */}
        <section className="section" style={{ backgroundColor: 'var(--bg-2)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>Our Story</p>
                <h2 className="text-4xl font-black text-white mb-6">One Team. Every Tech Layer.</h2>
                <div className="flex flex-col gap-4" style={{ color: 'var(--text-2)' }}>
                  <p className="text-base leading-relaxed">
                    ForceX Tech was built around a simple idea: businesses deserve a single, accountable technology partner — not a different vendor for every problem.
                  </p>
                  <p className="text-base leading-relaxed">
                    We handle everything from the structured cabling in your walls to the cloud-managed network above your ceiling — IT support, security cameras, access control, smart systems, and everything in between.
                  </p>
                  <p className="text-base leading-relaxed">
                    Our team has served dental offices, medical clinics, commercial buildings, property management companies, contractors, and custom homeowners across Sacramento and Northern California for over a decade.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: 'var(--bg-4)' }}>
                  {[
                    { value: '500+', label: 'Projects' },
                    { value: '200+', label: 'Clients' },
                    { value: '10+', label: 'Years' },
                    { value: '<2hr', label: 'Response' },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col items-center justify-center py-10" style={{ backgroundColor: 'var(--bg-2)' }}>
                      <span className="text-4xl font-black mb-1" style={{ color: '#0EA5E9', fontFamily: 'monospace' }}>{s.value}</span>
                      <span className="text-sm" style={{ color: 'var(--text-3)' }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section" style={{ backgroundColor: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp className="mb-16 text-center">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>What We Stand For</p>
              <h2 className="text-4xl font-black text-white">Our Values</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--bg-4)' }}>
              {values.map((v, i) => (
                <FadeUp key={v.title} delay={i * 0.1}>
                  <div className="p-8 h-full" style={{ backgroundColor: 'var(--bg-2)' }}>
                    <div className="w-8 h-0.5 mb-6" style={{ backgroundColor: '#0EA5E9' }} />
                    <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>{v.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section" style={{ backgroundColor: 'var(--bg-2)', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>Where We Work</p>
              <h2 className="text-4xl font-black text-white mb-2">Service Areas</h2>
              <p style={{ color: 'var(--text-2)' }}>Serving Sacramento and surrounding Northern California communities.</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 text-sm rounded"
                    style={{ border: '1px solid #1C1C22', color: 'var(--text-2)', backgroundColor: 'var(--bg-2)' }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
