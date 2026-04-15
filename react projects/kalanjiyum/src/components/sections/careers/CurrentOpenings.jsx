import './CurrentOpenings.css'
import { MapPin } from 'lucide-react'
import { jobs } from '../../../data/jobs'
import SectionHeading from '../../ui/SectionHeading'

export default function CurrentOpenings() {
    return (
        <section id="openings" className="section section--gray">
            <div className="container">
                <SectionHeading
                    heading="Current Openings"
                    align="center"
                />
                <div className="current-openings">
                    {jobs.map((job) => (
                        <div className="job-card card" key={job.id}>
                            <div className="job-card_info">
                                <div className="job-card_header">
                                    <h3 className="job-card_title">{job.title}</h3>
                                    <span className="job-card_badge">{job.type}</span>
                                </div>
                                <div className="job-card_location">
                                    <MapPin size={14} />
                                    <span>{job.location}</span>
                                </div>
                                <p className="job-card_desc">{job.desc}</p>
                            </div>
                            <a href="mailto:contactus@kalanjiyam.info" className="btn btn--primary btn--sm job-card_btn">
                                Apply Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
