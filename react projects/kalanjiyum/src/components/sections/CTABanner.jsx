import './CTABanner.css'
import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="section section-cta">
      <div className="container">
        <div className="cta-banner">

          <h2 className="cta-banner__title">Ready to Automate Your Success?</h2>
          <p className="cta-banner__subtext">
            Partner with Madurai's leading technical solutions provider, Kalanjiyam
            Technical Solutions, for Industry 4.0 and advanced web development.
          </p>

          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn--white">Get a Free Quote</Link>
            <Link to="/contact" className="btn btn--ghost cta-banner__btn-dark">Contact Us</Link>
          </div>

        </div>
      </div>
    </section>
  )
}
