import './CTABanner.css'
import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="section section-cta">
      <div className="container">
        <div className="cta-banner">

          <h2 className="cta-banner_title">Ready to Automate Your Success?</h2>
          <p className="cta-banner_subtext">
            Partner with Madurai's leading technical solutions provider, Kalanjiyam
            Technical Solutions, for Industry 4.0 and advanced web development.
          </p>

          <div className="cta-banner_actions">
            <Link to="/contact" className="btn btn--white">Contact Us</Link>
          </div>

        </div>
      </div>
    </section>
  )
}
