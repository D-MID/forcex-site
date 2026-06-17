'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const industries = [
  {
    number: '01',
    label: 'Dental & Medical',
    description: 'HIPAA-conscious IT infrastructure, reliable networking, and security systems built for patient care environments.',
    tags: 'Managed IT · Network Design · Security Cameras · Compliance-Ready',
    href: '/industries',
  },
  {
    number: '02',
    label: 'Commercial Business',
    description: 'Full-service technology solutions for offices, retail, and commercial spaces of all sizes.',
    tags: 'IT Support · Access Control · AV Systems · Smart Office',
    href: '/industries',
  },
  {
    number: '03',
    label: 'Property Management',
    description: 'Scalable security, access control, and network solutions across single and multi-property portfolios.',
    tags: 'Security Cameras · Access Control · Multi-Site Networking',
    href: '/industries',
  },
  {
    number: '04',
    label: 'Contractors & Builders',
    description: 'Low-voltage prewire, structured cabling, and technology rough-in for new construction and remodels.',
    tags: 'Low Voltage Prewire · Structured Cabling · Smart Home Prep',
    href: '/industries',
  },
  {
    number: '05',
    label: 'Residential & Smart Home',
    description: 'Premium smart home systems, home theaters, whole-home audio, and network design for custom residences.',
    tags: 'Smart Home · Home Theater · Whole-Home Audio · UniFi Wi-Fi',
    href: '/industries',
  },
]

function IndustryRow({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <Link
        href={industry.href}
        className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 group"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {/* Number */}
        <div className="col-span-1 flex items-start pt-1">
          <span
            className="text-xs font-mono tabular-nums"
            style={{ color: 'var(--text-4)' }}
          >
            {industry.number}
          </span>
        </div>

        {/* Label */}
        <div className="col-span-11 md:col-span-3">
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: '100%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.6, delay: index * 0.07 + 0.05, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="text-xl md:text-2xl font-black transition-colors duration-200"
              style={{ color: 'var(--text-1)', letterSpacing: '-0.025em', lineHeight: 1.15 }}
            >
              {industry.label}
              <span
                className="inline-block ml-2 text-base opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                style={{ color: '#0EA5E9' }}
              >
                →
              </span>
            </motion.h3>
          </div>
        </div>

        {/* Description */}
        <div className="hidden md:block md:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.07 + 0.14, ease: 'easeOut' }}
            className="text-sm leading-relaxed"
            style={{ color: 'var(--text-2)' }}
          >
            {industry.description}
          </motion.p>
        </div>

        {/* Tags */}
        <div className="hidden md:block md:col-span-3">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: index * 0.07 + 0.2 }}
            className="text-xs leading-relaxed"
            style={{ color: 'var(--text-4)' }}
          >
            {industry.tags}
          </motion.p>
        </div>
      </Link>
    </motion.div>
  )
}

export function IndustriesGrid() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
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
              07
            </motion.span>
          </div>

          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="section-label"
            >
              Who We Serve
            </motion.span>
            <div className="overflow-hidden mt-2">
              <motion.h2
                initial={{ y: '100%' }}
                animate={headerInView ? { y: '0%' } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.04em' }}
              >
                Built for Your
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
                Industry.
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
              Every sector has unique technology requirements. We know yours — and we build systems that fit exactly.
            </motion.p>
          </div>
        </div>

        {/* Top rule */}
        <div style={{ borderTop: '1px solid var(--border)' }} />

        {/* Industry rows */}
        {industries.map((industry, i) => (
          <IndustryRow key={industry.label} industry={industry} index={i} />
        ))}

      </div>
    </section>
  )
}
