import './OpenRoleCTA.css'
import { Mail } from 'lucide-react'
import bgImage from '../../../assets/images/right_role.png'

export default function OpenRoleCTA() {
    return (
        <section
            className="open-role-cta"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="open-role-cta_overlay" />
            <div className="container open-role-cta_inner">
                <h2 className="open-role-cta_title">Don't see the right role?</h2>
                <p className="open-role-cta_subtext">
                    We are always looking for exceptional talent to join our industrial
                    mission. Send us your resume and we'll keep you in mind for future openings.
                </p>
                <a href="mailto:contactus@kalanjiyam.info" className="btn btn--primary open-role-cta_btn">
                    <Mail size={16} />
                    contactus@kalanjiyam.info
                </a>
            </div>
        </section>
    )
}
