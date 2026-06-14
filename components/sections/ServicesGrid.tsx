'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp } from '@/components/animations/FadeUp'
import { TiltCard } from '@/components/animations/TiltCard'
import { TextReveal } from '@/components/animations/TextReveal'
import { ServiceModal } from '@/components/sections/ServiceModal'
import { serviceData } from '@/lib/serviceData'
import type { ServiceDetail } from '@/components/sections/ServiceModal'
import Link from 'next/link'

export function ServicesGrid() {
  const [selected, setSelected] = useState<ServiceDetail | null>(null)

  return (
    <>
      <ServiceModal service={selected} onClose={() => setSelected(null)} />

      <section className="section" style={{ backgroundColor: '#08080A' }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <FadeUp className="mb-16 text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#DC2626' }}>
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              <TextReveal text="Complete Technology Solutions" />
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
              From the cable in the wall to the cloud above it — ForceX handles every layer of your technology infrastructure.
            </p>
          </FadeUp>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceData.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
              >
                <TiltCard
                  onClick={() => setSelected(service)}
                  className="group p-8 flex flex-col gap-4 transition-all duration-300 cursor-pointer h-full card-hover relative"
                  style={{ backgroundColor: '#0D0D10', border: '1px solid #1C1C22' }}
                  intensity={6}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded transition-colors duration-300"
                    style={{ color: '#DC2626', backgroundColor: 'rgba(220,38,38,0.08)', borderRadius: '8px' }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>
                    {service.description.slice(0, 90)}…
                  </p>
                  <div
                    className="mt-auto text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2"
                    style={{ color: '#DC2626' }}
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                    >
                      →
                    </motion.span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <FadeUp delay={0.2} className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded transition-all duration-200"
              style={{ border: '1px solid #26262E', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#DC2626'
                ;(e.currentTarget as HTMLElement).style.color = '#DC2626'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#26262E'
                ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
              }}
            >
              View All Services →
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
