'use client'

const items = [
  'IT Support',
  'Managed Services',
  'UniFi Networking',
  'Structured Cabling',
  'Security Cameras',
  'Access Control',
  'Smart Home Automation',
  'Audio / Video',
  'Sacramento, CA',
  '24/7 Response',
]

export function MarqueeTicker() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-2)' }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-0 flex-shrink-0">
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] px-6 whitespace-nowrap"
              style={{ color: i % 2 === 0 ? 'var(--text-2)' : 'var(--text-4)' }}
            >
              {item}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#0EA5E9' }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
