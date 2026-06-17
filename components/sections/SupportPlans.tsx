'use client'

import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'

const plans = [
  {
    name: 'Essential',
    tagline: 'For small businesses',
    price: 'Starting at $299',
    period: '/month',
    description: 'Core IT support and monitoring for small teams and offices.',
    features: [
      'Remote helpdesk support',
      'Network monitoring',
      'Security patch management',
      'Monthly health reports',
      'Business hours support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    tagline: 'Most popular',
    price: 'Starting at $599',
    period: '/month',
    description: 'Full managed IT with on-site visits for growing businesses.',
    features: [
      'Everything in Essential',
      'On-site support visits',
      'Backup & disaster recovery',
      'Vendor management',
      'Priority response (<2hr)',
      'Quarterly technology review',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Enterprise',
    tagline: 'Custom solutions',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored technology management for complex environments.',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Multi-site support',
      'Custom SLA agreements',
      '24/7 emergency support',
      'Strategic IT planning',
    ],
    cta: 'Contact Us',
    featured: false,
  },
]

export function SupportPlans() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeUp className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>
            Managed IT Plans
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Maintenance & Support Plans
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Predictable technology costs. Proactive support. No surprises.
          </p>
        </FadeUp>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--bg-4)' }}>
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.1}>
              <div
                className="relative p-8 flex flex-col h-full"
                style={{
                  backgroundColor: plan.featured ? '#121215' : '#0D0D10',
                  borderTop: plan.featured ? '2px solid #0EA5E9' : '2px solid transparent',
                }}
              >
                {plan.featured && (
                  <div
                    className="absolute top-0 right-6 -translate-y-full px-3 py-1 text-xs font-bold uppercase"
                    style={{ backgroundColor: '#0EA5E9', color: '#ffffff' }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-4)' }}>
                    {plan.tagline}
                  </p>
                  <h3 className="text-2xl font-black text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-black" style={{ color: plan.featured ? '#0EA5E9' : '#ffffff' }}>
                      {plan.price}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--text-3)' }}>{plan.period}</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-3)' }}>{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-2)' }}>
                      <span style={{ color: '#0EA5E9', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="block text-center py-3 px-6 text-sm font-bold rounded transition-all duration-200"
                  style={{
                    backgroundColor: plan.featured ? '#0EA5E9' : 'transparent',
                    color: plan.featured ? '#ffffff' : '#0EA5E9',
                    border: plan.featured ? 'none' : '1px solid #0EA5E9',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    if (plan.featured) el.style.backgroundColor = '#0284C7'
                    else { el.style.backgroundColor = '#0EA5E9'; el.style.color = '#ffffff' }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    if (plan.featured) el.style.backgroundColor = '#0EA5E9'
                    else { el.style.backgroundColor = 'transparent'; el.style.color = '#0EA5E9' }
                  }}
                >
                  {plan.cta} →
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="mt-8 text-center">
          <p className="text-sm" style={{ color: 'var(--text-4)' }}>
            All plans include a free initial assessment. No contracts required. Custom pricing available.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
