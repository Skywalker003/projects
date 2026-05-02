import './NotFound.css'
import { Link } from 'react-router-dom'
import { ArrowRight, Home, Briefcase, Phone, Layers } from 'lucide-react'

const quickLinks = [
    { to: '/',          icon: Home,      label: 'Home',     desc: 'Back to the main page' },
    { to: '/services',  icon: Layers,    label: 'Services', desc: 'What we build & deliver' },
    { to: '/portfolio', icon: Briefcase, label: 'Portfolio',desc: 'Our work across domains' },
    { to: '/contact',   icon: Phone,     label: 'Contact',  desc: 'Get in touch with us' },
]

export default function NotFound() {
    return (
        <section className="notfound">
            <div className="notfound_inner">

                <div className="notfound_hero">
                    <span className="notfound_num" aria-hidden="true">404</span>
                    <div className="notfound_text">
                        <h1 className="notfound_title">Page Not Found</h1>
                        <p className="notfound_subtext">
                            The page you're looking for doesn't exist or may have been moved.
                        </p>
                        <Link to="/" className="btn btn--primary notfound_cta">
                            <Home size={16} aria-hidden="true" />
                            Go to Homepage
                        </Link>
                    </div>
                </div>

                <div className="notfound_divider">
                    <span>or explore these pages</span>
                </div>

                <div className="notfound_links">
                    {quickLinks.map(({ to, icon: Icon, label, desc }) => (
                        <Link key={to} to={to} className="notfound_link card">
                            <span className="notfound_link-icon">
                                <Icon size={20} aria-hidden="true" />
                            </span>
                            <span className="notfound_link-body">
                                <span className="notfound_link-label">{label}</span>
                                <span className="notfound_link-desc">{desc}</span>
                            </span>
                            <ArrowRight size={16} className="notfound_link-arrow" aria-hidden="true" />
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}
