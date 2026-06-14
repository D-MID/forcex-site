'use client'

import { motion } from 'framer-motion'

const techIcons = [
  'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', // shield
  'M2 2h20v8H2zM2 14h20v8H2zM6 6h.01M6 18h.01', // server
  'M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01', // wifi
  'M22 12h-4l-3 9L9 3l-3 9H2', // activity
  'M13 2L3 14h9l-1 8 10-12h-9l1-8z', // zap
  'M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20', // globe
  'M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4', // lock
  'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18', // cpu
]

const positions = [
  { x: 3, y: 2 }, { x: 8, y: 5 }, { x: 14, y: 1 }, { x: 19, y: 4 }, { x: 25, y: 2 },
  { x: 5, y: 9 }, { x: 11, y: 7 }, { x: 17, y: 8 }, { x: 22, y: 6 },
  { x: 2, y: 14 }, { x: 7, y: 12 }, { x: 13, y: 15 }, { x: 20, y: 13 }, { x: 26, y: 11 },
]

export function IconGrid({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${pos.x * 3.8}%`, top: `${pos.y * 7}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, opacity, opacity * 0.5, opacity] }}
          transition={{
            duration: 6 + (i % 4),
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(220,38,38,0.7)" strokeWidth="1.5" strokeLinecap="round">
            <path d={techIcons[i % techIcons.length]} />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
