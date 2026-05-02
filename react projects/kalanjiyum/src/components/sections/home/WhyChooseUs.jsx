import './WhyChooseUs.css'
import { CheckCircle, Headset } from 'lucide-react'
import { Link } from 'react-router-dom'
import whyImage from '../../../assets/images/homepage2.png'
import { homeFeatures } from '../../../data/home'

export default function WhyChooseUs() {
    return (
        <section className="section section--gray">
            <div className="container why-choose-us">
                <img className="why-choose-us_image" src={whyImage} alt="Kalanjiyam team at work" />

                <div className="why-choose-us_content">
                    <div className="why-choose-us_heading">
                        <span className="section-heading_label">
                            Why Kalanjiyam Technical Solutions?
                        </span>
                        <h2 className="why-choose-us_title">
                            Expertise Built on Years of Industrial Excellence
                        </h2>
                    </div>

                    <div className="why-choose-us_features">
                        {homeFeatures.map((f) => (
                            <div className="why-choose-us_feature" key={f.title}>
                                <CheckCircle size={32} aria-hidden="true" />
                                <div>
                                    <h4>{f.title}</h4>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link to="/contact" className="btn btn--primary">
                        Get a Free Consultation <Headset size={16} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
