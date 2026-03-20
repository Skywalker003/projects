export default function Hero(){
    return(
        <div className="hero-container">
            <div className="hero-content">
                <h1>Master <span>Web</span> Development from Scratch</h1>
                <p>Discover a wide range of courses to enhance your skills and knowledge. Whether you're looking to learn something new or advance your career, we have the perfect course for you.</p>
                {/* this jumps straight to the courses section on the same page */}
                <a href="#courses"><button id="explore-btn" className="enroll-btn">Explore Courses</button></a>
            </div>
            <div className="hero-image">
                <img src="https://plus.unsplash.com/premium_vector-1733734464224-12248f9547af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww" alt="Hero Image" />
            </div>
        </div>
    )
}
