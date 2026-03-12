import React from 'react'

export default function Course_hero({ courseCount, loading, error }) {

  return (
    <div className="course-hero-container">
        <div className="course-hero-text">
            <h1 className="courses-header">Explore <span>Web</span> Development Courses</h1>
            <p>Browse structured courses designed to take you from beginner to full-stack developer.</p>
            {!loading && !error && (
                <p>{courseCount} Courses <span>Available</span></p>
            )}
            <a href="#courses"><button id="explore-btn" className="enroll-btn">Explore Courses</button></a>
        </div>
    </div>
  )
}
