import './Testimonials.css'
import { useMemo } from 'react'
import { Star } from 'lucide-react'
import { testimonials as fallback } from '../../../data/home'
import { getTestimonials } from '../../../api/home'
import { useApi } from '../../../hooks/useApi'
import SectionHeading from '../../ui/SectionHeading'

export default function Testimonials() {
    const testimonials = useApi(getTestimonials, fallback)
    const track = useMemo(() => [...testimonials, ...testimonials, ...testimonials], [testimonials])

    return (
        <section className="section testimonials-section">
            <div className="container">
                <SectionHeading
                    label="Client Stories"
                    heading="What Our Clients Say"
                    align="center"
                />
            </div>

            <div className="testimonials-carousel" aria-label="Client testimonials">
                <div className="testimonials-track">
                    {track.map((t, idx) => (
                        <div
                            className="testimonial-card card"
                            key={idx}
                            aria-hidden={idx >= testimonials.length}
                        >
                            <div className="testimonial-card_stars">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} size={16} aria-hidden="true" />
                                ))}
                            </div>
                            <p className="testimonial-card_quote">"{t.quote}"</p>
                            <div className="testimonial-card_person">
                                <div className="testimonial-card_avatar">{t.name.charAt(0)}</div>
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
