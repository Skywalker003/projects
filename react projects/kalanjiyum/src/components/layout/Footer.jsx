import {Link} from 'react-router-dom'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import logo from '../../assets/images/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__main">

        {/* Brand Info */}
        <div className="footer__brand">

          <Link to="/"  className="footer__logo-wrap">
            <img src={logo} alt="Logo" className="footer__logo"/>
            <div>
              <div className="footer__company-name">Kalanjiyum</div>
              <div className="footer__company-sub">Tech</div>
            </div>
          </Link>

          <p className="footer__tagline">One Step Solutions</p>
          <p className="footer__desc">
            A premier IT and Industrial Automation firm headquartered in Madurai,
            delivering cost-effective technical solutions since 2019.
          </p>

        </div>

        {/*services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Expertise</h4>
          <ul className="footer__links">
            <li><Link to="/services" className="footer__link">Industry 4.0</Link></li>
            <li><Link to="/services" className="footer__link">Process Automation</Link></li>
            <li><Link to="/services" className="footer__link">Web Development</Link></li>
            <li><Link to="/services" className="footer__link">Network Solutions</Link></li>
            <li><Link to="/services" className="footer__link">PLCs & Sensors</Link></li>
            <li><Link to="/services" className="footer__link">Consulting Services</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/" className="footer__link">Home</Link></li>
            <li><Link to="/about" className="footer__link">About Us</Link></li>
            <li><Link to="/services" className="footer__link">Services</Link></li>
            <li><Link to="/portfolio" className="footer__link">Portfolio</Link></li>
            <li><Link to="/careers" className="footer__link">Careers</Link></li>
            <li><Link to="/contact" className="footer__link">Contact Us</Link></li>
          </ul>
        </div>

        {/*legal */}
        <div className="footer__col">
          <h4 className="footer__col-title">Legal</h4>
          <ul className="footer__links">
            <li><Link to="/privacy" className="footer__link">Privacy Policy</Link></li>
            <li><Link to="/terms" className="footer__link">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__col">
          <h4 className="footer__col-title">Get In Touch</h4>
          <ul className="footer__contact">
            <li className="footer__contact-item">
              <Phone size={16} className="footer__contact-icon" />
              <span>+91 7904003831</span>
            </li>
            <li className="footer__contact-item">
              <Mail size={16} className="footer__contact-icon" />
              <span>contactus@kalanjiyam.info</span>
            </li>
            <li className="footer__contact-item">
              <Clock size={16} className="footer__contact-icon" />
              <span>Mon–Sat: 9:30AM – 5:30PM</span>
            </li>
            <li className="footer__contact-item">
              <MapPin size={16} className="footer__contact-icon" />
              <span>Main Road, K.K Nagar, Madurai, TN-625020</span>
            </li>
          </ul>
        </div>

      </div>

      <div className='footer__bottom'>
        <div className="footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} Kalanjiyum Technical Solutions. All rights reserved. Made with ❤️ in Madurai</p>
        </div>
      </div>

    </footer>
  )
}