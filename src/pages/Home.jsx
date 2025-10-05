// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shape"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Find Trusted Services Near You</h1>
            <p className="hero-subtitle">
              Plumbers, Electricians, AC Repair, Mobile Repair & more – all in one
              place with ServeX.
            </p>
            <div className="hero-buttons">
              <a href="/services" className="btn btn-primary">Explore Services</a>
              <a href="/about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-card card-1">
              <div className="card-icon">🔧</div>
              <div className="card-info">
                <h3>Plumbing</h3>
                <p>Emergency service</p>
              </div>
            </div>

            <div className="hero-card card-2">
              <div className="card-icon">⚡</div>
              <div className="card-info">
                <h3>Electrician</h3>
                <p>Licensed experts</p>
              </div>
            </div>

            <div className="hero-card card-3">
              <div className="card-icon">❄️</div>
              <div className="card-info">
                <h3>AC Repair</h3>
                <p>Same day service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />
    </>
  );
}