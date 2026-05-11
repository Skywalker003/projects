import './WhoWeAre.css'
import aboutImage from '../../../assets/images/who-we-are.png'
import { whoWeAreText } from '../../../data/about'

export default function WhoWeAre() {
    return (
        <section className='section'>
            <div className="who-we-are container">
                <div className="who-we-are_content">
                    <span className='section-heading_label'>Our Story</span>
                    <h2 className='who-we-are_title'>Who We Are</h2>

                    {whoWeAreText.map((text, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}

                </div>

                <img className="who-we-are_image" src={aboutImage} alt="Kalanjiyam Technical Solutions team at work" />
            </div>
        </section>
    )
}
