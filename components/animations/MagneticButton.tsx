'use client'

import { useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Props {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  href?: string
  strength?: number
}

export function MagneticButton({ children, className = '', style = {}, onClick, strength = 0.3 }: Props) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 22 })
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 22 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x, y, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}
