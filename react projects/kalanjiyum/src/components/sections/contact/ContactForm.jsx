import './ContactForm.css'
import { useState } from 'react'
import { Mail, Clock, Zap } from 'lucide-react'
import { services } from '../../../data/services'
import CustomSelect from '../../ui/CustomSelect'

export default function ContactForm() {
    const [service, setService] = useState('')
    const serviceOptions = services.map(s => ({ value: s.title, label: s.title }))

    return (
        <section className="section">
            <div className="container contact-form-layout">

                {/* Left: Info */}
                <div className="contact-form_info">
                    <div className="contact-form_heading">
                        <h1 className="contact-form_title">Contact Us</h1>
                        <p className="contact-form_subtext">
                            Have a project in mind or need technical consultation? Reach out to our team
                            of experts for tailored automation and digital solutions.
                        </p>
                    </div>

                    <div className="contact-form_details">
                        <h3 className="contact-form_details-title">Contact Information</h3>
                        <div className="contact-form_detail-item">
                            <div className="contact-form_detail-icon">
                                <Mail size={16} color="var(--color-red)" />
                            </div>
                            <div>
                                <span className="contact-form_detail-label">Email</span>
                                <a href="mailto:contactus@kalanjiyam.info" className="contact-form_detail-value">
                                    contactus@kalanjiyam.info
                                </a>
                            </div>
                        </div>
                        <div className="contact-form_detail-item">
                            <div className="contact-form_detail-icon">
                                <Clock size={16} color="var(--color-red)" />
                            </div>
                            <div>
                                <span className="contact-form_detail-label">Hours</span>
                                <span className="contact-form_detail-value">Mon-Fri 9AM–5PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form_urgent card">
                        <div className="contact-form_urgent-header">
                            <Zap size={16} color="var(--color-red)" />
                            <h4 className="contact-form_urgent-title">Urgent Consultation?</h4>
                        </div>
                        <p className="contact-form_urgent-text">
                            For immediate technical assistance or critical system support, our priority
                            response team is available for existing enterprise clients through the
                            dedicated support portal.
                        </p>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="card contact-form_card">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="contact-form_fields">

                            <div className="contact-form_row">
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input className="form-input" type="text" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input className="form-input" type="email" placeholder="john@example.com" required />
                                </div>
                            </div>

                            <div className="contact-form_row">
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <input className="form-input" type="tel" placeholder="+91 00000 00000" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Service Interested In</label>
                                    <CustomSelect
                                        options={serviceOptions}
                                        value={service}
                                        onChange={setService}
                                        placeholder="Select a service"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-input"
                                    rows={5}
                                    placeholder="Tell us about your project requirements..."
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn--primary btn--full">
                                Send Message
                            </button>

                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}
