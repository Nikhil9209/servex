import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-hero">
          <div className="container">
            <div className="contact-hero-content">
              <h1 className="contact-title">Get In Touch</h1>
              <p className="contact-subtitle">
                Have a question or need help? We'd love to hear from you
              </p>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p>We're here to help and answer any questions you might have.</p>

                <div className="info-cards">
                  <div className="info-card">
                    <div className="info-icon">📍</div>
                    <div>
                      <h3>Address</h3>
                      <p>123 Service Street<br />Tech City, TC 12345</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">📞</div>
                    <div>
                      <h3>Phone</h3>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">✉️</div>
                    <div>
                      <h3>Email</h3>
                      <p>hello@servex.com</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">🕒</div>
                    <div>
                      <h3>Hours</h3>
                      <p>Mon-Fri: 8AM-8PM<br />Sat-Sun: 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-section">
                <h2>Send us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
