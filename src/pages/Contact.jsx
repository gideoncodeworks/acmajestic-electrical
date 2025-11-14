import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send to a backend/email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p className="contact-tagline">
            Schedule your service online or fill out the form below to get in touch with us.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-icon">📞</div>
            <h3>Call Us</h3>
            <p>Talk directly with Antonio, your licensed electrician.</p>
            <a href="tel:+12165845959" className="contact-link">
              (216) 584-5959
            </a>
            <span className="contact-availability">Professional service</span>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">📅</div>
            <h3>Book Online</h3>
            <p>Schedule your electrical service appointment online.</p>
            <a
              href="https://acmajesticelectrical.as.me/schedule/431602ed"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Book Appointment
            </a>
            <span className="contact-availability">Quick & convenient</span>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">✉️</div>
            <h3>Email Us</h3>
            <p>For quotes and non-urgent inquiries.</p>
            <a href="mailto:antonioc3026@gmail.com" className="contact-link">
              antonioc3026@gmail.com
            </a>
            <span className="contact-availability">Response within 24 hours</span>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <p className="form-description">
            Fill out the form below and we will get back to you as soon as possible.
          </p>

          {submitted && (
            <div className="form-success">
              ✓ Thank you! Your message has been sent. We will contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Needed</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service...</option>
                <option value="repairs">Electrical Repairs</option>
                <option value="breakers">Circuit Breaker Service</option>
                <option value="outlets">Outlet & Switch Installation</option>
                <option value="lighting">Lighting Installation</option>
                <option value="troubleshooting">Electrical Troubleshooting</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your situation or ask us a question..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta-content">
          <h2>Ready to Schedule Your Service?</h2>
          <p>Book your electrical service appointment online—quick, easy, and convenient.</p>
          <a
            href="https://acmajesticelectrical.as.me/schedule/431602ed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            📅 Book Appointment Online
          </a>
        </div>
      </section>
    </div>
  )
}
