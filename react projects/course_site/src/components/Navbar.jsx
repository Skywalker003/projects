import { Link } from "react-router-dom";

export default function Navbar({token, handleLogout}){

    return(
        <nav>
            <h2 className="logo">Webs<span>_Dev</span></h2>
            <Link to="/Home">Home</Link>
            <Link to="/Courses">Courses</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            {!token && (
                <Link to="/Login">
                    <button className="login">
                        Login
                    </button>
                </Link>
            )}
            {token &&<button className="login" onClick={() => handleLogout()}>
                    Logout
                </button>}
            
        </nav>
    )
}
