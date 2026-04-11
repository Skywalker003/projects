import "./Hero.css"
import Badge from "../ui/Badge"
import Button from "../ui/Button"
import heroImage from '../../assets/images/home_hero.png'
import { ArrowRight, Star, MapPin } from 'lucide-react'
export default function Hero() {
    return (
        <div className="hero section ">
            <div className="hero_content">
                <Badge children={"ONE STEP SOLUTIONS"} variant="red-light"/>
                <div>
                    <h1>Your <span>Technical</span></h1>
                    <h1>Partner for Growth</h1>
                </div>

                <p>
                    Kalanjiyam Technical Solutions transforms businesses across major sectors with powerful, adaptable, and cost-effective digital solutions designed for the modern industrial landscape.
                </p>

                <div className="hero_actions">
                    <Button variant="primary" size="xl">Get a Free Quote</Button>
                    <Button variant="secondary" size="xl">
                        View our Services <ArrowRight size={16} />
                    </Button>
                </div>

                <div className="hero_trust">
                    <div className="hero__trust-first-item">
                        <Star size={16}
                        fill= "var(--color-red)"
                        color="var(--color-red)" />
                        <span>4.9/5 Ratings</span>
                    </div>
                    <p className="hero__trust-item">Est.2019</p>
                    <div className="hero__trust-item">
                        <MapPin size={16} color="var(--color-text-light)"/>
                        <span>Madurai, TN</span>
                    </div>
                </div>
            </div>

            <img src={heroImage} alt="Hero Image" />

        </div>
    )
}