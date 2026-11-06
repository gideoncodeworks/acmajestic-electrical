import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../../components/icon'
import Reveal from '../../components/reveal'
import {
  HOME_FAQ,
  IMAGES,
  PILLARS,
  SERVICES,
  SERVICE_IMAGE,
  SITE,
  servicesByPillar,
  type Service,
} from '../../lib/content'
import { breadcrumbSchema, faqSchema, schemaScript } from '../../lib/schema'
import styles from './services.module.css'

export const metadata: Metadata = {
  title: 'Services — Electrical, Light Commercial & Rehabs in Cleveland',
  description:
    'Every service A.C. Majestic Electrical offers across Cleveland, Akron, Painesville and Northeast Ohio: panel changeouts, rewires, outside power runs, lighting, EV chargers, light commercial, and residential rehabs.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(
          breadcrumbSchema([
            { name: 'Home', url: `${SITE.url}/` },
            { name: 'Services', url: `${SITE.url}/services` },
          ]),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(faqSchema(HOME_FAQ))}
      />

      {/* ——— Page hero ——— */}
      <section className={styles.hero}>
        <Image
          src={IMAGES.electricalWork.src}
          alt={IMAGES.electricalWork.alt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroDim} aria-hidden="true" />
        <div className="wrap">
          <Reveal className={styles.heroCopy}>
            <span className="eyebrow eyebrow--gold">What we do</span>
            <h1 className="display">
              Clean work. Honest scope. <em>Finished before we go.</em>
            </h1>
            <p className="lede lede--light">
              A.C. Majestic is organized around three pillars — residential electrical, light
              commercial, and residential rehabs. Jump to the one you need, or scroll through
              every service we take on.
            </p>
            <div className={styles.heroCta}>
              <a
                href={SITE.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <Icon name="calendar" size={16} /> Book online
              </a>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost btn-ghost--light">
                <Icon name="phone" size={16} /> {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Pillar nav ——— */}
      <div className={styles.pillarNavBar}>
        <div className={`wrap ${styles.pillarNav}`}>
          {PILLARS.map((p) => (
            <a key={p.id} href={`#${p.id}`} className={styles.pillarNavLink}>
              <Icon name={p.icon} size={16} /> {p.label}
            </a>
          ))}
        </div>
      </div>

      {/* ——— One section per pillar ——— */}
      {PILLARS.map((pillar, pIdx) => {
        const services = servicesByPillar(pillar.id) as Service[]
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`sec ${pIdx % 2 === 1 ? 'sec-paper-2' : ''}`}
          >
            <div className="wrap">
              <Reveal as="header" className={styles.pillarHead}>
                <span className="eyebrow">Pillar {pIdx + 1}</span>
                <h2 className="h2">
                  <em>{pillar.label}.</em>{' '}
                  <span>{pillar.summary.split('.')[0]}.</span>
                </h2>
              </Reveal>

              <div className={styles.serviceList}>
                {services.map((s, i) => {
                  const img = IMAGES[SERVICE_IMAGE[s.slug]]
                  const reverse = i % 2 === 1
                  return (
                    <Reveal
                      as="article"
                      variant="fade-up"
                      delay={i * 60}
                      key={s.slug}
                      className={`${styles.serviceRow} ${reverse ? styles.reverse : ''}`}
                    >
                      <Link href={`/services/${s.slug}`} className={styles.serviceImg} aria-hidden="true">
                        <figure className="frame">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={1000}
                            height={700}
                            sizes="(max-width: 900px) 100vw, 50vw"
                          />
                        </figure>
                      </Link>
                      <div className={styles.serviceBody}>
                        <div className={styles.serviceTag}>
                          <Icon name={s.icon} size={18} /> {pillar.label}
                        </div>
                        <h3 className="h3">
                          <Link href={`/services/${s.slug}`}>{s.title}</Link>
                        </h3>
                        <p>{s.tagline}</p>
                        <ul className={styles.serviceBullets}>
                          {s.bullets.slice(0, 4).map((b) => (
                            <li key={b}>
                              <Icon name="check" size={14} /> {b}
                            </li>
                          ))}
                        </ul>
                        <Link href={`/services/${s.slug}`} className="btn btn-ghost">
                          Read about {s.shortLabel.toLowerCase()} <Icon name="arrow" size={14} />
                        </Link>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}

      {/* ——— Final CTA ——— */}
      <section className={`sec ${styles.finalCta}`}>
        <div className="wrap-tight">
          <Reveal>
            <h2 className="display">
              Walk the job with Antonio. <em>Honest quote, same day.</em>
            </h2>
            <div className={styles.finalCtaActions}>
              <a
                href={SITE.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <Icon name="calendar" size={16} /> Book online
              </a>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-primary">
                <Icon name="phone" size={16} /> {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
