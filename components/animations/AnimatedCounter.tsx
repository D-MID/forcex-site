'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1800, className = '' }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const steps = 60
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current++
      // Ease out cubic
      const progress = current / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (current >= steps) {
        setCount(value)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
