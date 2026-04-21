import './Careers_Hero.css'
import PageHero from '../../ui/PageHero'

export default function Careers_Hero() {
    return (
        <PageHero
            className="careers-hero"
            page="Careers"
            title="Join Our Team"
            subtext="Help us build technology that powers real businesses across Tamil Nadu. Join a collective of engineers and innovators shaping the future of industrial automation."
            cta={<a href="#openings" className="btn btn--secondary">View Openings</a>}
        />
    )
}
