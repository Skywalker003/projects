import './Services.css'
import {
    Settings, RefreshCw, Globe, Network, Cpu, Wrench,
    ArrowRight, Search, PenTool, Code2, Rocket,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/home/CTABanner'

const services = [
    {
        id: 'industry4',
        icon: Settings,
        color: '#2563EB',
        bg: '#EFF6FF',
        title: 'Industry 4.0',
        desc: 'Connect your machines to the cloud — capture live data, deploy IIoT sensors, and automate the shopfloor with machine vision.',
        items: ['Data acquisition & cloud reporting', 'IIoT & machine vision', 'Industrial automation'],
    },
    {
        id: 'automation',
        icon: RefreshCw,
        color: '#EA580C',
        bg: '#FFF7ED',
        title: 'Process Automation',
        desc: 'Digitise customer management, logistics workflows, and end-to-end process traceability across your operations.',
        items: ['Customer management systems', 'Logistics & route solutions', 'Process traceability'],
    },
    {
        id: 'webdev',
        icon: Globe,
        color: '#4F46E5',
        bg: '#EEF2FF',
        title: 'Web Development',
        desc: 'Build eCommerce stores, business management systems, and corporate websites designed to grow with your business.',
        items: ['eCommerce platforms', 'Business management systems', 'Corporate websites'],
    },
    {
        id: 'network',
        icon: Network,
        color: '#0891B2',
        bg: '#ECFEFF',
        title: 'Network Solutions',
        desc: 'Design, deploy, and debug wired and mesh networks — including full CCTV network infrastructure.',
        items: ['Mesh & enterprise network design', 'Network debugging & monitoring', 'CCTV network setup'],
    },
    {
        id: 'plc',
        icon: Cpu,
        color: '#DC2626',
        bg: '#FFF1F2',
        title: 'PLCs, Sensors & Safety',
        desc: 'Programme and integrate PLCs from Siemens, Omron, Allen Bradley, Mitsubishi, and Schneider with safety systems.',
        items: ['Siemens, Omron & Allen Bradley', 'Mitsubishi & Schneider PLCs', 'Safety systems integration'],
    },
    {
        id: 'consulting',
        icon: Wrench,
        color: '#16A34A',
        bg: '#F0FDF4',
        title: 'Consulting Services',
        desc: 'SAP solutions, annual maintenance contracts, CCTV installation, and hands-on technical support.',
        items: ['SAP solutions & implementation', 'AMC for computers & CCTV', 'Technical support & training'],
    },
]

const process = [
    { icon: Search,   step: '01', title: 'Discover',       desc: 'We map your workflows, pain points, and goals before writing a single line of code.' },
    { icon: PenTool,  step: '02', title: 'Design',         desc: 'We architect the solution — data model, UX wireframes, and integration points.' },
    { icon: Code2,    step: '03', title: 'Build',          desc: 'Agile sprints with regular demos so you see progress and steer early.' },
    { icon: Rocket,   step: '04', title: 'Deploy & Own',   desc: 'We go live with you and provide documentation, training, and ongoing support.' },
]

export default function Services() {
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
                        {services.map(({ id, icon: Icon, color, bg, title, desc, items }) => (
                            <div key={id} className="srv-card card" style={{ '--srv-color': color }}>
                                <span className="srv-card_icon" style={{ background: bg }}>
                                    <Icon size={22} style={{ color }} aria-hidden="true" />
                                </span>
                                <h3 className="srv-card_title">{title}</h3>
                                <p className="srv-card_desc">{desc}</p>
                                <ul className="srv-card_list">
                                    {items.map(item => (
                                        <li key={item} className="srv-card_item">
                                            <ArrowRight size={12} aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
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
                        {process.map(({ icon: Icon, step, title, desc }) => (
                            <div key={step} className="srv-step">
                                <span className="srv-step_num">{step}</span>
                                <span className="srv-step_icon">
                                    <Icon size={20} aria-hidden="true" />
                                </span>
                                <h4 className="srv-step_title">{title}</h4>
                                <p className="srv-step_desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    )
}
