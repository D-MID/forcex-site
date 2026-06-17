'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { MorphingWord } from '@/components/animations/MorphingWord'
import { FloatingIcons } from '@/components/animations/FloatingIcons'

const stats = [
  {
    value: 500, suffix: '+', label: 'Projects Completed',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
  {
    value: 200, suffix: '+', label: 'Clients Served',
    icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></>,
  },
  {
    raw: '<2hr', label: 'Avg Response Time',
    icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></>,
  },
  {
    value: 10, suffix: '+', label: 'Years Experience',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />,
  },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-scan"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Hero background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.22 }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3FBTgj49sQUhzXNCbluYS1CyNIy/hf_20260617_231516_8c0a2c6f-3888-4027-9527-f8e0fc92a694.mp4"
          type="video/mp4"
        />
      </video>
      {/* Video overlay for blending */}
      <div className="absolute inset-0 hero-img-overlay pointer-events-none" />

      {/* Fine grid */}
      <div className="absolute inset-0 grid-bg-fine pointer-events-none opacity-40" />

      {/* Floating tech icons */}
      <FloatingIcons />

      {/* Top glow — blue */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none float-ambient"
        style={{
          width: '900px', height: '550px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.22) 0%, rgba(14,165,233,0.06) 45%, transparent 70%)',
          filter: 'blur(1px)',
        }}
      />
      {/* Side glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.8, ease: 'easeOut' }}
        className="absolute -bottom-10 -left-32 pointer-events-none"
        style={{
          width: '500px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1.2, ease: 'easeOut' }}
        className="absolute top-1/3 -right-24 pointer-events-none"
        style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Vertical accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="absolute"
          style={{
            top: '8%', right: '12%', transformOrigin: 'top',
            width: '1px', height: '35%',
            background: 'linear-gradient(to bottom, transparent, rgba(14,165,233,0.4), transparent)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="absolute"
          style={{
            bottom: '15%', left: '10%', transformOrigin: 'bottom',
            width: '1px', height: '25%',
            background: 'linear-gradient(to top, transparent, rgba(14,165,233,0.25), transparent)',
          }}
        />
      </div>

      {/* Parallax content wrapper */}
      <motion.div style={{ y, opacity }} className="relative max-w-6xl mx-auto px-6 text-center pt-24 z-10 w-full">

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full flicker"
          style={{
            border: '1px solid rgba(14,165,233,0.3)',
            backgroundColor: 'rgba(14,165,233,0.06)',
            color: '#0EA5E9',
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full dot-pulse" style={{ backgroundColor: '#0EA5E9' }} />
          Sacramento &amp; Northern California
        </motion.div>

        {/* Main H1 */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6">
          {/* Line 1 */}
          <span className="block overflow-hidden mb-2">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              style={{ color: 'var(--text-1)' }}
            >
              Commercial IT Infrastructure,
            </motion.span>
          </span>
          {/* Line 2 — morphing accent word */}
          <span className="block overflow-hidden mb-2">
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            >
              <span style={{ color: 'var(--text-1)' }}>UniFi Networks &amp; </span>
              <MorphingWord
                words={['Low-Voltage', 'Smart Systems', 'Structured Cabling', 'Security']}
                interval={2800}
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 50%, #0284C7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline',
                }}
              />
            </motion.span>
          </span>
          {/* Line 3 */}
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              style={{ color: 'var(--text-1)' }}
            >
              Systems in{' '}
              <span style={{
                background: 'linear-gradient(135deg, #F0F6FC 20%, #0EA5E9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Sacramento</span>
            </motion.span>
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65, ease: 'easeOut' }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text-2)' }}
        >
          ForceX Tech builds the infrastructure that keeps Sacramento businesses running —
          enterprise-grade networking, structured cabling, security cameras, access control,
          and Loxone smart automation. One contractor. Complete solution.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.82, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link href="/contact" className="btn-primary" style={{ minWidth: '230px', fontSize: '15px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 12h6M12 9v6M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"/>
            </svg>
            Request a Site Assessment
          </Link>

          <motion.a
            href="#services"
            className="btn-outline flex items-center gap-2"
            style={{ minWidth: '200px', fontSize: '15px' }}
            whileHover={{ borderColor: '#0EA5E9', color: '#0EA5E9' }}
            whileTap={{ scale: 0.97 }}
          >
            View Commercial Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.0, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-3xl mx-auto rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--border)', backgroundColor: 'var(--border)' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-4 group cursor-default"
              style={{ backgroundColor: 'var(--bg-2)' }}
              whileHover={{ backgroundColor: 'rgba(14,165,233,0.04)' }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="mb-2 transition-all duration-300"
                style={{ color: '#0EA5E9', opacity: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.15 }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  {stat.icon}
                </svg>
              </motion.div>
              <span className="text-2xl md:text-3xl font-black mb-1 tabular-nums" style={{ color: '#0EA5E9', fontFamily: 'Inter, monospace' }}>
                {'raw' in stat ? stat.raw : (
                  <AnimatedCounter value={stat.value!} suffix={stat.suffix} />
                )}
              </span>
              <span className="text-xs text-center leading-tight" style={{ color: 'var(--text-3)' }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-6 text-xs font-medium tracking-widest uppercase"
          style={{ color: 'var(--text-4)', letterSpacing: '0.12em' }}
        >
          Trusted by dental offices · law firms · tech campuses · commercial properties
        </motion.p>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-4)' }}
      >
        <span className="text-xs uppercase" style={{ letterSpacing: '0.2em' }}>Scroll</span>
        <div className="relative flex flex-col items-center">
          <div className="w-px h-10 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, transparent, rgba(14,165,233,0.2))' }}>
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{ background: 'linear-gradient(to bottom, transparent, #0EA5E9, transparent)', height: '40%' }}
              animate={{ y: ['-100%', '300%'] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeIn' }}
            />
          </div>
          <motion.div
            animate={{ y: [0, 5, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            style={{ color: '#0EA5E9' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
