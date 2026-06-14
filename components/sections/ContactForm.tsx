'use client'

import { useState } from 'react'
import { FadeUp } from '@/components/animations/FadeUp'

const services = [
  'IT Support & Managed IT',
  'Network Design & UniFi',
  'Structured Cabling',
  'Security Camera Systems',
  'Access Control',
  'Smart Office / Home Automation',
  'Audio / Video Systems',
  'Computer & Device Support',
  'Multiple Services',
  'Other',
]

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  backgroundColor: '#0D0D10',
  border: '1px solid #1C1C22',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export function ContactForm() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '', service: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section" style={{ backgroundColor: '#0D0D10', borderTop: '1px solid #1C1C22' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — info */}
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#DC2626' }}>
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Let&apos;s Build Something
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#A1A1AA' }}>
              Tell us about your project and we&apos;ll get back to you within one business day with a clear plan and honest pricing.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
                  style={{ backgroundColor: 'rgba(220,38,38,0.1)', color: '#DC2626' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68 2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.83a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">Call Us</p>
                  <a href="tel:+19165995514" className="text-sm" style={{ color: '#A1A1AA' }}>
                    (916) 599-5514
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
                  style={{ backgroundColor: 'rgba(220,38,38,0.1)', color: '#DC2626' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">Service Area</p>
                  <p className="text-sm" style={{ color: '#A1A1AA' }}>
                    Sacramento · Roseville · Elk Grove · Folsom · Rancho Cordova · Northern California
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
                  style={{ backgroundColor: 'rgba(220,38,38,0.1)', color: '#DC2626' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">Response Time</p>
                  <p className="text-sm" style={{ color: '#A1A1AA' }}>We respond within 1 business day — often same day.</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.15}>
            {status === 'sent' ? (
              <div
                className="flex flex-col items-center justify-center h-full text-center gap-4 p-12 rounded"
                style={{ border: '1px solid #1C1C22', backgroundColor: '#0D0D10' }}
              >
                <div style={{ color: '#DC2626', fontSize: '48px' }}>✓</div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p style={{ color: '#A1A1AA' }}>We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <>
              {status === 'error' && (
                <div className="mb-4 p-3 rounded text-sm" style={{ backgroundColor: 'rgba(220,38,38,0.1)', color: '#DC2626', border: '1px solid rgba(220,38,38,0.2)' }}>
                  Something went wrong. Please call us at (916) 599-5514 or try again.
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#71717A' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#DC2626' }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#1C1C22' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#71717A' }}>
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#DC2626' }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#1C1C22' }}
                    />
                  </div>
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#71717A' }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(916) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#DC2626' }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#1C1C22' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#71717A' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#DC2626' }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#1C1C22' }}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#71717A' }}>
                    Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = '#DC2626' }}
                    onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = '#1C1C22' }}
                  >
                    <option value="" style={{ backgroundColor: '#0D0D10' }}>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ backgroundColor: '#0D0D10' }}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#71717A' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or issue..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = '#DC2626' }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = '#1C1C22' }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 text-base font-bold text-white rounded transition-all duration-200"
                  style={{ backgroundColor: status === 'sending' ? '#7F1D1D' : '#DC2626', cursor: status === 'sending' ? 'wait' : 'pointer' }}
                  onMouseEnter={(e) => { if (status !== 'sending') (e.currentTarget as HTMLElement).style.backgroundColor = '#B91C1C' }}
                  onMouseLeave={(e) => { if (status !== 'sending') (e.currentTarget as HTMLElement).style.backgroundColor = '#DC2626' }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
              </>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
