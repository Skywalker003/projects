import './TermsAndPrivacy.css'
import { useEffect, useRef, useState } from 'react'
import PageHero from '../components/ui/PageHero'

export default function TermsAndPrivacy() {
    const [activeTab, setActiveTab] = useState('terms')
    const privacyRef = useRef(null)

    useEffect(() => {
        let ticking = false
        const onScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                if (privacyRef.current) {
                    const top = privacyRef.current.getBoundingClientRect().top
                    setActiveTab(top <= 200 ? 'privacy' : 'terms')
                }
                ticking = false
            })
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <PageHero
                title="Terms & Privacy Policy"
                subtext="Please read these terms carefully before using our services."
                page="Legal"
            />

            <nav className="legal-tab-nav" aria-label="Legal sections">
                <div className="legal-tab-nav_inner">
                    <a
                        href="#terms"
                        className={`legal-tab-nav_btn${activeTab === 'terms' ? ' legal-tab-nav_btn--active' : ''}`}
                    >
                        Terms &amp; Conditions
                    </a>
                    <a
                        href="#privacy"
                        className={`legal-tab-nav_btn${activeTab === 'privacy' ? ' legal-tab-nav_btn--active' : ''}`}
                    >
                        Privacy Policy
                    </a>
                </div>
            </nav>

            {/* Terms & Conditions */}
            <section id="terms" className="section section--light legal-section">
                <div className="container">
                    <div className="legal-wrap">
                        <div className="section-heading section-heading--left">
                            <span className="section-heading_label">Legal</span>
                            <h2 className="section-heading_title">Terms &amp; Conditions</h2>
                            <div className="section-heading_accent" aria-hidden="true" />
                        </div>

                        <p className="legal-intro">
                            Welcome to Kalanjiyum Technical Solutions! These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to comply with and be bound by these terms. If you do not agree with these terms, please refrain from using our services.
                        </p>

                        <article className="legal-article">
                            <h3 className="legal-article_title">1. User Conduct</h3>
                            <p className="legal-article_text">1.1 You agree to use our services in compliance with all applicable laws and regulations.</p>
                            <p className="legal-article_text">1.2 You are responsible for maintaining the confidentiality of your account information and are liable for all activities that occur under your account.</p>
                            <p className="legal-article_text">1.3 You agree not to engage in any activity that may interfere with or disrupt the functionality of our website or services.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">2. Intellectual Property</h3>
                            <p className="legal-article_text">2.1 All content and materials on our website and services are the property of Kalanjiyum Technical Solutions and are protected by intellectual property laws.</p>
                            <p className="legal-article_text">2.2 You may not reproduce, distribute, or use any content from our services without our explicit written consent.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">3. Termination</h3>
                            <p className="legal-article_text">3.1 Kalanjiyum Technical Solutions reserves the right to terminate or suspend your access to our services in case of any violation of agreed terms, without notice.</p>
                            <p className="legal-article_text">3.2 Upon termination, you must cease using our services, and any provisions of these terms that should survive termination will continue to apply.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">4. Changes to Terms</h3>
                            <p className="legal-article_text">4.1 We reserve the right to update and revise these Terms and Conditions periodically.</p>
                            <p className="legal-article_text">4.2 Your continued use of our services following the posting of changes constitutes your acceptance of such changes.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">5. Contact Us</h3>
                            <p className="legal-article_text">
                                If you have any questions or concerns regarding these Terms and Conditions, please contact us at{' '}
                                <a href="mailto:contactus@kalanjiyam.info">contactus@kalanjiyam.info</a>.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Privacy Policy */}
            <section id="privacy" ref={privacyRef} className="section legal-section">
                <div className="container">
                    <div className="legal-wrap">
                        <div className="section-heading section-heading--left">
                            <span className="section-heading_label">Legal</span>
                            <h2 className="section-heading_title">Privacy Policy</h2>
                            <div className="section-heading_accent" aria-hidden="true" />
                        </div>

                        <p className="legal-intro">
                            Welcome to Kalanjiyum Technical Solutions! This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>

                        <article className="legal-article">
                            <h3 className="legal-article_title">1. Information We Collect</h3>
                            <p className="legal-article_text"><strong>1.1 Personal Information</strong> — We may collect personal information that you provide to us, including but not limited to your name, email address, phone number, and company details when you register on our website, subscribe to our services, or fill out a form.</p>
                            <p className="legal-article_text"><strong>1.2 Usage Information</strong> — We may collect information about your use of our website and services, such as IP addresses, browser type, referral URLs, and other usage data.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">2. How We Use Your Information</h3>
                            <p className="legal-article_text"><strong>2.1 Providing Services</strong> — We use the collected information to provide, maintain, and improve our service standards.</p>
                            <p className="legal-article_text"><strong>2.2 Communication</strong> — We may use your contact information to send you important updates, newsletters, and marketing communications related to our services. You can opt-out of these communications at any time.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">3. Information Sharing</h3>
                            <p className="legal-article_text">We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share information with trusted third parties who assist us in operating our website or servicing you, as long as those parties agree to keep this information confidential.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">4. Security</h3>
                            <p className="legal-article_text">We implement a variety of security measures to protect the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">5. Cookies and Similar Technologies</h3>
                            <p className="legal-article_text">We may use cookies and similar technologies to enhance your experience on our website. You can choose to disable cookies through your browser settings; however, this may affect your ability to access certain features of the site.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">6. Third-Party Links</h3>
                            <p className="legal-article_text">Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of these websites and encourage you to review their privacy policies before providing any personal information.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">7. Changes to This Privacy Policy</h3>
                            <p className="legal-article_text">We reserve the right to update and revise this Privacy Policy periodically. Any changes will be effective immediately upon the posting of the revised Privacy Policy. Your continued use of our website and services following the posting of changes constitutes your acceptance of such changes.</p>
                        </article>

                        <article className="legal-article">
                            <h3 className="legal-article_title">8. Contact Us</h3>
                            <p className="legal-article_text">
                                If you have any questions or concerns regarding this Privacy Policy, please contact us at{' '}
                                <a href="mailto:contactus@kalanjiyam.info">contactus@kalanjiyam.info</a>.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
