import './Eligibility.css'
import SectionHeading from '../../ui/SectionHeading'
import { eligibilityCards as fallback } from '../../../data/internship'
import { getEligibilityCards } from '../../../api/internship'
import { useApi } from '../../../hooks/useApi'
import { resolveIcon } from '../../../utils/iconMap'

export default function Eligibility() {
    const eligibilityCards = useApi(getEligibilityCards, fallback)

    return (
        <section className="section">
            <div className="container">
                <SectionHeading
                    heading="Who Can Apply?"
                    align="center"
                />
                <div className="eligibility_grid">
                    {eligibilityCards.map((c) => {
                        const Icon = resolveIcon(c.icon)
                        return (
                            <div className="eligibility_card card" key={c.title}>
                                <div className="eligibility_icon">
                                    {Icon && <Icon size={24} aria-hidden="true" />}
                                </div>
                                <h3 className="eligibility_title">{c.title}</h3>
                                <p className="eligibility_text">{c.text}</p>
                            </div>
                        )
                    })}
                </div>
                <p className="eligibility_note">
                    No prior experience required. Just bring your enthusiasm and willingness to learn.
                </p>
            </div>
        </section>
    )
}
