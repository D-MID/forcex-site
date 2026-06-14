'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface ServiceDetail {
  title: string
  tagline: string
  description: string
  icon: React.ReactNode
  color?: string
  whatWeDeliver: { title: string; description: string }[]
  process: { step: string; title: string; description: string }[]
  benefits: string[]
  industries: string[]
}

interface Props {
  service: ServiceDetail | null
  onClose: () => void
}

export function ServiceModal({ service, onClose }: Props) {
  // Lock body scroll when open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [service])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-[99990]"
            style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
          />

          {/* Panel — slides in from right */}
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[99991] overflow-y-auto"
            style={{
              width: 'min(860px, 100vw)',
              backgroundColor: '#08080A',
              borderLeft: '1px solid #1C1C22',
            }}
          >
            {/* Red accent line top */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'sticky',
                top: 0,
                height: '2px',
                background: 'linear-gradient(to right, #DC2626, transparent)',
                transformOrigin: 'left',
                zIndex: 10,
              }}
            />

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 z-10"
              style={{ border: '1px solid #26262E', color: '#A1A1AA', backgroundColor: '#0D0D10' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#DC2626'
                ;(e.currentTarget as HTMLElement).style.color = '#DC2626'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#26262E'
                ;(e.currentTarget as HTMLElement).style.color = '#A1A1AA'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </motion.button>

            <div className="px-8 md:px-14 pt-14 pb-20">

              {/* Icon + Category */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 mb-8"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ backgroundColor: 'rgba(220,38,38,0.1)', color: '#DC2626' }}
                >
                  {service.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#DC2626' }}>
                  ForceX Tech · Service
                </span>
              </motion.div>

              {/* Headline */}
              <div className="overflow-hidden mb-4">
                <motion.h2
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-6xl font-black text-white leading-none"
                >
                  {service.title}
                </motion.h2>
              </div>

              {/* Tagline */}
              <div className="overflow-hidden mb-8">
                <motion.p
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl md:text-2xl font-light"
                  style={{ color: '#DC2626' }}
                >
                  {service.tagline}
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base leading-relaxed mb-14"
                style={{ color: '#A1A1AA', maxWidth: '640px' }}
              >
                {service.description}
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '1px', backgroundColor: '#1C1C22', transformOrigin: 'left', marginBottom: '3.5rem' }}
              />

              {/* What We Deliver */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-14"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-8" style={{ color: '#DC2626' }}>
                  What We Deliver
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.whatWeDeliver.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 + i * 0.07, duration: 0.5 }}
                      className="p-5 rounded-lg"
                      style={{ backgroundColor: '#0D0D10', border: '1px solid #1C1C22' }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#DC2626' }} />
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Our Process */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-14"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-8" style={{ color: '#DC2626' }}>
                  Our Process
                </p>
                <div className="flex flex-col gap-0">
                  {service.process.map((step, i) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.65 + i * 0.08, duration: 0.5 }}
                      className="flex gap-6 pb-8 relative"
                    >
                      {/* Line */}
                      {i < service.process.length - 1 && (
                        <div
                          className="absolute left-[18px] top-8 bottom-0 w-px"
                          style={{ backgroundColor: '#1C1C22' }}
                        />
                      )}
                      {/* Step number */}
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black"
                        style={{ border: '1px solid #DC2626', color: '#DC2626', backgroundColor: 'rgba(220,38,38,0.05)' }}
                      >
                        {step.step}
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mb-14"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6" style={{ color: '#DC2626' }}>
                  Why It Matters
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.benefits.map((b, i) => (
                    <motion.span
                      key={b}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.72 + i * 0.05, duration: 0.4 }}
                      className="px-4 py-2 text-sm font-medium rounded-full"
                      style={{ border: '1px solid #26262E', color: '#A1A1AA', backgroundColor: '#0D0D10' }}
                    >
                      {b}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Industries */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="mb-14"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#52525B' }}>
                  Common Industries
                </p>
                <p className="text-sm" style={{ color: '#52525B' }}>
                  {service.industries.join(' · ')}
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="/contact"
                  className="px-8 py-4 text-base font-bold text-white rounded text-center transition-all duration-200"
                  style={{ backgroundColor: '#DC2626' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#B91C1C' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#DC2626' }}
                >
                  Get a Free Quote →
                </a>
                <a
                  href="tel:+19165995514"
                  className="px-8 py-4 text-base font-bold text-white rounded text-center transition-all duration-200"
                  style={{ border: '1px solid #26262E' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#DC2626'
                    ;(e.currentTarget as HTMLElement).style.color = '#DC2626'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#26262E'
                    ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
                  }}
                >
                  Call (916) 599-5514
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
