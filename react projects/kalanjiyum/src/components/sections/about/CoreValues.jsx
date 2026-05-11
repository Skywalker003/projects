import './CoreValues.css'
import SectionHeading from '../../ui/SectionHeading'
import { coreValues as fallback } from '../../../data/about'
import { getCoreValues } from '../../../api/about'
import { useApi } from '../../../hooks/useApi'
import { resolveIcon } from '../../../utils/iconMap'

export default function CoreValues() {
    const coreValues = useApi(getCoreValues, fallback)

    return (
        <section className='section'>
            <div className='container'>
                <SectionHeading
                    heading="Our Core Values"
                    align='center'
                />
                <div className="core-values">
                    {coreValues.map((v) => {
                        const Icon = resolveIcon(v.icon)
                        return (
                            <div className="core-values_item card" key={v.title}>
                                <div className="core-values_icon" aria-hidden="true">
                                    {Icon && <Icon size={24} />}
                                </div>
                                <h4 className="core-values_title">{v.title}</h4>
                                <p className="core-values_desc">{v.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
