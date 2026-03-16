import React from 'react'

export default function Contact_map() {
  return (
    <div className="map-section">
        <h1>Our <span>Location</span></h1>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105884.89453236607!2d-6.939664535622303!3d33.96933376457863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68c4090348ba6be9%3A0xa70e8aa34e32e461!2sWeb.dev!5e0!3m2!1sen!2sin!4v1773641227356!5m2!1sen!2sin" 
        width="800" 
        height="600" 
        style={{ border: 0, width: "100%", height: "400px" }}
        allowfullscreen
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}
