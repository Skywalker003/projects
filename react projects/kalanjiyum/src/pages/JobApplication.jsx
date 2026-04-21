import './JobApplication.css'
import { useState, useRef, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { User, Briefcase, FileCheck, UploadCloud, FileText, Image, X, AlertCircle, CheckCircle } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import logo from '../assets/images/logo.png'

const STORAGE_KEY = 'job_application_draft'
const MB = 1024 * 1024

const sectionNames = ['Personal Information', 'Professional Details', 'Declaration']

export default function JobApplication() {
    const [searchParams] = useSearchParams()
    const position = searchParams.get('position') || ''

    const saved = useMemo(() => {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {} } catch { return {} }
    }, [])

    const [firstName, setFirstName]         = useState(saved.firstName     ?? '')
    const [lastName, setLastName]           = useState(saved.lastName      ?? '')
    const [email, setEmail]                 = useState(saved.email         ?? '')
    const [phonePrefix, setPhonePrefix]     = useState(saved.phonePrefix   ?? '+91')
    const [phone, setPhone]                 = useState(saved.phone         ?? '')
    const [address, setAddress]             = useState(saved.address       ?? '')
    const [photoFile, setPhotoFile]         = useState(null)
    const [resumeFile, setResumeFile]       = useState(null)
    const [declared, setDeclared]           = useState(saved.declared      ?? false)

    const [fieldErrors, setFieldErrors]           = useState({})
    const [phonePrefixError, setPhonePrefixError] = useState('')
    const [photoError, setPhotoError]             = useState('')
    const [resumeError, setResumeError]           = useState('')

    const [activeSection, setActiveSection]   = useState(0)
    const [sectionErrors, setSectionErrors]   = useState(Array(3).fill(false))
    const [submitted, setSubmitted]           = useState(false)
    const [isSubmitting, setIsSubmitting]     = useState(false)
    const [submitSuccess, setSubmitSuccess]   = useState(false)

    const sectionRefs = useRef([])
    const photoRef    = useRef()
    const resumeRef   = useRef()

    useEffect(() => {
        let ticking = false
        const onScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                let active = 0
                sectionRefs.current.forEach((ref, i) => {
                    if (ref && ref.getBoundingClientRect().top <= 160) active = i
                })
                setActiveSection(active)
                ticking = false
            })
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            firstName, lastName, email, phonePrefix, phone, address, declared
        }))
    }, [firstName, lastName, email, phonePrefix, phone, address, declared])

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = Array(3).fill(false)

        const fe = {}
        const prefixValid = /^\+\d{1,4}$/.test(phonePrefix)
        if (!prefixValid) setPhonePrefixError('Use format: +91')
        if (!firstName.trim()) fe.firstName = 'First name is required'
        if (!lastName.trim())  fe.lastName  = 'Last name is required'
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fe.email = 'A valid email is required'
        if (!phone.trim())     fe.phone     = 'Phone number is required'
        errors[0] = !!(fe.firstName || fe.lastName || fe.email || fe.phone || !prefixValid)
        if (!resumeFile) errors[1] = true
        if (!declared)   errors[2] = true

        setFieldErrors(fe)
        setSectionErrors(errors)
        setSubmitted(true)

        const firstError = errors.findIndex(Boolean)
        if (firstError !== -1) {
            sectionRefs.current[firstError]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            return
        }

        setIsSubmitting(true)
        setTimeout(() => {
            localStorage.removeItem(STORAGE_KEY)
            setIsSubmitting(false)
            setSubmitSuccess(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 1500)
    }

    const progress = ((activeSection + 1) / 3) * 100

    const hero = (
        <PageHero
            title="Job Application Form"
            subtext="Join our team of industrial specialists and technical experts. Please fill out the detailed form below to apply for a position at Kalanjiyam Technical Solutions."
            page="Apply"
            parent="Careers"
            parentPath="/careers"
        />
    )

    if (submitSuccess) {
        return (
            <>
                {hero}
                <section className="section">
                    <div className="container">
                        <div className="iapp-success">
                            <div className="iapp-success_icon">
                                <CheckCircle size={56} />
                            </div>
                            <h2 className="iapp-success_title">Application Submitted!</h2>
                            <p className="iapp-success_text">
                                Thank you for applying{position ? <> for <strong>{position}</strong></> : ''}. Our team will review your application and get back to you soon.
                            </p>
                            <Link to="/careers" className="btn btn--primary">
                                Back to Careers
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            {hero}
            <section className="section">
                <div className="container">
                    <form className="japp-form" onSubmit={handleSubmit} noValidate>

                        {/* Sticky progress bar */}
                        <div className="iapp-progress">
                            <div className="iapp-progress_bar">
                                <div className="iapp-progress_fill" style={{ width: `${progress}%` }} />
                            </div>
                            <div className="iapp-progress_label">
                                <span className="iapp-progress_step">{activeSection + 1} / 3</span>
                                <span className="iapp-progress_name">{sectionNames[activeSection]}</span>
                            </div>
                        </div>

                        {/* 1. Personal Information */}
                        <div
                            className={`japp-section card${submitted && sectionErrors[0] ? ' iapp-section--error' : ''}`}
                            ref={el => sectionRefs.current[0] = el}
                        >
                            <h3 className="japp-section_title">
                                <User size={18} className="iapp-section_icon" />
                                Personal Information
                            </h3>
                            {submitted && sectionErrors[0] && (
                                <div className="iapp-error-banner" role="alert">
                                    <AlertCircle size={14} /> Please fill in all required fields.
                                </div>
                            )}

                            <div className="japp-row">
                                <div className="form-group">
                                    <label htmlFor="japp-firstName" className="form-label">First Name <span className="iapp-req">*</span></label>
                                    <input
                                        id="japp-firstName"
                                        className={`form-input${fieldErrors.firstName ? ' form-input--error' : ''}`}
                                        type="text"
                                        placeholder="e.g. John"
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                    />
                                    {fieldErrors.firstName && <span className="form-error">{fieldErrors.firstName}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="japp-lastName" className="form-label">Last Name <span className="iapp-req">*</span></label>
                                    <input
                                        id="japp-lastName"
                                        className={`form-input${fieldErrors.lastName ? ' form-input--error' : ''}`}
                                        type="text"
                                        placeholder="e.g. Doe"
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                    {fieldErrors.lastName && <span className="form-error">{fieldErrors.lastName}</span>}
                                </div>
                            </div>

                            <div className="japp-row">
                                <div className="form-group">
                                    <label htmlFor="japp-email" className="form-label">Email Address <span className="iapp-req">*</span></label>
                                    <input
                                        id="japp-email"
                                        className={`form-input${fieldErrors.email ? ' form-input--error' : ''}`}
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    {fieldErrors.email && <span className="form-error">{fieldErrors.email}</span>}
                                </div>
                                <div className="form-group">
                                    <fieldset className="iapp-phone-fieldset">
                                    <legend className="form-label">Phone Number <span className="iapp-req">*</span></legend>
                                    <div className={`iapp-phone${phonePrefixError ? ' iapp-phone--error' : ''}`}>
                                        <input
                                            className={`iapp-phone_prefix${phonePrefixError ? ' iapp-phone_prefix--error' : ''}`}
                                            type="text"
                                            value={phonePrefix}
                                            onChange={e => {
                                                const val = e.target.value.replace(/[^\d+]/g, '').slice(0, 5)
                                                setPhonePrefix(val)
                                                setPhonePrefixError('')
                                            }}
                                            onBlur={() => {
                                                if (!/^\+\d{1,4}$/.test(phonePrefix))
                                                    setPhonePrefixError('Use format: +91')
                                            }}
                                            maxLength={5}
                                            aria-label="Country code"
                                        />
                                        <span className="iapp-phone_divider" />
                                        <input
                                            id="japp-phone"
                                            className="iapp-phone_number"
                                            type="tel"
                                            placeholder="Phone number"
                                            value={phone}
                                            maxLength={10}
                                            onChange={e => setPhone(e.target.value.replace(/[^\d\s-]/g, ''))}
                                            aria-label="Phone number"
                                        />
                                    </div>
                                    {phonePrefixError && <span className="form-error">{phonePrefixError}</span>}
                                    {fieldErrors.phone && !phonePrefixError && (
                                        <span className="form-error">{fieldErrors.phone}</span>
                                    )}
                                    </fieldset>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="japp-address" className="form-label">
                                    Address <span className="iapp-optional">(Optional)</span>
                                </label>
                                <textarea
                                    id="japp-address"
                                    className="form-input"
                                    rows={3}
                                    placeholder="Door no, Street, Area, City"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Photo <span className="iapp-optional">(Optional)</span>
                                </label>
                                <label role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); photoRef.current?.click() } }} className={`iapp-upload${photoFile ? ' iapp-upload--done' : photoError ? ' iapp-upload--error' : ''}`}>
                                    {photoFile ? (
                                        <>
                                            <Image size={28} className="iapp-upload_icon iapp-upload_icon--done" />
                                            <span className="iapp-upload_filename">{photoFile.name}</span>
                                            <button type="button" className="iapp-upload_clear"
                                                onClick={e => { e.preventDefault(); setPhotoFile(null); if (photoRef.current) photoRef.current.value = '' }}>
                                                <X size={14} /> Remove
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <UploadCloud size={28} className="iapp-upload_icon" />
                                            <span className="iapp-upload_text">Click to upload your photo</span>
                                            <span className="iapp-upload_hint">JPG, PNG up to 5MB</span>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        accept=".jpg,.jpeg,.png"
                                        hidden
                                        ref={photoRef}
                                        onChange={e => {
                                            const f = e.target.files[0]
                                            if (!f) return
                                            if (f.size > 5 * MB) { setPhotoError('File too large — max 5MB'); e.target.value = ''; return }
                                            setPhotoError('')
                                            setPhotoFile(f)
                                        }}
                                    />
                                </label>
                                {photoError && <span className="iapp-upload_error">{photoError}</span>}
                            </div>
                        </div>

                        {/* 2. Professional Details */}
                        <div
                            className={`japp-section card${submitted && sectionErrors[1] ? ' iapp-section--error' : ''}`}
                            ref={el => sectionRefs.current[1] = el}
                        >
                            <h3 className="japp-section_title">
                                <Briefcase size={18} className="iapp-section_icon" />
                                Professional Details
                            </h3>
                            {submitted && sectionErrors[1] && (
                                <div className="iapp-error-banner" role="alert">
                                    <AlertCircle size={14} /> Resume / CV is required.
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="japp-position" className="form-label">Position Applied For</label>
                                <input
                                    id="japp-position"
                                    className="form-input japp-input--locked"
                                    type="text"
                                    value={position || 'Not specified'}
                                    readOnly
                                />
                                {!position && (
                                    <span className="iapp-pincode-hint">No position selected — <Link to="/careers">browse open roles</Link> and apply from there.</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Resume / CV <span className="iapp-req">*</span></label>
                                <label role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); resumeRef.current?.click() } }} className={`iapp-upload${resumeFile ? ' iapp-upload--done' : resumeError || (submitted && sectionErrors[1]) ? ' iapp-upload--error' : ''}`}>
                                    {resumeFile ? (
                                        <>
                                            <FileText size={28} className="iapp-upload_icon iapp-upload_icon--done" />
                                            <span className="iapp-upload_filename">{resumeFile.name}</span>
                                            <button type="button" className="iapp-upload_clear"
                                                onClick={e => { e.preventDefault(); setResumeFile(null); if (resumeRef.current) resumeRef.current.value = '' }}>
                                                <X size={14} /> Remove
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <UploadCloud size={28} className="iapp-upload_icon" />
                                            <span className="iapp-upload_text">Click to upload or drag and drop</span>
                                            <span className="iapp-upload_hint">PDF, DOCX up to 10MB</span>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        accept=".pdf,.docx"
                                        hidden
                                        ref={resumeRef}
                                        onChange={e => {
                                            const f = e.target.files[0]
                                            if (!f) return
                                            if (f.size > 10 * MB) { setResumeError('File too large — max 10MB'); e.target.value = ''; return }
                                            setResumeError('')
                                            setResumeFile(f)
                                        }}
                                    />
                                </label>
                                {resumeError && <span className="iapp-upload_error">{resumeError}</span>}
                            </div>
                        </div>

                        {/* 3. Declaration */}
                        <div
                            className={`japp-section card${submitted && sectionErrors[2] ? ' iapp-section--error' : ''}`}
                            ref={el => sectionRefs.current[2] = el}
                        >
                            <h3 className="japp-section_title">
                                <FileCheck size={18} className="iapp-section_icon" />
                                Declaration
                            </h3>
                            {submitted && sectionErrors[2] && (
                                <div className="iapp-error-banner" role="alert">
                                    <AlertCircle size={14} /> Please accept the declaration to submit.
                                </div>
                            )}
                            <label className="iapp-declaration">
                                <input
                                    type="checkbox"
                                    checked={declared}
                                    onChange={e => setDeclared(e.target.checked)}
                                />
                                <span>
                                    I confirm that the above information is accurate and complete to the best of my knowledge.
                                    I understand that any false information may result in disqualification.
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="btn btn--primary japp-submit"
                            disabled={isSubmitting}
                            aria-busy={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <img src={logo} alt="" className="iapp-submit_spinner" />
                                    Submitting…
                                </>
                            ) : (
                                'Submit Application'
                            )}
                        </button>

                    </form>
                </div>
            </section>
        </>
    )
}
