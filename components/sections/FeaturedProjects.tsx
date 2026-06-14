'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'
import { TextReveal } from '@/components/animations/TextReveal'

const projects = [
  {
    number: '01',
    category: 'Dental Office',
    title: 'Complete Network & Security Overhaul',
    description: 'Deployed UniFi enterprise networking, structured cabling, 12-camera IP security system, and workstation setup for a 6-operatory dental practice in Sacramento.',
    tags: ['UniFi Networking', 'Security Cameras', 'Structured Cabling', 'Workstations'],
  },
  {
    number: '02',
    category: 'Commercial Property',
    title: 'Multi-Building Access Control System',
    description: 'Designed and installed a centralized access control system across 3 commercial buildings with keycard readers, intercoms, and remote management capability.',
    tags: ['Access Control', 'Intercoms', 'Remote Management', 'Low Voltage'],
  },
  {
    number: '03',
    category: 'Custom Residence',
    title: 'Smart Home Automation & AV',
    description: 'Full smart home integration including lighting control, whole-home audio, home theater, automated shading, and UniFi Wi-Fi covering 6,000 sq ft.',
    tags: ['Smart Home', 'Home Theater', 'Whole-Home Audio', 'UniFi Wi-Fi'],
  },
]

export function FeaturedProjects() {
  return (
    <section className="section" style={{ backgroundColor: '#0D0D10' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeUp className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#DC2626' }}>
              Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              <TextReveal text="Recent Projects" />
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-bold transition-colors duration-200 flex-shrink-0"
            style={{ color: '#DC2626' }}
          >
            View All Projects →
          </Link>
        </FadeUp>

        {/* Projects */}
        <div className="flex flex-col gap-px" style={{ border: '1px solid #1C1C22' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="group flex flex-col lg:flex-row gap-8 p-8 lg:p-10 transition-colors duration-300"
              style={{ backgroundColor: '#0D0D10', borderBottom: '1px solid #1C1C22' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#121215' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0D0D10' }}
            >
              {/* Number + Category */}
              <div className="flex-shrink-0 flex flex-row lg:flex-col gap-4 lg:gap-2 lg:w-40">
                <span className="text-3xl font-black" style={{ color: 'rgba(220,38,38,0.3)', fontFamily: 'monospace' }}>
                  {project.number}
                </span>
                <span
                  className="text-xs font-bold uppercase tracking-widest self-end lg:self-start"
                  style={{ color: '#DC2626' }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-base leading-relaxed mb-5" style={{ color: '#71717A' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded"
                      style={{ backgroundColor: '#1C1C22', color: '#A1A1AA' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center self-center">
                <span
                  className="text-2xl transition-all duration-300 group-hover:translate-x-2"
                  style={{ color: '#DC2626' }}
                >
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
