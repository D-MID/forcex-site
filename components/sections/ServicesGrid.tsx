'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ServiceModal } from '@/components/sections/ServiceModal'
import { serviceData } from '@/lib/serviceData'
import type { ServiceDetail } from '@/components/sections/ServiceModal'
import Link from 'next/link'

function ServiceRow({ service, index, onOpen }: { service: ServiceDetail; index: number; onOpen: () => void }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
    >
      <button
        onClick={onOpen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full text-left"
        aria-label={`Learn more about ${service.title}`}
      >
        <div
          className="flex items-start md:items-center gap-6 md:gap-10 py-7 transition-all duration-200"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          {/* Number */}
          <span
            className="text-xs font-black tabular-nums flex-shrink-0 transition-colors duration-300 mt-1 md:mt-0"
            style={{
              color: hovered ? '#0EA5E9' : 'var(--text-4)',
              fontFamily: 'Inter, monospace',
              letterSpacing: '0.05em',
              minWidth: '28px',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Icon */}
          <motion.div
            animate={{ color: hovered ? '#0EA5E9' : 'var(--text-4)' }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 hidden md:block"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              {service.icon}
            </svg>
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <motion.h3
              animate={{ color: hovered ? '#F0F6FC' : 'var(--text-1)' }}
              transition={{ duration: 0.2 }}
              className="text-lg md:text-xl font-bold leading-tight mb-1"
            >
              {service.title}
            </motion.h3>
            <AnimatePresence>
              {hovered && (
                <motion.p
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 4 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="text-sm leading-relaxed overflow-hidden"
                  style={{ color: 'var(--text-2)' }}
                >
                  {service.description.slice(0, 110)}…
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: hovered ? 5 : 0, color: hovered ? '#0EA5E9' : 'var(--text-4)' }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.div>
        </div>
      </button>
    </motion.div>
  )
}

export function ServicesGrid() {
  const [selected, setSelected] = useState<ServiceDetail | null>(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <>
      <ServiceModal service={selected} onClose={() => setSelected(null)} />

      <section className="section" style={{ backgroundColor: 'var(--bg)' }} id="services">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <div ref={headerRef} className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="section-label"
              >
                What We Do
              </motion.span>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  animate={headerInView ? { y: '0%' } : {}}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="text-4xl md:text-5xl font-black"
                  style={{ color: 'var(--text-1)', letterSpacing: '-0.03em' }}
                >
                  Complete Technology Solutions
                </motion.h2>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm max-w-xs md:text-right hidden md:block"
              style={{ color: 'var(--text-3)', lineHeight: 1.7 }}
            >
              From the cable in the wall to the cloud above it — ForceX handles every layer of your infrastructure.
            </motion.p>
          </div>

          {/* Top rule */}
          <div style={{ borderTop: '1px solid var(--border)' }} />

          {/* Service list */}
          <div>
            {serviceData.map((service, i) => (
              <ServiceRow
                key={service.title}
                service={service}
                index={i}
                onOpen={() => setSelected(service)}
              />
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <p className="text-sm" style={{ color: 'var(--text-3)' }}>
              Not sure what you need? We'll figure it out together.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '14px', padding: '10px 24px' }}>
              Request a Site Assessment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
