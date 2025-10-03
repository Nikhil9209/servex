// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import Services from "../components/Services";

export default function Home() {
  const heading = "Find Trusted Services Near You";

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            {heading.split("").map((char, index) => (
              <span key={index} className="letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p>
            Plumbers, Electricians, AC Repair, Mobile Repair & more – all in one
            place with ServeX.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary">Get Started</a>
            <a href="#" className="btn-secondary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />
    </>
  );
}
