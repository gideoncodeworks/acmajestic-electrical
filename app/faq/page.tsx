import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../../components/icon'
import Reveal from '../../components/reveal'
import { HOME_FAQ, IMAGES, PILLARS, SERVICES, SITE, servicesByPillar } from '../../lib/content'
import { breadcrumbSchema, faqSchema, schemaScript } from '../../lib/schema'
import styles from './faq.module.css'

export const metadata: Metadata = {
  title: 'FAQ — Questions people ask A.C. Majestic Electrical',
  description:
    'Answers to the questions people ask before hiring A.C. Majestic Electrical — service area, licensing, panel changeouts, rewires, outside power, EV chargers, light commercial, and residential rehabs.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  const all = [...HOME_FAQ, ...SERVICES.flatMap((s) => s.faq)]
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(faqSchema(all))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(
          breadcrumbSchema([
            { name: 'Home', url: `${SITE.url}/` },
            { name: 'FAQ', url: `${SITE.url}/faq` },
          ]),
        )}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src={IMAGES.panelChangeout.src}
          alt={IMAGES.panelChangeout.alt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroDim} aria-hidden="true" />
        <div className="wrap">
          <Reveal className={styles.heroCopy}>
            <span className="eyebrow eyebrow--gold">FAQ</span>
            <h1 className="display">
              Questions people ask <em>before they call</em>.
            </h1>
            <p className="lede lede--light">
              Honest answers to the most common questions about A.C. Majestic Electrical — the
              business, the services, and the way we quote.
            </p>
          </Reveal>
        </div>
      </section>

      {/* General FAQ */}
      <section className="sec">
        <div className="wrap-tight">
          <Reveal as="header" className={styles.head}>
            <span className="eyebrow">About the business</span>
            <h2 className="h2">
              General <em>questions</em>.
            </h2>
          </Reveal>
          <div className={styles.faq}>
            {HOME_FAQ.map((f, i) => (
              <Reveal key={f.q} variant="fade-up" delay={i * 50}>
                <details className={styles.faqItem}>
                  <summary>
                    <span>{f.q}</span>
                    <Icon name="arrow" size={16} className={styles.faqChev} />
                  </summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Per-pillar FAQ */}
      {PILLARS.map((pillar) => {
        const services = servicesByPillar(pillar.id)
        const items = services.flatMap((s) => s.faq.map((f) => ({ ...f, slug: s.slug, title: s.shortLabel })))
        if (items.length === 0) return null
        return (
          <section key={pillar.id} className="sec sec-paper-2">
            <div className="wrap-tight">
              <Reveal as="header" className={styles.head}>
                <span className="eyebrow">{pillar.label}</span>
                <h2 className="h2">
                  About <em>{pillar.label.toLowerCase()}</em>.
                </h2>
              </Reveal>
              <div className={styles.faq}>
                {items.map((f, i) => (
                  <Reveal key={`${f.slug}-${f.q}`} variant="fade-up" delay={i * 50}>
                    <details className={styles.faqItem}>
                      <summary>
                        <span>{f.q}</span>
                        <Icon name="arrow" size={16} className={styles.faqChev} />
                      </summary>
                      <p>{f.a}</p>
                      <Link href={`/services/${f.slug}`} className={styles.faqMore}>
                        See the {f.title.toLowerCase()} service <Icon name="arrow" size={12} />
                      </Link>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className={`sec ${styles.cta}`}>
        <div className="wrap-tight">
          <Reveal>
            <h2 className="display">
              Didn’t see your question? <em>Call Antonio.</em>
            </h2>
            <div className={styles.ctaActions}>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-gold">
                <Icon name="phone" size={16} /> {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-ghost--light"
              >
                <Icon name="calendar" size={16} /> Book a walk-through
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
