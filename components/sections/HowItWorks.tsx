'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'We Assess',
    subtitle: 'Site walk & technology audit',
    description: 'We visit your location, map your existing infrastructure, identify gaps, and listen to how your business actually works. No assumptions, no generic proposals.',
    detail: 'Usually 1–2 hours on site. You receive a written summary of findings and a clear picture of what needs to happen — and what doesn\'t.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We Design',
    subtitle: 'Custom infrastructure plan',
    description: 'We produce a detailed scope of work with equipment specifications, cabling routes, system diagrams, and a fixed-price quote — no surprises.',
    detail: 'Plans cover every system: networking, cabling, cameras, access control, automation. Everything is coordinated so systems talk to each other from day one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5Z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'We Deploy',
    subtitle: 'Clean install, documented, supported',
    description: 'Our team installs every system to commercial standards — organized cabling, labeled ports, clean rack builds, and thorough documentation handed off to you.',
    detail: 'Every deployment includes system walkthrough, staff training if needed, and 30-day follow-up. Managed IT clients get ongoing monitoring from day one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
      </svg>
    ),
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-14" style={{ borderBottom: '1px solid var(--border)' }}>

      {/* Step number + connector */}
      <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-3 md:gap-0">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-xs font-black flex-shrink-0"
          style={{ color: '#0EA5E9', fontFamily: 'Inter, monospace', letterSpacing: '0.05em' }}
        >
          {step.number}
        </motion.span>
      </div>

      {/* Icon */}
      <div className="md:col-span-1 hidden md:flex items-start pt-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.45, delay: index * 0.1 + 0.05, ease: 'easeOut' }}
          style={{ color: '#0EA5E9' }}
        >
          {step.icon}
        </motion.div>
      </div>

      {/* Title block */}
      <div className="md:col-span-4">
        <div className="overflow-hidden mb-1">
          <motion.h3
            initial={{ y: '100%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.65, delay: index * 0.1 + 0.05, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="text-2xl md:text-3xl font-black"
            style={{ color: 'var(--text-1)', letterSpacing: '-0.025em' }}
          >
            {step.title}
          </motion.h3>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
          className="text-sm font-medium"
          style={{ color: 'var(--text-3)' }}
        >
          {step.subtitle}
        </motion.span>
      </div>

      {/* Description */}
      <div className="md:col-span-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: index * 0.1 + 0.18, ease: 'easeOut' }}
          className="text-base leading-relaxed mb-3"
          style={{ color: 'var(--text-2)' }}
        >
          {step.description}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.28 }}
          className="text-sm leading-relaxed"
          style={{ color: 'var(--text-3)' }}
        >
          {step.detail}
        </motion.p>
      </div>
    </div>
  )
}

export function HowItWorks() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              className="section-label"
            >
              The Process
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={headerInView ? { y: '0%' } : {}}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="text-4xl md:text-5xl font-black"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.03em' }}
              >
                How It Works
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="text-sm max-w-xs hidden md:block"
            style={{ color: 'var(--text-3)', lineHeight: 1.7, textAlign: 'right' }}
          >
            Simple, transparent, and on schedule — from first call to final handoff.
          </motion.p>
        </div>

        {/* Top rule */}
        <div style={{ borderTop: '1px solid var(--border)' }} />

        {/* Steps */}
        {steps.map((step, i) => (
          <StepCard key={step.number} step={step} index={i} />
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link href="/contact" className="btn-primary">
            Start with a Site Assessment
          </Link>
          <a
            href="tel:+19165995514"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-3)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F0F6FC' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-3)' }}
          >
            Or call (916) 599-5514
          </a>
        </motion.div>
      </div>
    </section>
  )
}
