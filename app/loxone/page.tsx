'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const systems = [
  {
    number: '01',
    title: 'Intelligent Lighting Control',
    description: 'Loxone lighting is not just smart switches — it\'s a complete lighting ecosystem. Every light is dimmable, programmable, and scene-aware. Lights adjust based on time of day, natural daylight levels, occupancy, and what\'s happening in the room.',
    capabilities: [
      'Circadian rhythm lighting that follows natural daylight',
      'Motion-activated zones — lights on when you enter, off when you leave',
      'Scene presets: Movie, Dinner, Focus, Away — one tap activates everything',
      'RGBW LED strip integration for architectural accent lighting',
      'Automatic dimming based on ambient lux levels',
      'Panic mode — all lights full-bright instantly via keypad or app',
    ],
    ideal: 'Dental offices, medical clinics, restaurants, luxury homes',
  },
  {
    number: '02',
    title: 'Smart Climate & HVAC',
    description: 'Loxone climate control turns your HVAC system into a responsive, intelligent network. It monitors outdoor weather, indoor temperature, occupancy, and windows — then adjusts automatically to keep every zone comfortable while minimizing energy waste.',
    capabilities: [
      'Zone-based climate control — different temperatures in different rooms',
      'Weather compensation — adjusts heating based on outdoor forecast',
      'Open window detection — pauses HVAC automatically',
      'Presence-based control — saves energy in unoccupied zones',
      'Radiant floor heating integration with per-room scheduling',
      'Mini-split and multi-zone HVAC control via one interface',
    ],
    ideal: 'Offices, dental suites, custom homes, commercial buildings',
  },
  {
    number: '03',
    title: 'Automated Shading & Blinds',
    description: 'Motorized shades that actually think. Loxone tracks the sun\'s position in real time and moves your blinds to block glare, manage heat gain, protect furniture from UV, and keep privacy without you ever touching a cord.',
    capabilities: [
      'Sun position tracking — blinds follow the sun automatically all day',
      'Temperature-based shading — closes when indoor temp rises',
      'Wind protection mode — retracts outdoor awnings automatically',
      'Skylight and velux integration',
      'One-button full open/close from app or keypad',
      'Scheduled morning open, evening close',
    ],
    ideal: 'Luxury homes, offices with large windows, restaurants',
  },
  {
    number: '04',
    title: 'Whole-Home & Office Audio',
    description: 'Multi-room audio where every zone is independently controlled but can be grouped instantly. Background music in the lobby, focused silence in the exam room, full volume in the conference call — all from the Loxone app.',
    capabilities: [
      'Per-zone volume, source, and track control',
      'Group zones together for parties or announcements',
      'Streaming integration (Spotify, Apple Music, TuneIn)',
      'Door bell triggers — auto-pause music when someone arrives',
      'Wake-up routines — gentle music fade-in as alarm',
      'Integration with in-ceiling, outdoor, and architectural speakers',
    ],
    ideal: 'Medical offices, luxury homes, restaurants, hotels',
  },
  {
    number: '05',
    title: 'Security & Alarm Integration',
    description: 'Loxone security goes beyond a simple alarm panel. Door and window sensors, motion detectors, smoke and water leak sensors, and IP cameras all report to the Miniserver. When something happens, Loxone responds — lights flash, sirens sound, notifications fire, and you see a live snapshot.',
    capabilities: [
      'Armed/disarmed modes with keypad, app, or NFC tag',
      'Perimeter alerts — notification the moment a window opens',
      'Smoke, CO, and water leak sensors fully integrated',
      'Presence simulation when away — lights and blinds move naturally',
      'Push notifications with zone detail instantly',
      'IP camera integration — view clips directly in Loxone app',
    ],
    ideal: 'Commercial buildings, dental offices, custom homes, warehouses',
  },
  {
    number: '06',
    title: 'Access Control & Intercoms',
    description: 'Replace physical keys with NFC tags, PIN codes, or a smartphone tap. Loxone manages who enters which door, when, and logs every event. Guest access codes expire automatically. Door cameras integrate directly into the app for visual verification before remote unlock.',
    capabilities: [
      'NFC card and tag reader integration',
      'Time-based access — staff hours only, no overtime entry',
      'Visitor codes that expire after one use or a set time',
      'Video intercom with remote door release from phone',
      'Full access log — every entry and exit timestamped',
      'Multi-door management across multiple buildings',
    ],
    ideal: 'Offices, dental practices, multi-tenant buildings, custom homes',
  },
  {
    number: '07',
    title: 'Energy Management & Solar',
    description: 'Loxone integrates with solar PV systems, EV chargers, and smart meters to optimize energy flow in real time. It knows when solar is producing, when grid rates are high, and when the building is empty — and adjusts everything accordingly to minimize waste and cost.',
    capabilities: [
      'Solar PV monitoring and excess energy routing',
      'EV charger management — charge when solar peaks or rates are low',
      'Real-time energy dashboard for the whole building',
      'Automatic lights-off in unoccupied rooms',
      'HVAC setback when rooms are empty',
      'Utility rate scheduling — shift loads to off-peak hours',
    ],
    ideal: 'Commercial properties, homes with solar, offices pursuing LEED certification',
  },
  {
    number: '08',
    title: 'Pool, Spa & Irrigation',
    description: 'Complete outdoor automation including pool pump scheduling, heater control, water temperature monitoring, and weather-aware irrigation. All managed from the same app that controls your lights and climate — no separate apps, no separate systems.',
    capabilities: [
      'Pool pump and filter scheduling',
      'Spa heater activation — ready when you arrive',
      'Water temperature monitoring and alerts',
      'Weather-based irrigation — skips watering before rain',
      'Freeze protection mode — runs fountain and spa when temps drop',
      'Chemical dosing integration',
    ],
    ideal: 'Custom homes, estates, multi-family properties',
  },
]

const faqs = [
  {
    q: 'Does Loxone work without internet?',
    a: 'Yes. All core automation runs locally on the Miniserver inside your building. Lights, climate, security, and schedules all work even if your internet goes down. Internet is only needed for remote app access from outside your home or office.',
  },
  {
    q: 'What\'s the difference between Loxone and Amazon Alexa / Google Home?',
    a: 'Alexa and Google Home are voice assistants that link consumer gadgets together via cloud services. Loxone is a professional wired automation platform that runs locally, requires no subscriptions, and controls your entire building from one centrally programmed system. They\'re fundamentally different categories.',
  },
  {
    q: 'Is Loxone good for existing buildings or only new construction?',
    a: 'Both. For new construction, Loxone Tree wiring is run during rough-in alongside electrical — very cost effective. For retrofits, Loxone Air wireless devices cover most functions without new wiring. Many of our installations are complete retrofits in existing homes and offices.',
  },
  {
    q: 'Are there monthly fees?',
    a: 'No. You purchase the hardware once. There are no subscriptions, no cloud fees, and no service contracts required to keep the automation running. The Loxone app and Config software are free.',
  },
  {
    q: 'What happens if ForceX Tech isn\'t available for service?',
    a: 'You own your system and have full admin access to the Loxone Config software. Any certified Loxone partner anywhere in the world can service it. There\'s no dealer lock-in — your configuration belongs to you.',
  },
  {
    q: 'How long does a Loxone installation take?',
    a: 'A single-room or small office installation can be done in 1–2 days. A whole-home system in new construction is planned during the build and commissioned after move-in. Large commercial projects are phased. We provide a detailed timeline with every proposal.',
  },
  {
    q: 'Can I control my Loxone system with my phone?',
    a: 'Yes. The free Loxone app for iOS and Android gives you full control from anywhere — inside the building or halfway around the world. You can also use built-in Touch keypads, voice commands via Alexa or Google, or Apple HomeKit.',
  },
  {
    q: 'Does Loxone work with existing systems like my current thermostat or security panel?',
    a: 'In most cases, yes. Loxone integrates with a wide range of third-party systems including Modbus, KNX, EnOcean, DALI, DMX, and standard alarm panels. We assess compatibility during the discovery phase and specify the right integration approach.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function LoxonePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden hero-scan"
          style={{ backgroundColor: '#08080A', paddingTop: '120px' }}
        >
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: '700px', height: '600px',
              background: 'radial-gradient(ellipse at top right, rgba(220,38,38,0.15) 0%, transparent 60%)',
              filter: 'blur(20px)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-widest"
              style={{ border: '1px solid rgba(220,38,38,0.35)', backgroundColor: 'rgba(220,38,38,0.07)', color: '#DC2626' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              Certified Loxone Partner · Sacramento, CA
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none"
              >
                Loxone Building
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-none"
                style={{ color: '#DC2626' }}
              >
                Automation.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl max-w-2xl leading-relaxed mb-10"
              style={{ color: '#A1A1AA' }}
            >
              One platform. Every system. Zero monthly fees. ForceX Tech designs, programs, and installs complete Loxone automation for homes, offices, and commercial buildings across Northern California.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 text-base font-bold text-white rounded transition-all duration-200"
                style={{ backgroundColor: '#DC2626' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#B91C1C' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#DC2626' }}
              >
                Book a Free Consultation
              </Link>
              <a
                href="tel:+19165995514"
                className="px-8 py-4 text-base font-bold text-white rounded transition-all duration-200"
                style={{ border: '1px solid #26262E' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#DC2626'
                  ;(e.currentTarget as HTMLElement).style.color = '#DC2626'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#26262E'
                  ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
                }}
              >
                Call (916) 599-5514
              </a>
            </motion.div>
          </div>
        </section>

        {/* What is Loxone */}
        <section className="section" style={{ backgroundColor: '#0D0D10', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#DC2626' }}>
                  What Is Loxone?
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  The Smartest Tech is the Tech You Never Notice.
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#A1A1AA' }}>
                  Loxone is a professional building automation platform built around a central Miniserver — a small computer that lives in your electrical panel and controls your entire building from a single, locally-run system. Unlike smart home gadgets that rely on Wi-Fi and cloud servers, Loxone runs entirely inside your building.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#A1A1AA' }}>
                  Lighting adjusts. Climate balances. Blinds move. Music plays. Security arms. Energy optimizes. All automatically, all coordinated, all from one app — with no subscriptions and no cloud dependency.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#71717A' }}>
                  Loxone is active in 300,000+ installations worldwide — from luxury homes and dental offices to hotels, warehouses, and government buildings. ForceX Tech brings this technology to Sacramento and Northern California.
                </p>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: '300K+', label: 'Installations worldwide' },
                    { value: '0', label: 'Monthly fees, ever' },
                    { value: '8+', label: 'Building systems controlled' },
                    { value: '100%', label: 'Local — no cloud required' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: '#08080A', border: '1px solid #1C1C22' }}
                    >
                      <p className="text-3xl font-black mb-1" style={{ color: '#DC2626', fontFamily: 'monospace' }}>
                        {stat.value}
                      </p>
                      <p className="text-sm" style={{ color: '#71717A' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-6 rounded-lg" style={{ border: '1px solid rgba(220,38,38,0.2)', backgroundColor: 'rgba(220,38,38,0.03)' }}>
                  <p className="text-sm font-bold text-white mb-2">No dealer lock-in.</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>
                    At project handoff, you receive full admin credentials to your Loxone system. Any certified partner worldwide can service it. Your automation belongs to you — not us.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Loxone vs Everything Else */}
        <section className="section" style={{ backgroundColor: '#08080A', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#DC2626' }}>
                Why Professional Beats Consumer
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Loxone vs. Wi-Fi Smart Home Gadgets
              </h2>
            </FadeUp>

            <FadeUp>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                  <thead>
                    <tr>
                      <th className="text-left p-4 text-xs font-bold uppercase tracking-wider" style={{ color: '#52525B', borderBottom: '1px solid #1C1C22', width: '35%' }}>Feature</th>
                      <th className="text-center p-4 text-xs font-bold uppercase tracking-wider" style={{ color: '#DC2626', borderBottom: '1px solid #1C1C22' }}>Loxone + ForceX Tech</th>
                      <th className="text-center p-4 text-xs font-bold uppercase tracking-wider" style={{ color: '#52525B', borderBottom: '1px solid #1C1C22' }}>Wi-Fi Gadgets (Ring, Nest, Hue)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Works without internet', '✓ Always', '✗ Often fails'],
                      ['Monthly subscription fees', '✗ None, ever', '$ Yes — most charge'],
                      ['Single app for everything', '✓ One app', '✗ 4–8 separate apps'],
                      ['Local processing speed', '< 50ms response', '500ms–3s cloud latency'],
                      ['Works during power outage (with UPS)', '✓ Full function', '✗ Depends on router'],
                      ['Professional design & install', '✓ Engineered for your space', '✗ DIY guesswork'],
                      ['Wired reliability', '✓ Tree wired bus', '✗ Wi-Fi congestion'],
                      ['Full admin access for owner', '✓ You own it', '✗ Cloud-dependent'],
                      ['Integration across all systems', '✓ Native, unified', '✗ Workarounds required'],
                      ['15–20 year hardware lifespan', '✓ Designed for longevity', '✗ 3–5 year typical'],
                    ].map(([feature, loxone, consumer], i) => (
                      <tr
                        key={feature}
                        style={{ backgroundColor: i % 2 === 0 ? '#0D0D10' : '#08080A' }}
                      >
                        <td className="p-4 font-medium" style={{ color: '#A1A1AA', borderBottom: '1px solid #1C1C22' }}>{feature}</td>
                        <td className="p-4 text-center font-bold" style={{ color: '#22c55e', borderBottom: '1px solid #1C1C22' }}>{loxone}</td>
                        <td className="p-4 text-center" style={{ color: '#52525B', borderBottom: '1px solid #1C1C22' }}>{consumer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* 8 Systems */}
        <section className="section" style={{ backgroundColor: '#0D0D10', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp className="mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#DC2626' }}>
                Complete Building Control
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white max-w-2xl">
                8 Systems. One Platform. Zero Compromise.
              </h2>
            </FadeUp>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-px"
              style={{ border: '1px solid #1C1C22' }}
            >
              {systems.map((system) => (
                <motion.div
                  key={system.number}
                  variants={itemVariants}
                  className="group p-8 md:p-10 transition-colors duration-300"
                  style={{ backgroundColor: '#0D0D10', borderBottom: '1px solid #1C1C22' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#121215' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0D0D10' }}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Number + Title */}
                    <div className="flex-shrink-0 lg:w-72">
                      <span className="text-4xl font-black block mb-2" style={{ color: 'rgba(220,38,38,0.2)', fontFamily: 'monospace' }}>
                        {system.number}
                      </span>
                      <h3 className="text-xl font-black text-white mb-2">{system.title}</h3>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#52525B' }}>
                        Ideal for: {system.ideal}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-base leading-relaxed mb-6" style={{ color: '#A1A1AA' }}>
                        {system.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {system.capabilities.map((cap) => (
                          <div key={cap} className="flex items-start gap-2">
                            <span className="text-red-600 flex-shrink-0 mt-0.5 text-sm">→</span>
                            <span className="text-sm" style={{ color: '#71717A' }}>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="section" style={{ backgroundColor: '#08080A', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#DC2626' }}>
                Who We Build For
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Every Space Is Different. Every Solution Is Custom.
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Custom Homes',
                  desc: 'Complete whole-home automation from the ground up. Lighting, climate, audio, shading, security, and energy — all planned during construction, all unified at move-in.',
                  tags: ['New Construction', 'Renovations', 'Luxury Estates'],
                },
                {
                  title: 'Dental & Medical Offices',
                  desc: 'Automated operatory lighting, climate zones per treatment room, access control for labs and medication areas, and energy management to reduce overhead costs.',
                  tags: ['HVAC Zoning', 'Access Control', 'Energy Savings'],
                },
                {
                  title: 'Commercial Buildings',
                  desc: 'Multi-floor lighting control, central HVAC management, occupancy-based energy shutoff, and a unified management interface for building owners and property managers.',
                  tags: ['Multi-Floor', 'LEED Support', 'Remote Management'],
                },
                {
                  title: 'Restaurants & Hospitality',
                  desc: 'Ambiance lighting scenes for lunch, dinner, and private events. Background music zones. Climate control. All set to a schedule and adjustable in one tap.',
                  tags: ['Lighting Scenes', 'Audio Zones', 'Guest Experience'],
                },
                {
                  title: 'Office Spaces',
                  desc: 'Occupancy-based lighting, conference room AV integration, smart access control, and energy dashboards that track and reduce utility costs month over month.',
                  tags: ['Meeting Rooms', 'Occupancy Control', 'Energy Dashboard'],
                },
                {
                  title: 'Warehouses & Industrial',
                  desc: 'High-bay lighting control with daylight harvesting, access control for secure zones, HVAC management for large spaces, and energy monitoring across the facility.',
                  tags: ['High-Bay Lighting', 'Zone Access', 'Energy Monitoring'],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
                  className="p-8 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: '#0D0D10', border: '1px solid #1C1C22' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(220,38,38,0.3)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#1C1C22' }}
                >
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#71717A' }}>{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded"
                        style={{ backgroundColor: '#1C1C22', color: '#A1A1AA' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ backgroundColor: '#0D0D10', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-4xl mx-auto px-6">
            <FadeUp className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#DC2626' }}>
                Common Questions
              </p>
              <h2 className="text-4xl font-black text-white">Loxone FAQ</h2>
            </FadeUp>

            <div className="flex flex-col gap-px" style={{ border: '1px solid #1C1C22' }}>
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
                  className="p-8"
                  style={{ backgroundColor: '#0D0D10', borderBottom: '1px solid #1C1C22' }}
                >
                  <div className="flex gap-4">
                    <span className="text-xs font-black pt-1 flex-shrink-0" style={{ color: '#DC2626', fontFamily: 'monospace' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white mb-3">{faq.q}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="relative py-32 overflow-hidden"
          style={{ backgroundColor: '#08080A', borderTop: '1px solid #1C1C22' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.1) 0%, transparent 70%)' }}
          />
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#DC2626' }}>
                Ready to Start?
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Let's Build a Building{' '}
                <span style={{ color: '#DC2626' }}>That Works For You.</span>
              </h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
                Free consultation. No pressure. We walk through your space, understand your goals, and tell you exactly what Loxone can do — and what it costs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 text-base font-bold text-white rounded transition-all duration-200"
                  style={{ backgroundColor: '#DC2626', minWidth: '240px', textAlign: 'center' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#B91C1C' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#DC2626' }}
                >
                  Book a Free Consultation
                </Link>
                <a
                  href="tel:+19165995514"
                  className="px-8 py-4 text-base font-bold text-white rounded transition-all duration-200"
                  style={{ border: '1px solid #26262E', minWidth: '240px', textAlign: 'center' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#DC2626'
                    ;(e.currentTarget as HTMLElement).style.color = '#DC2626'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#26262E'
                    ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
                  }}
                >
                  Call (916) 599-5514
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
