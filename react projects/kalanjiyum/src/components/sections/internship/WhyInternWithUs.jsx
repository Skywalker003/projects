import './WhyInternWithUs.css'
import SectionHeading from '../../ui/SectionHeading'
import { internReasons as fallback } from '../../../data/internship'
import { getInternshipReasons } from '../../../api/internship'
import { useApi } from '../../../hooks/useApi'
import { resolveIcon } from '../../../utils/iconMap'

export default function WhyInternWithUs() {
    const internReasons = useApi(getInternshipReasons, fallback)

    return (
        <section className="section">
            <div className="container">
                <SectionHeading
                    label="Why Choose Us"
                    heading="Why Intern With Kalanjiyam?"
                    align="center"
                />
                <div className="why-intern_grid">
                    {internReasons.map((r) => {
                        const Icon = resolveIcon(r.icon)
                        return (
                            <div className="why-intern_card card" key={r.title}>
                                <div className="why-intern_icon">
                                    {Icon && <Icon size={24} aria-hidden="true" />}
                                </div>
                                <h3 className="why-intern_title">{r.title}</h3>
                                <p className="why-intern_text">{r.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
