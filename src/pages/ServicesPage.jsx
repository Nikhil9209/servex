import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import "./Services.css";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="services-page-container">
        <div className="services-page-hero">
          <div className="container">
            <div className="services-hero-content">
              <h1 className="services-page-title">Our Services</h1>
              <p className="services-page-subtitle">
                Professional, reliable, and trusted service providers at your fingertips
              </p>
            </div>
          </div>
        </div>

        <Services />
      </div>
    </>
  );
}
