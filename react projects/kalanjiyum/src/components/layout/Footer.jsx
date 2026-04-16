import {Link} from 'react-router-dom'
import { Mail, MapPin, Clock } from 'lucide-react'
import logo from '../../assets/images/logo.png'
import strokeLogo from '../../assets/images/stroke logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="container">

        <div className="footer_main">

          {/* Brand Info */}
          <div className="footer_brand">

            <Link to="/" className="footer_logo-wrap">
              <img src={strokeLogo} alt="Logo" className="footer_logo"/>
              <div className="footer_company-name">
                Kalanjiyam <span className="footer_company-sub">Tech</span>
              </div>
            </Link>

            <p className="footer_desc">
              Empowering businesses across industries with tailored automation and
              digital solutions that reduce cost, increase efficiency, and drive
              growth since 2019.
            </p>


          </div>

          {/* Services */}
          <div className="footer_col">
            <h4 className="footer_col-title">Our Expertise</h4>
            <ul className="footer_links">
              <li><Link to="/services" className="footer_link">Industry 4.0</Link></li>
              <li><Link to="/services" className="footer_link">Process Automation</Link></li>
              <li><Link to="/services" className="footer_link">Web Development</Link></li>
              <li><Link to="/services" className="footer_link">Network Solutions</Link></li>
              <li><Link to="/services" className="footer_link">PLCs & Sensors</Link></li>
              <li><Link to="/services" className="footer_link">Consulting Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer_col">
            <h4 className="footer_col-title">Quick Links</h4>
            <ul className="footer_links">
              <li><Link to="/" className="footer_link">Home</Link></li>
              <li><Link to="/about" className="footer_link">About Us</Link></li>
              <li><Link to="/services" className="footer_link">Services</Link></li>
              <li><Link to="/portfolio" className="footer_link">Portfolio</Link></li>
              <li><Link to="/careers" className="footer_link">Careers</Link></li>
              <li><Link to="/contact" className="footer_link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer_col">
            <h4 className="footer_col-title">Legal</h4>
            <ul className="footer_links">
              <li><Link to="/privacy" className="footer_link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer_link">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer_col">
            <h4 className="footer_col-title">Get In Touch</h4>
            <ul className="footer_contact">
              <li className="footer_contact-item">
                <Mail size={15} className="footer_contact-icon" />
                <span>contactus@kalanjiyam.info</span>
              </li>
              <li className="footer_contact-item">
                <Clock size={15} className="footer_contact-icon" />
                <span>Mon–Sat: 9:30AM – 5:30PM</span>
              </li>
              <li className="footer_contact-item">
                <MapPin size={15} className="footer_contact-icon" />
                <span>Main Road, K.K Nagar,<br/>Madurai, TN-625020</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer_bottom">
          <div className="footer_bottom-inner">
            <p>&copy; {new Date().getFullYear()} Kalanjiyam Technical Solutions. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
