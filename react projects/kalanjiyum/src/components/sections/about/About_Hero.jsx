import './About_Hero.css'
import PageHero from '../../ui/PageHero'

export default function About_Hero() {
    return (
        <PageHero 
            page="About"
            title={<>About<br/>Kalanjiyam Tech</>}
            subtext="A passionate team delivering cost-effective technology solutions since 2019."
        />
    )
}