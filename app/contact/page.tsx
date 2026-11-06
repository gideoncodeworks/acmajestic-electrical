import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../../components/icon'
import Reveal from '../../components/reveal'
import { IMAGES, SERVICE_AREAS, SITE } from '../../lib/content'
import { breadcrumbSchema, schemaScript } from '../../lib/schema'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact — Call Antonio or book online',
  description:
    'Reach A.C. Majestic Electrical the way Antonio prefers — by phone or through the online booking calendar. Serving Cleveland, Akron, Painesville and Northeast Ohio.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(
          breadcrumbSchema([
            { name: 'Home', url: `${SITE.url}/` },
            { name: 'Contact', url: `${SITE.url}/contact` },
          ]),
        )}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src={IMAGES.clevelandHarbor.src}
          alt={IMAGES.clevelandHarbor.alt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroDim} aria-hidden="true" />
        <div className="wrap">
          <Reveal className={styles.heroCopy}>
            <span className="eyebrow eyebrow--gold">Contact</span>
            <h1 className="display">
              The <em>one number</em> to call.
            </h1>
            <p className="lede lede--light">
              A.C. Majestic Electrical is owner-run. The phone rings Antonio directly, and the
              online booking calendar is his — pick a time, show up, we show up.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact methods */}
      <section className="sec">
        <div className="wrap">
          <div className={styles.methods}>
            <Reveal className={styles.methodCard}>
              <Icon name="phone" size={28} className={styles.methodIcon} />
              <div>
                <h2 className={styles.methodH}>Call</h2>
                <p>Fastest way to reach Antonio. Call during the day — if he can’t pick up, leave a voicemail or text and he’ll call back.</p>
              </div>
              <a href={`tel:${SITE.phoneTel}`} className={styles.methodCta}>
                {SITE.phoneDisplay}
                <Icon name="arrow" size={16} />
              </a>
            </Reveal>

            <Reveal variant="fade-up" delay={100} className={styles.methodCard}>
              <Icon name="calendar" size={28} className={styles.methodIcon} />
              <div>
                <h2 className={styles.methodH}>Book online</h2>
                <p>Pick a time on Antonio’s live calendar. The booking confirms you both ways — text + email — and gets the walk-through on the schedule.</p>
              </div>
              <a
                href={SITE.booking}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.methodCta}
              >
                Open calendar
                <Icon name="arrow" size={16} />
              </a>
            </Reveal>

            <Reveal variant="fade-up" delay={200} className={styles.methodCard}>
              <Icon name="instagram" size={28} className={styles.methodIcon} />
              <div>
                <h2 className={styles.methodH}>Follow on Instagram</h2>
                <p>Work photos, before-and-afters, the odd behind-the-scenes clip from the truck.</p>
              </div>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.methodCta}
              >
                {SITE.instagramHandle}
                <Icon name="arrow" size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Big primary CTA band */}
      <section className={`sec ${styles.ctaBand}`}>
        <div className={`wrap ${styles.ctaBandInner}`}>
          <Reveal>
            <span className="eyebrow eyebrow--gold">On-the-spot</span>
            <h2 className="h2 h2--light">
              Need it today? <em>Call.</em>
            </h2>
            <p className="lede lede--light">
              Urgent jobs — loose meter base, dead outlet string, breaker won’t reset — get moved
              up the schedule when they come in by phone.
            </p>
          </Reveal>
          <Reveal variant="right">
            <a href={`tel:${SITE.phoneTel}`} className={styles.ctaBandPhone}>
              <span>Direct line</span>
              <strong>{SITE.phoneDisplay}</strong>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Area */}
      <section className="sec">
        <div className="wrap">
          <Reveal as="header" className={styles.areaHead}>
            <span className="eyebrow">Service area</span>
            <h2 className="h2">
              Cleveland, Akron, Painesville, and <em>everywhere between</em>.
            </h2>
            <p className="lede">
              A.C. Majestic serves the Northeast Ohio communities inside about a one-hour drive of
              Cleveland. If your address isn’t listed, call — we usually say yes.
            </p>
          </Reveal>
          <ul className={styles.areaList} aria-label="Cities served">
            {SERVICE_AREAS.map((city) => (
              <li key={city}><Icon name="pin" size={14} /> {city}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* small jump nav */}
      <section className="sec sec-paper-2">
        <div className={`wrap ${styles.jumps}`}>
          <Link href="/services" className={styles.jump}>
            <span>Browse services</span>
            <Icon name="arrow" size={18} />
          </Link>
          <Link href="/about" className={styles.jump}>
            <span>About Antonio</span>
            <Icon name="arrow" size={18} />
          </Link>
          <Link href="/careers" className={styles.jump}>
            <span>Careers</span>
            <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
