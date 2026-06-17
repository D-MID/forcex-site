'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const statements = [
  {
    number: '01',
    headline: 'One company. Everything tech.',
    body: 'Stop managing five vendors. ForceX handles IT, networking, security cameras, access control, cabling, and smart automation — all under one relationship, one call.',
    stat: '8 service types',
    statLabel: 'fully in-house',
  },
  {
    number: '02',
    headline: 'Under 2 hours. Every time.',
    body: "When technology fails, your business stops. We respond faster than anyone in Sacramento — and with managed IT, we often catch issues before you do.",
    stat: '<2hr',
    statLabel: 'guaranteed response',
  },
  {
    number: '03',
    headline: 'Enterprise-grade on every job.',
    body: "We don't use consumer gear from big-box stores. Every install uses commercial hardware, proper cabling, and clean documentation built to last a decade.",
    stat: '500+',
    statLabel: 'installs completed',
  },
  {
    number: '04',
    headline: 'Sacramento. Here in person.',
    body: "We're not a remote helpdesk. We're your local technology partner — physically here, accountable, with a team that shows up and stands behind the work.",
    stat: '10+',
    statLabel: 'years in business',
  },
]

function StatementRow({ item, index }: { item: typeof statements[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      {/* Number */}
      <div className="md:col-span-1 flex md:block items-center gap-3">
        <span
          className="text-xs font-black"
          style={{ color: 'var(--text-4)', fontFamily: 'Inter, monospace', letterSpacing: '0.05em' }}
        >
          {item.number}
        </span>
      </div>

      {/* Headline */}
      <div className="md:col-span-5">
        <div className="overflow-hidden">
          <motion.h3
            initial={{ y: '100%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.65, delay: index * 0.08 + 0.05, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="text-2xl md:text-3xl font-black leading-tight"
            style={{ color: 'var(--text-1)', letterSpacing: '-0.025em' }}
          >
            {item.headline}
          </motion.h3>
        </div>
      </div>

      {/* Body */}
      <div className="md:col-span-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: index * 0.08 + 0.15, ease: 'easeOut' }}
          className="text-sm leading-relaxed"
          style={{ color: 'var(--text-2)' }}
        >
          {item.body}
        </motion.p>
      </div>

      {/* Stat */}
      <div className="md:col-span-2 flex md:flex-col items-center md:items-end justify-start md:justify-start gap-2 md:gap-0">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.08 + 0.2 }}
          className="text-2xl font-black tabular-nums"
          style={{ color: '#0EA5E9', fontFamily: 'Inter, monospace', letterSpacing: '-0.02em' }}
        >
          {item.stat}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.08 + 0.28 }}
          className="text-xs"
          style={{ color: 'var(--text-4)' }}
        >
          {item.statLabel}
        </motion.span>
      </div>
    </motion.div>
  )
}

export function WhyForceX() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              className="section-label"
            >
              Why ForceX
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={headerInView ? { y: '0%' } : {}}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="text-4xl md:text-5xl font-black"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.03em' }}
              >
                The ForceX Difference
              </motion.h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/about"
              className="text-sm font-bold transition-colors duration-200"
              style={{ color: 'var(--text-3)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0EA5E9' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-3)' }}
            >
              About Us →
            </Link>
          </motion.div>
        </div>

        {/* Top rule */}
        <div style={{ borderTop: '1px solid var(--border)' }} />

        {/* Statements */}
        {statements.map((item, i) => (
          <StatementRow key={item.number} item={item} index={i} />
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-base font-medium" style={{ color: 'var(--text-2)' }}>
            Not sure what you need? Tell us about your situation.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '14px', padding: '10px 24px' }}>
            Talk to ForceX →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
