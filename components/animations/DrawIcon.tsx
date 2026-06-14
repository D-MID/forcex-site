'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  size?: number
  color?: string
  delay?: number
  className?: string
  style?: React.CSSProperties
}

// Wraps an SVG icon and animates strokeDashoffset to "draw" it in
export function DrawIcon({ children, size = 24, color = '#DC2626', delay = 0, className = '', style }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ filter: 'drop-shadow(0 0 0px rgba(220,38,38,0))' }}
        animate={inView ? { filter: 'drop-shadow(0 0 6px rgba(220,38,38,0.5))' } : {}}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
        style={{ color, width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Animated icon wrapper that pulses on hover
export function PulseIcon({ children, size = 24, className = '', style }: Props) {
  return (
    <motion.div
      className={className}
      style={{ width: size + 20, height: size + 20, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
      whileHover={{
        scale: 1.15,
        filter: 'drop-shadow(0 0 10px rgba(220,38,38,0.6))',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      {children}
    </motion.div>
  )
}

// Spinning ring around an icon
export function RingIcon({ children, delay = 0, className = '' }: Props) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ border: '1px solid rgba(220,38,38,0.3)' }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, delay, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ border: '1px solid rgba(220,38,38,0.15)' }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: delay + 0.4, ease: 'easeOut' }}
      />
      {children}
    </div>
  )
}
