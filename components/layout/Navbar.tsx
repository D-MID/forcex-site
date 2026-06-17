'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Loxone', href: '/loxone', highlight: true },
  { label: 'UniFi', href: '/unifi', highlight: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-0 group" aria-label="ForceX Tech — Home">
      <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="Inter, -apple-system, sans-serif" fontSize="26" fontWeight="900" fill="#F0F6FC" letterSpacing="-1">FORCE</text>
        <text x="93" y="28" fontFamily="Inter, -apple-system, sans-serif" fontSize="30" fontWeight="900" fill="#0EA5E9" letterSpacing="-1" transform="skewX(-8)">X</text>
        <text x="1" y="40" fontFamily="Inter, -apple-system, sans-serif" fontSize="11" fontWeight="700" fill="#484F58" letterSpacing="6">TECH</text>
      </svg>
    </Link>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(8,11,18,0.97)' : 'rgba(8,11,18,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid #21262D' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              link.highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5"
                  style={{ color: pathname === link.href ? '#F0F6FC' : '#0EA5E9' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#38BDF8' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = pathname === link.href ? '#F0F6FC' : '#0EA5E9' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full dot-pulse" style={{ backgroundColor: '#0EA5E9' }} />
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: pathname === link.href ? '#F0F6FC' : '#8B949E' }}
                  onMouseEnter={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = '#F0F6FC' }}
                  onMouseLeave={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = '#8B949E' }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right — phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+19165995514"
              className="text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              style={{ color: '#8B949E' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F0F6FC' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#8B949E' }}
              aria-label="Call ForceX Tech"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.13 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.83a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              (916) 599-5514
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(14,165,233,0.3)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)'; (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
            >
              Request Assessment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: '#F0F6FC',
                  transform: mobileOpen
                    ? i === 0 ? 'translateY(8px) rotate(45deg)'
                    : i === 2 ? 'translateY(-8px) rotate(-45deg)' : 'none'
                    : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 border-b"
            style={{ backgroundColor: 'rgba(8,11,18,0.98)', borderColor: '#21262D', backdropFilter: 'blur(20px)' }}
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium py-3 border-b flex items-center justify-between"
                  style={{ color: pathname === link.href ? '#0EA5E9' : '#8B949E', borderColor: '#21262D' }}
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:+19165995514" className="text-base font-bold flex items-center gap-2" style={{ color: '#F0F6FC' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.13 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.83a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  (916) 599-5514
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 text-center text-sm font-bold text-white rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)' }}
                >
                  Request a Site Assessment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
