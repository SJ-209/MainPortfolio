import React from 'react'

import { useState } from "react"
import { Mail, MessageSquare } from "lucide-react"

const Contact = ({ handleEmailClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get in Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <Mail />
                <a href="mailto:sjcodesYT@protonmail.com">sjcodesYT@protonmail.com</a>
              </div>
              <div className="contact-method">
                <MessageSquare />
                <span>Available for work</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {/* <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
            </div> */}

            <button type="submit" className="submit-btn" onClick={handleEmailClick}>
              {/* <a className="email-btn" href="mailto:sjcodesYT@protonmail.com"> Email Me </a> */}
              Email me
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

