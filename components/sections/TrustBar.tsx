'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Projects completed' },
  { value: '<2hr', label: 'Response time' },
  { value: '200+', label: 'Active clients' },
  { value: '10+', label: 'Years in business' },
]

const badges = [
  'Licensed & Insured',
  'Loxone Certified Partner',
  'Ubiquiti Professional Installer',
  'Low Voltage Contractor',
  'Sacramento, CA',
]

export function TrustBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-2)' }}
    >
      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center md:px-8"
            >
              <span
                className="text-3xl md:text-4xl font-black mb-1 tabular-nums"
                style={{ color: '#0EA5E9', fontFamily: 'Inter, monospace', letterSpacing: '-0.02em' }}
              >
                {s.value}
              </span>
              <span className="text-sm font-medium" style={{ color: 'var(--text-3)' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Badge strip */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {badges.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-1.5 text-xs font-medium"
                style={{ color: 'var(--text-4)' }}
              >
                <span style={{ color: '#0EA5E9', fontSize: '10px' }}>✓</span>
                {b}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
