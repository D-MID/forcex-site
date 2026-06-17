'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'
import { TextReveal } from '@/components/animations/TextReveal'

const industries = [
  {
    label: 'Dental & Medical',
    description: 'HIPAA-conscious IT infrastructure, reliable networking, and security systems built for patient care environments.',
    tags: ['Managed IT', 'Network Design', 'Security Cameras', 'Compliance-Ready'],
    href: '/industries',
    number: '01',
  },
  {
    label: 'Commercial Business',
    description: 'Full-service technology solutions for offices, retail, and commercial spaces of all sizes.',
    tags: ['IT Support', 'Access Control', 'AV Systems', 'Smart Office'],
    href: '/industries',
    number: '02',
  },
  {
    label: 'Property Management',
    description: 'Scalable security, access control, and network solutions across single and multi-property portfolios.',
    tags: ['Security Cameras', 'Access Control', 'Networking', 'Multi-Site'],
    href: '/industries',
    number: '03',
  },
  {
    label: 'Contractors & Builders',
    description: 'Low-voltage prewire, structured cabling, and technology rough-in for new construction and remodels.',
    tags: ['Low Voltage Prewire', 'Structured Cabling', 'Smart Home Prep'],
    href: '/industries',
    number: '04',
  },
  {
    label: 'Residential & Smart Home',
    description: 'Premium smart home systems, home theaters, whole-home audio, and network design for custom residences.',
    tags: ['Smart Home', 'Home Theater', 'Whole-Home Audio', 'UniFi Wi-Fi'],
    href: '/industries',
    number: '05',
  },
]

export function IndustriesGrid() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-2)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeUp className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>
            Who We Serve
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              <TextReveal text="Built for Your Industry" />
            </h2>
            <p className="text-base max-w-sm" style={{ color: 'var(--text-2)' }}>
              Every sector has unique technology needs. We know yours.
            </p>
          </div>
        </FadeUp>

        {/* Industries list */}
        <div className="flex flex-col" style={{ borderTop: '1px solid #1C1C22' }}>
          {industries.map((industry, i) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Link
                href={industry.href}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 transition-all duration-300"
                style={{ borderBottom: '1px solid #1C1C22' }}
              >
                {/* Number */}
                <span
                  className="text-sm font-mono font-bold flex-shrink-0"
                  style={{ color: '#0EA5E9', minWidth: '32px' }}
                >
                  {industry.number}
                </span>

                {/* Label */}
                <h3
                  className="text-xl md:text-2xl font-black flex-shrink-0 transition-colors duration-200"
                  style={{ color: '#ffffff', minWidth: '240px' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0EA5E9' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
                >
                  {industry.label}
                </h3>

                {/* Description */}
                <p className="text-sm flex-1" style={{ color: 'var(--text-3)' }}>
                  {industry.description}
                </p>

                {/* Tags */}
                <div className="hidden lg:flex items-center gap-2 flex-wrap max-w-xs">
                  {industry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded"
                      style={{ backgroundColor: 'rgba(14,165,233,0.08)', color: '#0EA5E9', border: '1px solid rgba(14,165,233,0.2)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <span
                  className="hidden md:block text-xl transition-all duration-300 group-hover:translate-x-2"
                  style={{ color: '#0EA5E9' }}
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
