import React from 'react'

export default function Course_hero({ courseCount, loading, error }) {

  return (
    <div className="course-hero-container">
        <h1>Explore <span>Web</span> Development Courses</h1>
        <p>Browse structured courses designed to take you from beginner to full-stack developer.</p>
        {!loading && !error && (
            <p>{courseCount} Courses <span>Available</span></p>
        )}
    </div>
  )
}
