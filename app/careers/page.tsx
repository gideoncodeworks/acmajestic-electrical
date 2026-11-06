import type { Metadata } from 'next'
import Image from 'next/image'
import Icon from '../../components/icon'
import Reveal from '../../components/reveal'
import { IMAGES, SITE } from '../../lib/content'
import { breadcrumbSchema, jobPostingSchema, schemaScript } from '../../lib/schema'
import styles from './careers.module.css'

export const metadata: Metadata = {
  title: 'Careers — Hiring 1099 electricians in the Cleveland area',
  description:
    'A.C. Majestic Electrical is hiring 1099 electricians and skilled trade help across Cleveland, Akron, and Northeast Ohio. Residential, light commercial, and rehab work. Pay per check, on time.',
  alternates: { canonical: '/careers' },
}

const roles = [
  {
    title: 'Licensed Electrician (1099)',
    summary:
      'Residential and light commercial electrical work. Panel changeouts, rewires, outside power runs, lighting, troubleshooting. Need your own truck and hand tools.',
    bullets: [
      'Cleveland metro + ~1-hour radius',
      'Pay per check, on time',
      'Steady schedule — we keep crews booked',
    ],
  },
  {
    title: 'Electrician Helper / Apprentice',
    summary:
      'Hands-on helper work — pulling cable, cutting pipe, drilling, patching, cleaning up. Great route in for someone trying to break into the trade with a strong work ethic.',
    bullets: [
      'Reliable transport required',
      'Learn from a licensed electrician on every job',
      'Pay per check, on time',
    ],
  },
  {
    title: 'Rehab Trade Partners (roofing, drywall, framing)',
    summary:
      'Experienced individual trades that pair up on residential rehabs. We bring the lead, you bring the skill and the crew.',
    bullets: [
      'Insured individual contractors preferred',
      'Rental turns and flips',
      'Clean worksites, clear scope, respect for schedule',
    ],
  },
]

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(jobPostingSchema())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaScript(
          breadcrumbSchema([
            { name: 'Home', url: `${SITE.url}/` },
            { name: 'Careers', url: `${SITE.url}/careers` },
          ]),
        )}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src={IMAGES.crew.src}
          alt={IMAGES.crew.alt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroDim} aria-hidden="true" />
        <div className="wrap">
          <Reveal className={styles.heroCopy}>
            <span className="eyebrow eyebrow--gold">Careers</span>
            <h1 className="display">
              Growing a crew that <em>shows up</em>.
            </h1>
            <p className="lede lede--light">
              A.C. Majestic Electrical is actively adding 1099 electricians and skilled trade
              partners across Cleveland, Akron, and the rest of Northeast Ohio. Residential, light
              commercial, and rehab work. Pay per check — on time, every time.
            </p>
            <div className={styles.heroActions}>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-gold">
                <Icon name="phone" size={16} /> Call {SITE.phoneDisplay}
              </a>
              <a href="#roles" className="btn btn-ghost btn-ghost--light">
                See open roles <Icon name="arrow" size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why join */}
      <section className="sec">
        <div className="wrap">
          <Reveal as="header" className={styles.head}>
            <span className="eyebrow">Why join</span>
            <h2 className="h2">
              A crew built on <em>showing up</em>, finishing the work, and getting paid.
            </h2>
          </Reveal>
          <div className={styles.why}>
            {[
              { h: 'Pay per check, on time', p: 'No “wait on the owner” drama. You turn in the work, you get paid on schedule.' },
              { h: 'Steady schedule', p: 'We keep crews booked across residential, commercial, and rehab. Slow weeks are rare.' },
              { h: 'Owner on the job', p: 'Antonio runs the jobs — you’re working with the owner, not a middleman.' },
              { h: 'Clean worksites', p: 'We respect the house and the homeowner. Clean tools, clean language, clean cleanup.' },
            ].map((w, i) => (
              <Reveal key={w.h} variant="fade-up" delay={i * 80} className={styles.whyCard}>
                <Icon name="check" size={22} className={styles.whyIcon} />
                <h3 className={styles.whyH}>{w.h}</h3>
                <p>{w.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="sec sec-paper-2">
        <div className="wrap">
          <Reveal as="header" className={styles.head}>
            <span className="eyebrow">Open roles</span>
            <h2 className="h2">
              Who we’re <em>hiring</em>.
            </h2>
          </Reveal>
          <div className={styles.roles}>
            {roles.map((r, i) => (
              <Reveal
                as="article"
                variant="fade-up"
                delay={i * 90}
                key={r.title}
                className={styles.roleCard}
              >
                <h3 className="h3">{r.title}</h3>
                <p>{r.summary}</p>
                <ul>
                  {r.bullets.map((b) => (
                    <li key={b}><Icon name="check" size={14} /> {b}</li>
                  ))}
                </ul>
                <a href={`tel:${SITE.phoneTel}`} className="btn btn-primary">
                  <Icon name="phone" size={16} /> Call about this role
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="sec">
        <div className="wrap-tight">
          <Reveal as="header" className={styles.head}>
            <span className="eyebrow">How to reach out</span>
            <h2 className="h2">
              Call Antonio <em>directly</em>.
            </h2>
            <p className="lede">
              There’s no application portal. A.C. Majestic hires through conversations. Give us a
              call, tell us what you do, where you are, and what you’re looking for — we’ll take it
              from there.
            </p>
          </Reveal>
          <Reveal className={styles.cta}>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-primary">
              <Icon name="phone" size={16} /> {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Icon name="calendar" size={16} /> Book a time to talk
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
