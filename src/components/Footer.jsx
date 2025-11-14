import { Link } from 'react-router-dom'
import acmajesticLogo from '../assets/acmajestic-logo.png'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={acmajesticLogo} alt="A.C. Majestic Electrical" className="footer-logo" />
          <p className="footer-tagline">
            Cleveland's trusted licensed electrician for residential and commercial electrical services.
          </p>
          <div className="footer-emergency">
            <span>Contact Antonio</span>
            <a href="tel:+12165845959">(216) 584-5959</a>
          </div>
          <div className="footer-social">
            <a
              href="https://instagram.com/acm_electric"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📷 @acm_electric
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services#repairs">Electrical Repairs</Link></li>
            <li><Link to="/services#breakers">Circuit Breakers</Link></li>
            <li><Link to="/services#outlets">Outlet Installation</Link></li>
            <li><Link to="/services#lighting">Lighting Installation</Link></li>
            <li><Link to="/services#troubleshooting">Troubleshooting</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Service Area</h4>
          <p>Proudly serving Cleveland and surrounding areas:</p>
          <ul className="footer-areas">
            <li>Residential</li>
            <li>Commercial</li>
            <li>Licensed & Insured</li>
            <li>30-Day Warranty</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} A.C. Majestic Electrical Service LLC. All rights reserved.</p>
        <p className="footer-credit">
          Website by <a href="https://gideoncodeworks.com" target="_blank" rel="noopener noreferrer">Gideon Code Works</a>
        </p>
      </div>
    </footer>
  )
}
