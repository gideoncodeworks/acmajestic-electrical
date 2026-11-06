import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../../components/icon'
import Reveal from '../../components/reveal'
import { IMAGES, SERVICE_AREAS, SITE } from '../../lib/content'
import { breadcrumbSchema, personSchema, schemaScript } from '../../lib/schema'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About Antonio Cunningham — A.C. Majestic Electrical Service',
  description:
    'A.C. Majestic Electrical Service LLC is owner-run by Antonio Cunningham, a Cleveland-area electrician and residential contractor who built the business on showing up, standing by his word, and finishing the job.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(personSchema())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(
          breadcrumbSchema([
            { name: 'Home', url: `${SITE.url}/` },
            { name: 'About', url: `${SITE.url}/about` },
          ]),
        )}
      />

      {/* ——— Hero ——— */}
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
            <span className="eyebrow eyebrow--gold">About</span>
            <h1 className="display">
              Meet <em>Antonio</em>.
            </h1>
            <p className="lede lede--light">
              Owner, electrician, and residential contractor behind A.C. Majestic Electrical
              Service LLC — a Cleveland-based, phone-forward business built on showing up and
              standing by the work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ——— Story ——— */}
      <section className="sec">
        <div className="wrap">
          <div className={styles.story}>
            <Reveal variant="left">
              <figure className={`frame ${styles.storyImg}`}>
                <Image
                  src={IMAGES.panelChangeout.src}
                  alt={IMAGES.panelChangeout.alt}
                  width={900}
                  height={1100}
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </figure>
            </Reveal>
            <Reveal variant="right" className={styles.storyBody}>
              <span className="eyebrow">The business</span>
              <h2 className="h2">
                A one-call <em>electrician</em>. A two-call <em>contractor</em>.
              </h2>
              <p>
                A.C. Majestic Electrical Service LLC is owner-run by Antonio Cunningham. The core
                of the business is licensed residential electrical work — panel changeouts,
                rewires, outside power runs, lighting, added circuits, EV chargers. If a job stays
                on the electrical side, it starts and ends with the one phone number on this site.
              </p>
              <p>
                When a project needs more than wires — a rental turn, a flip, a long-overdue
                remodel — Antonio can carry the whole scope: roofs, drywall, framing, and finish.
                That means one contractor you can call about the whole house, not three who point
                at each other.
              </p>
              <p>
                We take individual trades too. Just the roof. Just the lights. Just the panel.
                Nothing says you have to buy a whole-house contract to get on the schedule.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Quote ——— */}
      <section className="sec sec-paper-2">
        <div className="wrap-tight">
          <Reveal variant="scale">
            <figure className={styles.quote}>
              <Icon name="crown" size={40} className={styles.quoteCrown} />
              <blockquote>
                <p>
                  “A lot of people get hired for jobs and don’t come back. They take payment, they
                  run off, the homeowner’s stuck. I stand on my word. I show up. I do the work. I
                  finish before I move on to the next one. That’s the business.”
                </p>
              </blockquote>
              <figcaption>
                <strong>Antonio Cunningham</strong>
                <span>Owner, A.C. Majestic Electrical Service LLC</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ——— Values ——— */}
      <section className="sec">
        <div className="wrap">
          <Reveal as="header" className={styles.valuesHead}>
            <span className="eyebrow">How we work</span>
            <h2 className="h2">
              Four promises. <em>Kept every job.</em>
            </h2>
          </Reveal>
          <div className={styles.values}>
            {[
              {
                icon: 'calendar',
                h: 'On time — or you hear from us first',
                p: 'The booking window is honored. If a truck breaks down or a job before yours runs long, you get a text before the window closes.',
              },
              {
                icon: 'check',
                h: 'Finish before the next job starts',
                p: 'We don’t half-do one house to start another. The panel is labeled, the drywall is patched, the ground is cleaned up before we drive off.',
              },
              {
                icon: 'shield',
                h: 'Licensed, insured, permitted',
                p: 'LLC in good standing. General liability. Work that needs a permit gets one — we don’t cut inspection corners.',
              },
              {
                icon: 'phone',
                h: 'Owner answers the phone',
                p: 'You call the number on this site, you get Antonio. No queue, no dispatch, no up-sell script.',
              },
            ].map((v, i) => (
              <Reveal key={v.h} variant="fade-up" delay={i * 80} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Icon name={v.icon} size={22} />
                </div>
                <h3 className="h3">{v.h}</h3>
                <p>{v.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Area ——— */}
      <section className="sec sec-paper-2">
        <div className="wrap">
          <div className={styles.areaWrap}>
            <Reveal variant="left" className={styles.areaCopy}>
              <span className="eyebrow">Where we work</span>
              <h2 className="h2">
                Cleveland based. <em>One-hour radius.</em>
              </h2>
              <p className="lede">
                A.C. Majestic is based in the Cleveland area and books jobs across Northeast Ohio —
                Cuyahoga, Summit, Lake, and Lorain counties, plus the inner-ring suburbs we work
                in weekly.
              </p>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-primary">
                <Icon name="phone" size={16} /> {SITE.phoneDisplay}
              </a>
            </Reveal>
            <Reveal variant="right">
              <ul className={styles.areaList} aria-label="Cities served">
                {SERVICE_AREAS.map((city) => (
                  <li key={city}>
                    <Icon name="pin" size={14} /> {city}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className={`sec ${styles.cta}`}>
        <div className="wrap-tight">
          <Reveal>
            <h2 className="display">
              Call Antonio. <em>Honest walk-through.</em>
            </h2>
            <div className={styles.ctaActions}>
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
              <Link href="/services" className="btn btn-ghost btn-ghost--light">
                See all services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
