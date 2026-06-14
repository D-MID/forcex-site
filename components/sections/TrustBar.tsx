'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const stats = [
  { value: '500+', label: 'Projects completed', sub: 'Homes & businesses' },
  { value: '<2hr', label: 'Response time', sub: 'Business hours guaranteed' },
  { value: '10+', label: 'Years in business', sub: 'Sacramento area' },
  { value: '200+', label: 'Active clients', sub: 'Ongoing relationships' },
]

const badges = [
  'Licensed & Insured',
  'Loxone Certified Partner',
  'Ubiquiti Professional Installer',
  'Low Voltage Contractor',
  'Sacramento, CA Based',
]

export function TrustBar() {
  return (
    <section style={{ backgroundColor: '#0D0D10', borderTop: '1px solid #1C1C22', borderBottom: '1px solid #1C1C22' }}>

      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: '#1C1C22' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center justify-center py-6 px-4 text-center"
              style={{ backgroundColor: '#0D0D10' }}
            >
              <span className="text-2xl md:text-3xl font-black mb-1" style={{ color: '#DC2626', fontFamily: 'monospace' }}>
                {s.value}
              </span>
              <span className="text-sm font-bold text-white">{s.label}</span>
              <span className="text-xs mt-0.5" style={{ color: '#52525B' }}>{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Badge strip */}
      <div style={{ borderTop: '1px solid #1C1C22', backgroundColor: '#08080A' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {badges.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium"
                style={{ border: '1px solid #1C1C22', color: '#71717A', backgroundColor: '#0D0D10' }}
              >
                <span style={{ color: '#DC2626' }}>✓</span>
                {b}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Link
                href="/about"
                className="text-xs font-bold transition-colors duration-200"
                style={{ color: '#DC2626' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#DC2626' }}
              >
                About Us →
              </Link>
            </motion.span>
          </div>
        </div>
      </div>

    </section>
  )
}
