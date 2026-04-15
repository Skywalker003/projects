import './CoreValues.css'
import { IndianRupee, Users, Lightbulb, ShieldCheck } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'

const values = [
    {
        icon: IndianRupee,
        title: 'Cost-Effectiveness',
        desc: 'Delivering premium engineering quality without the premium price tag.',
    },
    {
        icon: Users,
        title: 'Customer First',
        desc: 'Every solution is built around the specific needs and goals of our clients.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        desc: 'Constantly exploring new technologies to keep our clients ahead of the curve.',
    },
    {
        icon: ShieldCheck,
        title: 'Reliability',
        desc: 'Consistent, dependable support and solutions that our clients can count on.',
    },
]

export default function CoreValues() {
    return (
        <section className='section '>
            <div className='container'>
                <SectionHeading 
                    heading="Our Core Values"
                    align='center'
                />
                <div className="core-values">
                    {values.map((v) => (
                        <div className="core-values_item card" key={v.title}>
                            <div className="core-values_icon">
                                <v.icon size={24} color="var(--color-red)"/>
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
