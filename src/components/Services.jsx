import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    { title: "Plumbing", desc: "Fix leaks & repairs instantly" },
    { title: "Electrician", desc: "Get help with wiring & power issues" },
    { title: "AC Repair", desc: "Cooling solutions for your home" },
    { title: "Mobile Repair", desc: "Quick fixes for your gadgets" },
    { title: "Cleaning", desc: "Book trusted cleaning services" },
    { title: "Tutoring", desc: "Hire local tutors for any subject" },
  ];

  return (
    <section className="bento-section">
      <div className="card-grid">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="card card--border-glow particle-container"
          >
            <div className="card__content">
              <h3 className="card__title">{service.title}</h3>
              <p className="card__description">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
