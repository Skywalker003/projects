import React from 'react'

export default function Testimonial_card({ name, role, message, star }) {
  // using 5 as default if star is missing or not a proper number
  const ratingCount = Number(star) || 5;

  return (
    <div className="testimonial-card">
      <div className="testimonial-quote-mark">"</div>
      <div className="testimonial-card__top">
        <div className="testimonial-avatar" aria-hidden="true">
          {name?.charAt(0)}
        </div>
        <div className="testimonial-person">
          <h3>{name}</h3>
          <p className="role">{role}</p>
        </div>
      </div>
      <p className="message">{message}</p>
      <div className="testimonial-footer">
        <div className="star" aria-label={`${ratingCount} out of 5 stars`}>
          {/* creating star icons based on the rating count */}
          {Array.from({ length: ratingCount }).map((_, index) => (
            <span className="star-icon" key={index}>★</span>
          ))}
        </div>
        <span className="testimonial-tag">Verified learner</span>
      </div>
    </div>
  )
}
