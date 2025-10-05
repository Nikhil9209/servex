import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-hero">
          <div className="container">
            <div className="about-hero-content">
              <h1 className="about-title">About ServeX</h1>
              <p className="about-subtitle">
                Connecting you with trusted service professionals in your area
              </p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="container">
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>
                ServeX is dedicated to revolutionizing the way people find and connect with
                local service professionals. We believe that everyone deserves access to
                reliable, high-quality services at fair prices.
              </p>
            </div>

            <div className="about-section">
              <h2>Why Choose ServeX?</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🎯</div>
                  <h3>Verified Professionals</h3>
                  <p>All service providers on our platform are thoroughly vetted and verified for your peace of mind.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">⚡</div>
                  <h3>Quick Response</h3>
                  <p>Get connected with available professionals in your area within minutes, not hours.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">💰</div>
                  <h3>Fair Pricing</h3>
                  <p>Transparent pricing with no hidden fees. Know exactly what you'll pay before booking.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">⭐</div>
                  <h3>Quality Guarantee</h3>
                  <p>We're committed to your satisfaction. All services come with our quality guarantee.</p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>Our Services</h2>
              <div className="services-overview">
                <div className="service-item">
                  <span className="service-icon">🔧</span>
                  <div>
                    <h4>Plumbing</h4>
                    <p>Emergency repairs, installations, and maintenance</p>
                  </div>
                </div>

                <div className="service-item">
                  <span className="service-icon">⚡</span>
                  <div>
                    <h4>Electrical</h4>
                    <p>Wiring, installations, and electrical repairs</p>
                  </div>
                </div>

                <div className="service-item">
                  <span className="service-icon">❄️</span>
                  <div>
                    <h4>AC Repair</h4>
                    <p>Cooling system maintenance and installation</p>
                  </div>
                </div>

                <div className="service-item">
                  <span className="service-icon">📱</span>
                  <div>
                    <h4>Mobile Repair</h4>
                    <p>Screen repair, battery replacement, and diagnostics</p>
                  </div>
                </div>

                <div className="service-item">
                  <span className="service-icon">🧹</span>
                  <div>
                    <h4>Cleaning</h4>
                    <p>Home and office deep cleaning services</p>
                  </div>
                </div>

                <div className="service-item">
                  <span className="service-icon">📚</span>
                  <div>
                    <h4>Tutoring</h4>
                    <p>Expert tutors for all subjects and levels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
