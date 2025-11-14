import { Link } from 'react-router-dom'
import acmajesticLogo from '../assets/acmajestic-logo.png'
import './Home.css'

export default function Home() {
  const stats = [
    { value: '30-day', label: 'Warranty', detail: 'on all workmanship' },
    { value: 'Licensed', label: 'Electrician', detail: 'Certified & Insured' },
    { value: '5-star', label: 'Service rating', detail: 'Professional service' },
  ]

  const services = [
    { title: 'Electrical Repairs', icon: '🔧', link: '/services#repairs' },
    { title: 'Circuit Breakers', icon: '⚡', link: '/services#breakers' },
    { title: 'Outlet Installation', icon: '🔌', link: '/services#outlets' },
    { title: 'Lighting Installation', icon: '💡', link: '/services#lighting' },
    { title: 'Electrical Troubleshooting', icon: '🔍', link: '/services#troubleshooting' },
  ]

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">PROFESSIONAL ELECTRICAL SERVICES</p>
          <h1>
            Need an Electrician?
            <br />
            <span className="text-highlight">Cleveland's Trusted Electrical Service</span>
          </h1>
          <p className="hero-lead">
            Licensed, insured electrical contractor serving Cleveland and surrounding areas. From troubleshooting to installations,
            we handle all your residential and commercial electrical needs with professional service and a 30-day warranty.
          </p>
          <div className="hero-actions">
            <a
              href="https://acmajesticelectrical.as.me/schedule/431602ed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              📅 Book Online Now
            </a>
            <Link to="/contact" className="btn btn-secondary btn-large">
              Get a Quote
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <img src={acmajesticLogo} alt="A.C. Majestic Electrical" className="hero-logo" />
          <div className="hero-phone">
            <span>Schedule Your Service</span>
            <a
              href="https://acmajesticelectrical.as.me/schedule/431602ed"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment
            </a>
          </div>
          <ul className="hero-features">
            <li>✓ Licensed & insured electrician</li>
            <li>✓ 30-day workmanship warranty</li>
            <li>✓ Upfront pricing, no hidden fees</li>
            <li>✓ Residential & commercial service</li>
          </ul>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-detail">{stat.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-preview">
        <div className="section-header">
          <p className="eyebrow">What We Do</p>
          <h2>Complete Electrical Services</h2>
          <p className="section-lead">
            From troubleshooting electrical issues to complete installations, we provide professional electrical services for homes and businesses.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
            </Link>
          ))}
        </div>
        <div className="services-cta">
          <Link to="/services" className="btn btn-primary">
            View All Services →
          </Link>
        </div>
      </section>

      <section className="why-section">
        <div className="why-content">
          <h2>Why Choose A.C. Majestic Electrical?</h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>🎯 Licensed & Insured</h3>
              <p>Certified electrician with proper licensing and insurance for your protection and peace of mind.</p>
            </div>
            <div className="why-card">
              <h3>💯 Quality Workmanship</h3>
              <p>Every job backed by a 30-day workmanship warranty. We stand behind our work.</p>
            </div>
            <div className="why-card">
              <h3>💰 Transparent Pricing</h3>
              <p>Clear, upfront pricing before we start. No surprise fees, no hidden charges.</p>
            </div>
            <div className="why-card">
              <h3>🛡️ Professional Service</h3>
              <p>Residential and commercial electrical services with professional, reliable results.</p>
            </div>
          </div>
          <div className="why-cta">
            <Link to="/about" className="btn btn-secondary">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Schedule your electrical service appointment online today. Quick, easy, and convenient.</p>
          <a
            href="https://acmajesticelectrical.as.me/schedule/431602ed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            📅 Book Your Appointment Now
          </a>
          <p className="cta-note">Professional Service • Cleveland & Surrounding Areas</p>
        </div>
      </section>
    </div>
  )
}
