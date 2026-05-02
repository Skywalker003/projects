import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../../assets/images/logo.png'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCareersOpen, setIsCareersOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => { setIsMenuOpen(false); setIsCareersOpen(false) }

  const isCareersActive = location.pathname.startsWith('/careers') || location.pathname.startsWith('/internship')

  return (
    <nav className="navbar">
      <div className="navbar_inner">

        {/* Logo and Brand Name */}
        <Link to="/" className="navbar_brand" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="navbar_logo" />
          <span className="navbar_name">
            Kalanjiyam{' '}<span className="navbar_name--accent">Tech</span>
          </span>
        </Link>

        {/* Desktop + Mobile links */}
        <div className={`navbar_links ${isMenuOpen ? 'navbar_links--open' : ''}`}>

          <NavLink to="/" className={({ isActive }) => isActive ? 'navbar_link navbar_link--active' : 'navbar_link'} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar_link navbar_link--active' : 'navbar_link'} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'navbar_link navbar_link--active' : 'navbar_link'} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'navbar_link navbar_link--active' : 'navbar_link'} onClick={closeMenu}>
            Portfolio
          </NavLink>

          {/* Careers Hover Dropdown (desktop) + Accordion (mobile) */}
          <div className={`navbar_dropdown-wrap ${isCareersActive ? 'navbar_dropdown-wrap--active' : ''}`}>
            {/* Desktop trigger */}
            <button
              className={`navbar_link navbar_dropdown-trigger ${isCareersActive ? 'navbar_link--active' : ''}`}
              aria-haspopup="menu"
              aria-label="Careers — open submenu"
            >
              Careers <ChevronDown size={14} className="navbar_dropdown-chevron" aria-hidden="true" />
            </button>
            <div className="navbar_dropdown">
              <div className="navbar_dropdown-inner">
                <NavLink to="/careers" className="navbar_dropdown-item" onClick={closeMenu}>
                  Full-time
                </NavLink>
                <NavLink to="/internship" className="navbar_dropdown-item" onClick={closeMenu}>
                  Internship
                </NavLink>
              </div>
            </div>
            {/* Mobile accordion trigger */}
            <button
              className={`navbar_mobile-careers-trigger ${isCareersActive ? 'navbar_link--active' : ''}`}
              onClick={() => setIsCareersOpen(o => !o)}
              aria-expanded={isCareersOpen}
            >
              Careers
              <ChevronDown
                size={16}
                className={`navbar_mobile-chevron ${isCareersOpen ? 'navbar_mobile-chevron--open' : ''}`}
              />
            </button>
            {/* Collapsible sub-items */}
            <div className={`navbar_mobile-sub ${isCareersOpen ? 'navbar_mobile-sub--open' : ''}`}>
              <NavLink to="/careers" className="navbar_mobile-sub-item" onClick={closeMenu}>
                Full-time
              </NavLink>
              <NavLink to="/internship" className="navbar_mobile-sub-item" onClick={closeMenu}>
                Internship
              </NavLink>
            </div>
          </div>

          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar_link navbar_link--active' : 'navbar_link'} onClick={closeMenu}>
            Contact
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          className='navbar_hamburger'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </nav>
  )
}
