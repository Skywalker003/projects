import './WhoWeAre.css'
import aboutImage from '../../../assets/images/who-we-are.png'

export default function WhoWeAre() {
    return (
        <section className='section'>
            <div className="who-we-are container">
                <div className="who-we-are_content">
                    <span className='section-heading_label'>Our Story</span>
                    <h2 className='who-we-are_title'>Who We Are</h2>

                    <p>
                        Founded in the industrial heart of <strong>Madurai</strong>, Kalanjiyam Technical
                        Solutions was born in 2019 out of a vision to bridge the gap between complex
                        engineering challenges and accessible technical innovation.
                    </p>
                    <p>
                        From our humble beginnings, we have evolved into a multi-disciplinary powerhouse
                        specialising in Industry 4.0 integrations and bespoke software development. Our
                        mission is to help local and global businesses leverage their lead in time in a
                        digital-first economy.
                    </p>

                </div>

                <img className="who-we-are_image" src={aboutImage} alt="Who We are image" />
            </div>
        </section>
    )
}
