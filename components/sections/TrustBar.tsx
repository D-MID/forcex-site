'use client'

import { FadeUp } from '@/components/animations/FadeUp'

const trustedBy = [
  'Dental Offices',
  'Medical Clinics',
  'Property Managers',
  'Contractors',
  'Commercial Businesses',
  'Residential Clients',
]

export function TrustBar() {
  return (
    <section className="section" style={{ backgroundColor: '#0D0D10', borderTop: '1px solid #1C1C22', borderBottom: '1px solid #1C1C22' }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-8" style={{ color: '#52525B' }}>
            Trusted by California businesses across every sector
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustedBy.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm font-medium rounded"
                style={{
                  border: '1px solid #1C1C22',
                  color: '#A1A1AA',
                  backgroundColor: '#0D0D10',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
