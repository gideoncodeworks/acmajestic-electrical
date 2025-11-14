import { Link, useLocation } from 'react-router-dom'
import acmajesticLogo from '../assets/acmajestic-logo.png'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={acmajesticLogo} alt="A.C. Majestic Electrical" />
          <span className="nav-brand">A.C. Majestic Electrical</span>
        </Link>

        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={location.pathname.startsWith('/services') ? 'nav-link active' : 'nav-link'}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
          <a href="tel:+12165845959" className="nav-link">
            📞 (216) 584-5959
          </a>
          <a
            href="https://acmajesticelectrical.as.me/schedule/431602ed"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Book Online
          </a>
        </div>
      </div>
    </nav>
  )
}
