import './MissionVision.css'
import { missionVisionItems } from '../../../data/about'

export default function MissionVision() {
    return (
        <section className='section section--gray'>
            <div className="container">
                <div className="section-heading section-heading--center">
                    <span className="section-heading_label">What Drives Us</span>
                </div>
                <div className="mission-vision">
                    {missionVisionItems.map((item) => (
                        <div className="mission-vision_card card" key={item.title}>
                            <div className="mission-vision_icon" aria-hidden="true">
                                <item.icon size={28} />
                            </div>
                            <h3 className="mission-vision_title">{item.title}</h3>
                            <p className="mission-vision_desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
