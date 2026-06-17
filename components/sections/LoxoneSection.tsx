'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const capabilities = [
  { number: '01', title: 'Intelligent Lighting', desc: 'Scenes, schedules, daylight harvesting, and motion-triggered control — automatically, every time.' },
  { number: '02', title: 'Smart Climate', desc: 'Zone-based HVAC, radiant floor heating, and humidity control that reacts to weather and occupancy.' },
  { number: '03', title: 'Access & Security', desc: 'NFC keypads, smart locks, intercom, alarm zones, and door sensors — unified in one platform.' },
  { number: '04', title: 'Whole-Building Audio', desc: 'Multi-room audio with zone control, source selection, and streaming — managed from one app.' },
  { number: '05', title: 'Energy Management', desc: 'Solar integration, EV charging, automated shutoff in empty rooms — drastically cuts utility bills.' },
  { number: '06', title: 'Automated Shading', desc: 'Motorized blinds and shades that follow the sun, reduce glare, and maintain perfect temperature.' },
]

const facts = [
  { value: 'No Fees', label: 'No monthly subscriptions, ever' },
  { value: 'Local', label: 'Runs offline, cloud-independent' },
  { value: 'Open', label: 'Full admin access, no lock-in' },
  { value: '300k+', label: 'Installs worldwide' },
]

function CapabilityRow({ cap, index }: { cap: typeof capabilities[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      className="grid grid-cols-12 gap-4 md:gap-8 py-7 group cursor-default"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div className="col-span-1 flex items-start pt-0.5">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.055 }}
          className="text-xs font-mono tabular-nums"
          style={{ color: 'var(--text-4)' }}
        >
          {cap.number}
        </motion.span>
      </div>

      <div className="col-span-5 md:col-span-4">
        <div className="overflow-hidden">
          <motion.h4
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.6, delay: index * 0.055 + 0.04, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="text-sm md:text-base font-bold"
            style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}
          >
            {cap.title}
          </motion.h4>
        </div>
      </div>

      <div className="col-span-5 md:col-span-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.055 + 0.15 }}
          className="text-sm leading-relaxed"
          style={{ color: 'var(--text-3)' }}
        >
          {cap.desc}
        </motion.p>
      </div>

      <div className="hidden md:flex col-span-1 items-start justify-end pt-0.5">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.055 + 0.18 }}
          className="text-sm group-hover:translate-x-1 transition-transform duration-300"
          style={{ color: 'var(--text-4)' }}
        >
          →
        </motion.span>
      </div>
    </div>
  )
}

export function LoxoneSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const factsRef = useRef(null)
  const factsInView = useInView(factsRef, { once: true })

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="hidden md:block md:col-span-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-mono tabular-nums"
              style={{ color: 'var(--text-4)' }}
            >
              05
            </motion.span>
          </div>

          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="section-label"
            >
              Loxone Certified Partner
            </motion.span>
            <div className="overflow-hidden mt-2">
              <motion.h2
                initial={{ y: '100%' }}
                animate={headerInView ? { y: '0%' } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.04em' }}
              >
                Your Building,
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
                Fully Alive.
              </motion.h2>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-end gap-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22, ease: 'easeOut' }}
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-2)' }}
            >
              We design, program, and install complete Loxone systems — a single, wired, locally-run platform that controls lighting, climate, shading, audio, security, and energy with zero monthly fees and no cloud dependency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/loxone" className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
                Explore Loxone →
              </Link>
              <Link href="/contact" className="btn-outline" style={{ fontSize: '14px', padding: '10px 20px' }}>
                Book Consult
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Capabilities label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold uppercase tracking-[0.18em]"
          style={{ color: 'var(--text-4)' }}
        >
          What We Automate
        </motion.p>

        <div style={{ borderTop: '1px solid var(--border)', marginTop: '1rem' }} />

        {/* Capabilities list */}
        {capabilities.map((cap, i) => (
          <CapabilityRow key={cap.number} cap={cap} index={i} />
        ))}

        {/* Facts strip */}
        <div
          ref={factsRef}
          className="grid grid-cols-2 md:grid-cols-4 mt-16"
          style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          {facts.map((f, i) => (
            <motion.div
              key={f.value}
              initial={{ opacity: 0, y: 8 }}
              animate={factsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="py-6 px-4 flex flex-col gap-1.5"
              style={{
                borderRight: i < facts.length - 1 ? '1px solid var(--border)' : 'none',
                borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                className="text-xl font-black"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.03em' }}
              >
                {f.value}
              </span>
              <span className="text-xs leading-snug" style={{ color: 'var(--text-4)' }}>
                {f.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
