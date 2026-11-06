import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Icon from '../../../components/icon'
import Reveal from '../../../components/reveal'
import {
  IMAGES,
  PILLARS,
  SERVICES,
  SERVICE_IMAGE,
  SITE,
  getService,
} from '../../../lib/content'
import {
  breadcrumbSchema,
  faqSchema,
  schemaScript,
  serviceSchema,
} from '../../../lib/schema'
import styles from './service.module.css'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.metaTitle.replace(' | A.C. Majestic Electrical', ''),
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE.url}/services/${service.slug}`,
      images: [IMAGES[SERVICE_IMAGE[service.slug]].src],
    },
  }
}

export default async function ServiceDetail({ params }: { params: Params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const pillar = PILLARS.find((p) => p.id === service.pillar)!
  const img = IMAGES[SERVICE_IMAGE[service.slug]]
  const related = SERVICES.filter(
    (s) => s.pillar === service.pillar && s.slug !== service.slug,
  ).slice(0, 3)
  const fallbackRelated = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3)
  const relatedToShow = related.length ? related : fallbackRelated

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(serviceSchema(service))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(faqSchema(service.faq))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(
          breadcrumbSchema([
            { name: 'Home', url: `${SITE.url}/` },
            { name: 'Services', url: `${SITE.url}/services` },
            { name: service.title, url: `${SITE.url}/services/${service.slug}` },
          ]),
        )}
      />

      {/* ——— Hero ——— */}
      <section className={styles.hero}>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroDim} aria-hidden="true" />
        <div className="wrap">
          <Reveal className={styles.heroCopy}>
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <Icon name="arrow" size={12} />
              <Link href="/services">Services</Link>
              <Icon name="arrow" size={12} />
              <span>{pillar.label}</span>
            </nav>
            <h1 className="display">{service.title}</h1>
            <p className="lede lede--light">{service.tagline}</p>
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

      {/* ——— Detail + bullets ——— */}
      <section className="sec">
        <div className="wrap">
          <div className={styles.detail}>
            <Reveal className={styles.detailBody}>
              <span className="eyebrow">What’s involved</span>
              <h2 className="h2">{service.title}, done right.</h2>
              <p>{service.description}</p>
              <ul className={styles.detailList}>
                {service.bullets.map((b) => (
                  <li key={b}>
                    <span className={styles.detailBullet}>
                      <Icon name="check" size={16} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.detailActions}>
                <a
                  href={SITE.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Icon name="calendar" size={16} /> Book this service
                </a>
                <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">
                  <Icon name="phone" size={16} /> {SITE.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal variant="right">
              <aside className={styles.sidebar}>
                <h3 className={styles.sidebarTitle}>
                  <Icon name="shield" size={18} /> Why Antonio
                </h3>
                <ul className={styles.sidebarList}>
                  <li>Licensed &amp; insured — Cleveland, OH</li>
                  <li>Owner-run, phone-forward communication</li>
                  <li>Permit pulled, inspection handled</li>
                  <li>Clean-up and panel labeling before we leave</li>
                </ul>
                <div className={styles.sidebarDivider} aria-hidden="true" />
                <h3 className={styles.sidebarTitle}>
                  <Icon name="pin" size={18} /> Service area
                </h3>
                <p className={styles.sidebarText}>
                  Cleveland, Akron, Painesville, and the Northeast Ohio communities inside about a
                  one-hour drive.
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      {service.faq.length > 0 && (
        <section className="sec sec-paper-2">
          <div className="wrap-tight">
            <Reveal as="header" className={styles.faqHead}>
              <span className="eyebrow">Common questions</span>
              <h2 className="h2">
                About <em>{service.shortLabel.toLowerCase()}</em>.
              </h2>
            </Reveal>
            <div className={styles.faq}>
              {service.faq.map((f, i) => (
                <Reveal key={f.q} variant="fade-up" delay={i * 60}>
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
      )}

      {/* ——— Related services ——— */}
      <section className="sec">
        <div className="wrap">
          <Reveal as="header" className={styles.relatedHead}>
            <span className="eyebrow">Keep exploring</span>
            <h2 className="h2">
              Other services we <em>take on</em>.
            </h2>
          </Reveal>
          <div className={styles.related}>
            {relatedToShow.map((s, i) => {
              const relImg = IMAGES[SERVICE_IMAGE[s.slug]]
              return (
                <Reveal
                  as="article"
                  variant="fade-up"
                  delay={i * 80}
                  key={s.slug}
                  className={styles.relatedCard}
                >
                  <Link href={`/services/${s.slug}`} className={styles.relatedLink}>
                    <figure className={`frame ${styles.relatedImg}`}>
                      <Image
                        src={relImg.src}
                        alt={relImg.alt}
                        width={700}
                        height={500}
                        sizes="(max-width: 900px) 100vw, 33vw"
                      />
                    </figure>
                    <div className={styles.relatedBody}>
                      <h3 className="h3">{s.title}</h3>
                      <p>{s.tagline}</p>
                      <span className={styles.relatedMore}>
                        Read more <Icon name="arrow" size={14} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
