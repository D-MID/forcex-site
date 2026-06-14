'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { MorphingWord } from '@/components/animations/MorphingWord'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-scan"
      style={{ backgroundColor: '#08080A' }}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute"
          style={{
            top: '10%', right: '5%',
            width: '1px', height: '40%',
            background: 'linear-gradient(to bottom, transparent, rgba(220,38,38,0.4), transparent)',
          }}
        />
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute"
          style={{
            bottom: '20%', left: '8%',
            width: '1px', height: '30%',
            background: 'linear-gradient(to bottom, transparent, rgba(220,38,38,0.25), transparent)',
          }}
        />
      </div>

      {/* Red glow orb — center top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none float-ambient"
        style={{
          width: '800px', height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.2) 0%, rgba(220,38,38,0.06) 40%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
      {/* Ambient orb — bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5, ease: 'easeOut' }}
        className="absolute bottom-1/4 -left-20 pointer-events-none"
        style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animationDelay: '2s',
        }}
      />
      {/* Ambient orb — top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1, ease: 'easeOut' }}
        className="absolute top-1/4 -right-20 pointer-events-none"
        style={{
          width: '300px', height: '300px',
          background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animationDelay: '4s',
        }}
      />

      {/* Parallax content */}
      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-6 text-center pt-24 z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full flicker"
          style={{
            border: '1px solid rgba(220,38,38,0.35)',
            backgroundColor: 'rgba(220,38,38,0.07)',
            color: '#DC2626',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          Sacramento &amp; Northern California
        </motion.div>

        {/* Headline — word by word */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6">
          {['Enterprise', 'Technology.'].map((word, i) => (
            <span key={word} className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom', marginRight: '0.25em' }}>
              <motion.span
                className="inline-block text-white"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
          <br />
          <span className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom', marginRight: '0.25em' }}>
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'linear-gradient(135deg, #ffffff 30%, #DC2626 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              <MorphingWord
                words={['Deployed', 'Secured', 'Managed', 'Optimized']}
                interval={2600}
                style={{
                  background: 'linear-gradient(135deg, #ffffff 30%, #DC2626 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              />
            </motion.span>
          </span>
          <span className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'linear-gradient(135deg, #ffffff 30%, #DC2626 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Right.
            </motion.span>
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: 'easeOut' }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#A1A1AA' }}
        >
          ForceX Tech delivers complete IT infrastructure — networking, security, cabling,
          and smart systems — for businesses and homes across Sacramento and Northern California.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link href="/contact">
            <MagneticButton
              className="px-8 py-4 text-base font-bold text-white rounded glow-pulse"
              style={{ backgroundColor: '#DC2626', minWidth: '220px' }}
            >
              Request a Free Quote
            </MagneticButton>
          </Link>

          <motion.a
            href="tel:+19165995514"
            whileHover={{ borderColor: '#DC2626', color: '#DC2626', scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white rounded transition-colors duration-200"
            style={{ border: '1px solid #26262E', minWidth: '220px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68 2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.83a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            (916) 599-5514
          </motion.a>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-3xl mx-auto rounded-lg overflow-hidden"
          style={{ border: '1px solid #1C1C22', backgroundColor: '#1C1C22' }}
        >
          {[
            { value: 500, suffix: '+', label: 'Projects Completed' },
            { value: 200, suffix: '+', label: 'Clients Served' },
            { raw: '<2hr', label: 'Response Time' },
            { value: 10, suffix: '+', label: 'Years Experience' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-4"
              style={{ backgroundColor: '#0D0D10' }}
            >
              <span
                className="text-2xl md:text-3xl font-black mb-1"
                style={{ color: '#DC2626', fontFamily: 'monospace' }}
              >
                {'raw' in stat ? stat.raw : (
                  <AnimatedCounter value={stat.value!} suffix={stat.suffix} />
                )}
              </span>
              <span className="text-xs text-center" style={{ color: '#71717A' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #08080A)' }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#52525B' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
