import React from 'react'
import useFetch from "./useFetch";
import Testimonial_card from './Testimonial_card';

export default function Testimonials() {

    const { courseList: testimonials, loading, error } = useFetch(
    "http://localhost:3000/testimonials"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="testimonials-section">
        <div className="testimonials-header">
            <p className="section-kicker">Student feedback</p>
            <h1>What Students <span>Say</span></h1>
            <p className="testimonials-intro">
                Real progress comes from clarity, consistent practice, and building things that actually work.
            </p>
        </div>
        <div className="testimonial-card-container">
            {[...testimonials]
                .map(
                    ({ id, name, role, message, star } /*, index*/) => (
                    <Testimonial_card
                        key={id}
                        name={name}
                        role={role}
                        message={message}
                        star={star}
                        id={id}
                    />
                    )
                )}
        </div>
    </section>
  )
}
