import type { Metadata, Viewport } from 'next'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Icon from '../components/icon'
import MobileCta from '../components/mobile-cta'
import { SITE } from '../lib/content'
import { localBusinessSchema, websiteSchema, schemaScript } from '../lib/schema'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Cleveland electrician & residential contractor`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'Licensed Cleveland-area electrician and residential contractor. Panel changeouts, rewires, lighting, outside services, light commercial — plus full rehabs. Serving Cleveland, Akron, Painesville and the Northeast Ohio communities within an hour.',
  keywords: [
    'electrician Cleveland',
    'Cleveland electrician',
    'residential electrician Cleveland',
    'panel changeout Cleveland',
    'rewire Cleveland',
    'Akron electrician',
    'Painesville electrician',
    'light commercial electrician',
    'residential contractor Cleveland',
    'total rehab Cleveland',
    'A.C. Majestic Electrical',
    'Antonio Cunningham electrician',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} — Cleveland electrician & residential contractor`,
    description:
      'Licensed Cleveland-area electrician + residential contractor. Panel changeouts, rewires, lighting, light commercial, and full rehabs.',
    url: SITE.url,
    images: [{ url: '/acmajestic-logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Cleveland electrician & residential contractor`,
    description:
      'Licensed Cleveland-area electrician + residential contractor. Panels, rewires, lighting, light commercial, and full rehabs.',
    images: ['/acmajestic-logo.png'],
  },
  icons: {
    icon: '/acmajestic-logo.png',
  },
  robots: { index: true, follow: true },
  verification: {},
}

export const viewport: Viewport = {
  themeColor: '#5B2C91',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schemaScript(localBusinessSchema())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schemaScript(websiteSchema())}
        />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <div className="ticker">
          <div className="ticker-inner">
            <span className="ticker-left">
              <Icon name="bolt" size={14} /> <span>A.C. Majestic Electrical — Cleveland, OH</span>
            </span>
            <span className="ticker-right">
              <a href={`tel:${SITE.phoneTel}`}>Call {SITE.phoneDisplay}</a>
              <a href={SITE.booking} target="_blank" rel="noopener noreferrer">
                Book online →
              </a>
            </span>
          </div>
        </div>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  )
}
