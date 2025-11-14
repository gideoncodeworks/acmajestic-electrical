import { Link } from 'react-router-dom'
import acmajesticLogo from '../assets/acmajestic-logo.png'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About A.C. Majestic Electrical</h1>
          <p className="about-tagline">Professional electrical services backed by quality workmanship.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-content">
          <img src={acmajesticLogo} alt="A.C. Majestic Electrical" className="about-logo" />
          <div className="about-text">
            <h2>Meet Antonio Cunningham</h2>
            <p>
              A.C. Majestic Electrical Service LLC is a licensed and insured electrical contractor serving
              Cleveland and the surrounding areas. Founded by Antonio Cunningham, a skilled electrician and general
              contractor, we specialize in both residential and commercial electrical services, delivering professional
              results with every job.
            </p>
            <p>
              What sets us apart is our commitment to quality workmanship and customer satisfaction. Every electrical
              service we provide comes with a 30-day workmanship warranty, giving you peace of mind that the job is
              done right. From troubleshooting electrical issues to complete installations, Antonio has the tools, expertise,
              and dedication to handle all your electrical needs.
            </p>
            <p>
              We understand that electrical problems can be stressful and disruptive. That's why we offer transparent
              pricing with detailed estimates before starting any work—no hidden fees, no surprise charges. Our goal is
              to make electrical service simple, reliable, and stress-free for every customer.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Licensed & Insured</h3>
            <p>Fully licensed electrician with proper insurance coverage for your protection and peace of mind.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💯</div>
            <h3>Honest & Transparent</h3>
            <p>Upfront pricing with detailed estimates. You'll know the cost before we start any work.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Quality Workmanship</h3>
            <p>Every job backed by a 30-day workmanship warranty. We stand behind our work.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🛡️</div>
            <h3>Professional Service</h3>
            <p>Residential and commercial electrical expertise with reliable, professional results every time.</p>
          </div>
        </div>
      </section>

      <section className="about-guarantee">
        <div className="guarantee-content">
          <h2>The A.C. Majestic Guarantee</h2>
          <ul className="guarantee-list">
            <li>✓ Licensed and insured electrician—professional service you can trust</li>
            <li>✓ Transparent pricing with detailed estimates—no surprise fees, no hidden charges</li>
            <li>✓ 30-day workmanship warranty on all completed work—quality guaranteed</li>
            <li>✓ Both residential and commercial electrical services—one contractor for all your needs</li>
          </ul>
          <div className="guarantee-cta">
            <a
              href="https://acmajesticelectrical.as.me/schedule/431602ed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              📅 Book Your Appointment
            </a>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Get Started?</h2>
        <p>Schedule your electrical service online or contact us for more information about our services.</p>
        <div className="about-cta-buttons">
          <a
            href="https://acmajesticelectrical.as.me/schedule/431602ed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Book Appointment
          </a>
          <Link to="/contact" className="btn btn-secondary btn-large">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
