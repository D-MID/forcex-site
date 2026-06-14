'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import './globals.css'
import { ScrollProgress } from '@/components/animations/ScrollProgress'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <html lang="en">
      <head>
        <title>ForceX Tech LLC — IT Support, Networking & Smart Technology | Sacramento, CA</title>
        <meta name="description" content="ForceX Tech LLC provides enterprise IT support, managed services, network design, security cameras, access control, and smart technology solutions in Sacramento, CA and Northern California." />
        <meta name="keywords" content="IT support Sacramento, managed IT services California, network cabling Sacramento, security camera installation, UniFi networking, structured cabling, smart home Sacramento" />
        <meta property="og:title" content="ForceX Tech LLC — Enterprise Technology Solutions" />
        <meta property="og:description" content="Complete IT infrastructure, networking, security, and smart technology solutions for businesses and homes across Sacramento and Northern California." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forcextech.us" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://forcextech.us" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ForceX Tech LLC",
              "description": "IT support, managed services, networking, security cameras, access control, and smart technology solutions.",
              "url": "https://forcextech.us",
              "telephone": "+19165995514",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sacramento",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "areaServed": ["Sacramento", "Roseville", "Elk Grove", "Folsom", "Rancho Cordova", "Northern California"],
              "serviceType": ["IT Support", "Managed IT Services", "Network Design", "Security Cameras", "Access Control", "Smart Home", "Structured Cabling"]
            })
          }}
        />
      </head>
      <body className="grain">
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
