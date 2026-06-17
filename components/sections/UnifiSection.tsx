'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    number: '01',
    title: 'WiFi 6 & 6E Access Points',
    desc: 'Enterprise-grade APs handle hundreds of simultaneous clients. Zero dead zones across offices, warehouses, and multi-story buildings.',
  },
  {
    number: '02',
    title: 'VLAN Network Segmentation',
    desc: "Staff, guests, IoT devices, and cameras on completely separate networks. One breach can't reach everything.",
  },
  {
    number: '03',
    title: 'Enterprise Firewall & IDS/IPS',
    desc: 'UniFi Dream Machine with intrusion detection, content filtering, GeoIP blocking, and real-time threat detection built in.',
  },
  {
    number: '04',
    title: 'UniFi Protect Cameras',
    desc: '4K IP cameras with local NVR recording, AI-powered motion detection, and live view from anywhere — all inside UniFi.',
  },
  {
    number: '05',
    title: 'Door Access Control',
    desc: 'NFC and PIN readers at every door, managed from the same controller as your network. Full access logs included.',
  },
  {
    number: '06',
    title: 'WAN Failover & SD-WAN',
    desc: 'Dual ISP failover keeps your office online even when your primary connection drops. Automatic, instant, silent.',
  },
  {
    number: '07',
    title: 'UniFi Talk VoIP',
    desc: 'Business phone system built into your UniFi network. Physical desk phones, mobile app, and auto-attendant included.',
  },
  {
    number: '08',
    title: 'Multi-Site Cloud Management',
    desc: 'Manage all your locations from a single dashboard. One login, full visibility across every office and branch.',
  },
]

function FeatureRow({ f, index }: { f: typeof features[0]; index: number }) {
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
          transition={{ duration: 0.4, delay: index * 0.04 }}
          className="text-xs font-mono tabular-nums"
          style={{ color: 'var(--text-4)' }}
        >
          {f.number}
        </motion.span>
      </div>

      <div className="col-span-5 md:col-span-4">
        <div className="overflow-hidden">
          <motion.h4
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.55, delay: index * 0.04 + 0.04, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="text-sm md:text-base font-bold"
            style={{ color: 'var(--text-1)', letterSpacing: '-0.015em' }}
          >
            {f.title}
          </motion.h4>
        </div>
      </div>

      <div className="col-span-5 md:col-span-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.04 + 0.14 }}
          className="text-sm leading-relaxed"
          style={{ color: 'var(--text-3)' }}
        >
          {f.desc}
        </motion.p>
      </div>

      <div className="hidden md:flex col-span-1 items-start justify-end pt-0.5">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.04 + 0.18 }}
          className="text-sm group-hover:translate-x-1 transition-transform duration-300"
          style={{ color: 'var(--text-4)' }}
        >
          →
        </motion.span>
      </div>
    </div>
  )
}

export function UnifiSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
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
              06
            </motion.span>
          </div>

          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="section-label"
            >
              Ubiquiti Professional Installers
            </motion.span>
            <div className="overflow-hidden mt-2">
              <motion.h2
                initial={{ y: '100%' }}
                animate={headerInView ? { y: '0%' } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.04em' }}
              >
                Networks Built
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
                to Perform.
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
              We design and install Ubiquiti UniFi networks for homes and businesses across Sacramento. Enterprise-grade reliability, fast and secure, managed from a single dashboard — without the enterprise price tag.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/unifi" className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
                Explore UniFi →
              </Link>
              <Link href="/contact" className="btn-outline" style={{ fontSize: '14px', padding: '10px 20px' }}>
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>

        {/* List label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold uppercase tracking-[0.18em]"
          style={{ color: 'var(--text-4)' }}
        >
          What&rsquo;s Included
        </motion.p>

        <div style={{ borderTop: '1px solid var(--border)', marginTop: '1rem' }} />

        {/* Feature rows */}
        {features.map((f, i) => (
          <FeatureRow key={f.number} f={f} index={i} />
        ))}

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-12"
        >
          <p className="text-sm" style={{ color: 'var(--text-3)' }}>
            Site-surveyed · Professionally cabled · Documented handoff
          </p>
          <a
            href="tel:+19165995514"
            className="text-sm font-bold transition-colors duration-200"
            style={{ color: 'var(--text-3)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-1)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-3)' }}
          >
            (916) 599-5514
          </a>
        </motion.div>

      </div>
    </section>
  )
}
