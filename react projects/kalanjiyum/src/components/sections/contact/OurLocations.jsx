import './OurLocations.css'
import { useState } from 'react'
import { Building2, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { locations, headquarters } from '../../../data/locations'
import SectionHeading from '../../ui/SectionHeading'

const PER_PAGE = 2

export default function OurLocations() {
    const [page, setPage] = useState(0)
    const totalPages = Math.ceil(locations.length / PER_PAGE)
    const visible = locations.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

    return (
        <section className="section section--light">
            <div className="container">
                <SectionHeading label="Find Us" heading="Our Locations" align="center" />

                {/* Cards + Nav */}
                <div className="locations-slider">
                    {totalPages > 1 && (
                        <button
                            className="locations-slider_arrow"
                            onClick={() => setPage(p => p - 1)}
                            disabled={page === 0}
                            aria-label="Previous"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    )}

                    <div className="locations-grid">
                        {visible.map((loc) => (
                            <div className="card locations-card" key={loc.id}>
                                <div className="locations-card_header">
                                    <div className="locations-card_icon">
                                        <Building2 size={20} color="var(--color-red)" />
                                    </div>
                                    <span className="locations-card_type">{loc.type}</span>
                                </div>
                                <h3 className="locations-card_name">{loc.name}</h3>
                                <p className="locations-card_address" style={{ whiteSpace: 'pre-line' }}>
                                    {loc.address}
                                </p>
                                <a
                                    href={loc.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="locations-card_link"
                                >
                                    View on Maps <ArrowRight size={14} />
                                </a>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <button
                            className="locations-slider_arrow"
                            onClick={() => setPage(p => p + 1)}
                            disabled={page === totalPages - 1}
                            aria-label="Next"
                        >
                            <ChevronRight size={20} />
                        </button>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="locations-dots">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                className={`locations-dots_dot ${i === page ? 'locations-dots_dot--active' : ''}`}
                                onClick={() => setPage(i)}
                                aria-label={`Page ${i + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Embedded Map */}
                <div className="locations-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9793406966105!2d78.1491011!3d9.9356767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5740c85210f%3A0x51869c74ed3dc66!2sKalanjiyam%20Technical%20Solutions!5e0!3m2!1sen!2sin!4v1776320868089!5m2!1sen!2sin"
                        className="locations-map_iframe"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kalanjiyam Technical Solutions Location"
                    />
                    <a
                        href={headquarters.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="locations-map_card"
                    >
                        <div className="locations-hq_icon">
                            <MapPin size={20} color="var(--color-white)" />
                        </div>
                        <div>
                            <h4 className="locations-map_title">Visit Our {headquarters.name}</h4>
                            <p className="locations-map_hint">Click to open directions</p>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    )
}
