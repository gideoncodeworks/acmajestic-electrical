import Link from 'next/link'
import Image from 'next/image'
import Icon from './icon'
import logo from '../public/acmajestic-logo.png'
import { SITE, PILLARS } from '../lib/content'
import styles from './footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`${styles.top} wrap`}>
        <div className={styles.brand}>
          <Image src={logo} alt={SITE.name} height={42} className={styles.logo} />
          <p className={styles.tag}>
            Licensed electrician and residential contractor serving Cleveland, Akron, Painesville,
            and the Northeast Ohio communities inside a one-hour drive.
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ig}
          >
            <Icon name="instagram" size={18} />
            <span>{SITE.instagramHandle}</span>
          </a>
        </div>

        <div className={styles.col}>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Antonio</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Services</h4>
          <ul>
            {PILLARS.map((p) => (
              <li key={p.id}>
                <Link href={`/services#${p.id}`}>{p.label}</Link>
              </li>
            ))}
            <li><Link href="/services/panel-changeout">Panel changeouts</Link></li>
            <li><Link href="/services/rewire">Whole-house rewires</Link></li>
            <li><Link href="/services/lighting">Lighting installation</Link></li>
          </ul>
        </div>

        <div className={`${styles.col} ${styles.contact}`}>
          <h4>Get in touch</h4>
          <a href={`tel:${SITE.phoneTel}`} className={styles.phone}>
            <Icon name="phone" size={18} />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.book}
          >
            <Icon name="calendar" size={18} />
            <span>Book online</span>
          </a>
          <p className={styles.note}>Licensed &amp; insured · Cleveland, OH</p>
        </div>
      </div>

      <div className={`${styles.bottom} wrap`}>
        <p>© {year} {SITE.legalName}</p>
        <p className={styles.credit}>
          Site by{' '}
          <a href="https://gideoncodeworks.com" target="_blank" rel="noopener noreferrer">
            Gideon Code Works
          </a>
        </p>
      </div>
    </footer>
  )
}
