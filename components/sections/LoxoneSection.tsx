'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'
import { IconGrid } from '@/components/animations/IconGrid'

const capabilities = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Intelligent Lighting',
    desc: 'Scenes, schedules, daylight harvesting, and motion-triggered control — automatically, every time.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>
      </svg>
    ),
    title: 'Smart Climate',
    desc: 'Zone-based HVAC, radiant floor heating, and humidity control that reacts to weather and occupancy.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: 'Access & Security',
    desc: 'NFC keypads, smart locks, intercom, alarm zones, and door sensors — unified in one platform.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
      </svg>
    ),
    title: 'Whole-Home Audio',
    desc: 'Multi-room audio with zone control, source selection, and streaming — managed from one app.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Energy Management',
    desc: 'Solar integration, EV charging, automated shutoff in empty rooms — drastically cuts utility bills.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    title: 'Automated Shading',
    desc: 'Motorized blinds and shades that follow the sun, reduce glare, and maintain perfect temperature.',
  },
]

const whyLoxone = [
  { label: 'No Monthly Fees', sub: 'You own the hardware. No subscriptions, ever.' },
  { label: 'No Cloud Dependency', sub: 'Runs locally — works even when internet is down.' },
  { label: 'Full Admin Access', sub: 'You get the admin credentials. No dealer lock-in.' },
  { label: '300,000+ Installs', sub: 'Trusted worldwide in homes, hotels, and hospitals.' },
]

export function LoxoneSection() {
  return (
    <section className="relative section overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <IconGrid opacity={0.025} />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Badge */}
        <FadeUp className="mb-6 flex items-center gap-3">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ border: '1px solid rgba(14,165,233,0.35)', backgroundColor: 'rgba(14,165,233,0.07)', color: '#0EA5E9' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Official Loxone Partner
          </div>
        </FadeUp>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6">
              Your Building,{' '}
              <span style={{ color: '#0EA5E9' }}>Fully Alive.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-2)' }}>
              ForceX Tech is a certified Loxone Partner — one of the world's most advanced building automation platforms. We design, program, and install complete Loxone systems for homes, offices, dental practices, hotels, and commercial buildings across Northern California.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-3)' }}>
              Loxone is not Alexa. It's not a collection of Wi-Fi gadgets. It's a single, wired, locally-run platform that controls lighting, climate, shading, audio, security, and energy — all from one app, with zero monthly fees and no cloud dependency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/loxone"
                className="px-8 py-4 text-base font-bold text-white rounded text-center transition-all duration-200"
                style={{ backgroundColor: '#0EA5E9' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0284C7' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0EA5E9' }}
              >
                Explore Loxone →
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 text-base font-bold text-white rounded text-center transition-all duration-200"
                style={{ border: '1px solid #26262E' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#0EA5E9'
                  ;(e.currentTarget as HTMLElement).style.color = '#0EA5E9'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-2)'
                  ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
                }}
              >
                Book a Consultation
              </Link>
            </div>
          </FadeUp>

          {/* Why Loxone stats */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
              {whyLoxone.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
                  className="p-6 rounded-lg flex flex-col gap-2"
                  style={{ backgroundColor: 'var(--bg-2)', border: '1px solid #1C1C22' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#0EA5E9' }} />
                  <h4 className="text-base font-bold text-white">{item.label}</h4>
                  <p className="text-sm" style={{ color: 'var(--text-3)' }}>{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '1px', backgroundColor: 'var(--bg-4)', transformOrigin: 'left', marginBottom: '4rem' }}
        />

        {/* Capabilities grid */}
        <FadeUp className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: '#0EA5E9' }}>
            What We Can Automate For You
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="group flex gap-4 p-6 rounded-lg transition-all duration-300"
              style={{ backgroundColor: 'var(--bg-2)', border: '1px solid #1C1C22' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,165,233,0.3)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
            >
              <motion.div
                className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0 mt-0.5"
                style={{ color: '#0EA5E9', backgroundColor: 'rgba(14,165,233,0.08)' }}
                whileHover={{
                  scale: 1.15,
                  backgroundColor: 'rgba(14,165,233,0.18)',
                  filter: 'drop-shadow(0 0 6px rgba(14,165,233,0.4))',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {cap.icon}
              </motion.div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{cap.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 rounded-lg"
          style={{ backgroundColor: 'var(--bg-2)', border: '1px solid rgba(14,165,233,0.2)' }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0EA5E9' }}>
              The Smartest Tech is the Tech You Never Notice
            </p>
            <p className="text-lg font-bold text-white">
              Ready to make your building work for you — automatically?
            </p>
          </div>
          <Link
            href="/loxone"
            className="flex-shrink-0 px-8 py-4 text-sm font-bold text-white rounded transition-all duration-200 whitespace-nowrap"
            style={{ border: '1px solid #0EA5E9', color: '#0EA5E9' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#0EA5E9'
              ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              ;(e.currentTarget as HTMLElement).style.color = '#0EA5E9'
            }}
          >
            Deep Dive into Loxone →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
