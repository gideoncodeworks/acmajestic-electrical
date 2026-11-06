import Image from 'next/image'
import Link from 'next/link'
import Icon from '../components/icon'
import Reveal from '../components/reveal'
import {
  HOME_FAQ,
  IMAGES,
  PILLARS,
  REVIEWS_PLACEHOLDER,
  SERVICE_AREAS,
  SERVICE_IMAGE,
  SERVICES,
  SITE,
} from '../lib/content'
import { faqSchema, schemaScript } from '../lib/schema'
import styles from './home.module.css'

export default function HomePage() {
  const pillarImages = {
    electrical: IMAGES.electricalWork,
    commercial: IMAGES.commercialPanel,
    rehab: IMAGES.rehab,
  } as const

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(faqSchema(HOME_FAQ))}
      />

      {/* ——— HERO ——— */}
      <section className={styles.hero}>
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroDim} aria-hidden="true" />
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Reveal variant="fade-up" delay={0}>
              <span className="eyebrow eyebrow--gold">
                Cleveland · Akron · Painesville
              </span>
            </Reveal>
            <Reveal variant="fade-up" delay={80}>
              <h1 className={`display ${styles.heroH1}`}>
                The electrician who <em>shows up</em> — and finishes the job.
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={160}>
              <p className={`lede lede--light ${styles.heroLede}`}>
                A.C. Majestic Electrical is a licensed Cleveland-area electrician and residential
                contractor. Panel changeouts, rewires, lighting, outside power runs, light
                commercial — and full rehabs when the job needs more than wires.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={240}>
              <div className={styles.heroActions}>
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
            <Reveal variant="fade-up" delay={320}>
              <ul className={styles.heroFacts}>
                <li><Icon name="check" size={16} /> Licensed &amp; insured</li>
                <li><Icon name="check" size={16} /> Residential + light commercial</li>
                <li><Icon name="check" size={16} /> Owner on the job, not a call center</li>
              </ul>
            </Reveal>
          </div>

          <Reveal as="div" variant="right" delay={200} className={styles.heroCard}>
            <div className={styles.heroCardTop}>
              <Icon name="crown" size={20} className={styles.heroCardCrown} />
              <span>Cleveland, OH</span>
            </div>
            <blockquote className={styles.heroQuote}>
              <p>
                “A lot of people get hired for jobs and don’t come back. I stand on my word. I
                show up, do the work, and finish before I move on.”
              </p>
              <cite>— Antonio Cunningham, Owner</cite>
            </blockquote>
            <a href={`tel:${SITE.phoneTel}`} className={styles.heroCardPhone}>
              <span>Direct line</span>
              <strong>{SITE.phoneDisplay}</strong>
            </a>
          </Reveal>
        </div>
        <div className={styles.heroMarquee} aria-hidden="true">
          <div className={styles.heroMarqueeTrack}>
            {[
              'Panel changeouts',
              'Rewires',
              'Garage power',
              'EV chargers',
              'Lighting',
              'Light commercial',
              'Total rehabs',
              'Outside outlets',
              'Panel changeouts',
              'Rewires',
              'Garage power',
              'EV chargers',
              'Lighting',
              'Light commercial',
              'Total rehabs',
              'Outside outlets',
            ].map((s, i) => (
              <span key={i}>
                {s}
                <Icon name="bolt" size={14} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ——— THREE PILLARS ——— */}
      <section className="sec">
        <div className="wrap">
          <Reveal as="header" className={styles.sectionHead}>
            <span className="eyebrow">Three ways to work together</span>
            <h2 className="h2">
              Electrical first. <em>Everything else</em> when you need it.
            </h2>
            <p className="lede">
              Antonio runs A.C. Majestic as a residential electrician who can also carry a full
              rehab across the finish line. Hire us for a single outlet, a 200-amp upgrade, a
              salon tenant fit-out, or a whole-house flip — the bar is the same either way.
            </p>
          </Reveal>

          <div className={styles.pillars}>
            {PILLARS.map((p, i) => {
              const img = pillarImages[p.id]
              return (
                <Reveal
                  as="article"
                  variant="fade-up"
                  delay={i * 90}
                  key={p.id}
                  className={styles.pillar}
                >
                  <div id={p.id} />
                  <figure className={`frame ${styles.pillarImg}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={520}
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </figure>
                  <div className={styles.pillarBody}>
                    <div className={styles.pillarIcon}>
                      <Icon name={p.icon} size={28} strokeWidth={1.4} />
                    </div>
                    <h3 className="h3">{p.label}</h3>
                    <p>{p.summary}</p>
                    <ul className={styles.pillarList}>
                      {p.services.map((slug) => {
                        const service = SERVICES.find((s) => s.slug === slug)!
                        return (
                          <li key={slug}>
                            <Link href={`/services/${slug}`}>
                              <Icon name="arrow" size={14} /> {service.shortLabel}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div className={styles.pillarsCta}>
            <Link href="/services" className="btn btn-primary">
              See every service <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— WHY ANTONIO ——— */}
      <section className="sec sec-ink">
        <div className="wrap">
          <Reveal className={styles.why}>
            <div>
              <span className="eyebrow eyebrow--gold">Why Antonio</span>
              <h2 className="h2 h2--light">
                You hire a contractor <em>once</em>. Make it count.
              </h2>
            </div>
            <div className={styles.whyGrid}>
              {[
                {
                  h: 'Shows up when he says',
                  p: 'No ghost windows. If Antonio books a time, he’s there — and he tells you if he’s running late.',
                },
                {
                  h: 'Finishes before moving on',
                  p: 'The next job doesn’t start until this one is clean, labeled, and signed off.',
                },
                {
                  h: 'Licensed, insured, local',
                  p: 'Cleveland-based LLC. Owner-run. The number on the site rings a phone, not a queue.',
                },
                {
                  h: 'Honest scope & price',
                  p: 'Walk-through before the quote. No surprise line items after the work’s done.',
                },
              ].map((c, i) => (
                <Reveal key={c.h} variant="fade-up" delay={i * 80} className={styles.whyCard}>
                  <Icon name="check" size={22} className={styles.whyIcon} />
                  <h4>{c.h}</h4>
                  <p>{c.p}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— SERVICE AREA ——— */}
      <section className="sec sec-paper-2">
        <div className="wrap">
          <div className={styles.areaWrap}>
            <Reveal variant="left">
              <figure className={`frame ${styles.areaImg}`}>
                <Image
                  src={IMAGES.cleveland.src}
                  alt={IMAGES.cleveland.alt}
                  width={900}
                  height={1100}
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </figure>
            </Reveal>
            <Reveal variant="right" className={styles.areaCopy}>
              <span className="eyebrow">Service area</span>
              <h2 className="h2">
                An hour from Cleveland, <em>every direction</em>.
              </h2>
              <p className="lede">
                A.C. Majestic serves Cleveland and the Northeast Ohio communities inside roughly a
                one-hour drive. If you’re in Cuyahoga, Summit, Lake, or Lorain County — you’re on
                the route.
              </p>
              <ul className={styles.areaGrid} aria-label="Cities served">
                {SERVICE_AREAS.map((city) => (
                  <li key={city}>
                    <Icon name="pin" size={14} /> {city}
                  </li>
                ))}
              </ul>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-primary">
                <Icon name="phone" size={16} /> Check your address — {SITE.phoneDisplay}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— REVIEWS PLACEHOLDER ——— */}
      <section className="sec">
        <div className="wrap-tight">
          <Reveal as="header" className={styles.sectionHead}>
            <span className="eyebrow">Reviews</span>
            <h2 className="h2">
              Google reviews <em>loading soon</em>.
            </h2>
            <p className="lede">{REVIEWS_PLACEHOLDER.note}</p>
          </Reveal>
          <Reveal variant="scale">
            <figure className={styles.quote}>
              <div className={styles.quoteStars} aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" size={22} />
                ))}
              </div>
              <blockquote>
                <p>“{REVIEWS_PLACEHOLDER.quote}”</p>
              </blockquote>
              <figcaption>{REVIEWS_PLACEHOLDER.quoteAttribution}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ——— HIRING CTA ——— */}
      <section className={`sec ${styles.hiringSection}`}>
        <Image
          src={IMAGES.crew.src}
          alt={IMAGES.crew.alt}
          fill
          sizes="100vw"
          className={styles.hiringImg}
        />
        <div className={styles.hiringDim} aria-hidden="true" />
        <div className="wrap">
          <Reveal className={styles.hiring}>
            <div>
              <span className="eyebrow eyebrow--gold">We’re growing</span>
              <h2 className="h2 h2--light">
                Looking for <em>reliable trade help</em>. Cleveland-area 1099.
              </h2>
              <p className="lede lede--light">
                A.C. Majestic is adding 1099 electricians and skilled trade partners across
                Northeast Ohio. Residential, light commercial, and rehab work — pay per check, on
                time. Show up, finish the job, and we’ll keep you busy.
              </p>
            </div>
            <div className={styles.hiringActions}>
              <Link href="/careers" className="btn btn-gold">
                See what we’re hiring for <Icon name="arrow" size={14} />
              </Link>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost btn-ghost--light">
                <Icon name="phone" size={16} /> {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— FAQ (AEO) ——— */}
      <section className="sec">
        <div className="wrap-tight">
          <Reveal as="header" className={styles.sectionHead}>
            <span className="eyebrow">Common questions</span>
            <h2 className="h2">
              What people ask <em>before they call</em>.
            </h2>
          </Reveal>
          <div className={styles.faq}>
            {HOME_FAQ.map((f, i) => (
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

      {/* ——— FINAL CTA ——— */}
      <section className={`sec ${styles.finalCta}`}>
        <div className="wrap-tight">
          <Reveal>
            <h2 className="display">
              Ready when you are. <em>Book online or call.</em>
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
