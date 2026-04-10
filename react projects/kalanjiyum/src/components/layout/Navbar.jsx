// src/components/layout/Navbar.jsx
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/images/logo.png'
import './Navbar.css'

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        {/* Logo and Brand Name */}
        <Link to="/"  className="navbar__brand" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="navbar__logo"/>
          <span className="navbar__name">
            Kalanjiyum{' '}<span className="navbar__name--accent">Tech</span>
          </span>
        </Link>

        {/*desktop links */}
        <div className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
          
          <NavLink to="/" className={({ isActive}) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive}) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive}) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive}) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={closeMenu}>
            Portfolio
          </NavLink>
          <NavLink to="/careers" className={({ isActive}) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={closeMenu}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={({ isActive}) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={closeMenu}>
            Contact
          </NavLink>
          
        </div>
        <div className="navbar__cta">
          <Link to="/contact" className='btn btn--primary btn--sm' onClick={closeMenu} >Get a Quote</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='navbar__hamburger'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

    </nav>
  )
}