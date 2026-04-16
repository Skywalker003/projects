import './JobApplication.css'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { User, Briefcase, UploadCloud } from 'lucide-react'
import { jobs } from '../data/jobs'
import PageHero from '../components/ui/PageHero'
import CustomSelect from '../components/ui/CustomSelect'
import '../components/sections/about/About_Hero.css'

export default function JobApplication() {
    const [searchParams] = useSearchParams()
    const [position, setPosition] = useState(searchParams.get('position') || '')

    const jobOptions = jobs.map(j => ({ value: j.title, label: j.title }))

    return (
        <>
            <PageHero
                title="Job Application Form"
                subtext="Join our team of industrial specialists and technical experts. Please fill out the detailed form below to apply for a position at Kalanjiyam Technical Solutions."
                page="Apply"
                parent="Careers"
                parentPath="/careers"
            />

            <section className="section">
                <div className="container">
                    <form className="job-form card" onSubmit={(e) => e.preventDefault()}>

                        {/* Personal Information */}
                        <div className="job-form_section">
                            <h3 className="job-form_section-title">
                                <User size={18} color="var(--color-red)" />
                                Personal Information
                            </h3>

                            <div className="job-form_row">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input className="form-input" type="text" placeholder="e.g. John" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input className="form-input" type="text" placeholder="e.g. Doe" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input className="form-input" type="email" placeholder="john.doe@example.com" required />
                            </div>
                        </div>

                        {/* Professional Details */}
                        <div className="job-form_section">
                            <h3 className="job-form_section-title">
                                <Briefcase size={18} color="var(--color-red)" />
                                Professional Details
                            </h3>

                            <div className="form-group">
                                <label className="form-label">Position Applied For</label>
                                <CustomSelect
                                    options={jobOptions}
                                    value={position}
                                    onChange={setPosition}
                                    placeholder="Select a position"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Resume/CV Upload</label>
                                <label className="job-form_upload">
                                    <UploadCloud size={32} color="var(--color-text-light)" />
                                    <span className="job-form_upload-text">Click to upload or drag and drop</span>
                                    <span className="job-form_upload-hint">PDF, DOCX up to 10MB</span>
                                    <input type="file" accept=".pdf,.docx" hidden />
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn--primary job-form_submit">
                            Submit Application
                        </button>

                    </form>
                </div>
            </section>
        </>
    )
}
