export default function Navbar(){
    return(
        <nav>
            <h2 className="logo">Webs<span>_Dev</span></h2>
            <a href="home">Home</a>
            <a href="courses">Courses</a>
            <a href="about">About</a>
            <a href="contact">Contact</a>
            <button className="login">Log in</button>
        </nav>
    )
}