import './Eligibility.css'
import SectionHeading from '../../ui/SectionHeading'
import { eligibilityCards } from '../../../data/internship'

export default function Eligibility() {
    return (
        <section className="section">
            <div className="container">
                <SectionHeading
                    heading="Who Can Apply?"
                    align="center"
                />
                <div className="eligibility_grid">
                    {eligibilityCards.map((c) => (
                        <div className="eligibility_card card" key={c.title}>
                            <div className="eligibility_icon"><c.icon size={24} aria-hidden="true" /></div>
                            <h3 className="eligibility_title">{c.title}</h3>
                            <p className="eligibility_text">{c.text}</p>
                        </div>
                    ))}
                </div>
                <p className="eligibility_note">
                    No prior experience required. Just bring your enthusiasm and willingness to learn.
                </p>
            </div>
        </section>
    )
}
