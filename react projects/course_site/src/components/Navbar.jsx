import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <h2 className="logo">Webs<span>_Dev</span></h2>
            <Link to="/Home">Home</Link>
            <Link to="/Courses">Courses</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <button className="login">Log in</button>
        </nav>
    )
}