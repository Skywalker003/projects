import './MissionVision.css'
import { missionVisionItems as fallback } from '../../../data/about'
import { getMissionVision } from '../../../api/about'
import { useApi } from '../../../hooks/useApi'
import { resolveIcon } from '../../../utils/iconMap'
import SectionHeading from '../../ui/SectionHeading'

export default function MissionVision() {
    const missionVisionItems = useApi(getMissionVision, fallback)

    return (
        <section className='section section--gray'>
            <div className="container">
                <SectionHeading
                    label="What Drives Us"
                    heading="Mission & Vision"
                    align="center"
                />
                <div className="mission-vision">
                    {missionVisionItems.map((item) => {
                        const Icon = resolveIcon(item.icon)
                        return (
                            <div className="mission-vision_card card" key={item.title}>
                                <div className="mission-vision_icon" aria-hidden="true">
                                    {Icon && <Icon size={28} />}
                                </div>
                                <h3 className="mission-vision_title">{item.title}</h3>
                                <p className="mission-vision_desc">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
