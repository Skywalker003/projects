import "./ServicesGrid.css"
import { services } from "../../../data/services"
import SectionHeading from "../../ui/SectionHeading"

export default function ServicesGrid() {
    return (
        <div id="services" className="section">
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
                        <img src={service.image} alt={service.title} />
                            <div className="service-card_overlay">
                                <h3>{service.title}</h3>
                                <p>{service.shortDescription}</p>
                                <button className="btn btn--white btn--sm">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}