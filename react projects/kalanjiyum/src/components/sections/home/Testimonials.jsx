import './Testimonials.css';
import { Star } from 'lucide-react';
import { testimonials } from '../../../data/testimonials';
import SectionHeading from '../../ui/SectionHeading';

export default function Testimonials() {
    return (
        <section className="section ">
            <div className="container">

                <SectionHeading
                heading="What Our Clients Say"
                align="center"
                />

                <div className="testimonials-grid">
                    {testimonials.map((t) => (
                        <div className="testimonial-card card" key={t.id}>

                            <div className="testimonial-card__stars">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                <Star key={i} size={16} fill="var(--color-red)" color="var(--color-red)" />
                                ))}
                            </div>

                            <p className="testimonial-card__quote">"{t.quote}"</p>

                            <div className="testimonial-card__person">
                                <div className="testimonial-card__avatar">
                                {t.name.charAt(0)}
                                </div>
                                <div>
                                <h4>{t.name}</h4>
                                <span>{t.role}, {t.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}