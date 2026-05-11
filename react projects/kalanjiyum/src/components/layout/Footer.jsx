import { Link } from 'react-router-dom'
import { Mail, MapPin, Clock } from 'lucide-react'
import './Footer.css'
import { footerExpertise, footerQuickLinks, footerLegal, footerContact as contactFallback } from '../../data/footer'
import { getFooterContact } from '../../api/locations'
import { useApi } from '../../hooks/useApi'

export default function Footer() {
  const footerContact = useApi(getFooterContact, contactFallback)

  return (
    <footer className='footer'>
      <div className="container">

        <div className="footer_main">

          {/* Brand Info */}
          <div className="footer_brand">
            <Link to="/" className="footer_logo-wrap">
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
              {footerExpertise.map(({ label, to }) => (
                <li key={label}><Link to={to} className="footer_link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer_col">
            <h4 className="footer_col-title">Quick Links</h4>
            <ul className="footer_links">
              {footerQuickLinks.map(({ label, to }) => (
                <li key={label}><Link to={to} className="footer_link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer_col">
            <h4 className="footer_col-title">Legal</h4>
            <ul className="footer_links">
              {footerLegal.map(({ label, to }) => (
                <li key={label}><Link to={to} className="footer_link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer_col">
            <h4 className="footer_col-title">Get In Touch</h4>
            <ul className="footer_contact">
              <li className="footer_contact-item">
                <Mail size={15} className="footer_contact-icon" />
                <span>{footerContact.email}</span>
              </li>
              <li className="footer_contact-item">
                <Clock size={15} className="footer_contact-icon" />
                <span>{footerContact.hours}</span>
              </li>
              <li className="footer_contact-item">
                <MapPin size={15} className="footer_contact-icon" />
                <span style={{ whiteSpace: 'pre-line' }}>{footerContact.address}</span>
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
