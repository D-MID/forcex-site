'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)

  const dotX = useSpring(mx, { stiffness: 800, damping: 50 })
  const dotY = useSpring(my, { stiffness: 800, damping: 50 })
  const ringX = useSpring(mx, { stiffness: 120, damping: 28 })
  const ringY = useSpring(my, { stiffness: 120, damping: 28 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      if (!visible) setVisible(true)
    }
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-hover]')) setHovering(true)
    }
    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('a, button, [data-hover]')) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [mx, my, visible])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0, top: 0,
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
          width: clicking ? '6px' : '8px',
          height: clicking ? '6px' : '8px',
          backgroundColor: '#0EA5E9',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: 'width 0.15s, height 0.15s',
          mixBlendMode: 'normal',
        }}
      />
      {/* Ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0, top: 0,
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          width: hovering ? '48px' : clicking ? '24px' : '36px',
          height: hovering ? '48px' : clicking ? '24px' : '36px',
          border: hovering ? '1px solid rgba(14,165,233,0.9)' : '1px solid rgba(14,165,233,0.45)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.2s ease',
          boxShadow: hovering ? '0 0 12px rgba(14,165,233,0.3)' : 'none',
        }}
      />
    </>
  )
}
