import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const placeholderTexts = [
    "Searching for plumber...",
    "Searching for engineer...",
    "Searching for painter...",
    "Searching for electrician..."
  ];

  const [placeholder, setPlaceholder] = useState(placeholderTexts[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % placeholderTexts.length;
      setPlaceholder(placeholderTexts[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update active state based on current route
    const currentLink = links.find(link => link.path === location.pathname);
    if (currentLink) {
      setActive(currentLink.name);
    }
  }, [location.pathname, links]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="site-name">ServeX</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navbar-middle ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <input
            type="text"
            className="nav-search"
            placeholder={placeholder}
          />
        </div>

        <div className={`navbar-right ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-pill ${active === link.name ? "active" : ""}`}
              onClick={() => {
                setActive(link.name);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="nav-actions">
            <Link to="/login" className="btn-login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            <Link to="/register" className="btn-signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}