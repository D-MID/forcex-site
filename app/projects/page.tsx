import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FadeUp } from '@/components/animations/FadeUp'

export const metadata = {
  title: 'Projects — ForceX Tech LLC | Our Work in Sacramento & Northern California',
  description: 'View ForceX Tech project portfolio — network deployments, security systems, smart home installations, and structured cabling across Sacramento and Northern California.',
}

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Satisfied Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '5★', label: 'Average Rating' },
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section
          className="relative py-28 overflow-hidden grid-bg"
          style={{ backgroundColor: '#08080A' }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: '600px', height: '300px',
              background: 'radial-gradient(ellipse, rgba(220,38,38,0.15) 0%, transparent 70%)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#DC2626' }}>Our Work</p>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Featured Projects</h1>
              <p className="text-xl max-w-2xl" style={{ color: '#A1A1AA' }}>
                Real deployments. Real results. See what ForceX Tech has built for businesses and homes across Northern California.
              </p>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.2} className="mt-12">
              <div className="flex flex-wrap gap-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <span className="block text-3xl font-black" style={{ color: '#DC2626', fontFamily: 'monospace' }}>{s.value}</span>
                    <span className="text-sm" style={{ color: '#71717A' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        <FeaturedProjects />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
