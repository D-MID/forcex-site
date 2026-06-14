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
      style={{ borderColor: '#1C1C22', backgroundColor: '#0D0D10' }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-0 flex-shrink-0">
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] px-6 whitespace-nowrap"
              style={{ color: i % 2 === 0 ? '#A1A1AA' : '#52525B' }}
            >
              {item}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#DC2626' }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
