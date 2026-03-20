import React from 'react'

export default function Contact_form() {

  function handleChange(e){
    const { name, value } = e.target

    // updating whichever input the user is typing in
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  })

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    // right now this just logs the form and shows a success alert
    console.log(formData);

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div className="contact-section">
    <h1 >Contact <span>Us</span></h1>
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item">
          <h4><span>Email</span></h4>
          <p>websdev@gmail.com</p>
        </div>
        <div className="contact-item">
          <h4><span>Location</span></h4>
          <p>Chennai, India</p>
        </div>
        <div className="contact-item">
          <h4><span>Response Time</span></h4>
          <p>Within 24 hours</p>
        </div>
      </div>

      <section className="contact-form-section">
          {/* controlled form inputs are connected to formData state */}
          <form className="contact-form" onSubmit={handleSubmit}>
            
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange} />
            
            <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange} />
            <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange} />

            <button type="submit">
            Send Message
            </button>
          </form>
      </section>
    </div>
    </div>
  )
}
