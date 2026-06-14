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
    <Link href="/" className="flex items-center gap-0 group">
      <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* FORCE text */}
        <text x="0" y="28" fontFamily="-apple-system, system-ui, sans-serif" fontSize="26" fontWeight="900" fill="white" letterSpacing="-1">FORCE</text>
        {/* X in red - bold italic style */}
        <text x="93" y="28" fontFamily="-apple-system, system-ui, sans-serif" fontSize="30" fontWeight="900" fill="#DC2626" letterSpacing="-1" transform="skewX(-8)">X</text>
        {/* TECH below */}
        <text x="1" y="40" fontFamily="-apple-system, system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#52525B" letterSpacing="6">TECH</text>
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

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(8,8,10,0.97)' : 'rgba(8,8,10,0.7)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid #1C1C22' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold transition-colors duration-200 flex items-center gap-1.5"
                  style={{ color: pathname === link.href ? '#ffffff' : '#DC2626' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#DC2626' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: pathname === link.href ? '#DC2626' : '#A1A1AA' }}
                  onMouseEnter={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = '#ffffff' }}
                  onMouseLeave={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = '#A1A1AA' }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right side — phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+19165995514"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: '#A1A1AA' }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#ffffff' }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#A1A1AA' }}
            >
              (916) 599-5514
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-white rounded transition-all duration-200"
              style={{ backgroundColor: '#DC2626' }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#B91C1C' }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#DC2626' }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: '#ffffff',
                transform: mobileOpen ? 'translateY(8px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: '#ffffff',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: '#ffffff',
                transform: mobileOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b"
            style={{ backgroundColor: '#08080A', borderColor: '#1C1C22' }}
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium py-2 border-b"
                  style={{
                    color: pathname === link.href ? '#DC2626' : '#A1A1AA',
                    borderColor: '#1C1C22',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="tel:+19165995514"
                  className="text-base font-semibold text-white"
                >
                  (916) 599-5514
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 text-center text-sm font-bold text-white rounded"
                  style={{ backgroundColor: '#DC2626' }}
                >
                  Get a Free Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
