import './WhyInternWithUs.css'
import SectionHeading from '../../ui/SectionHeading'
import { internReasons } from '../../../data/internship'

export default function WhyInternWithUs() {
    return (
        <section className="section">
            <div className="container">
                <SectionHeading
                    label="Why Choose Us"
                    heading="Why Intern With Kalanjiyam?"
                    align="center"
                />
                <div className="why-intern_grid">
                    {internReasons.map((r, i) => (
                        <div className="why-intern_card card" key={i}>
                            <div className="why-intern_icon"><r.icon size={24} /></div>
                            <h3 className="why-intern_title">{r.title}</h3>
                            <p className="why-intern_text">{r.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
