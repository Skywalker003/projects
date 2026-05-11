import './WhyJoinUs.css'
import SectionHeading from '../../ui/SectionHeading'
import { careersReasons as fallback } from '../../../data/careers'
import { getCareersReasons } from '../../../api/careers'
import { useApi } from '../../../hooks/useApi'
import { resolveIcon } from '../../../utils/iconMap'

export default function WhyJoinUs() {
    const careersReasons = useApi(getCareersReasons, fallback)

    return (
        <section className="section">
            <div className="container">
                <SectionHeading
                    label="Life at Kalanjiyam"
                    heading="Why Join Kalanjiyam?"
                    align="center"
                />
                <div className="why-join-us">
                    {careersReasons.map((r) => {
                        const Icon = resolveIcon(r.icon)
                        return (
                            <div className="why-join-us_card card" key={r.title}>
                                <div className="why-join-us_icon">
                                    {Icon && <Icon size={24} />}
                                </div>
                                <h4 className="why-join-us_title">{r.title}</h4>
                                <p className="why-join-us_desc">{r.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
