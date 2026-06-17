'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: 'ForceX completely transformed our dental office network. Our systems have been rock-solid since the install. No more downtime during patient hours. They clearly know healthcare environments.',
    name: 'Dr. Sarah M.',
    role: 'Dentist & Practice Owner',
    company: 'Sacramento Dental Group',
  },
  {
    quote: 'We manage 12 commercial properties and needed a reliable security and access control partner. ForceX delivered on every property, on time, and the system works flawlessly two years later.',
    name: 'Marcus T.',
    role: 'Director of Operations',
    company: 'Pacific Property Management',
  },
  {
    quote: 'They pre-wired our entire custom build and came back to complete the smart home and AV installation. Everything is seamless. Our clients are always impressed when we refer ForceX.',
    name: 'James R.',
    role: 'Custom Home Builder',
    company: 'Sierra Custom Homes',
  },
]

function QuoteBlock({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className="grid grid-cols-12 gap-6 md:gap-10 py-12 md:py-16"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      {/* Large quote glyph */}
      <div className="col-span-1 flex items-start">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          style={{
            fontSize: '3.5rem',
            lineHeight: 0.8,
            color: 'var(--border-2)',
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            userSelect: 'none',
          }}
        >
          &ldquo;
        </motion.span>
      </div>

      {/* Quote text */}
      <div className="col-span-11 md:col-span-7">
        <div className="overflow-hidden">
          <motion.blockquote
            initial={{ y: '40%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1 + 0.04, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed"
            style={{ color: 'var(--text-1)', letterSpacing: '-0.015em' }}
          >
            {t.quote}
          </motion.blockquote>
        </div>
      </div>

      {/* Attribution */}
      <div className="col-span-11 md:col-span-4 flex flex-col justify-end md:justify-end md:items-end md:text-right">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          <p className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>{t.name}</p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-4)' }}>{t.role}</p>
          <p className="text-xs" style={{ color: 'var(--text-4)' }}>{t.company}</p>
        </motion.div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="hidden md:block md:col-span-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-mono tabular-nums"
              style={{ color: 'var(--text-4)' }}
            >
              08
            </motion.span>
          </div>

          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="section-label"
            >
              Client Results
            </motion.span>
            <div className="overflow-hidden mt-2">
              <motion.h2
                initial={{ y: '100%' }}
                animate={headerInView ? { y: '0%' } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.04em' }}
              >
                Trusted by
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={headerInView ? { y: '0%' } : {}}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none"
                style={{ color: '#0EA5E9', letterSpacing: '-0.04em' }}
              >
                California.
              </motion.h2>
            </div>
          </div>

          <div className="md:col-span-4 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22, ease: 'easeOut' }}
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-2)' }}
            >
              From dental offices to property management firms — businesses across Sacramento trust ForceX to keep their systems running.
            </motion.p>
          </div>
        </div>

        {/* Top rule */}
        <div style={{ borderTop: '1px solid var(--border)' }} />

        {/* Quote blocks */}
        {testimonials.map((t, i) => (
          <QuoteBlock key={t.name} t={t} index={i} />
        ))}

      </div>
    </section>
  )
}
