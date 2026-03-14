import React from 'react'

export default function Contact_form() {

  function handleChange(e){
    const { name, value } = e.target

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
    console.log(formData);

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (

    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item">
          <h4>Email</h4>
          <p>websdev@gmail.com</p>
        </div>
        <div className="contact-item">
          <h4>Location</h4>
          <p>Chennai, India</p>
        </div>
        <div className="contact-item">
          <h4>Response Time</h4>
          <p>Within 24 hours</p>
        </div>
      </div>

      <section className="contact-form-section">
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
  )
}
