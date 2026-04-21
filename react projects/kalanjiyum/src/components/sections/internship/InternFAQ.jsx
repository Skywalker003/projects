import './InternFAQ.css'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'
import { faqs } from '../../../data/internship'

export default function InternFAQ() {
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
                            className={`intern-faq_item ${open === i ? 'intern-faq_item--open' : ''}`}
                            key={i}
                        >
                            <button
                                className="intern-faq_question"
                                onClick={() => setOpen(open === i ? null : i)}
                                aria-expanded={open === i}
                                aria-controls={`faq-answer-${i}`}
                            >
                                <span>{f.q}</span>
                                <ChevronDown size={18} className="intern-faq_chevron" />
                            </button>
                            <div
                                id={`faq-answer-${i}`}
                                className={`intern-faq_answer ${open === i ? 'intern-faq_answer--open' : ''}`}
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
