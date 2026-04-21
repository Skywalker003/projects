import './InternHero.css'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Award } from 'lucide-react'

export default function InternHero() {
    return (
        <section className="intern-hero">
            <div className="intern-hero_inner container">
                <span className="intern-hero_badge">Internship Program</span>
                <h1 className="intern-hero_title">
                    Launch Your Career With<br />Real-World Experience
                </h1>
                <p className="intern-hero_subtext">
                    Join Kalanjiyam Technical Solutions as an intern and work on live industrial
                    automation and software projects. Open to students, fresh graduates, and
                    career switchers worldwide.
                </p>
                <div className="intern-hero_actions">
                    <Link to="/internship/apply" className="btn btn--primary btn--lg">
                        Apply Now <ArrowRight size={16} />
                    </Link>
                    <a href="#domains" className="btn intern-hero_btn-outline btn--lg">
                        View Domains
                    </a>
                </div>
                <div className="intern-hero_pills" aria-label="Internship highlights">
                    <span className="intern-hero_pill" aria-label="Mode: Online and Offline"><MapPin size={14} aria-hidden="true" /> Online &amp; Offline</span>
                    <span className="intern-hero_pill" aria-label="Duration: Flexible"><Calendar size={14} aria-hidden="true" /> Flexible Duration</span>
                    <span className="intern-hero_pill" aria-label="Benefit: Certificate Provided"><Award size={14} aria-hidden="true" /> Certificate Provided</span>
                </div>
            </div>
        </section>
    )
}
