'use client'

import Link from 'next/link'

const services = [
  'IT Support & Managed IT',
  'Network Design & UniFi',
  'Structured Cabling',
  'Security Camera Systems',
  'Access Control',
  'Smart Office & Home',
  'Audio / Video Systems',
  'Server Rack Design',
]

const industries = [
  'Dental & Medical Offices',
  'Commercial Businesses',
  'Property Management',
  'Contractors & Builders',
  'Residential Clients',
]

const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Top row — brand + nav */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">

          {/* Brand */}
          <div className="flex-shrink-0">
            <div className="mb-4">
              <svg width="130" height="32" viewBox="0 0 130 32" fill="none">
                <text x="0" y="22" fontFamily="-apple-system, system-ui, sans-serif" fontSize="20" fontWeight="900" fill="white" letterSpacing="-1">FORCE</text>
                <text x="74" y="22" fontFamily="-apple-system, system-ui, sans-serif" fontSize="24" fontWeight="900" fill="#0EA5E9" letterSpacing="-1" transform="skewX(-8)">X</text>
                <text x="1" y="31" fontFamily="-apple-system, system-ui, sans-serif" fontSize="8" fontWeight="700" fill="#484F58" letterSpacing="5">TECH</text>
              </svg>
            </div>
            <p className="text-xs leading-relaxed mb-5 max-w-xs" style={{ color: 'var(--text-4)' }}>
              California&apos;s trusted technology infrastructure partner. IT, networking, security, and smart systems — done right.
            </p>
            <div className="flex flex-col gap-1.5">
              <a
                href="tel:+19165995514"
                className="text-sm font-semibold transition-colors duration-200"
                style={{ color: 'var(--text-2)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-1)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-2)' }}
              >
                (916) 599-5514
              </a>
              <p className="text-xs" style={{ color: 'var(--text-4)' }}>Sacramento, CA &amp; Northern California</p>
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-3 gap-x-12 gap-y-8">

            {/* Company */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--text-4)' }}>
                Company
              </p>
              <ul className="flex flex-col gap-2.5">
                {nav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--text-3)' }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--text-1)' }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-3)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--text-4)' }}>
                Services
              </p>
              <ul className="flex flex-col gap-2.5">
                {services.map((s) => (
                  <li key={s}>
                    <Link
                      href="/services"
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--text-3)' }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--text-1)' }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-3)' }}
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--text-4)' }}>
                Industries
              </p>
              <ul className="flex flex-col gap-2.5">
                {industries.map((i) => (
                  <li key={i}>
                    <Link
                      href="/industries"
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--text-3)' }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--text-1)' }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-3)' }}
                    >
                      {i}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-4)' }}>
            &copy; {new Date().getFullYear()} ForceX Tech LLC. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-4)' }}>
            Sacramento &middot; Roseville &middot; Elk Grove &middot; Folsom &middot; Northern California
          </p>
        </div>

      </div>
    </footer>
  )
}
