import './About_Hero.css'
import PageHero from '../../ui/PageHero'

export default function About_Hero() {
    return (
        <PageHero
            className="about-hero"
            page="About"
            title={<>About<br />Kalanjiyam <span className="page-hero_title--accent">Tech</span></>}
            subtext="A passionate team delivering cost-effective technology solutions since 2019."
        />
    )
}