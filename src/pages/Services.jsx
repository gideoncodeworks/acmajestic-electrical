import { Link } from 'react-router-dom'
import './Services.css'

export default function Services() {
  const services = [
    {
      id: 'repairs',
      icon: '🔧',
      title: 'Electrical Repairs',
      description: 'Experiencing electrical issues in your home or business? Our licensed electrician diagnoses and repairs all types of electrical problems quickly and safely.',
      features: [
        'Complete electrical troubleshooting',
        'Circuit and wiring repairs',
        'Panel and breaker repairs',
        '30-day workmanship warranty',
      ],
    },
    {
      id: 'breakers',
      icon: '⚡',
      title: 'Circuit Breaker Service',
      description: 'Circuit breakers tripping frequently? Outdated electrical panel? We provide professional circuit breaker installation, repair, and panel upgrades for safety and reliability.',
      features: [
        'Circuit breaker replacement',
        'Electrical panel upgrades',
        'Safety inspections',
        'Code-compliant installations',
      ],
    },
    {
      id: 'outlets',
      icon: '🔌',
      title: 'Outlet & Switch Installation',
      description: 'Need new outlets or switches installed? We install standard outlets, GFCI outlets, USB outlets, switches, dimmers, and specialty electrical fixtures.',
      features: [
        'New outlet installation',
        'GFCI outlet installation',
        'Switch and dimmer installation',
        'Dedicated circuit installation',
      ],
    },
    {
      id: 'lighting',
      icon: '💡',
      title: 'Lighting Installation',
      description: 'Upgrade your lighting with professional installation services. From ceiling fixtures to recessed lighting, we handle all residential and commercial lighting needs.',
      features: [
        'Indoor and outdoor lighting',
        'Recessed lighting installation',
        'Fixture replacement',
        'LED lighting upgrades',
      ],
    },
    {
      id: 'troubleshooting',
      icon: '🔍',
      title: 'Electrical Troubleshooting',
      description: 'Mysterious electrical problems? Our diagnostic service identifies issues with wiring, circuits, outlets, and electrical systems to find the root cause and provide solutions.',
      features: [
        'Comprehensive electrical diagnostics',
        'Problem identification',
        'Detailed estimates',
        'Same-day emergency service available',
      ],
    },
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Electrical Services</h1>
          <p className="services-lead">
            Professional, licensed electrical services for residential and commercial properties.
            From repairs to installations, we deliver quality workmanship backed by a 30-day warranty.
          </p>
          <a
            href="https://acmajesticelectrical.as.me/schedule/431602ed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            📅 Book Your Service Online
          </a>
        </div>
      </section>

      <section className="services-list">
        {services.map((service) => (
          <div key={service.id} id={service.id} className="service-detail">
            <div className="service-detail-icon">{service.icon}</div>
            <div className="service-detail-content">
              <h2>{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <a
                href="https://acmajesticelectrical.as.me/schedule/431602ed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Book This Service
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="services-cta-section">
        <div className="services-cta-content">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Schedule a service call and we'll assess your electrical needs. Our initial assessment includes troubleshooting and a detailed estimate.</p>
          <div className="services-cta-buttons">
            <a
              href="https://acmajesticelectrical.as.me/schedule/431602ed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              📅 Book Service Call ($150)
            </a>
            <Link to="/contact" className="btn btn-secondary btn-large">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
