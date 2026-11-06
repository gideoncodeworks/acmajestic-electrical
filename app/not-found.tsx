import Link from 'next/link'
import Icon from '../components/icon'
import { SITE } from '../lib/content'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <section className="sec" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap-tight" style={{ textAlign: 'center' }}>
        <span className="eyebrow">404</span>
        <h1 className="display" style={{ marginTop: '1rem' }}>
          That page doesn’t exist.
        </h1>
        <p className="lede" style={{ margin: '1.25rem auto 2rem' }}>
          Looks like we pulled the wire on this one. Let’s get you back on track.
        </p>
        <div style={{ display: 'inline-flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary">
            <Icon name="arrow" size={14} /> Home
          </Link>
          <Link href="/services" className="btn btn-ghost">
            See services
          </Link>
          <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">
            <Icon name="phone" size={16} /> {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
