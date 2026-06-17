'use client'

import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'
import { motion } from 'framer-motion'

export function FinalCTA() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Red glow behind */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#0EA5E9' }}>
            Ready to Get Started?
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Your Infrastructure.{' '}
            <span style={{ color: '#0EA5E9' }}>Our Expertise.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Whether you need a quick fix or a complete technology overhaul, ForceX Tech is ready. Schedule a free consultation and get a clear plan within 24 hours.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-bold text-white rounded transition-all duration-200 glow-red"
              style={{ backgroundColor: '#0EA5E9', minWidth: '220px', textAlign: 'center' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0284C7' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0EA5E9' }}
            >
              Request a Free Quote
            </Link>
            <motion.a
              href="tel:+19165995514"
              whileHover={{ borderColor: '#0EA5E9', color: '#0EA5E9', scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 text-base font-bold text-white rounded"
              style={{ border: '1px solid #26262E', minWidth: '220px', textAlign: 'center', display: 'block' }}
            >
              Call (916) 599-5514
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
