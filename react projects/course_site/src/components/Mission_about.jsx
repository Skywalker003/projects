import React from 'react'

export default function Mission_about() {
  return (
    <section className="about-mission">
        <div className="about-mission__content">
            {/* this section explains the main purpose behind the platform */}
            <p className="about-section-kicker">Why we built this</p>
            <h1>Our <span>Mission</span></h1>
            <p>Our mission is to simplify the journey of learning web development by providing a clear, structured path for beginners. Instead of overwhelming learners with scattered resources, we focus on step-by-step guidance from the basics of HTML and CSS to advanced concepts like React and backend development. Through project-based learning and practical exercises, we aim to help learners not only understand concepts but also apply them by building real applications.</p>
        </div>
        <div className="about-mission__image">
            <img src="https://plus.unsplash.com/premium_vector-1733734464224-12248f9547af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww" alt="About Image" />
        </div>
    </section>
  )
}
