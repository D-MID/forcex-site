'use client'

import { FadeUp } from '@/components/animations/FadeUp'

const testimonials = [
  {
    quote: "ForceX completely transformed our dental office network. Our systems have been rock-solid since the install. No more downtime during patient hours. They clearly know healthcare environments.",
    name: 'Dr. Sarah M.',
    role: 'Dentist & Practice Owner',
    company: 'Sacramento Dental Group',
    initial: 'S',
  },
  {
    quote: "We manage 12 commercial properties and needed a reliable security and access control partner. ForceX delivered on every property, on time, and the system works flawlessly two years later.",
    name: 'Marcus T.',
    role: 'Director of Operations',
    company: 'Pacific Property Management',
    initial: 'M',
  },
  {
    quote: "They pre-wired our entire custom build and came back to complete the smart home and AV installation. Everything is seamless. Our clients are always impressed when we refer ForceX.",
    name: 'James R.',
    role: 'Custom Home Builder',
    company: 'Sierra Custom Homes',
    initial: 'J',
  },
]

const stars = Array(5).fill('★')

export function Testimonials() {
  return (
    <section className="section" style={{ backgroundColor: '#0D0D10' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeUp className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#DC2626' }}>
            Client Results
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Trusted by California Businesses
          </h2>
        </FadeUp>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: '#1C1C22' }}>
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div className="p-8 flex flex-col gap-6 h-full" style={{ backgroundColor: '#0D0D10' }}>
                {/* Stars */}
                <div className="flex gap-1" style={{ color: '#DC2626' }}>
                  {stars.map((s, j) => <span key={j} className="text-base">{s}</span>)}
                </div>

                {/* Quote */}
                <blockquote className="text-base leading-relaxed flex-1" style={{ color: '#A1A1AA' }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid #1C1C22' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: '#DC2626', color: '#ffffff' }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs" style={{ color: '#52525B' }}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
