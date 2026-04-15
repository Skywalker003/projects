import './MissionVision.css'
import { Target, Eye } from 'lucide-react'

const items = [
    {
        icon: Target,
        title: 'Our Mission',
        description: 'To demonstrate high-end automation and software engineering by providing scalable, cost-effective solutions that drive operational excellence for local and global businesses.',
    },
    {
        icon: Eye,
        title: 'Our Vision',
        description: 'To become the global standard for industrial digital transformation, starting from the roots of Madurai and expanding the horizons of what technical precision can achieve.',
    }
]

export default function MissionVision() {
    return (
        <section className='section section--gray'>
            <div className="container">
                <div className="mission-vision">
                    {items.map((item) => (
                        <div className="mission-vision_card card" key={item.title}>
                            <div className="mission-vision_icon">
                                <item.icon size={28} color="var(--color-red)"/>
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
