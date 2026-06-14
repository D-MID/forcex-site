'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeUpProps {
  children: ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export function FadeUp({ children, delay = 0, className = '', once = true }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, delay = 0, className = '' }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
