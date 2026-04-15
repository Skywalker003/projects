import './WhyJoinUs.css'
import { BookOpen, TrendingUp, Cog, Users } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'

const reasons = [
    {
        icon: BookOpen,
        title: 'Continuous Learning',
        desc: 'Master cutting-edge tech stacks and stay ahead of the industrial curve with our dedicated learning programs.',
    },
    {
        icon: TrendingUp,
        title: 'Career Growth',
        desc: 'Clear architectural paths for progression. We invest in our people to become the leaders of tomorrow.',
    },
    {
        icon: Cog,
        title: 'Real Impact',
        desc: 'See your code and hardware designs in action, improving efficiency for real businesses in Madurai.',
    },
    {
        icon: Users,
        title: 'Great Team',
        desc: 'A passionate, collaborative environment where every technical voice is heard and valued.',
    },
]

export default function WhyJoinUs() {
    return (
        <section className="section">
            <div className="container">
                <SectionHeading
                    label="Architectural Excellence"
                    heading="Why Join Kalanjiyam?"
                    align="center"
                />
                <div className="why-join-us">
                    {reasons.map((r) => (
                        <div className="why-join-us_card card" key={r.title}>
                            <div className="why-join-us_icon">
                                <r.icon size={24} color="var(--color-red)" />
                            </div>
                            <h4 className="why-join-us_title">{r.title}</h4>
                            <p className="why-join-us_desc">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
