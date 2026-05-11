import './TeamGallery.css'
import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'
import { gallerySlides as fallback } from '../../../data/about'
import { getGallerySlides } from '../../../api/about'
import { useApi } from '../../../hooks/useApi'

export default function TeamGallery() {
    const gallerySlides = useApi(getGallerySlides, fallback)
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef(null)

    const go = useCallback((next) => {
        if (animating) return
        setAnimating(true)
        setCurrent(next)
        setTimeout(() => setAnimating(false), 400)
    }, [animating])

    const prev = () => go((current - 1 + gallerySlides.length) % gallerySlides.length)
    const next = () => go((current + 1) % gallerySlides.length)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.2 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!visible) return
        const timer = setInterval(() => {
            go((current + 1) % gallerySlides.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [current, go, visible])

    return (
        <section className="section gallery-section" ref={sectionRef}>
            <div className="container">
                <SectionHeading
                    label="Company Life"
                    heading="Our Gallery"
                    subtext="A glimpse into our workspace, team, and the work we do every day."
                    align="center"
                />

                <div className="gallery-carousel">
                    {/* Track */}
                    <div className="gallery-track">
                        {gallerySlides.map((slide, i) => (
                            <div
                                key={i}
                                className={`gallery-slide${i === current ? ' gallery-slide--active' : ''}`}
                                aria-hidden={i !== current}
                            >
                                <img src={slide.src} alt={slide.caption} className="gallery-img" />
                                <div className="gallery-caption">{slide.caption}</div>
                            </div>
                        ))}
                    </div>

                    {/* Prev / Next buttons */}
                    <button className="gallery-btn gallery-btn--prev" onClick={prev} aria-label="Previous photo">
                        <ChevronLeft size={22} />
                    </button>
                    <button className="gallery-btn gallery-btn--next" onClick={next} aria-label="Next photo">
                        <ChevronRight size={22} />
                    </button>

                    {/* Dots */}
                    <div className="gallery-dots" role="tablist">
                        {gallerySlides.map((_, i) => (
                            <button
                                key={i}
                                className={`gallery-dot${i === current ? ' gallery-dot--active' : ''}`}
                                onClick={() => go(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                role="tab"
                                aria-selected={i === current}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
