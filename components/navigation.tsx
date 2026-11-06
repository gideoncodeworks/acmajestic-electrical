'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Icon from './icon'
import logo from '../public/acmajestic-logo.png'
import { SITE } from '../lib/content'
import styles from './navigation.module.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={styles.nav}>
      <div className={`${styles.inner} wrap`}>
        <Link href="/" className={styles.logo} aria-label={`${SITE.name} home`}>
          <Image src={logo} alt={SITE.name} height={38} priority />
        </Link>

        <nav className={styles.desktop} aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${isActive(pathname, l.href) ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={`tel:${SITE.phoneTel}`} className={styles.phone}>
            <Icon name="phone" size={16} />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.book}`}
          >
            Book online
          </a>
          <button
            type="button"
            className={styles.toggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.sheet}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.sheetLink} ${isActive(pathname, l.href) ? styles.sheetActive : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <div className={styles.sheetActions}>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">
              <Icon name="phone" size={16} /> {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book online
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
