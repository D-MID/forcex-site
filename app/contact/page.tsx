import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/sections/ContactForm'
import { FadeUp } from '@/components/animations/FadeUp'

export const metadata = {
  title: 'Contact — ForceX Tech LLC | Get a Free Quote | (916) 599-5514',
  description: 'Contact ForceX Tech LLC for IT support, network design, security cameras, access control, and smart technology in Sacramento and Northern California. Call (916) 599-5514.',
}

const faqs = [
  {
    q: 'How quickly can you respond to IT issues?',
    a: 'We target a response within 2 hours for active issues and offer same-day or next-day on-site visits depending on severity and location.',
  },
  {
    q: 'Do you offer service contracts?',
    a: 'Yes. We offer monthly managed IT plans starting at $299/month. We also handle one-time projects with no ongoing commitment required.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Sacramento and surrounding communities including Roseville, Elk Grove, Folsom, Rancho Cordova, Citrus Heights, Auburn, Rocklin, and throughout Northern California.',
  },
  {
    q: 'Do you work with dental and medical offices?',
    a: 'Yes — dental and medical offices are among our most common clients. We understand compliance considerations and build HIPAA-conscious infrastructure.',
  },
  {
    q: 'Can you handle a full office buildout?',
    a: 'Absolutely. We handle structured cabling, networking, security cameras, access control, smart systems, and IT setup as a complete package for new construction and office buildouts.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Page Hero */}
        <section className="relative py-20 overflow-hidden grid-bg" style={{ backgroundColor: '#08080A' }}>
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ width: '500px', height: '250px', background: 'radial-gradient(ellipse, rgba(220,38,38,0.15) 0%, transparent 70%)' }}
          />
          <div className="relative max-w-7xl mx-auto px-6">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#DC2626' }}>Get in Touch</p>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Contact ForceX Tech</h1>
              <p className="text-lg" style={{ color: '#A1A1AA' }}>
                Questions, quotes, or just need fast help — we&apos;re here.
              </p>
            </FadeUp>
          </div>
        </section>

        <ContactForm />

        {/* FAQ */}
        <section className="section" style={{ backgroundColor: '#08080A', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-3xl mx-auto px-6">
            <FadeUp className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#DC2626' }}>Common Questions</p>
              <h2 className="text-3xl font-black text-white">FAQ</h2>
            </FadeUp>
            <div className="flex flex-col gap-px" style={{ border: '1px solid #1C1C22' }}>
              {faqs.map((faq, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div className="p-6" style={{ backgroundColor: '#0D0D10', borderBottom: '1px solid #1C1C22' }}>
                    <h3 className="text-base font-bold text-white mb-3">{faq.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{faq.a}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
