import './OpenRoleCTA.css'
import { Mail } from 'lucide-react'
import bgImage from '../../../assets/images/right_role.png'
import { useApi } from '../../../hooks/useApi'
import { getFooterContact } from '../../../api/locations'
import { footerContact as contactFallback } from '../../../data/footer'

export default function OpenRoleCTA() {
    const footerContact = useApi(getFooterContact, contactFallback)

    return (
        <section
            className="open-role-cta"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="open-role-cta_overlay" aria-hidden="true" />
            <div className="container open-role-cta_inner">
                <h2 className="open-role-cta_title">Looking for a different role?</h2>
                <p className="open-role-cta_subtext">
                    We are always looking for exceptional talent to join our industrial
                    mission. Send us your resume and we'll keep you in mind for future openings.
                </p>
                <a href={`mailto:${footerContact.email}`} className="btn btn--primary open-role-cta_btn">
                    <Mail size={16} aria-hidden="true" />
                    {footerContact.email}
                </a>
            </div>
        </section>
    )
}
