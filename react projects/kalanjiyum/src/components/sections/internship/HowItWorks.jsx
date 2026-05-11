import './HowItWorks.css'
import SectionHeading from '../../ui/SectionHeading'
import { steps as fallback } from '../../../data/internship'
import { getInternshipSteps } from '../../../api/internship'
import { useApi } from '../../../hooks/useApi'

export default function HowItWorks() {
    const steps = useApi(getInternshipSteps, fallback)

    return (
        <section className="section section--light">
            <div className="container">
                <SectionHeading
                    heading="How to Get Started"
                    align="center"
                />
                <div className="how-it-works_steps">
                    {steps.map((s, i) => (
                        <div className="how-it-works_step" key={s.num}>
                            {i < steps.length - 1 && <div className="how-it-works_connector" />}
                            <div className="how-it-works_num">{s.num}</div>
                            <h3 className="how-it-works_title">{s.title}</h3>
                            <p className="how-it-works_text">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
