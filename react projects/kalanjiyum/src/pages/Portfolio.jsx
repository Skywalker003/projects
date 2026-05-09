import './Portfolio.css'
import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // eslint-disable-line no-unused-vars
import {
    ArrowLeft, ArrowRight, ChevronRight, X, SearchX, Check,
    Users, Truck, Package, BarChart2, UserCheck, Cog,
    Monitor, Cpu, Box, Smartphone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { portfolioTopics, portfolioItems } from '../data/portfolio'

const TAG_GRADIENTS = {
    'WEB APP':    'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    'DASHBOARD':  'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
    'IOT':        'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
    'MODULE':     'linear-gradient(135deg, #78350f 0%, #d97706 100%)',
    'MOBILE APP': 'linear-gradient(135deg, #831843 0%, #db2777 100%)',
}

const TAG_COLORS = {
    'WEB APP':    '#2563EB',
    'DASHBOARD':  '#7C3AED',
    'IOT':        '#059669',
    'MODULE':     '#D97706',
    'MOBILE APP': '#DB2777',
}

const TAG_ICONS = {
    'WEB APP':    Monitor,
    'DASHBOARD':  BarChart2,
    'IOT':        Cpu,
    'MODULE':     Box,
    'MOBILE APP': Smartphone,
}

const TOPIC_META = {
    crm:       { Icon: Users,     bg: '#EEF2FF', color: '#4F46E5' },
    scm:       { Icon: Truck,     bg: '#FFF7ED', color: '#EA580C' },
    mes:       { Icon: Cog,       bg: '#FFF1F2', color: '#DC2626' },
    inventory: { Icon: Package,   bg: '#F0FDF4', color: '#16A34A' },
    hrm:       { Icon: UserCheck, bg: '#FDF4FF', color: '#9333EA' },
    finance:   { Icon: BarChart2, bg: '#EFF6FF', color: '#2563EB' },
}

const MODAL_TITLE_ID  = 'port-modal-title'
const INITIAL_VISIBLE = 6

export default function Portfolio() {
    const [selectedTopic,   setSelectedTopic]   = useState(null)
    const [selectedSub,     setSelectedSub]     = useState('All')
    const [visibleCount,    setVisibleCount]    = useState(INITIAL_VISIBLE)
    const [selectedProject, setSelectedProject] = useState(null)

    const gridRef        = useRef(null)
    const prevVisibleRef = useRef(INITIAL_VISIBLE)
    const modalRef       = useRef(null)
    const modalRightRef  = useRef(null)
    const triggerRef     = useRef(null)
    const activeTabRef   = useRef(null)

    const selectTopic = (topic) => {
        setSelectedTopic(topic)
        setSelectedSub('All')
        setVisibleCount(INITIAL_VISIBLE)
        prevVisibleRef.current = INITIAL_VISIBLE
        window.scrollTo({ top: 0, behavior: 'instant' })
    }

    const selectSub = (sub) => {
        setSelectedSub(sub)
        setVisibleCount(INITIAL_VISIBLE)
        prevVisibleRef.current = INITIAL_VISIBLE
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const goBack = () => {
        setSelectedTopic(null)
        setSelectedSub('All')
        setVisibleCount(INITIAL_VISIBLE)
        prevVisibleRef.current = INITIAL_VISIBLE
    }

    const handleLoadMore = () => {
        prevVisibleRef.current = visibleCount
        setVisibleCount(c => c + 3)
    }

    const openProject = (item) => {
        triggerRef.current = document.activeElement
        setSelectedProject(item)
    }

    const closeProject = () => setSelectedProject(null)

    const goPrev = () => {
        const idx = filtered.findIndex(p => p.id === selectedProject.id)
        if (idx > 0) setSelectedProject(filtered[idx - 1])
    }

    const goNext = () => {
        const idx = filtered.findIndex(p => p.id === selectedProject.id)
        if (idx < filtered.length - 1) setSelectedProject(filtered[idx + 1])
    }

    // Scroll first new card into view after loading more
    useEffect(() => {
        if (!gridRef.current || visibleCount <= prevVisibleRef.current) return
        const cards = gridRef.current.querySelectorAll('article.port-card')
        const firstNew = cards[prevVisibleRef.current]
        if (firstNew) firstNew.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, [visibleCount])

    // Reset right panel scroll to top on project change
    useEffect(() => {
        if (modalRightRef.current) modalRightRef.current.scrollTop = 0
    }, [selectedProject])

    // Scroll active domain tab into view when topic changes
    useEffect(() => {
        activeTabRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }, [selectedTopic])

    // Escape key closes modal
    useEffect(() => {
        if (!selectedProject) return
        const handler = (e) => { if (e.key === 'Escape') closeProject() }
        document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [selectedProject])

    // Focus management: move focus into modal on open, restore on close
    useEffect(() => {
        if (selectedProject && modalRef.current) {
            const closeBtn = modalRef.current.querySelector('.port-modal_close')
            closeBtn?.focus()
        } else if (!selectedProject && triggerRef.current) {
            triggerRef.current.focus()
            triggerRef.current = null
        }
    }, [selectedProject])

    // Focus trap inside modal
    const handleModalKeyDown = (e) => {
        if (e.key !== 'Tab') return
        const focusable = Array.from(
            modalRef.current.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])')
        ).filter(el => !el.disabled)
        const first = focusable[0]
        const last  = focusable[focusable.length - 1]
        if (e.shiftKey) {
            if (document.activeElement === first) { e.preventDefault(); last.focus() }
        } else {
            if (document.activeElement === last)  { e.preventDefault(); first.focus() }
        }
    }

    // Static: counts per topic — never changes, computed once
    const topicCounts = useMemo(() => {
        const map = {}
        portfolioItems.forEach(p => { map[p.topic] = (map[p.topic] || 0) + 1 })
        return map
    }, [])

    const topicItems = useMemo(
        () => selectedTopic ? portfolioItems.filter(p => p.topic === selectedTopic.id) : [],
        [selectedTopic]
    )

    const filtered = useMemo(() => {
        if (!selectedTopic) return []
        if (selectedSub !== 'All') {
            return topicItems.filter(p => p.subCategory === selectedSub)
        }
        const subDomains = selectedTopic.subFilters.filter(sub => sub !== 'All')
        // Domain has no sub-domains (e.g. Finance) — show all items
        if (subDomains.length === 0) return topicItems
        // One featured (or first) project per sub-domain, in sub-domain order
        return subDomains
            .map(sub => {
                const subItems = topicItems.filter(p => p.subCategory === sub)
                return subItems.find(p => p.featured) ?? subItems[0]
            })
            .filter(Boolean)
    }, [topicItems, selectedSub, selectedTopic])

    // Per-domain: counts per sub-category — recomputed only when the active topic changes
    const subCounts = useMemo(() => {
        const map = {}
        topicItems.forEach(p => { map[p.subCategory] = (map[p.subCategory] || 0) + 1 })
        if (selectedTopic) {
            map['All'] = selectedTopic.subFilters.filter(sub => sub !== 'All' && map[sub] > 0).length
        }
        return map
    }, [topicItems, selectedTopic])

    const visible  = filtered.slice(0, visibleCount)
    const hasMore  = visibleCount < filtered.length

    const activeMeta     = selectedTopic   ? TOPIC_META[selectedTopic.id]   : null
    const ModalIcon      = selectedProject ? TAG_ICONS[selectedProject.tag] : null
    const currentIndex   = selectedProject ? filtered.findIndex(p => p.id === selectedProject.id) : -1

    return (
        <>
            <AnimatePresence mode="wait">
                {!selectedTopic ? (
                    <motion.div
                        key="phase1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <PageHero
                            className="port-hero"
                            title="Our Work"
                            subtext="Real-world solutions built across ERP, automation, and industrial domains."
                            page="Portfolio"
                        />
                        <section className="section">
                            <div className="container">
                                <SectionHeading
                                    label="Explore"
                                    heading="Choose a Domain"
                                    subtext="Select a business domain to explore the solutions we've built."
                                    align="center"
                                />
                                <div className="port-topic-grid">
                                    {portfolioTopics.map((topic, index) => {
                                        const { Icon, bg, color } = TOPIC_META[topic.id] || {}
                                        const count = topicCounts[topic.id] || 0
                                        return (
                                            <motion.button
                                                key={topic.id}
                                                className="port-topic-box"
                                                onClick={() => selectTopic(topic)}
                                                style={{ '--topic-color': color }}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                whileTap={{ scale: 0.97 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                            >
                                                <div className="port-topic-box_top">
                                                    <span className="port-topic-box_icon" style={{ background: bg }}>
                                                        {Icon && <Icon size={24} style={{ color }} aria-hidden="true" />}
                                                    </span>
                                                    <span className="port-topic-box_count">{count} projects</span>
                                                </div>
                                                <span className="port-topic-box_label">
                                                    {topic.fullLabel}
                                                    {topic.fullLabel !== topic.label && <span className="port-topic-box_abbr"> ({topic.label})</span>}
                                                </span>
                                                <span className="port-topic-box_sub">
                                                    {topic.subFilters.length > 1 ? `${topic.subFilters.length - 1} sub-domains` : 'General'}
                                                </span>
                                                <span className="port-topic-box_cta">
                                                    Explore domain
                                                    <span className="port-topic-box_cta-arrow">
                                                        <ArrowRight size={13} aria-hidden="true" />
                                                    </span>
                                                </span>
                                            </motion.button>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                    </motion.div>
                ) : (
                    <motion.div
                        key="phase2"
                        className="port-phase2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* Sticky tab bar */}
                        <nav className="port-tabs" aria-label="Domain filter">
                            <div className="port-tabs_inner">
                                <button className="port-back-btn" onClick={goBack}>
                                    <ArrowLeft size={15} aria-hidden="true" />
                                    <span>All Domains</span>
                                </button>
                                <div className="port-tabs_divider" aria-hidden="true" />
                                <div className="port-tabs_fade">
                                    <div className="port-tabs_list">
                                        {portfolioTopics.map(topic => {
                                            const { Icon, color } = TOPIC_META[topic.id] || {}
                                            const isActive = selectedTopic.id === topic.id
                                            return (
                                                <button
                                                    key={topic.id}
                                                    ref={isActive ? activeTabRef : null}
                                                    className={`port-tab-btn${isActive ? ' port-tab-btn--active' : ''}`}
                                                    style={isActive ? { '--tab-active-color': color } : undefined}
                                                    onClick={() => selectTopic(topic)}
                                                >
                                                    {Icon && <Icon size={13} aria-hidden="true" style={{ color }} />}
                                                    {topic.label}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                                <span className="port-tabs_scroll-hint" aria-hidden="true">
                                    <ChevronRight size={13} />
                                </span>
                            </div>
                        </nav>

                        {/* Section with domain-keyed animation on domain switch */}
                        <section className="section">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedTopic.id}
                                    className="container"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {/* Domain header */}
                                    {activeMeta && (
                                        <div className="port-domain-header">
                                            <div className="port-domain-header_top">
                                                <span className="port-domain-header_icon" style={{ background: activeMeta.bg }}>
                                                    <activeMeta.Icon size={20} style={{ color: activeMeta.color }} aria-hidden="true" />
                                                </span>
                                                <div className="port-domain-header_text">
                                                    <h2 className="port-domain-header_title">
                                                        <span className="port-domain-header_title-long">{selectedTopic.fullLabel}</span>
                                                        <span className="port-domain-header_title-abbr">{selectedTopic.label}</span>
                                                    </h2>
                                                    <p className="port-domain-header_count">
                                                        {selectedSub === 'All' && selectedTopic.subFilters.length > 1
                                                            ? `${selectedTopic.subFilters.length - 1} sub-domain${selectedTopic.subFilters.length - 1 !== 1 ? 's' : ''}`
                                                            : `${filtered.length} project${filtered.length !== 1 ? 's' : ''}`
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            {selectedTopic.subFilters.length > 1 && (
                                                <div className="port-subtabs-wrap">
                                                    <div className="port-subtabs" style={{ '--domain-color': activeMeta.color }}>
                                                        {selectedTopic.subFilters.map(sub => (
                                                            <button
                                                                key={sub}
                                                                className={`port-subtab${selectedSub === sub ? ' port-subtab--active' : ''}`}
                                                                onClick={() => selectSub(sub)}
                                                            >
                                                                {sub}
                                                                {sub !== 'All' && <span className="port-subtab-count">{subCounts[sub] || 0}</span>}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Project grid */}
                                    {visible.length > 0 ? (
                                        <>
                                            <div className="port-grid" ref={gridRef} style={{ '--card-accent': activeMeta?.color }}>
                                                {visible.map((item, idx) => {
                                                    const TagIcon = TAG_ICONS[item.tag]
                                                    return (
                                                        <motion.article
                                                            key={item.id}
                                                            className="port-card"
                                                            onClick={() => openProject(item)}
                                                            initial={{ opacity: 0, y: 16 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.3, delay: Math.min(idx, 5) * 0.05 }}
                                                        >
                                                            <div
                                                                className="port-card_img"
                                                                style={{ background: TAG_GRADIENTS[item.tag] || 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
                                                            >
                                                                {TagIcon && <TagIcon size={52} className="port-card_img-icon" aria-hidden="true" />}
                                                                {item.featured && (
                                                                    <span className="port-card_featured">★ Featured</span>
                                                                )}
                                                                {item.phase && (
                                                                    <span className="port-card_phase">{item.phase}</span>
                                                                )}
                                                                <span className="port-card_num">
                                                                    {String(item.id).padStart(2, '0')}
                                                                </span>
                                                                <span
                                                                    className="port-card_tag"
                                                                    style={{ backgroundColor: TAG_COLORS[item.tag] }}
                                                                >
                                                                    {item.tag}
                                                                </span>
                                                            </div>
                                                            <div className="port-card_body">
                                                                <span className="port-card_cat">{item.subCategory}</span>
                                                                <h3 className="port-card_title">{item.title}</h3>
                                                                <p className="port-card_desc">{item.description}</p>
                                                                <span className="port-card_link" aria-hidden="true">
                                                                    View Details <ArrowRight size={13} aria-hidden="true" />
                                                                </span>
                                                            </div>
                                                        </motion.article>
                                                    )
                                                })}
                                            </div>

                                            {hasMore && (
                                                <p className="port-show-count">
                                                    Showing {visible.length} of {filtered.length} project{filtered.length !== 1 ? 's' : ''}
                                                </p>
                                            )}

                                            {hasMore && (
                                                <div className="port-load-more">
                                                    <button
                                                        className="btn btn--secondary"
                                                        onClick={handleLoadMore}
                                                    >
                                                        Load More Projects
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <div className="port-empty">
                                            <SearchX size={40} className="port-empty_icon" aria-hidden="true" />
                                            <p className="port-empty_title">No projects found</p>
                                            <p className="port-empty_hint">Try a different filter</p>
                                            <button
                                                className="port-sub-btn"
                                                onClick={() => selectSub('All')}
                                            >
                                                Clear filter
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </section>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Project detail modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="port-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={closeProject}
                    >
                        <motion.div
                            ref={modalRef}
                            className="port-modal"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby={MODAL_TITLE_ID}
                            initial={{ opacity: 0, y: 28, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.97 }}
                            transition={{ duration: 0.22 }}
                            onClick={e => e.stopPropagation()}
                            onKeyDown={handleModalKeyDown}
                        >
                            {/* Left panel — gradient */}
                            <div
                                className="port-modal_left"
                                style={{ background: TAG_GRADIENTS[selectedProject.tag] || 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
                            >
                                <div className="port-modal_left-top">
                                    <span className="port-modal_tag" style={{ backgroundColor: TAG_COLORS[selectedProject.tag] }}>
                                        {selectedProject.tag}
                                    </span>
                                    <button className="port-modal_close" onClick={closeProject} aria-label="Close">
                                        <X size={16} />
                                    </button>
                                </div>

                                <div className="port-modal_left-center">
                                    {ModalIcon && <ModalIcon size={88} className="port-modal_big-icon" aria-hidden="true" />}
                                </div>

                                <div className="port-modal_left-bottom">
                                    <p className="port-modal_domain-label">{selectedTopic?.fullLabel}</p>
                                    <p className="port-modal_subcat-label">{selectedProject.subCategory}</p>
                                    {selectedProject.phase && (
                                        <span className="port-modal_phase">{selectedProject.phase}</span>
                                    )}
                                    <p className="port-modal_index-label">
                                        {currentIndex + 1} of {filtered.length} projects
                                    </p>
                                    <div className="port-modal_nav">
                                        <button
                                            className="port-modal_nav-btn"
                                            onClick={goPrev}
                                            disabled={currentIndex <= 0}
                                            aria-label="Previous project"
                                        >
                                            <ArrowLeft size={15} />
                                        </button>
                                        <button
                                            className="port-modal_nav-btn"
                                            onClick={goNext}
                                            disabled={currentIndex >= filtered.length - 1}
                                            aria-label="Next project"
                                        >
                                            <ArrowRight size={15} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right panel — content */}
                            <div className="port-modal_right" ref={modalRightRef}>
                                <div className="port-modal_meta">
                                    <span className="port-card_cat">{selectedProject.subCategory}</span>
                                    {selectedProject.featured && (
                                        <span className="port-modal_featured-badge">★ Featured</span>
                                    )}
                                </div>

                                <h2 id={MODAL_TITLE_ID} className="port-modal_title">
                                    {selectedProject.title}
                                </h2>
                                <p className="port-modal_desc">{selectedProject.description}</p>

                                {selectedProject.highlights?.length > 0 && (
                                    <div className="port-modal_section">
                                        <h3 className="port-modal_section-title">Key Highlights</h3>
                                        <ul className="port-modal_highlights">
                                            {selectedProject.highlights.map((h, i) => (
                                                <li key={i} className="port-modal_highlight">
                                                    <Check size={14} className="port-modal_check" aria-hidden="true" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {selectedProject.tech?.length > 0 && (
                                    <div className="port-modal_section">
                                        <h3 className="port-modal_section-title">Tech & Platform</h3>
                                        <div className="port-modal_tech">
                                            {selectedProject.tech.map(t => (
                                                <span key={t} className="port-modal_chip">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <Link
                                    to="/contact"
                                    className="btn btn--primary port-modal_cta"
                                    onClick={closeProject}
                                >
                                    Get in Touch <ArrowRight size={15} aria-hidden="true" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

