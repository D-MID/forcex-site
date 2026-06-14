'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  words: string[]
  interval?: number
  className?: string
  style?: React.CSSProperties
}

export function MorphingWord({ words, interval = 2400, className = '', style }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(t)
  }, [words.length, interval])

  return (
    <span className={`relative inline-block overflow-hidden ${className}`} style={style}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className="inline-block"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
