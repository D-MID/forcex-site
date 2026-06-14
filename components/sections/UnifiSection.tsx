'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'

const commercial = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49"/><path d="M20.07 3.93a10 10 0 010 16.14M3.93 20.07a10 10 0 010-16.14"/></svg>,
    title: 'WiFi 6 & 6E Access Points',
    desc: 'Enterprise-grade APs handle hundreds of simultaneous clients. Zero dead zones across offices, warehouses, and multi-story buildings.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    title: 'VLAN Network Segmentation',
    desc: 'Staff, guests, IoT devices, and cameras on completely separate networks. One breach can\'t reach everything.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Enterprise Firewall & Security',
    desc: 'UniFi Dream Machine with IDS/IPS, content filtering, GeoIP blocking, and real-time threat detection built in.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
    title: 'UniFi Protect Cameras',
    desc: '4K IP cameras with local NVR recording, AI-powered motion detection, and live view from anywhere — all inside UniFi.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    title: 'UniFi Access Control',
    desc: 'NFC and PIN readers at every door, managed from the same controller as your network. Full access logs included.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z"/></svg>,
    title: 'Multi-Site Cloud Management',
    desc: 'Manage all your locations from a single cloud dashboard. One login, full visibility across every office and branch.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'WAN Failover & SD-WAN',
    desc: 'Dual ISP failover keeps your office online even when your primary connection drops. Automatic, instant, silent.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.07 9.81a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.91 14a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
    title: 'UniFi Talk VoIP',
    desc: 'Business phone system built into your UniFi network. Physical desk phones, mobile app, and auto-attendant included.',
  },
]

const residential = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
    title: 'Whole-Home WiFi Coverage',
    desc: 'U6 Mesh access points placed strategically to blanket every room, garage, backyard, and dead corner.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Guest Network Isolation',
    desc: 'A separate, password-protected network for guests that can\'t touch your main devices or files.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: 'Parental Controls',
    desc: 'Time-based internet schedules per device or profile. Pause WiFi for dinner. Block social media during homework hours.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Smart Home Device Isolation',
    desc: 'Your smart TVs, cameras, and doorbells live on their own IoT VLAN — separate from phones, laptops, and home office gear.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'Remote Work Ready',
    desc: 'Built-in VPN server lets you connect securely to your home network from anywhere. Work remotely without exposing your files.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
    title: 'Home Security Cameras',
    desc: 'UniFi Protect cameras with local recording — no cloud subscription, no third-party servers holding your footage.',
  },
]

export function UnifiSection() {
  const [tab, setTab] = useState<'commercial' | 'residential'>('commercial')

  return (
    <section className="section" style={{ backgroundColor: '#0D0D10', borderTop: '1px solid #1C1C22' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          <FadeUp>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-6"
              style={{ border: '1px solid #26262E', color: '#A1A1AA', backgroundColor: '#0D0D10' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Professional Ubiquiti Installers
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              Networks Built to{' '}
              <span style={{ color: '#DC2626' }}>Perform.</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#A1A1AA' }}>
              ForceX Tech designs and installs Ubiquiti UniFi networks for homes and businesses across Sacramento. UniFi gives you enterprise-grade reliability — fast, secure, and managed from a single dashboard — without the enterprise price tag.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>
              Every install is site-surveyed, professionally cabled, and configured specifically for your space. No generic setups. No consumer-grade shortcuts.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'WiFi 6/6E', label: 'Latest wireless standard' },
                { value: '1 App', label: 'Network, cameras & access' },
                { value: 'Zero', label: 'Monthly cloud fees' },
                { value: '∞', label: 'Scalable — add as you grow' },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-lg" style={{ backgroundColor: '#08080A', border: '1px solid #1C1C22' }}>
                  <p className="text-2xl font-black mb-1" style={{ color: '#DC2626', fontFamily: 'monospace' }}>{s.value}</p>
                  <p className="text-xs" style={{ color: '#71717A' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Tab Switch */}
        <FadeUp className="mb-8">
          <div
            className="inline-flex rounded-lg p-1 gap-1"
            style={{ backgroundColor: '#08080A', border: '1px solid #1C1C22' }}
          >
            {(['commercial', 'residential'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-5 py-2.5 rounded text-sm font-bold capitalize transition-all duration-200"
                style={{
                  backgroundColor: tab === t ? '#DC2626' : 'transparent',
                  color: tab === t ? '#ffffff' : '#71717A',
                }}
              >
                {t === 'commercial' ? '🏢 Commercial' : '🏠 Residential'}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Feature Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          >
            {(tab === 'commercial' ? commercial : residential).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
                className="p-6 rounded-lg transition-all duration-300 group"
                style={{ backgroundColor: '#08080A', border: '1px solid #1C1C22' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(220,38,38,0.3)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#1C1C22' }}
              >
                <motion.div
                  className="w-10 h-10 flex items-center justify-center rounded mb-4"
                  style={{ color: '#DC2626', backgroundColor: 'rgba(220,38,38,0.08)' }}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: 'rgba(220,38,38,0.18)',
                    filter: 'drop-shadow(0 0 6px rgba(220,38,38,0.4))',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <FadeUp>
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-7 rounded-lg"
            style={{ backgroundColor: '#08080A', border: '1px solid #1C1C22' }}
          >
            <div>
              <p className="text-base font-bold text-white mb-1">
                Ready for a network that just works?
              </p>
              <p className="text-sm" style={{ color: '#71717A' }}>
                Free site survey · Professional installation · Lifetime support available
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link
                href="/unifi"
                className="px-5 py-2.5 text-sm font-bold rounded transition-all duration-200"
                style={{ border: '1px solid #DC2626', color: '#DC2626' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#DC2626'
                  ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.color = '#DC2626'
                }}
              >
                Learn More →
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 text-sm font-bold text-white rounded transition-all duration-200"
                style={{ backgroundColor: '#DC2626' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#B91C1C' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#DC2626' }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
