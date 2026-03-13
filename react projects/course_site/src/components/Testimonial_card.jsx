import React from 'react'

export default function Testimonial_card({ name, role, message, star }) {
  const cleanedMessage = message
    ?.replace(/â|âœâœ|âœ/g, "")
    .trim();

  const ratingCount = star?.match(/â­/g)?.length || 5;

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
      <p className="message">{cleanedMessage}</p>
      <div className="testimonial-footer">
        <div className="star" aria-label={`${ratingCount} out of 5 stars`}>
          {Array.from({ length: ratingCount }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
        <span className="testimonial-tag">Verified learner</span>
      </div>
    </div>
  )
}
