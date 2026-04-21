import './WhyJoinUs.css'
import SectionHeading from '../../ui/SectionHeading'
import { careersReasons } from '../../../data/careers'

export default function WhyJoinUs() {
    return (
        <section className="section">
            <div className="container">
                <SectionHeading
                    label="Life at Kalanjiyam"
                    heading="Why Join Kalanjiyam?"
                    align="center"
                />
                <div className="why-join-us">
                    {careersReasons.map((r) => (
                        <div className="why-join-us_card card" key={r.title}>
                            <div className="why-join-us_icon">
                                <r.icon size={24} color="var(--color-red)" />
                            </div>
                            <h4 className="why-join-us_title">{r.title}</h4>
                            <p className="why-join-us_desc">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
