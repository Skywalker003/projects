import './TermsAndPrivacy.css'
import { useEffect, useRef, useState } from 'react'
import { Link2, Printer, Mail, Clock } from 'lucide-react'
import PageHero from '../components/ui/PageHero'

const TERMS_TOC = [
    { id: 'terms-1', num: 1, title: 'User Conduct' },
    { id: 'terms-2', num: 2, title: 'Intellectual Property' },
    { id: 'terms-3', num: 3, title: 'Termination' },
    { id: 'terms-4', num: 4, title: 'Changes to Terms' },
]

const PRIVACY_TOC = [
    { id: 'privacy-1', num: 1, title: 'Information We Collect' },
    { id: 'privacy-2', num: 2, title: 'How We Use Your Information' },
    { id: 'privacy-3', num: 3, title: 'Information Sharing' },
    { id: 'privacy-4', num: 4, title: 'Security' },
    { id: 'privacy-5', num: 5, title: 'Cookies and Similar Technologies' },
    { id: 'privacy-6', num: 6, title: 'Third-Party Links' },
    { id: 'privacy-7', num: 7, title: 'Changes to This Privacy Policy' },
]

function LegalToc({ items, activeTocItem, onItemClick }) {
    return (
        <aside className="legal-toc">
            <p className="legal-toc_heading">Contents</p>
            <nav>
                {items.map(item => (
                    <button
                        key={item.id}
                        className={`legal-toc_item${activeTocItem === item.id ? ' legal-toc_item--active' : ''}`}
                        onClick={() => onItemClick(item.id)}
                    >
                        <span className="legal-toc_num">{String(item.num).padStart(2, '0')}</span>
                        {item.title}
                    </button>
                ))}
            </nav>
        </aside>
    )
}

function LegalArticle({ id, num, title, children }) {
    return (
        <article id={id} className="legal-article">
            <div className="legal-article_header">
                <span className="legal-article_chip">{String(num).padStart(2, '0')}</span>
                <h3 className="legal-article_name">{title}</h3>
            </div>
            <div className="legal-article_body">
                {children}
            </div>
        </article>
    )
}

function LegalDivider() {
    return <div className="legal-divider" aria-hidden="true"><span>§</span></div>
}

function LegalContactCard({ context }) {
    return (
        <div className="legal-contact-card">
            <div className="legal-contact-card_icon" aria-hidden="true">
                <Mail size={22} />
            </div>
            <div>
                <p className="legal-contact-card_title">
                    {context === 'terms' ? 'Questions about our Terms?' : 'Questions about our Privacy Policy?'}
                </p>
                <a href="mailto:contactus@kalanjiyam.info" className="btn btn--primary">
                    contactus@kalanjiyam.info
                </a>
            </div>
        </div>
    )
}

export default function TermsAndPrivacy() {
    const [activeTab, setActiveTab]         = useState('terms')
    const [activeTocItem, setActiveTocItem] = useState(null)
    const [copiedSection, setCopiedSection] = useState(null)
    const privacyRef = useRef(null)

    const scrollToArticle = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const copyLink = (hash) => {
        navigator.clipboard.writeText(window.location.origin + '/terms-and-privacy' + hash)
            .then(() => { setCopiedSection(hash); setTimeout(() => setCopiedSection(null), 2000) })
    }

    useEffect(() => {
        let ticking = false
        const onScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                if (privacyRef.current) {
                    setActiveTab(privacyRef.current.getBoundingClientRect().top <= 200 ? 'privacy' : 'terms')
                }
                ticking = false
            })
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        let ticking = false
        const onScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                let active = null
                document.querySelectorAll('.legal-article').forEach(el => {
                    if (el.getBoundingClientRect().top <= 160) active = el.id
                })
                if (active) setActiveTocItem(active)
                ticking = false
            })
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <PageHero
                className="legal-hero"
                title="Terms & Privacy Policy"
                subtext="Please read these terms carefully before using our services."
                page="Legal"
            />

            <nav className="legal-tab-nav" aria-label="Legal sections">
                <div className="legal-tab-nav_inner">
                    <div className="legal-tab-nav_tabs">
                        <a href="#terms" className={`legal-tab-nav_btn${activeTab === 'terms' ? ' legal-tab-nav_btn--active' : ''}`}>
                            Terms &amp; Conditions
                        </a>
                        <a href="#privacy" className={`legal-tab-nav_btn${activeTab === 'privacy' ? ' legal-tab-nav_btn--active' : ''}`}>
                            Privacy Policy
                        </a>
                    </div>
                    <button className="legal-print-btn" onClick={() => window.print()}>
                        <Printer size={14} aria-hidden="true" />
                        Print / Save PDF
                    </button>
                </div>
            </nav>

            {/* Terms & Conditions */}
            <section id="terms" className="section legal-section">
                <div className="container">
                    <div className="legal-layout">
                        <LegalToc items={TERMS_TOC} activeTocItem={activeTocItem} onItemClick={scrollToArticle} />
                        <div className="legal-main">
                            <div className="section-heading section-heading--left">
                                <span className="section-heading_label">Legal</span>
                                <h2 className="section-heading_title">Terms &amp; Conditions</h2>
                                <div className="section-heading_accent" aria-hidden="true" />
                            </div>
                            <div className="legal-meta-row">
                                <p className="legal-updated">Last updated: April 2026</p>
                                <div className="legal-meta-right">
                                    <span className="legal-reading-time">
                                        <Clock size={13} aria-hidden="true" />
                                        ~2 min read
                                    </span>
                                    <button className="legal-copy-btn" onClick={() => copyLink('#terms')}>
                                        <Link2 size={13} aria-hidden="true" />
                                        {copiedSection === '#terms' ? 'Copied!' : 'Copy link'}
                                    </button>
                                </div>
                            </div>

                            <p className="legal-intro">
                                Welcome to Kalanjiyum Technical Solutions! These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to comply with and be bound by these terms. If you do not agree with these terms, please refrain from using our services.
                            </p>
                            
                            <LegalArticle id="terms-1" num={1} title="User Conduct">
                                <p className="legal-article_text">1.1 You agree to use our services in compliance with all applicable laws and regulations.</p>
                                <p className="legal-article_text">1.2 You are responsible for maintaining the confidentiality of your account information and are liable for all activities that occur under your account.</p>
                                <p className="legal-article_text">1.3 You agree not to engage in any activity that may interfere with or disrupt the functionality of our website or services.</p>
                            </LegalArticle>
                            <LegalDivider />
                            <LegalArticle id="terms-2" num={2} title="Intellectual Property">
                                <p className="legal-article_text">2.1 All content and materials on our website and services are the property of Kalanjiyum Technical Solutions and are protected by intellectual property laws.</p>
                                <p className="legal-article_text">2.2 You may not reproduce, distribute, or use any content from our services without our explicit written consent.</p>
                            </LegalArticle>
                            <LegalDivider />
                            <LegalArticle id="terms-3" num={3} title="Termination">
                                <p className="legal-article_text">3.1 Kalanjiyum Technical Solutions reserves the right to terminate or suspend your access to our services in case of any violation of agreed terms, without notice.</p>
                                <p className="legal-article_text">3.2 Upon termination, you must cease using our services, and any provisions of these terms that should survive termination will continue to apply.</p>
                            </LegalArticle>
                            <LegalDivider />
                            <LegalArticle id="terms-4" num={4} title="Changes to Terms">
                                <p className="legal-article_text">4.1 We reserve the right to update and revise these Terms and Conditions periodically.</p>
                                <p className="legal-article_text">4.2 Your continued use of our services following the posting of changes constitutes your acceptance of such changes.</p>
                            </LegalArticle>

                            <LegalContactCard context="terms" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Policy */}
            <section id="privacy" ref={privacyRef} className="section legal-section">
                <div className="container">
                    <div className="legal-layout">
                        <LegalToc items={PRIVACY_TOC} activeTocItem={activeTocItem} onItemClick={scrollToArticle} />
                        <div className="legal-main">
                            <div className="section-heading section-heading--left">
                                <span className="section-heading_label">Legal</span>
                                <h2 className="section-heading_title">Privacy Policy</h2>
                                <div className="section-heading_accent" aria-hidden="true" />
                            </div>
                            <div className="legal-meta-row">
                                <p className="legal-updated">Last updated: April 2026</p>
                                <div className="legal-meta-right">
                                    <span className="legal-reading-time">
                                        <Clock size={13} aria-hidden="true" />
                                        ~3 min read
                                    </span>
                                    <button className="legal-copy-btn" onClick={() => copyLink('#privacy')}>
                                        <Link2 size={13} aria-hidden="true" />
                                        {copiedSection === '#privacy' ? 'Copied!' : 'Copy link'}
                                    </button>
                                </div>
                            </div>

                            <p className="legal-intro">
                                Welcome to Kalanjiyum Technical Solutions! This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>

                            <LegalArticle id="privacy-1" num={1} title="Information We Collect">
                                <p className="legal-article_text"><strong>1.1 Personal Information</strong> — We may collect personal information that you provide to us, including but not limited to your name, email address, phone number, and company details when you register on our website, subscribe to our services, or fill out a form.</p>
                                <p className="legal-article_text"><strong>1.2 Usage Information</strong> — We may collect information about your use of our website and services, such as IP addresses, browser type, referral URLs, and other usage data.</p>
                            </LegalArticle>
                            <LegalDivider />
                            <LegalArticle id="privacy-2" num={2} title="How We Use Your Information">
                                <p className="legal-article_text"><strong>2.1 Providing Services</strong> — We use the collected information to provide, maintain, and improve our service standards.</p>
                                <p className="legal-article_text"><strong>2.2 Communication</strong> — We may use your contact information to send you important updates, newsletters, and marketing communications related to our services. You can opt-out of these communications at any time.</p>
                            </LegalArticle>
                            <LegalDivider />
                            <LegalArticle id="privacy-3" num={3} title="Information Sharing">
                                <p className="legal-article_text">We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share information with trusted third parties who assist us in operating our website or servicing you, as long as those parties agree to keep this information confidential.</p>
                            </LegalArticle>
                            <LegalDivider />
                            <LegalArticle id="privacy-4" num={4} title="Security">
                                <p className="legal-article_text">We implement a variety of security measures to protect the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
                            </LegalArticle>
                            <LegalDivider />
                            <LegalArticle id="privacy-5" num={5} title="Cookies and Similar Technologies">
                                <p className="legal-article_text">We may use cookies and similar technologies to enhance your experience on our website. You can choose to disable cookies through your browser settings; however, this may affect your ability to access certain features of the site.</p>
                            </LegalArticle>
                            <LegalDivider />
                            <LegalArticle id="privacy-6" num={6} title="Third-Party Links">
                                <p className="legal-article_text">Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of these websites and encourage you to review their privacy policies before providing any personal information.</p>
                            </LegalArticle>
                            <LegalDivider />
                            <LegalArticle id="privacy-7" num={7} title="Changes to This Privacy Policy">
                                <p className="legal-article_text">We reserve the right to update and revise this Privacy Policy periodically. Any changes will be effective immediately upon the posting of the revised Privacy Policy. Your continued use of our website and services following the posting of changes constitutes your acceptance of such changes.</p>
                            </LegalArticle>

                            <LegalContactCard context="privacy" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
