import "./ServicesGrid.css"
import { Link } from 'react-router-dom'
import { services as fallback } from "../../../data/services"
import { getServices } from "../../../api/services"
import { useApi } from "../../../hooks/useApi"
import SectionHeading from "../../ui/SectionHeading"

const ORIGIN = (() => { try { return new URL(import.meta.env.VITE_API_BASE_URL ?? '').origin } catch { return '' } })()
const imgSrc = (url) => {
    if (!url) return ''
    if (url.startsWith('http')) return url
    if (url.startsWith('/uploads/')) return ORIGIN + url
    return url
}

export default function ServicesGrid() {
    const services = useApi(getServices, fallback)

    return (
        <section id="services" className="section">
            <div className="container">
                <SectionHeading
                    label="What We Do"
                    heading="Our Services"
                    subtext="Tailored technical solutions designed to optimize your industrial workflow."
                    align="center"
                />
                <div className="services-grid">
                    {services.map(service => (
                        <div className="service-card" key={service.id}>
                            <img src={imgSrc(service.image)} alt="" />
                            <div className="service-card_overlay">
                                <h3>{service.title}</h3>
                                <p>{service.shortDescription}</p>
                                <Link to={`/services#${service.anchor}`} className="btn btn--white btn--sm">Learn More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
