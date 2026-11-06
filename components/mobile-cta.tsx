import Icon from './icon'
import { SITE } from '../lib/content'
import styles from './mobile-cta.module.css'

export default function MobileCta() {
  return (
    <div className={styles.bar} role="complementary" aria-label="Call or book">
      <a href={`tel:${SITE.phoneTel}`} className={styles.call}>
        <Icon name="phone" size={18} />
        <span>Call</span>
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
    </div>
  )
}
