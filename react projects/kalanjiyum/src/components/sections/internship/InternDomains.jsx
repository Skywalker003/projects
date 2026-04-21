import './InternDomains.css'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'
import { domains } from '../../../data/internship'

export default function InternDomains() {
    const [activeModal, setActiveModal] = useState(null)
    const [showFade, setShowFade] = useState(true)
    const modalBodyRef = useRef(null)
    const modalRef = useRef(null)
    const closeButtonRef = useRef(null)

    useEffect(() => {
        if (!activeModal) return
        const el = modalBodyRef.current
        if (!el) return
        const checkScroll = () => {
            setShowFade(el.scrollHeight > el.clientHeight + 8)
        }
        // Run after paint so dimensions are available
        const id = requestAnimationFrame(checkScroll)
        return () => cancelAnimationFrame(id)
    }, [activeModal])

    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [activeModal])

    useEffect(() => {
        if (!activeModal) return
        const onKey = (e) => { if (e.key === 'Escape') setActiveModal(null) }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [activeModal])

    // Move focus into modal on open
    useEffect(() => {
        if (activeModal && closeButtonRef.current) {
            closeButtonRef.current.focus()
        }
    }, [activeModal])

    // Trap Tab key inside modal
    useEffect(() => {
        if (!activeModal) return
        const modal = modalRef.current
        if (!modal) return
        const onTab = (e) => {
            if (e.key !== 'Tab') return
            const focusable = modal.querySelectorAll('a[href], button:not([disabled])')
            const first = focusable[0]
            const last = focusable[focusable.length - 1]
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus() }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus() }
            }
        }
        document.addEventListener('keydown', onTab)
        return () => document.removeEventListener('keydown', onTab)
    }, [activeModal])

    const handleModalScroll = () => {
        const el = modalBodyRef.current
        if (!el) return
        setShowFade(el.scrollTop + el.clientHeight < el.scrollHeight - 8)
    }

    return (
        <section id="domains" className="section section--light">
            <div className="container">
                <SectionHeading
                    heading="Internship Domains"
                    subtext="Choose your area of interest and grow your skills with hands-on experience"
                    align="center"
                />
                <div className="intern-domains_grid">
                    {domains.map((d, i) => (
                        <div className="intern-domain_card" key={i}>
                            {/* Image with overlay */}
                            <div className="intern-domain_img-wrap">
                                <img src={d.image} alt={d.title} className="intern-domain_img" />
                                <div className="intern-domain_overlay" />
                                <span className={`intern-domain_badge intern-domain_badge--${d.badgeColor}`}>
                                    {d.badge}
                                </span>
                                <h3 className="intern-domain_img-title">{d.title}</h3>
                            </div>
                            {/* Card body */}
                            <div className="intern-domain_body">
                                <p className="intern-domain_desc">{d.desc}</p>
                                <button
                                    className="btn btn--secondary btn--sm"
                                    onClick={() => setActiveModal(d)}
                                >
                                    Learn More <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {activeModal && (
                <div className="intern-modal_overlay" onClick={() => setActiveModal(null)} role="presentation">
                    <div
                        className="intern-modal_box"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="intern-modal-title"
                        onClick={(e) => e.stopPropagation()}
                        ref={modalRef}
                    >
                        <div className="intern-modal_header">
                            <h3 id="intern-modal-title" className="intern-modal_title">{activeModal.title}</h3>
                            <button className="intern-modal_close" onClick={() => setActiveModal(null)} aria-label="Close" ref={closeButtonRef}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className="intern-modal_body" ref={modalBodyRef} onScroll={handleModalScroll}>

                        <div className="intern-modal_block">
                            <span className="intern-domain_label">{activeModal.rolesLabel}</span>
                            <ul className="intern-modal_roles">
                                {activeModal.roles.map((r, i) => (
                                    <li key={i} className="intern-modal_role-item">{r}</li>
                                ))}
                            </ul>
                        </div>

                        {activeModal.internships && (
                            <div className="intern-modal_block">
                                <span className="intern-domain_label">{activeModal.internshipsLabel}</span>
                                <ul className="intern-modal_roles">
                                    {activeModal.internships.map((r, i) => (
                                        <li key={i} className="intern-modal_role-item">{r}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="intern-modal_block">
                            <span className="intern-domain_label">{activeModal.tagsLabel}</span>
                            {activeModal.tagGroups ? (
                                <div className="intern-modal_tag-groups">
                                    {activeModal.tagGroups.map((g, i) => (
                                        <div key={i} className="intern-modal_tag-group">
                                            <span className="intern-modal_tag-group-label">{g.label}</span>
                                            <div className="intern-modal_tags">
                                                {g.tags.map((t, j) => (
                                                    <span key={j} className="intern-domain_tag">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="intern-modal_tags">
                                    {activeModal.tags.map((t, i) => (
                                        <span key={i} className="intern-domain_tag">{t}</span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to={`/internship/apply?domain=${encodeURIComponent(activeModal.domainKey)}`}
                            className="btn btn--primary btn--sm"
                            onClick={() => setActiveModal(null)}
                        >
                            Apply for This Domain <ArrowRight size={14} />
                        </Link>

                        </div>{/* end intern-modal_body */}
                        {showFade && (
                            <div className="intern-modal_fade">
                                <span className="intern-modal_fade-label">scroll for more ↓</span>
                            </div>
                        )}
                    </div>{/* end intern-modal_box */}
                </div>
            )}
        </section>
    )
}
