import React from 'react'

export default function Testimonial_card({ name, role, message, star }) {
  return (
    <div className="testimonial-card">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="message">{message}</p>
      <p className="star">{star}</p>
    </div>
  )
}
