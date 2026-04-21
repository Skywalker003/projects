import './CoreValues.css'
import SectionHeading from '../../ui/SectionHeading'
import { coreValues } from '../../../data/about'

export default function CoreValues() {
    return (
        <section className='section'>
            <div className='container'>
                <SectionHeading 
                    heading="Our Core Values"
                    align='center'
                />
                <div className="core-values">
                    {coreValues.map((v) => (
                        <div className="core-values_item card" key={v.title}>
                            <div className="core-values_icon" aria-hidden="true">
                                <v.icon size={24} />
                            </div>
                            <h4 className="core-values_title">{v.title}</h4>
                            <p className="core-values_desc">{v.desc}</p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
