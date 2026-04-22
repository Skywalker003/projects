import './InternshipApplication.css'
import { useState, useRef, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { User, BookOpen, MapPin, Layers, Calendar, Wrench, UploadCloud, FileCheck, FileText, X, AlertCircle, CheckCircle } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import CustomSelect from '../components/ui/CustomSelect'
import TagInput from '../components/ui/TagInput'
import { domainRoles, tnDistricts, indianStates, sectionNames } from '../data/internshipApplication'
import logo from '../assets/images/logo.png'

const toOptions = (arr) => arr.map(v => ({ value: v, label: v }))

const STORAGE_KEY = 'kalanjiyum_intern_app'

export default function InternshipApplication() {
    const [searchParams] = useSearchParams()

    const saved = useMemo(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY)
            return raw ? JSON.parse(raw) : {}
        } catch { return {} }
    }, [])

    const [phonePrefix, setPhonePrefix]     = useState(saved.phonePrefix     ?? '+91')
    const [phoneNumber, setPhoneNumber]     = useState(saved.phoneNumber     ?? '')
    const [gender, setGender]               = useState(saved.gender          ?? '')
    const [qualification, setQualification] = useState(saved.qualification   ?? '')
    const [currentStatus, setCurrentStatus] = useState(saved.currentStatus   ?? '')
    const [district, setDistrict]           = useState(saved.district        ?? '')
    const [state, setState]                 = useState(saved.state           ?? 'Tamil Nadu')
    const [domain, setDomain]               = useState(searchParams.get('domain') || saved.domain || '')
    const [role, setRole]                   = useState(saved.role            ?? '')
    const [mode, setMode]                   = useState(saved.mode            ?? '')
    const [duration, setDuration]           = useState(saved.duration        ?? '')
    const [startDate, setStartDate]         = useState(saved.startDate       ?? '')
    const [endDate, setEndDate]             = useState(saved.endDate         ?? '')
    const [pincode, setPincode]             = useState(saved.pincode         ?? '')
    const [pincodeStatus, setPincodeStatus] = useState(null)
    const [skills, setSkills]               = useState(saved.skills          ?? [])
    const [tools, setTools]                 = useState(saved.tools           ?? [])
    const [resumeFile, setResumeFile]       = useState(null)
    const [bonafideFile, setBonafideFile]   = useState(null)
    const [idFile, setIdFile]               = useState(null)
    const [declared, setDeclared]           = useState(saved.declared        ?? false)

    const [fullName, setFullName]           = useState(saved.fullName        ?? '')
    const [dob, setDob]                     = useState(saved.dob             ?? '')
    const [email, setEmail]                 = useState(saved.email           ?? '')
    const [collegeName, setCollegeName]     = useState(saved.collegeName     ?? '')
    const [collegeLocation, setCollegeLocation] = useState(saved.collegeLocation ?? '')
    const [registerNo, setRegisterNo]       = useState(saved.registerNo      ?? '')
    const [department, setDepartment]       = useState(saved.department      ?? '')
    const [passedYear, setPassedYear]       = useState(saved.passedYear      ?? '')
    const [fullAddress, setFullAddress]     = useState(saved.fullAddress     ?? '')
    const [experience, setExperience]       = useState(saved.experience      ?? '')

    const [phonePrefixError, setPhonePrefixError] = useState('')
    const [resumeError, setResumeError]           = useState('')
    const [bonafideError, setBonafideError]       = useState('')
    const [idError, setIdError]                   = useState('')
    const [fieldErrors, setFieldErrors]           = useState({})

    const [activeSection, setActiveSection] = useState(0)
    const [sectionErrors, setSectionErrors] = useState(Array(8).fill(false))
    const [submitted, setSubmitted]         = useState(false)
    const [isSubmitting, setIsSubmitting]   = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const sectionRefs = useRef([])
    const pincodeAbortRef = useRef(null)

    const MB = 1024 * 1024

    // Track which section is currently in view
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

    // Persist form data to localStorage on every change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            phonePrefix, phoneNumber, gender, qualification, currentStatus,
            district, state, domain, role, mode, duration,
            startDate, endDate, pincode, skills, tools, declared,
            fullName, dob, email, collegeName, collegeLocation, registerNo, department,
            passedYear, fullAddress, experience,
        }))
    }, [phonePrefix, phoneNumber, gender, qualification, currentStatus,
        district, state, domain, role, mode, duration,
        startDate, endDate, pincode, skills, tools, declared,
        fullName, dob, email, collegeName, collegeLocation, registerNo, department,
        passedYear, fullAddress, experience])

    const roleOptions = domain ? toOptions(domainRoles[domain] || []) : []

    const handleStateChange = (val) => { setState(val); setDistrict(''); setPincodeStatus(null) }
    const handleDomainChange = (val) => { setDomain(val); setRole('') }

    const today = new Date()
    const todayStr = today.toISOString().split('T')[0]
    const dobMax = new Date(Date.UTC(today.getFullYear() - 18, today.getMonth(), today.getDate())).toISOString().split('T')[0]
    const dobMin = new Date(Date.UTC(today.getFullYear() - 60, today.getMonth(), today.getDate())).toISOString().split('T')[0]

    const durationMonths = { '1 Month': 1, '2 Months': 2, '3 Months': 3, '6 Months': 6 }
    const calcEndDate = (start, dur) => {
        if (!start || !dur) return ''
        const d = new Date(start)
        d.setMonth(d.getMonth() + (durationMonths[dur] || 0))
        return d.toISOString().split('T')[0]
    }
    const handleStartDateChange = (e) => {
        const val = e.target.value
        setStartDate(val)
        setEndDate(calcEndDate(val, duration))
    }
    const handleDurationChange = (val) => {
        setDuration(val)
        setEndDate(calcEndDate(startDate, val))
    }

    const handlePincodeChange = async (e) => {
        const val = e.target.value.replace(/\D/g, '').slice(0, 6)
        setPincode(val)
        setPincodeStatus(null)
        if (pincodeAbortRef.current) pincodeAbortRef.current.abort()
        if (val.length === 6) {
            const controller = new AbortController()
            pincodeAbortRef.current = controller
            setPincodeStatus('loading')
            try {
                const res = await fetch(`https://api.postalpincode.in/pincode/${val}`, { signal: controller.signal })
                const data = await res.json()
                if (data[0].Status === 'Success' && data[0].PostOffice?.length > 0) {
                    const po = data[0].PostOffice[0]
                    const matched = indianStates.find(s => s.toLowerCase() === po.State.toLowerCase())
                    if (matched) {
                        setState(matched)
                        const apiDistrict = po.District
                        const normalizedDistrict = tnDistricts.find(d =>
                            d.toLowerCase() === apiDistrict.toLowerCase() ||
                            d.toLowerCase() === apiDistrict.replace(/^the\s+/i, '').toLowerCase()
                        )
                        setDistrict(normalizedDistrict || apiDistrict)
                        setPincodeStatus('ok')
                    }
                    else setPincodeStatus('error')
                } else setPincodeStatus('error')
            } catch (err) {
                if (err.name !== 'AbortError') setPincodeStatus('error')
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = Array(8).fill(false)
        const fe = {}

        // Section 0 — Personal Details
        const prefixValid = /^\+\d{1,4}$/.test(phonePrefix)
        if (!prefixValid) setPhonePrefixError('Use format: +91')
        if (!fullName.trim())    fe.fullName    = 'Full name is required'
        if (!gender)             fe.gender      = 'Please select your gender'
        if (!dob)                fe.dob         = 'Date of birth is required'
        if (!phoneNumber.trim()) fe.phoneNumber = 'Phone number is required'
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fe.email = 'A valid email is required'
        errors[0] = !!(fe.fullName || fe.gender || fe.dob || fe.phoneNumber || !prefixValid || fe.email)

        // Section 1 — Academic Details
        if (!collegeName.trim())     fe.collegeName     = 'College name is required'
        if (!collegeLocation.trim()) fe.collegeLocation = 'College location is required'
        if (!registerNo.trim())      fe.registerNo      = 'Register number is required'
        if (!qualification)          fe.qualification   = 'Please select your qualification'
        if (!department.trim())      fe.department      = 'Department is required'
        if (!currentStatus)          fe.currentStatus   = 'Please select your current status'
        if (!passedYear)             fe.passedYear      = 'Passed year is required'
        errors[1] = !!(fe.collegeName || fe.collegeLocation || fe.registerNo || fe.qualification || fe.department || fe.currentStatus || fe.passedYear)

        // Section 2 — Address Details
        if (!fullAddress.trim())  fe.fullAddress = 'Full address is required'
        if (!district)            fe.district    = 'District is required'
        if (!pincode)             fe.pincode     = 'Pincode is required'
        errors[2] = !!(fe.fullAddress || fe.district || fe.pincode)

        // Section 3 — Internship Preferences
        if (!domain)   fe.domain   = 'Please select a domain'
        if (!role)     fe.role     = 'Please select a role'
        if (!mode)     fe.mode     = 'Please select internship mode'
        if (!duration) fe.duration = 'Please select duration'
        errors[3] = !!(fe.domain || fe.role || fe.mode || fe.duration)

        // Section 4 — Internship Period
        if (!startDate) fe.startDate = 'Start date is required'
        if (!endDate)   fe.endDate   = 'End date is required'
        else if (startDate && new Date(endDate) <= new Date(startDate)) fe.endDate = 'End date must be after start date'
        errors[4] = !!(fe.startDate || fe.endDate)

        // Section 5 — Skills (fully optional, no errors)

        // Section 6 — Uploads
        if (!resumeFile)   fe.resumeFile   = 'Resume is required'
        if (!bonafideFile && currentStatus === 'Pursuing') fe.bonafideFile = 'Bonafide certificate is required for pursuing students'
        errors[6] = !!(fe.resumeFile || fe.bonafideFile)

        // Section 7 — Declaration
        errors[7] = !declared

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

    const progress = ((activeSection + 1) / 8) * 100

    return (
        <>
            <PageHero
                className="iapp-hero"
                title="Internship Application"
                subtext="Fill out the form below to apply for an internship at Kalanjiyam Technical Solutions. We'll get back to you within 48 hours."
                page="Apply"
                parent="Internship"
                parentPath="/internship"
            />

            <section className="section section--light">
                <div className="container">
                {submitSuccess ? (
                    <div className="iapp-success">
                        <div className="iapp-success_icon">
                            <CheckCircle size={56} aria-hidden="true" />
                        </div>
                        <h2 className="iapp-success_title">Application Submitted!</h2>
                        <p className="iapp-success_text">
                            Thank you for applying. Our team will review your application and get back to you within <strong>48 hours</strong>.
                        </p>
                        <Link to="/internship" className="btn btn--primary">
                            Back to Internship
                        </Link>
                    </div>
                ) : (
                    <form className="iapp-form" onSubmit={handleSubmit} noValidate>

                        {/* Sticky progress bar */}
                        <div className="iapp-progress">
                            <div className="iapp-progress_bar">
                                <div className="iapp-progress_fill" style={{ width: `${progress}%` }} />
                            </div>
                            <div className="iapp-progress_label">
                                <span className="iapp-progress_step">{activeSection + 1} / 8</span>
                                <span className="iapp-progress_name">{sectionNames[activeSection]}</span>
                            </div>
                        </div>

                        {/* 1. Personal Details */}
                        <div
                            className={`iapp-section card${submitted && sectionErrors[0] ? ' iapp-section--error' : ''}`}
                            ref={el => sectionRefs.current[0] = el}
                        >
                            <h3 className="iapp-section_title">
                                <User size={18} className="iapp-section_icon" aria-hidden="true" />
                                Personal Details
                            </h3>
                            {submitted && sectionErrors[0] && (
                                <div className="iapp-error-banner" role="alert">
                                    <AlertCircle size={14} aria-hidden="true" /> Please fill in all required fields.
                                </div>
                            )}
                            <div className="iapp-row">
                                <div className="form-group">
                                    <label htmlFor="iapp-fullName" className="form-label">Full Name <span className="iapp-req">*</span></label>
                                    <input id="iapp-fullName" className={`form-input${fieldErrors.fullName ? ' form-input--error' : ''}`} type="text" placeholder="Your full name" value={fullName} onChange={e => setFullName(e.target.value)} />
                                    {fieldErrors.fullName && <span className="form-error">{fieldErrors.fullName}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="iapp-gender" className="form-label">Gender <span className="iapp-req">*</span></label>
                                    <CustomSelect
                                        id="iapp-gender"
                                        options={toOptions(['Male', 'Female', 'Others'])}
                                        value={gender}
                                        onChange={setGender}
                                        placeholder="Select gender"
                                    />
                                    {fieldErrors.gender && <span className="form-error">{fieldErrors.gender}</span>}
                                </div>
                            </div>
                            <div className="iapp-row">
                                <div className="form-group">
                                    <label htmlFor="iapp-dob" className="form-label">Date of Birth <span className="iapp-req">*</span></label>
                                    <input id="iapp-dob" className={`form-input${fieldErrors.dob ? ' form-input--error' : ''}`} type="date" min={dobMin} max={dobMax} value={dob} onChange={e => setDob(e.target.value)} />
                                    {fieldErrors.dob && <span className="form-error">{fieldErrors.dob}</span>}
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
                                            id="iapp-phoneNumber"
                                            className="iapp-phone_number"
                                            type="tel"
                                            placeholder="Phone number"
                                            value={phoneNumber}
                                            aria-label="Phone number"
                                            maxLength={10}
                                            onChange={e => setPhoneNumber(e.target.value.replace(/[^\d\s-]/g, ''))}
                                        />
                                    </div>
                                    {phonePrefixError && <span className="form-error">{phonePrefixError}</span>}
                                    {fieldErrors.phoneNumber && !phonePrefixError && <span className="form-error">{fieldErrors.phoneNumber}</span>}
                                    </fieldset>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="iapp-email" className="form-label">Email ID <span className="iapp-req">*</span></label>
                                <input id="iapp-email" className={`form-input${fieldErrors.email ? ' form-input--error' : ''}`} type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                                {fieldErrors.email && <span className="form-error">{fieldErrors.email}</span>}
                            </div>
                        </div>

                        {/* 2. Academic Details */}
                        <div
                            className={`iapp-section card${submitted && sectionErrors[1] ? ' iapp-section--error' : ''}`}
                            ref={el => sectionRefs.current[1] = el}
                        >
                            <h3 className="iapp-section_title">
                                <BookOpen size={18} className="iapp-section_icon" aria-hidden="true" />
                                Academic Details
                            </h3>
                            {submitted && sectionErrors[1] && (
                                <div className="iapp-error-banner" role="alert">
                                    <AlertCircle size={14} aria-hidden="true" /> Please fill in all required fields.
                                </div>
                            )}
                            <div className="form-group">
                                <label htmlFor="iapp-collegeName" className="form-label">College Name <span className="iapp-req">*</span></label>
                                <input id="iapp-collegeName" className={`form-input${fieldErrors.collegeName ? ' form-input--error' : ''}`} type="text" placeholder="Name of your college" value={collegeName} onChange={e => setCollegeName(e.target.value)} />
                                {fieldErrors.collegeName && <span className="form-error">{fieldErrors.collegeName}</span>}
                            </div>
                            <div className="iapp-row">
                                <div className="form-group">
                                    <label htmlFor="iapp-collegeLocation" className="form-label">College Location <span className="iapp-req">*</span></label>
                                    <input id="iapp-collegeLocation" className={`form-input${fieldErrors.collegeLocation ? ' form-input--error' : ''}`} type="text" placeholder="City / District" value={collegeLocation} onChange={e => setCollegeLocation(e.target.value)} />
                                    {fieldErrors.collegeLocation && <span className="form-error">{fieldErrors.collegeLocation}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="iapp-registerNo" className="form-label">Register Number <span className="iapp-req">*</span></label>
                                    <input id="iapp-registerNo" className={`form-input${fieldErrors.registerNo ? ' form-input--error' : ''}`} type="text" placeholder="e.g. 123456789" value={registerNo} onChange={e => setRegisterNo(e.target.value)} />
                                    {fieldErrors.registerNo && <span className="form-error">{fieldErrors.registerNo}</span>}
                                </div>
                            </div>
                            <div className="iapp-row">
                                <div className="form-group">
                                    <label htmlFor="iapp-qualification" className="form-label">Qualification <span className="iapp-req">*</span></label>
                                    <CustomSelect
                                        id="iapp-qualification"
                                        options={toOptions(['Diploma', 'UG', 'PG', 'Others'])}
                                        value={qualification}
                                        onChange={setQualification}
                                        placeholder="Select qualification"
                                    />
                                    {fieldErrors.qualification && <span className="form-error">{fieldErrors.qualification}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="iapp-department" className="form-label">Department / Branch <span className="iapp-req">*</span></label>
                                    <input id="iapp-department" className={`form-input${fieldErrors.department ? ' form-input--error' : ''}`} type="text" placeholder="e.g. Computer Science" value={department} onChange={e => setDepartment(e.target.value)} />
                                    {fieldErrors.department && <span className="form-error">{fieldErrors.department}</span>}
                                </div>
                            </div>
                            <div className="iapp-row">
                                <div className="form-group">
                                    <label htmlFor="iapp-currentStatus" className="form-label">Current Status <span className="iapp-req">*</span></label>
                                    <CustomSelect
                                        id="iapp-currentStatus"
                                        options={toOptions(['Pursuing', 'Completed'])}
                                        value={currentStatus}
                                        onChange={setCurrentStatus}
                                        placeholder="Select status"
                                    />
                                    {fieldErrors.currentStatus && <span className="form-error">{fieldErrors.currentStatus}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="iapp-passedYear" className="form-label">Passed Out Year <span className="iapp-req">*</span></label>
                                    <input id="iapp-passedYear" className={`form-input${fieldErrors.passedYear ? ' form-input--error' : ''}`} type="number" placeholder="e.g. 2025" min="2000" max="2030" step="1" value={passedYear} onChange={e => setPassedYear(e.target.value)} />
                                    {fieldErrors.passedYear && <span className="form-error">{fieldErrors.passedYear}</span>}
                                </div>
                            </div>
                        </div>

                        {/* 3. Address Details */}
                        <div
                            className={`iapp-section card${submitted && sectionErrors[2] ? ' iapp-section--error' : ''}`}
                            ref={el => sectionRefs.current[2] = el}
                        >
                            <h3 className="iapp-section_title">
                                <MapPin size={18} className="iapp-section_icon" aria-hidden="true" />
                                Residential Address Details
                            </h3>
                            {submitted && sectionErrors[2] && (
                                <div className="iapp-error-banner" role="alert">
                                    <AlertCircle size={14} aria-hidden="true" /> Please fill in all required fields.
                                </div>
                            )}
                            <div className="form-group">
                                <label htmlFor="iapp-fullAddress" className="form-label">Full Address <span className="iapp-req">*</span></label>
                                <textarea id="iapp-fullAddress" className={`form-input${fieldErrors.fullAddress ? ' form-input--error' : ''}`} rows={3} placeholder="Door no, Street, Area" value={fullAddress} onChange={e => setFullAddress(e.target.value)} />
                                {fieldErrors.fullAddress && <span className="form-error">{fieldErrors.fullAddress}</span>}
                            </div>
                            <div className="iapp-row iapp-row--3">
                                <div className="form-group">
                                    <label htmlFor="iapp-state" className="form-label">State <span className="iapp-req">*</span></label>
                                    <CustomSelect
                                        id="iapp-state"
                                        options={toOptions(indianStates)}
                                        value={state}
                                        onChange={handleStateChange}
                                        placeholder="Select state"
                                        searchable
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="iapp-district" className="form-label">District <span className="iapp-req">*</span></label>
                                    {state === 'Tamil Nadu' ? (
                                        <CustomSelect
                                            id="iapp-district"
                                            options={toOptions(tnDistricts)}
                                            value={district}
                                            onChange={setDistrict}
                                            placeholder="Select district"
                                            searchable
                                        />
                                    ) : (
                                        <input
                                            id="iapp-district"
                                            className={`form-input${fieldErrors.district ? ' form-input--error' : ''}`}
                                            type="text"
                                            value={district}
                                            onChange={e => setDistrict(e.target.value)}
                                            placeholder="Enter your district"
                                        />
                                    )}
                                    {fieldErrors.district && <span className="form-error">{fieldErrors.district}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="iapp-pincode" className="form-label">
                                        Pincode <span className="iapp-req">*</span>
                                        <span className="iapp-pincode-autofill-hint"> — auto-fills State &amp; District</span>
                                    </label>
                                    <div className="iapp-pincode-wrap">
                                        <input
                                            id="iapp-pincode"
                                            className={`form-input${pincodeStatus === 'ok' ? ' iapp-pincode--ok' : pincodeStatus === 'error' ? ' iapp-pincode--error' : ''}`}
                                            type="text"
                                            placeholder="6 digit pincode"
                                            value={pincode}
                                            onChange={handlePincodeChange}
                                            maxLength={6}
                                            inputMode="numeric"
                                        />
                                        {pincodeStatus === 'loading' && <span className="iapp-pincode-hint">Looking up...</span>}
                                        {pincodeStatus === 'ok' && <span className="iapp-pincode-hint iapp-pincode-hint--ok">✓ State &amp; District filled</span>}
                                        {pincodeStatus === 'error' && <span className="iapp-pincode-hint iapp-pincode-hint--error">Pincode not found — fill manually</span>}
                                        {fieldErrors.pincode && <span className="form-error">{fieldErrors.pincode}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Internship Preferences */}
                        <div
                            className={`iapp-section card${submitted && sectionErrors[3] ? ' iapp-section--error' : ''}`}
                            ref={el => sectionRefs.current[3] = el}
                        >
                            <h3 className="iapp-section_title">
                                <Layers size={18} className="iapp-section_icon" aria-hidden="true" />
                                Internship Preferences
                            </h3>
                            {submitted && sectionErrors[3] && (
                                <div className="iapp-error-banner" role="alert">
                                    <AlertCircle size={14} aria-hidden="true" /> Please fill in all required fields.
                                </div>
                            )}
                            <div className="iapp-row">
                                <div className="form-group">
                                    <label htmlFor="iapp-domain" className="form-label">Internship Domain <span className="iapp-req">*</span></label>
                                    <CustomSelect
                                        id="iapp-domain"
                                        options={toOptions(['Software Development', 'Industrial Automation', 'Administration'])}
                                        value={domain}
                                        onChange={handleDomainChange}
                                        placeholder="Select domain"
                                    />
                                    {fieldErrors.domain && <span className="form-error">{fieldErrors.domain}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="iapp-role" className="form-label">Available Internships <span className="iapp-req">*</span></label>
                                    <CustomSelect
                                        id="iapp-role"
                                        options={roleOptions}
                                        value={role}
                                        onChange={setRole}
                                        placeholder={domain ? 'Select role' : 'Select a domain first'}
                                        disabled={!domain}
                                    />
                                    {fieldErrors.role && <span className="form-error">{fieldErrors.role}</span>}
                                </div>
                            </div>
                            <div className="iapp-row">
                                <div className="form-group">
                                    <label htmlFor="iapp-mode" className="form-label">Internship Mode <span className="iapp-req">*</span></label>
                                    <CustomSelect
                                        id="iapp-mode"
                                        options={toOptions(['On-site', 'Remote', 'Hybrid'])}
                                        value={mode}
                                        onChange={setMode}
                                        placeholder="Select mode"
                                    />
                                    {fieldErrors.mode && <span className="form-error">{fieldErrors.mode}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="iapp-duration" className="form-label">Internship Duration <span className="iapp-req">*</span></label>
                                    <CustomSelect
                                        id="iapp-duration"
                                        options={toOptions(['1 Month', '2 Months', '3 Months', '6 Months'])}
                                        value={duration}
                                        onChange={handleDurationChange}
                                        placeholder="Select duration"
                                    />
                                    {fieldErrors.duration && <span className="form-error">{fieldErrors.duration}</span>}
                                </div>
                            </div>
                        </div>

                        {/* 5. Internship Period */}
                        <div
                            className={`iapp-section card${submitted && sectionErrors[4] ? ' iapp-section--error' : ''}`}
                            ref={el => sectionRefs.current[4] = el}
                        >
                            <h3 className="iapp-section_title">
                                <Calendar size={18} className="iapp-section_icon" aria-hidden="true" />
                                Internship Period
                            </h3>
                            {submitted && sectionErrors[4] && (
                                <div className="iapp-error-banner" role="alert">
                                    <AlertCircle size={14} aria-hidden="true" /> Please select a start and end date.
                                </div>
                            )}
                            <div className="iapp-row">
                                <div className="form-group">
                                    <label htmlFor="iapp-startDate" className="form-label">Start Date <span className="iapp-req">*</span></label>
                                    <input
                                        id="iapp-startDate"
                                        className={`form-input${fieldErrors.startDate ? ' form-input--error' : ''}`}
                                        type="date"
                                        value={startDate}
                                        min={todayStr}
                                        onChange={handleStartDateChange}
                                    />
                                    {fieldErrors.startDate
                                        ? <span className="form-error">{fieldErrors.startDate}</span>
                                        : <span className="iapp-pincode-hint">Must be today or a future date</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="iapp-endDate" className="form-label">
                                        End Date <span className="iapp-req">*</span>
                                        {endDate && duration && <span className="iapp-optional"> — auto-filled from duration</span>}
                                    </label>
                                    <input
                                        id="iapp-endDate"
                                        className={`form-input${fieldErrors.endDate ? ' form-input--error' : ''}`}
                                        type="date"
                                        value={endDate}
                                        min={startDate || undefined}
                                        onChange={e => setEndDate(e.target.value)}
                                    />
                                    {fieldErrors.endDate && <span className="form-error">{fieldErrors.endDate}</span>}
                                </div>
                            </div>
                        </div>

                        {/* 6. Skills & Experience */}
                        <div
                            className="iapp-section card"
                            ref={el => sectionRefs.current[5] = el}
                        >
                            <h3 className="iapp-section_title">
                                <Wrench size={18} className="iapp-section_icon" aria-hidden="true" />
                                Skills &amp; Experience
                            </h3>
                            <div className="iapp-row">
                                <div className="form-group">
                                    <label htmlFor="iapp-skills" className="form-label">Technical Skills <span className="iapp-optional">(Optional)</span></label>
                                    <TagInput
                                        id="iapp-skills"
                                        tags={skills}
                                        onChange={setSkills}
                                        placeholder="e.g. Python, React…"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="iapp-tools" className="form-label">Tools / Technologies Known <span className="iapp-optional">(Optional)</span></label>
                                    <TagInput
                                        id="iapp-tools"
                                        tags={tools}
                                        onChange={setTools}
                                        placeholder="e.g. VS Code, AutoCAD…"
                                    />
                                </div>
                            </div>
                            <p className="iapp-tag-hint">
                                Press <kbd className="tag-input_key">Enter</kbd> or <kbd className="tag-input_key">,</kbd> to add a tag &nbsp;·&nbsp; <kbd className="tag-input_key">Backspace</kbd> to remove the last one
                            </p>
                            <div className="form-group">
                                <label htmlFor="iapp-experience" className="form-label">Previous Internship / Project Experience <span className="iapp-optional">(Optional)</span></label>
                                <textarea id="iapp-experience" className="form-input" rows={4} placeholder="Briefly describe any prior internships or projects..." value={experience} onChange={e => setExperience(e.target.value)} />
                            </div>
                        </div>

                        {/* 7. Uploads */}
                        <div
                            className={`iapp-section card${submitted && sectionErrors[6] ? ' iapp-section--error' : ''}`}
                            ref={el => sectionRefs.current[6] = el}
                        >
                            <h3 className="iapp-section_title">
                                <UploadCloud size={18} className="iapp-section_icon" aria-hidden="true" />
                                Uploads
                            </h3>
                            {submitted && sectionErrors[6] && (
                                <div className="iapp-error-banner" role="alert">
                                    <AlertCircle size={14} aria-hidden="true" /> Please upload all required documents.
                                </div>
                            )}
                            <div className="iapp-row iapp-row--3">
                                <div className="form-group">
                                    <label className="form-label">Resume / CV <span className="iapp-req">*</span></label>
                                    <label role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.querySelector('input[type="file"]').click() } }} className={`iapp-upload ${resumeFile ? 'iapp-upload--done' : resumeError || fieldErrors.resumeFile ? 'iapp-upload--error' : ''}`}>
                                        {resumeFile ? (
                                            <>
                                                <FileText size={28} className="iapp-upload_icon iapp-upload_icon--done" aria-hidden="true" />
                                                <span className="iapp-upload_filename">{resumeFile.name}</span>
                                                <button type="button" className="iapp-upload_clear" onClick={e => { e.preventDefault(); setResumeFile(null) }}>
                                                    <X size={14} aria-hidden="true" /> Remove
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <UploadCloud size={28} className="iapp-upload_icon" aria-hidden="true" />
                                                <span className="iapp-upload_text">Click to upload</span>
                                                <span className="iapp-upload_hint">PDF, DOC up to 10MB</span>
                                            </>
                                        )}
                                        <input type="file" accept=".pdf,.doc,.docx" hidden
                                            onChange={e => {
                                                const f = e.target.files[0]
                                                if (!f) return
                                                if (f.size > 10 * MB) { setResumeError('File too large — max 10MB'); e.target.value = ''; return }
                                                setResumeError('')
                                                setResumeFile(f)
                                            }} />
                                    </label>
                                    {resumeError
                                        ? <span className="iapp-upload_error">{resumeError}</span>
                                        : fieldErrors.resumeFile && <span className="iapp-upload_error">{fieldErrors.resumeFile}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Bonafide {currentStatus === 'Pursuing' ? <span className="iapp-req">*</span> : <span className="iapp-optional">(Optional)</span>}</label>
                                    <label role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.querySelector('input[type="file"]').click() } }} className={`iapp-upload ${bonafideFile ? 'iapp-upload--done' : bonafideError ? 'iapp-upload--error' : fieldErrors.bonafideFile ? 'iapp-upload--error' : ''}`}>
                                        {bonafideFile ? (
                                            <>
                                                <FileText size={28} className="iapp-upload_icon iapp-upload_icon--done" aria-hidden="true" />
                                                <span className="iapp-upload_filename">{bonafideFile.name}</span>
                                                <button type="button" className="iapp-upload_clear" onClick={e => { e.preventDefault(); setBonafideFile(null) }}>
                                                    <X size={14} aria-hidden="true" /> Remove
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <UploadCloud size={28} className="iapp-upload_icon" aria-hidden="true" />
                                                <span className="iapp-upload_text">Click to upload</span>
                                                <span className="iapp-upload_hint">PDF, JPG, PNG up to 5MB</span>
                                            </>
                                        )}
                                        <input type="file" accept=".pdf,.jpg,.jpeg,.png" hidden
                                            onChange={e => {
                                                const f = e.target.files[0]
                                                if (!f) return
                                                if (f.size > 5 * MB) { setBonafideError('File too large — max 5MB'); e.target.value = ''; return }
                                                setBonafideError('')
                                                setBonafideFile(f)
                                            }} />
                                    </label>
                                    {bonafideError
                                        ? <span className="iapp-upload_error">{bonafideError}</span>
                                        : fieldErrors.bonafideFile && <span className="iapp-upload_error">{fieldErrors.bonafideFile}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <label className="form-label">ID Proof <span className="iapp-optional">(Optional)</span></label>
                                    <label role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.querySelector('input[type="file"]').click() } }} className={`iapp-upload ${idFile ? 'iapp-upload--done' : idError ? 'iapp-upload--error' : ''}`}>
                                        {idFile ? (
                                            <>
                                                <FileText size={28} className="iapp-upload_icon iapp-upload_icon--done" aria-hidden="true" />
                                                <span className="iapp-upload_filename">{idFile.name}</span>
                                                <button type="button" className="iapp-upload_clear" onClick={e => { e.preventDefault(); setIdFile(null) }}>
                                                    <X size={14} aria-hidden="true" /> Remove
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <UploadCloud size={28} className="iapp-upload_icon" aria-hidden="true" />
                                                <span className="iapp-upload_text">Click to upload</span>
                                                <span className="iapp-upload_hint">PDF, JPG, PNG up to 5MB</span>
                                            </>
                                        )}
                                        <input type="file" accept=".pdf,.jpg,.jpeg,.png" hidden
                                            onChange={e => {
                                                const f = e.target.files[0]
                                                if (!f) return
                                                if (f.size > 5 * MB) { setIdError('File too large — max 5MB'); e.target.value = ''; return }
                                                setIdError('')
                                                setIdFile(f)
                                            }} />
                                    </label>
                                    {idError && <span className="iapp-upload_error">{idError}</span>}
                                </div>
                            </div>
                        </div>

                        {/* 8. Declaration */}
                        <div
                            className={`iapp-section card${submitted && sectionErrors[7] ? ' iapp-section--error' : ''}`}
                            ref={el => sectionRefs.current[7] = el}
                        >
                            <h3 className="iapp-section_title">
                                <FileCheck size={18} className="iapp-section_icon" aria-hidden="true" />
                                Declaration
                            </h3>
                            {submitted && sectionErrors[7] && (
                                <div className="iapp-error-banner" role="alert">
                                    <AlertCircle size={14} aria-hidden="true" /> Please accept the declaration to submit.
                                </div>
                            )}
                            <label className="iapp-declaration">
                                <input
                                    type="checkbox"
                                    checked={declared}
                                    onChange={e => setDeclared(e.target.checked)}
                                    required
                                />
                                <span>
                                    I confirm that the above information is accurate and complete to the best of my knowledge.
                                    I understand that any false information may result in disqualification.
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="btn btn--primary iapp-submit"
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
                )}
                </div>
            </section>
        </>
    )
}
