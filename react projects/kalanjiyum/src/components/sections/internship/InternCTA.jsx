import './InternCTA.css'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function InternCTA() {
    return (
        <section className="intern-cta">
            <div className="container intern-cta_inner">
                <div className="intern-cta_content">
                    <h2 className="intern-cta_title">Ready to Start Your<br />Internship Journey?</h2>
                    <p className="intern-cta_subtext">
                        Applications are open. Join us and build skills that actually matter in the industry.
                    </p>
                </div>
                <Link to="/internship/apply" className="btn btn--white btn--lg">
                    Apply Now <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    )
}
