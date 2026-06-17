'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'

const pillars = [
  {
    number: '01',
    title: 'One Company. Everything Tech.',
    description: 'Stop juggling multiple vendors. ForceX handles IT, networking, security, cabling, and smart systems — all under one roof, one relationship, one call.',
    detail: 'Coordinating between multiple technology vendors wastes time and creates gaps. When your network affects your cameras, which affects your access control — you need one team that understands all of it.',
    iconPath: 'M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3',
  },
  {
    number: '02',
    title: 'Fast Response. Every Time.',
    description: 'When technology fails, every minute counts. Our team responds in under 2 hours — because your business cannot afford downtime.',
    detail: 'Most IT issues are resolved remotely within the hour. For on-site issues, we dispatch same-day. Managed IT clients get 24/7 monitoring so we often catch problems before you notice them.',
    iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  },
  {
    number: '03',
    title: 'Enterprise-Grade. Every Project.',
    description: 'We use professional hardware and proven installation standards on every job — from a single camera to a full network deployment.',
    detail: 'We don\'t use consumer gear from big-box stores. Every install uses commercial-grade hardware with proper cabling, documentation, and configuration that will still be running clean in 10 years.',
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    number: '04',
    title: 'Local. Accountable. On-Site.',
    description: 'We\'re not a remote helpdesk or national franchise. We\'re your Sacramento-area technology partner — physically here when you need us.',
    detail: 'Our team lives and works in the Sacramento region. We know the area, we show up in person, and you can always reach a real person — not a ticket system.',
    iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z',
  },
]

export function WhyForceX() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid #1C1C22' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>
              Why ForceX
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              The ForceX Difference
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              href="/about"
              className="text-sm font-bold transition-colors duration-200 flex-shrink-0"
              style={{ color: '#0EA5E9' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#0EA5E9' }}
            >
              Learn More About Us →
            </Link>
          </FadeUp>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="p-8 rounded-lg group"
              style={{ backgroundColor: 'var(--bg-2)', border: '1px solid #1C1C22' }}
              whileHover={{ borderColor: 'rgba(14,165,233,0.2)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-black" style={{ color: 'rgba(14,165,233,0.4)', fontFamily: 'monospace' }}>
                  {pillar.number}
                </span>
                <motion.div
                  className="w-8 h-8 flex items-center justify-center rounded"
                  style={{ color: '#0EA5E9', backgroundColor: 'rgba(14,165,233,0.08)', borderRadius: '6px' }}
                  whileHover={{ scale: 1.15, filter: 'drop-shadow(0 0 6px rgba(14,165,233,0.5))' }}
                  animate={{ rotate: [0, 0, 0] }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d={pillar.iconPath} />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                {pillar.description}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-4)' }}>
                {pillar.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.2} className="mt-8">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-7 rounded-lg"
            style={{ backgroundColor: 'var(--bg-2)', border: '1px solid #1C1C22' }}
          >
            <div>
              <p className="text-base font-bold text-white mb-1">Not sure what you need?</p>
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>
                Tell us about your situation and we'll tell you exactly what makes sense — and what doesn't.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 px-6 py-3 text-sm font-bold text-white rounded transition-all duration-200"
              style={{ backgroundColor: '#0EA5E9' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0284C7' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0EA5E9' }}
            >
              Talk to ForceX →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
