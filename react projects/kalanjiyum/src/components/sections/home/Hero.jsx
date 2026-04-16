import "./Hero.css"
import Button from "../../ui/Button"
import heroImage from '../../../assets/images/home_hero.png'
import { ArrowRight } from 'lucide-react'
export default function Hero() {
    return (
        <div className="hero section ">
            <div className="hero_content">
                <div>
                    <h1><span className="hero_bold">Your </span><span className="hero_red">Technical</span></h1>
                    <h1><span className="hero_regular">Partner for </span><span className="hero_bold">Growth.</span></h1>
                </div>

                <p>
                    Kalanjiyam Technical Solutions transforms business across major sectors with powerful, adaptable, and cost-effective digital solutions designed for the modern industrial landscape.
                </p>

                <div className="hero_actions">
                    <Button variant="primary" size="xl">About Us</Button>
                    <a href="#services" className="btn btn--secondary btn--xl">
                        View our Services <ArrowRight size={16} />
                    </a>
                </div>

            </div>

            <img src={heroImage} alt="Hero Image" />

        </div>
    )
}