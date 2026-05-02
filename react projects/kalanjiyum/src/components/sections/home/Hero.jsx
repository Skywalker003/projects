import "./Hero.css"
import { Link } from 'react-router-dom'
import heroImage from '../../../assets/images/home_hero.png'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero_content">
                <h1>
                    <span className="hero_bold">Your </span><span className="hero_red">Technical</span>
                    <br />
                    <span className="hero_regular">Partner for </span><span className="hero_bold">Growth.</span>
                </h1>

                <p>
                    Kalanjiyam Technical Solutions transforms business across major sectors with powerful, adaptable, and cost-effective digital solutions designed for the modern industrial landscape.
                </p>

                <div className="hero_actions">
                    <a href="#services" className="btn btn--primary btn--xl">
                        View our Services <ArrowRight size={16} />
                    </a>
                    <Link to="/about" className="btn btn--secondary btn--xl">About Us</Link>
                </div>
            </div>

            <img src={heroImage} alt="Kalanjiyam Technical Solutions industrial workspace" />
        </section>
    )
}
