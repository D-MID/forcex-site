'use client'

import { useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Props {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  intensity?: number
  onClick?: () => void
}

export function TiltCard({ children, className = '', style = {}, intensity = 10, onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-1, 1], [intensity, -intensity]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-1, 1], [-intensity, intensity]), { stiffness: 300, damping: 30 })
  const glowOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width * 2 - 1  // -1 to 1
    const ny = (e.clientY - rect.top) / rect.height * 2 - 1  // -1 to 1
    x.set(nx)
    y.set(ny)
    glowOpacity.set(1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    glowOpacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 800,
        ...style,
      }}
      className={className}
    >
      {children}
      {/* Red glow on tilt */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(14,165,233,0.08), transparent 70%)',
          borderRadius: 'inherit',
          opacity: glowOpacity,
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  )
}
