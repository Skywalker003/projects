import './WhyChooseUs.css';
import { CheckCircle, Headset } from 'lucide-react';
import Button from '../../ui/Button';
import whyImage from '../../../assets/images/homepage2.png';

const features = [
    { title: 'Cost-Effective',  desc: 'High-quality engineering without the premium price tag.' },
    { title: 'Local Support',   desc: 'On-site assistance in Madurai and across South India.' },
    { title: 'Expertise',       desc: 'Decades of combined experience in PLC and IT systems.' },
    { title: 'Customized',      desc: 'Solutions built specifically for your unique process.' },
]

export default function WhyChooseUs() {

    return (
        <section className="section section--gray">
            <div className="container why-choose-us">
                <img className="why-choose-us_image" src={whyImage} alt="Why Choose Us" />

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
                        {features.map((f) => (
                            <div className="why-choose-us_feature" key={f.title}>
                                <CheckCircle size={35} color="var(--color-red)" fontWeight="var(--font-weight-extrabold)" />
                                <div>
                                    <h4>{f.title}</h4>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button>
                        Get a Free Consultation <Headset size={16} />
                    </Button>
                </div>
            </div>
            
        </section>
    )
}