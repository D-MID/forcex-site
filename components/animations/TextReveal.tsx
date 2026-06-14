'use client'

import { motion } from 'framer-motion'

interface Props {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export function TextReveal({ text, className = '', delay = 0, stagger = 0.04 }: Props) {
  const words = text.split(' ')

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
          <motion.span
            className="inline-block"
            initial={{ y: '105%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.55,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}{i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

// Line by line reveal (for multi-line headings)
export function LineReveal({ lines, className = '', delay = 0 }: { lines: string[], className?: string, delay?: number }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
          <motion.span
            className="block"
            initial={{ y: '105%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
