import './InternFAQ.css'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'
import { faqs as fallback } from '../../../data/internship'
import { getInternshipFAQs } from '../../../api/internship'
import { useApi } from '../../../hooks/useApi'

export default function InternFAQ() {
    const faqs = useApi(getInternshipFAQs, fallback)
    const [open, setOpen] = useState(null)

    return (
        <section className="section section--light">
            <div className="container">
                <SectionHeading
                    heading="Frequently Asked Questions"
                    align="center"
                />
                <div className="intern-faq_list">
                    {faqs.map((f, i) => (
                        <div
                            className={`intern-faq_item ${open === f.q ? 'intern-faq_item--open' : ''}`}
                            key={f.q}
                        >
                            <button
                                className="intern-faq_question"
                                onClick={() => setOpen(open === f.q ? null : f.q)}
                                aria-expanded={open === f.q}
                                aria-controls={`faq-answer-${i}`}
                            >
                                <span>{f.q}</span>
                                <ChevronDown size={18} className="intern-faq_chevron" />
                            </button>
                            <div
                                id={`faq-answer-${i}`}
                                className={`intern-faq_answer ${open === f.q ? 'intern-faq_answer--open' : ''}`}
                                aria-live="polite"
                            >
                                <div className="intern-faq_answer-inner">
                                    <p>{f.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
