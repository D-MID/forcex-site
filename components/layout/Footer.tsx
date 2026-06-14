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

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#08080A', borderTop: '1px solid #1C1C22' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <svg width="140" height="36" viewBox="0 0 140 36" fill="none">
                <text x="0" y="24" fontFamily="-apple-system, system-ui, sans-serif" fontSize="22" fontWeight="900" fill="white" letterSpacing="-1">FORCE</text>
                <text x="80" y="24" fontFamily="-apple-system, system-ui, sans-serif" fontSize="26" fontWeight="900" fill="#DC2626" letterSpacing="-1" transform="skewX(-8)">X</text>
                <text x="1" y="35" fontFamily="-apple-system, system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#52525B" letterSpacing="5">TECH</text>
              </svg>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#71717A' }}>
              California&apos;s trusted technology infrastructure partner. IT, networking, security, and smart systems — done right.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+19165995514" className="text-sm font-semibold text-white hover:text-red-500 transition-colors">
                (916) 599-5514
              </a>
              <p className="text-sm" style={{ color: '#71717A' }}>Sacramento, CA & Northern California</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors duration-200" style={{ color: '#71717A' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#ffffff' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#71717A' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm transition-colors duration-200" style={{ color: '#71717A' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#ffffff' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#71717A' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Industries</h4>
            <ul className="flex flex-col gap-3">
              {industries.map((i) => (
                <li key={i}>
                  <Link href="/industries" className="text-sm transition-colors duration-200" style={{ color: '#71717A' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#ffffff' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#71717A' }}>
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 text-sm font-bold text-white rounded transition-all duration-200"
                style={{ backgroundColor: '#DC2626' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#B91C1C' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#DC2626' }}
              >
                Request a Quote →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid #1C1C22' }}>
          <p className="text-sm" style={{ color: '#52525B' }}>
            © {new Date().getFullYear()} ForceX Tech LLC. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#52525B' }}>
            Sacramento, CA · Roseville · Elk Grove · Folsom · Northern California
          </p>
        </div>
      </div>
    </footer>
  )
}
