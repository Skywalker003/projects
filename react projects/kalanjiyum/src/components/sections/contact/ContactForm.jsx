import './ContactForm.css'
import { useState } from 'react'
import { Mail, Clock, Zap, CheckCircle } from 'lucide-react'
import logo from '../../../assets/images/logo.png'


const today = new Date().toISOString().split('T')[0]

export default function ContactForm() {
    const [orgName, setOrgName]       = useState('')
    const [name, setName]             = useState('')
    const [email, setEmail]           = useState('')
    const [phone, setPhone]           = useState('')
    const [address, setAddress]       = useState('')
    const [message, setMessage]       = useState('')

    const [phonePrefix, setPhonePrefix] = useState('+91')

    const [errors, setErrors]         = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted]   = useState(false)

    const validate = () => {
        const e = {}
        if (!name.trim())                          e.name = 'Name is required.'
        if (!email.trim())                         e.email = 'Email is required.'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email address.'
        if (phone || phonePrefix !== '+91') {
            if (!/^\+\d{1,4}$/.test(phonePrefix))           e.phonePrefix = 'Use format: +91'
            if (phone && !/^\+?[\d\s-]{7,15}$/.test(phone))  e.phone = 'Enter a valid phone number.'
        }
        if (!message.trim())                       e.message = 'Please describe your enquiry.'
        return e
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validate()
        setErrors(errs)
        if (Object.keys(errs).length > 0) return

        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 1500)
    }

    if (submitted) {
        return (
            <section className="section">
                <div className="container">
                    <div className="contact-success">
                        <CheckCircle size={56} className="contact-success_icon" />
                        <h2 className="contact-success_title">Message Sent!</h2>
                        <p className="contact-success_text">
                            Thank you for reaching out. Our team will get back to you within <strong>48 hours</strong>.
                        </p>
                        <button
                            className="btn btn--primary"
                            onClick={() => { setSubmitted(false); setName(''); setEmail(''); setPhone(''); setPhonePrefix('+91'); setOrgName(''); setAddress(''); setMessage(''); setErrors({}) }}
                        >
                            Send Another Enquiry
                        </button>
                    </div>
                </div>
            </section>
        )
    }

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
                                <span className="contact-form_detail-value">Mon–Sat 9:30AM–5:30PM</span>
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
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="contact-form_fields">

                            <div className="form-group contact-form_date-group">
                                <label className="form-label">Date</label>
                                <input className="form-input contact-form_date" type="date" value={today} readOnly />
                            </div>

                            <div className="contact-form_row">
                                <div className="form-group">
                                    <label className="form-label">Name <span className="contact-req">*</span></label>
                                    <input
                                        className={`form-input${errors.name ? ' form-input--error' : ''}`}
                                        type="text"
                                        placeholder="Your Full Name"
                                        value={name}
                                        onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: '' })) }}
                                    />
                                    {errors.name && <span className="form-error">{errors.name}</span>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Organisation Name <span className="contact-optional">(Optional)</span></label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        placeholder="Company / Organisation"
                                        value={orgName}
                                        onChange={e => setOrgName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="contact-form_email-phone">
                                <div className="form-group contact-form_email-group">
                                    <label className="form-label">Email ID <span className="contact-req">*</span></label>
                                    <input
                                        className={`form-input${errors.email ? ' form-input--error' : ''}`}
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: '' })) }}
                                    />
                                    {errors.email && <span className="form-error">{errors.email}</span>}
                                </div>
                                <div className="form-group contact-form_phone-group">
                                    <label className="form-label">Phone Number <span className="contact-optional">(Optional)</span></label>
                                    <div className={`contact-phone${errors.phonePrefix || errors.phone ? ' contact-phone--error' : ''}`}>
                                        <input
                                            className={`contact-phone_prefix${errors.phonePrefix ? ' contact-phone_prefix--error' : ''}`}
                                            type="text"
                                            value={phonePrefix}
                                            onChange={e => {
                                                const val = e.target.value.replace(/[^\d+]/g, '').slice(0, 5)
                                                setPhonePrefix(val)
                                                setErrors(p => ({ ...p, phonePrefix: '' }))
                                            }}
                                            onBlur={() => {
                                                if (!/^\+\d{1,4}$/.test(phonePrefix))
                                                    setErrors(p => ({ ...p, phonePrefix: 'Use format: +91' }))
                                            }}
                                            maxLength={5}
                                            aria-label="Country code"
                                        />
                                        <span className="contact-phone_divider" />
                                        <input
                                            className="contact-phone_number"
                                            type="tel"
                                            placeholder="Phone number"
                                            value={phone}
                                            onChange={e => { setPhone(e.target.value.replace(/[^\d\s-]/g, '')); setErrors(p => ({ ...p, phone: '' })) }}
                                            inputMode="numeric"
                                        />
                                    </div>
                                    {(errors.phonePrefix || errors.phone) && (
                                        <span className="form-error">{errors.phonePrefix || errors.phone}</span>
                                    )}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Address <span className="contact-optional">(Optional)</span></label>
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder="Your address"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Enquiry Description <span className="contact-req">*</span></label>
                                <textarea
                                    className={`form-input${errors.message ? ' form-input--error' : ''}`}
                                    rows={5}
                                    placeholder="Describe your enquiry or project requirements..."
                                    value={message}
                                    onChange={e => { setMessage(e.target.value); setErrors(p => ({ ...p, message: '' })) }}
                                />
                                {errors.message && <span className="form-error">{errors.message}</span>}
                            </div>

                            <button type="submit" className="btn btn--primary btn--full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <><img src={logo} alt="" className="contact-spinner" />Sending…</>
                                ) : 'Send Enquiry'}
                            </button>

                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}
