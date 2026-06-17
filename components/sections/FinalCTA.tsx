'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto px-6">

        <div ref={ref} className="grid grid-cols-12 gap-6">
          {/* Section number */}
          <div className="hidden md:block col-span-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-mono tabular-nums"
              style={{ color: 'var(--text-4)' }}
            >
              10
            </motion.span>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-11">

            {/* Giant editorial headline */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="font-black leading-none"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                  color: 'var(--text-1)',
                  letterSpacing: '-0.05em',
                }}
              >
                Let&apos;s Build
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="font-black leading-none"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                  color: '#0EA5E9',
                  letterSpacing: '-0.05em',
                }}
              >
                Something
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="font-black leading-none"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                  color: 'var(--text-1)',
                  letterSpacing: '-0.05em',
                }}
              >
                That Works.
              </motion.h2>
            </div>

            {/* Sub row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.38, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mt-14 pt-8"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                Schedule a free consultation and get a clear technology plan within 24 hours. No obligation, no fluff — just a straight answer.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link href="/contact" className="btn-primary">
                  Request a Free Quote
                </Link>
                <a
                  href="tel:+19165995514"
                  className="btn-outline"
                >
                  Call (916) 599-5514
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
