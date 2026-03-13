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
        <h1>What Students <span>Say</span></h1>
        <div className="testimonial-card-container">
            {[...testimonials]
                .map(
                    ({ id, name, role, message, star } /*, index*/) => ( //destructured instead of (course) and then course.id, course.title etc
                    <Testimonial_card
                        key={id}// index can also be used as key but id is better
                        name={name}
                        role={role}
                        message={message}
                        star={star}
                        id={id}//it seems we cant use key prop so we pass id prop to use 
                    />
                    )
                )}
        </div>
    </section>
  )
}
