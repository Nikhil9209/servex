import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    { 
      title: "🔧 Plumbing", 
      desc: "Fix leaks, install fixtures & emergency repairs", 
      available: "Available 24/7",
      color: "linear-gradient(135deg, #6366f1, #818cf8)"
    },
    { 
      title: "⚡ Electrician", 
      desc: "Wiring, installations & power solutions", 
      available: "Licensed experts",
      color: "linear-gradient(135deg, #f59e0b, #fbbf24)"
    },
    { 
      title: "❄️ AC Repair", 
      desc: "Cooling systems, maintenance & installation", 
      available: "Same day service",
      color: "linear-gradient(135deg, #06b6d4, #38bdf8)"
    },
    { 
      title: "📱 Mobile Repair", 
      desc: "Screen repair, battery & software fixes", 
      available: "Quick turnaround",
      color: "linear-gradient(135deg, #10b981, #34d399)"
    },
    { 
      title: "🧹 Cleaning", 
      desc: "Home & office deep cleaning services", 
      available: "Eco-friendly",
      color: "linear-gradient(135deg, #8b5cf6, #a78bfa)"
    },
    { 
      title: "📚 Tutoring", 
      desc: "Expert tutors for all subjects & levels", 
      available: "Online & in-person",
      color: "linear-gradient(135deg, #ec4899, #f472b6)"
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Professional, reliable, and trusted service providers</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={`service-${index}`} 
              className="service-card"
              style={{'--service-color': service.color}}
            >
              <div className="service-icon">
                {service.title.split(' ')[0]}
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title.substring(2)}</h3>
                <p className="service-description">{service.desc}</p>
                <span className="service-badge">{service.available}</span>
              </div>
              <div className="service-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;