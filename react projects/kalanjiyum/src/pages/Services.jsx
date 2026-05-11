import './Services.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/home/CTABanner'
import { services as servicesFallback, serviceProcess as processFallback } from '../data/services'
import { getServices, getServiceProcess } from '../api/services'
import { useApi } from '../hooks/useApi'
import { resolveIcon } from '../utils/iconMap'

export default function Services() {
    const services       = useApi(getServices, servicesFallback)
    const serviceProcess = useApi(getServiceProcess, processFallback)
    const { hash } = useLocation()

    useEffect(() => {
        if (!hash) return
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, [hash])

    return (
        <>
            <PageHero
                className="services-hero"
                page="Services"
                title="What We Do"
                subtext="From IIoT and PLC programming to web development and SAP consulting — end-to-end technical solutions for industry."
            />

            {/* Services grid */}
            <section className="section">
                <div className="container">
                    <SectionHeading
                        label="Capabilities"
                        heading="Our Service Areas"
                        subtext="Six specialisations — each delivered by engineers with deep domain experience."
                        align="center"
                    />
                    <div className="srv-grid">
                        {services.map((s) => {
                            const Icon = resolveIcon(s.icon)
                            return (
                            <div key={s.anchor} id={s.anchor} className="srv-card card" style={{ '--srv-color': s.color }}>
                                <span className="srv-card_icon" style={{ background: s.bg }}>
                                    {Icon && <Icon size={22} style={{ color: s.color }} aria-hidden="true" />}
                                </span>
                                <h3 className="srv-card_title">{s.title}</h3>
                                <p className="srv-card_desc">{s.desc}</p>
                                <ul className="srv-card_list">
                                    {s.items.map(item => (
                                        <li key={item} className="srv-card_item">
                                            <ArrowRight size={12} aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* How we deliver */}
            <section className="section srv-process-section">
                <div className="container">
                    <SectionHeading
                        label="Our Process"
                        heading="How We Deliver"
                        subtext="A clear, collaborative process from first call to go-live."
                        align="center"
                    />
                    <div className="srv-process">
                        {serviceProcess.map((p) => {
                            const Icon = resolveIcon(p.icon)
                            return (
                            <div key={p.step} className="srv-step">
                                <span className="srv-step_num">{p.step}</span>
                                <span className="srv-step_icon">
                                    {Icon && <Icon size={20} aria-hidden="true" />}
                                </span>
                                <h4 className="srv-step_title">{p.title}</h4>
                                <p className="srv-step_desc">{p.desc}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    )
}
