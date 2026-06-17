'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const commercialSystems = [
  {
    title: 'Wireless Infrastructure',
    summary: 'WiFi 6/6E access points engineered for density — not just coverage.',
    details: [
      'Site survey and RF heat mapping before any hardware is ordered',
      'WiFi 6 and WiFi 6E APs support 4K streams, video conferencing, and 200+ simultaneous devices',
      'Seamless roaming — your phone never drops as you move through the building',
      'Band steering automatically moves devices to the fastest available frequency',
      'AP grouping for floor-by-floor or zone-by-zone SSID management',
      'PoE+ powered — clean installs, no power outlets at ceiling level',
    ],
  },
  {
    title: 'Switching & Routing',
    summary: 'Gigabit and 10G switching with intelligent traffic management.',
    details: [
      'Managed PoE switches power APs, phones, and cameras through the cable — no adapters',
      'Link aggregation for servers and NAS devices that need more than 1Gbps',
      'STP and redundant uplinks eliminate single points of failure',
      'QoS policies prioritize voice and video traffic over background downloads',
      'VLAN trunking keeps every network segment clean and separated',
      '10G SFP+ fiber uplinks for inter-floor and inter-building backbone',
    ],
  },
  {
    title: 'Security & Firewall',
    summary: 'Enterprise threat protection without the enterprise complexity.',
    details: [
      'UniFi Dream Machine with built-in IDS/IPS monitors all traffic in real time',
      'GeoIP blocking — restrict traffic from specific countries at the firewall level',
      'Deep packet inspection identifies application traffic for policy enforcement',
      'Content filtering categories — block adult content, gambling, or social media by group',
      'Honeypot detection catches rogue devices trying to probe the network',
      'Automatic security updates keep threat signatures current without manual work',
    ],
  },
  {
    title: 'Network Video & Surveillance',
    summary: 'UniFi Protect cameras, fully integrated — no third-party NVR required.',
    details: [
      '4K resolution cameras with local NVR storage — no cloud subscription needed',
      'AI-powered smart detection distinguishes people, vehicles, and motion zones',
      'Instant clip export for incident review and sharing with law enforcement',
      'License plate recognition cameras available for parking and entry points',
      'Two-way audio on select models for remote announcements',
      'Live and recorded view accessible from anywhere via UniFi Protect app',
    ],
  },
  {
    title: 'Access Control',
    summary: 'Door management fully inside your UniFi ecosystem.',
    details: [
      'NFC and PIN readers installed at every door entry point',
      'Time-based access schedules — staff access only during business hours',
      'Visitor codes that expire automatically after a set time or single use',
      'Full access log — every door event timestamped and searchable',
      'Elevator floor control for multi-story buildings',
      'Lockdown mode — lock all doors instantly from the app in an emergency',
    ],
  },
  {
    title: 'Business Phone System',
    summary: 'UniFi Talk — VoIP built into your existing network.',
    details: [
      'Physical desk phones and a mobile app work identically on the same system',
      'Auto-attendant routes callers to the right department without a receptionist',
      'Call recording and voicemail transcription included',
      'Ring groups — call the whole team or just the front desk',
      'SIP trunking connects your existing phone numbers to UniFi Talk',
      'All calls stay on your network — no third-party PBX fees',
    ],
  },
]

const residentialSystems = [
  {
    title: 'Whole-Home WiFi Coverage',
    summary: 'Every room, corner, and outdoor area covered — with speed to match.',
    details: [
      'Professional site survey determines exact AP placement before installation',
      'U6 Lite and U6 Mesh APs positioned for overlap — no dead zones, no weak spots',
      'Seamless roaming means your phone or laptop moves room to room without reconnecting',
      'Outdoor APs extend coverage to patios, garages, and driveways',
      'WiFi 6 supports 4K streaming, gaming, smart home devices, and video calls simultaneously',
      'Clean ceiling mounts — no ugly power bricks or router antennas on your shelves',
    ],
  },
  {
    title: 'Network Security & Privacy',
    summary: 'Your home network secured like an office — without the complexity.',
    details: [
      'Firewall rules block inbound attacks and unauthorized access attempts',
      'IoT isolation — smart bulbs, cameras, and doorbells can\'t reach your laptops or phones',
      'DNS-level ad blocking and malware filtering across every device in your home',
      'Intrusion detection alerts you if someone tries to break into your network',
      'Automatic security updates keep the system patched without your involvement',
      'Guest network with bandwidth limits so guests can\'t saturate your connection',
    ],
  },
  {
    title: 'Parental Controls',
    summary: 'Simple, effective controls that actually work.',
    details: [
      'Per-device or per-profile internet schedules — homework hours, bedtime, dinner time',
      'Pause internet on any device instantly from your phone',
      'Content category filtering blocks adult content, gambling, and social media by group',
      'Usage reports show exactly what devices are doing and when',
      'Safe Search enforcement on Google, Bing, and YouTube across the household',
      'Time limits reset automatically each day — no manual management required',
    ],
  },
  {
    title: 'Home Office & Remote Work',
    summary: 'Your home office performs like you\'re on-site at the office.',
    details: [
      'Built-in VPN server lets you connect to your home network from anywhere in the world',
      'QoS rules prioritize your work devices during business hours',
      'Dedicated SSID for work devices keeps them off the same network as kids and guests',
      'Wired Ethernet runs to your home office for zero-latency video conferencing',
      'ISP failover with a 4G/5G backup keeps you online during outages',
      'Static DHCP reservations ensure your work devices always get the same IP',
    ],
  },
  {
    title: 'Smart Home Integration',
    summary: 'A stable network backbone that makes every smart device reliable.',
    details: [
      'Dedicated IoT VLAN keeps Alexa, Google Home, and Sonos off your main network',
      'mDNS bridging lets smart home devices communicate across VLANs when needed',
      'DHCP reservations assign permanent IPs to every smart home device',
      'High device density support — handles 150+ smart devices without congestion',
      'Compatible with Loxone, Lutron, Control4, and all major automation platforms',
      'Outdoor APs cover smart irrigation, outdoor cameras, and pool controllers',
    ],
  },
  {
    title: 'Security Cameras',
    summary: 'Local recording, no monthly fees, no third-party cloud.',
    details: [
      '4K cameras with local NVR — your footage stays in your home, not on someone\'s server',
      'AI motion detection zones — alert for people, not passing cars',
      'Night vision and color night vision options for dark areas',
      'Doorbell camera with two-way audio and package detection',
      'View live and recorded footage from the UniFi Protect app anywhere',
      'No subscription fees — you own the storage and own the footage',
    ],
  },
]

const faqs = [
  { q: 'What makes UniFi better than the router I bought at Best Buy?', a: 'Consumer routers are designed for easy setup, not performance or security. UniFi is a professional-grade system with enterprise features — VLAN segmentation, real firewall protection, managed switches, and centralized control across every device on your network. The difference is reliability, security, and scalability.' },
  { q: 'Do I need to be technical to use UniFi after it\'s installed?', a: 'Not at all. We configure and hand over a fully functioning system. The UniFi app is clean and simple — you can pause devices, add a guest network, or check who\'s connected in two taps. You never need to touch the technical settings unless you want to.' },
  { q: 'Are there monthly fees for UniFi?', a: 'No. You purchase the hardware once. UniFi\'s cloud management is free. UniFi Protect (cameras) is free. There are no subscriptions required for any feature of a standard UniFi deployment.' },
  { q: 'How long does installation take?', a: 'A home installation typically takes one day. A small office takes one to two days. Larger commercial projects are phased based on scope. We provide a detailed timeline before any work begins.' },
  { q: 'Can you add to an existing UniFi system I already have?', a: 'Yes. We can audit, repair, reconfigure, or expand any existing UniFi deployment — even if another company installed it. UniFi hardware is standardized, so expansion is straightforward.' },
  { q: 'What happens if a device fails after installation?', a: 'Ubiquiti hardware has excellent reliability, but failures happen. Our managed IT clients get proactive monitoring — we often know about a failing device before you do. For all clients, we offer priority support and fast hardware replacement.' },
]

export default function UnifiPage() {
  const [tab, setTab] = useState<'commercial' | 'residential'>('commercial')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const systems = tab === 'commercial' ? commercialSystems : residentialSystems

  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="relative overflow-hidden hero-scan"
          style={{ backgroundColor: 'var(--bg)', paddingTop: '140px', paddingBottom: '100px' }}
        >
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div
            className="absolute top-0 left-1/3 pointer-events-none"
            style={{
              width: '600px', height: '500px',
              background: 'radial-gradient(ellipse, rgba(14,165,233,0.12) 0%, transparent 65%)',
              filter: 'blur(30px)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-8"
              style={{ border: '1px solid #26262E', color: 'var(--text-2)', backgroundColor: 'var(--bg-2)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Professional Ubiquiti UniFi Installers · Sacramento, CA
            </motion.div>

            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-black text-white leading-none"
              >
                The Network Your
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-black leading-none"
                style={{ color: '#0EA5E9' }}
              >
                Business Deserves.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg max-w-2xl leading-relaxed mb-10"
              style={{ color: 'var(--text-2)' }}
            >
              We design and install Ubiquiti UniFi networks for commercial and residential clients across Northern California. Fast, secure, scalable — and managed from a single app with no monthly fees.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact"
                className="px-7 py-3.5 text-sm font-bold text-white rounded transition-all duration-200"
                style={{ backgroundColor: '#0EA5E9' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0284C7' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0EA5E9' }}
              >
                Request a Free Site Survey
              </Link>
              <a href="tel:+19165995514"
                className="px-7 py-3.5 text-sm font-bold text-white rounded transition-all duration-200"
                style={{ border: '1px solid #26262E' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#0EA5E9'; (e.currentTarget as HTMLElement).style.color = '#0EA5E9' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-2)'; (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
              >
                Call (916) 599-5514
              </a>
            </motion.div>
          </div>
        </section>

        {/* Tab Section */}
        <section className="section" style={{ backgroundColor: 'var(--bg-2)', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-7xl mx-auto px-6">

            <FadeUp className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#0EA5E9' }}>
                Commercial & Residential
              </p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <h2 className="text-4xl font-black text-white">
                  Built for Every Space.
                </h2>
                <div
                  className="inline-flex rounded-lg p-1 gap-1"
                  style={{ backgroundColor: 'var(--bg)', border: '1px solid #1C1C22' }}
                >
                  {(['commercial', 'residential'] as const).map((t) => (
                    <button key={t} onClick={() => setTab(t)}
                      className="px-5 py-2.5 rounded text-sm font-bold capitalize transition-all duration-200"
                      style={{ backgroundColor: tab === t ? '#0EA5E9' : 'transparent', color: tab === t ? '#fff' : 'var(--text-3)' }}
                    >
                      {t === 'commercial' ? '🏢 Commercial' : '🏠 Residential'}
                    </button>
                  ))}
                </div>
              </div>
            </FadeUp>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {systems.map((sys, i) => (
                  <motion.div
                    key={sys.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="mb-4 rounded-lg overflow-hidden"
                    style={{ backgroundColor: 'var(--bg)', border: '1px solid #1C1C22' }}
                  >
                    <div className="p-7">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="md:w-64 flex-shrink-0">
                          <span className="text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: '#0EA5E9', fontFamily: 'monospace' }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-lg font-bold text-white mb-2">{sys.title}</h3>
                          <p className="text-sm" style={{ color: 'var(--text-3)' }}>{sys.summary}</p>
                        </div>
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                          {sys.details.map((d) => (
                            <div key={d} className="flex items-start gap-2">
                              <span className="flex-shrink-0 mt-1" style={{ color: '#0EA5E9' }}>→</span>
                              <span className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Why ForceX for UniFi */}
        <section className="section" style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>Why ForceX Tech</p>
              <h2 className="text-4xl font-black text-white">What We Do Differently</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Site Survey First', desc: 'We walk your space before specifying hardware. RF analysis, obstacle mapping, and device counts — done before any equipment ships.' },
                { title: 'No Off-the-Shelf Setups', desc: 'Every deployment is designed for your specific environment. We don\'t copy-paste configurations across jobs.' },
                { title: 'Clean Professional Install', desc: 'Proper cable management, labeled ports, tidy rack builds. Our work looks as good as it performs.' },
                { title: 'Ongoing Support', desc: 'We\'re available after the job is done. No disappearing act. Managed IT clients get proactive monitoring.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-7 rounded-lg"
                  style={{ backgroundColor: 'var(--bg-2)', border: '1px solid #1C1C22' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full mb-4" style={{ backgroundColor: '#0EA5E9' }} />
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ backgroundColor: 'var(--bg-2)', borderTop: '1px solid #1C1C22' }}>
          <div className="max-w-3xl mx-auto px-6">
            <FadeUp className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0EA5E9' }}>FAQ</p>
              <h2 className="text-4xl font-black text-white">Common Questions</h2>
            </FadeUp>
            <div className="flex flex-col gap-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-lg overflow-hidden"
                  style={{ backgroundColor: 'var(--bg)', border: '1px solid #1C1C22' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-sm font-bold text-white">{faq.q}</span>
                    <span style={{ color: '#0EA5E9', flexShrink: 0, fontSize: '20px', lineHeight: 1 }}>
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <div className="px-6 pb-6">
                          <div style={{ height: '1px', backgroundColor: 'var(--bg-4)', marginBottom: '16px' }} />
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 overflow-hidden" style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid #1C1C22' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.08) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                Let's Design Your Network.
              </h2>
              <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-2)' }}>
                Free site survey, honest pricing, and a network plan before we touch a single cable.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact"
                  className="px-8 py-4 text-sm font-bold text-white rounded transition-all duration-200"
                  style={{ backgroundColor: '#0EA5E9', minWidth: '220px', textAlign: 'center' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0284C7' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0EA5E9' }}
                >
                  Request a Free Survey
                </Link>
                <a href="tel:+19165995514"
                  className="px-8 py-4 text-sm font-bold text-white rounded transition-all duration-200"
                  style={{ border: '1px solid #26262E', minWidth: '220px', textAlign: 'center' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#0EA5E9'; (e.currentTarget as HTMLElement).style.color = '#0EA5E9' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-2)'; (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
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
