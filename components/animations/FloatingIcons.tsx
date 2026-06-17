'use client'

import { motion } from 'framer-motion'

const icons = [
  // WiFi
  { path: 'M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01', size: 24, x: '8%', y: '20%', delay: 0, duration: 9 },
  // Shield
  { path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', size: 22, x: '88%', y: '18%', delay: 1.2, duration: 11 },
  // Server
  { path: 'M2 2h20v8H2zM2 14h20v8H2zM6 6h.01M6 18h.01', size: 20, x: '15%', y: '70%', delay: 0.6, duration: 13 },
  // Lock
  { path: 'M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4', size: 18, x: '82%', y: '65%', delay: 2, duration: 10 },
  // Cpu
  { path: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18', size: 22, x: '92%', y: '42%', delay: 1.5, duration: 12 },
  // Activity
  { path: 'M22 12h-4l-3 9L9 3l-3 9H2', size: 20, x: '5%', y: '45%', delay: 3, duration: 14 },
  // Globe
  { path: 'M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z', size: 20, x: '75%', y: '28%', delay: 0.3, duration: 16 },
  // Zap
  { path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', size: 18, x: '22%', y: '88%', delay: 2.5, duration: 10 },
  // Camera
  { path: 'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z', size: 20, x: '60%', y: '82%', delay: 1.8, duration: 11 },
  // Radio tower
  { path: 'M1.42 9a16 16 0 0121.16 0M5 12.55a11 11 0 0114.08 0M12 20h.01M8.53 16.11a6 6 0 016.95 0', size: 18, x: '40%', y: '14%', delay: 0.9, duration: 15 },
]

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: icon.x, top: icon.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.18, 0.18, 0],
            y: [20, 0, -20, -40],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: icon.duration * 0.7, repeat: Infinity, ease: 'easeInOut', delay: icon.delay }}
          >
            <svg
              width={icon.size}
              height={icon.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(14,165,233,0.6)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={icon.path} />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
