'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import './globals.css'
import { ScrollProgress } from '@/components/animations/ScrollProgress'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
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
        <title>Sacramento IT Support, UniFi Networks & Low Voltage Installation | ForceX Tech LLC</title>
        <meta name="description" content="ForceX Tech LLC designs, installs, and supports complete commercial IT infrastructure in Sacramento — managed IT, UniFi WiFi, structured cabling, security cameras, access control, Loxone automation, and AV systems. Serving Sacramento, Roseville, Folsom, Elk Grove & Northern California." />
        <meta name="keywords" content="UniFi installer Sacramento, Ubiquiti installer Sacramento, structured cabling Sacramento, low voltage contractor Sacramento, security camera installation Sacramento, access control Sacramento, dental IT support Sacramento, managed IT services Sacramento, server rack installation Sacramento, commercial WiFi installation Sacramento, Loxone installer Sacramento, IT support Sacramento" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ForceX Tech LLC" />
        <meta property="og:title" content="Sacramento IT Support, UniFi Networks & Low Voltage Installation | ForceX Tech" />
        <meta property="og:description" content="Commercial IT infrastructure for offices, dental clinics, and commercial properties in Sacramento. UniFi WiFi, structured cabling, security cameras, access control, and Loxone automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forcexcommercial.com" />
        <meta property="og:image" content="https://forcexcommercial.com/og-image.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="ForceX Tech LLC" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ForceX Tech LLC | Sacramento IT Infrastructure" />
        <meta name="twitter:description" content="Commercial IT infrastructure for Sacramento businesses — UniFi, structured cabling, security cameras, access control, and Loxone automation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://forcexcommercial.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..900;1,14..32,300..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://forcexcommercial.com/#business",
              "name": "ForceX Tech LLC",
              "description": "Commercial IT infrastructure company specializing in managed IT, UniFi networking, structured cabling, security cameras, access control, Loxone smart automation, and AV systems for Sacramento area businesses.",
              "url": "https://forcexcommercial.com",
              "telephone": "+19165995514",
              "email": "disoian@forcextech.us",
              "founder": "Davyd Isoian",
              "foundingDate": "2014",
              "priceRange": "$$$$",
              "image": "https://forcexcommercial.com/og-image.jpg",
              "logo": "https://forcexcommercial.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sacramento",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.5816,
                "longitude": -121.4944
              },
              "areaServed": [
                "Sacramento", "Roseville", "Rocklin", "Folsom", "Elk Grove",
                "Rancho Cordova", "Citrus Heights", "Granite Bay", "Lincoln",
                "Davis", "Woodland", "Auburn", "West Sacramento", "Northern California"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technology Infrastructure Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed IT Services", "areaServed": "Sacramento, CA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UniFi Network Installation", "areaServed": "Sacramento, CA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structured Cabling", "areaServed": "Sacramento, CA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Camera Installation", "areaServed": "Sacramento, CA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Access Control Systems", "areaServed": "Sacramento, CA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loxone Smart Automation", "areaServed": "Sacramento, CA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Low Voltage Contractor", "areaServed": "Sacramento, CA" } }
                ]
              },
              "sameAs": [
                "https://github.com/D-MID/forcex-site"
              ]
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
