import './WhatYouGain.css'
import { CheckCircle } from 'lucide-react'
import gainImage from '../../../assets/images/who-we-are.png'
import { internBenefits } from '../../../data/internship'

export default function WhatYouGain() {
    return (
        <section className="section">
            <div className="container what-you-gain_layout">
                <div className="what-you-gain_image-wrap">
                    <img src={gainImage} alt="Interns at work" className="what-you-gain_image" />
                </div>
                <div className="what-you-gain_content">
                    <span className="what-you-gain_label">Internship Benefits</span>
                    <h2 className="what-you-gain_title">More Than Just an Internship</h2>
                    <ul className="what-you-gain_list">
                        {internBenefits.map((b, i) => (
                            <li key={i} className="what-you-gain_item">
                                <CheckCircle size={18} className="what-you-gain_check" aria-hidden="true" />
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
