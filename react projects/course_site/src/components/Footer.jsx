import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer>
            <div className="footer-top">
                <div>
                    <h1>Web<span>_Dev</span></h1>
                    <p>Learn, practice, and grow your web development skills with curated frontend courses.</p>
                    <p>Learn. Build. Grow.</p>
                </div>
                <div>
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Courses">Courses</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><a href="#blog">Blog / Resources</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li><a href="#html">HTML</a></li>
                        <li><a href="#css">CSS</a></li>
                        <li><a href="#javascript">JavaScript</a></li>
                        <li><a href="#react">React</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#help-center">Help Center</a></li>
                        <li><a href="#terms">Terms & Conditions</a></li>
                        <li><a href="#privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="mailto:WebDev@gmail.com">WebDev@gmail.com</a></li>
                        <li><a href="#location">Chennai</a></li>
                        <li><a href="https://www.linkedin.com/in/srivikas-sr/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/mistake_no_3/?hl=en" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://x.com/" target="_blank" rel="noreferrer">Twitter (X)</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Web_Dev. All rights reserved by Sri Vikas.</p>
            </div>
            
        </footer>
    )
}
