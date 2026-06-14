'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { TextReveal } from '@/components/animations/TextReveal'

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'One Company. Everything Tech.',
    description: 'Stop juggling multiple vendors. ForceX handles IT, networking, security, cabling, and smart systems — all under one roof, one relationship, one call.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fast Response. Every Time.',
    description: 'When technology fails, every minute counts. Our team responds in under 2 hours — because your business cannot afford downtime.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    title: 'Enterprise-Grade. Every Project.',
    description: 'We use professional-grade equipment and proven standards on every project — from a single camera install to a full network deployment.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Local. Accountable. California-Based.',
    description: 'We\'re not a remote helpdesk or national franchise. We\'re your local Sacramento-area technology partner — on-site when you need us.',
  },
]

export function WhyForceX() {
  return (
    <section className="section" style={{ backgroundColor: '#08080A' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeUp className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#DC2626' }}>
            Why ForceX
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <TextReveal text="The ForceX Difference" />
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
            Dozens of IT companies compete for your business. Here&apos;s why clients choose ForceX — and stay.
          </p>
        </FadeUp>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: '#1C1C22' }}>
          {pillars.map((pillar, i) => (
            <FadeUp key={pillar.title} delay={i * 0.1}>
              <div
                className="p-10 flex flex-col gap-5 h-full"
                style={{ backgroundColor: '#0D0D10' }}
              >
                <div style={{ color: '#DC2626' }}>{pillar.icon}</div>
                <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#71717A' }}>
                  {pillar.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
