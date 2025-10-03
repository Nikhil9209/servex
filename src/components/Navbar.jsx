import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const links = ["Home", "Services", "About", "Contact"];

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

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="site-name">ServeX</div>
      </div>

      <div className="navbar-middle">
        <input
          type="text"
          className="nav-search"
          placeholder={placeholder}
        />
      </div>

      <div className="navbar-right">
        {links.map((link) => (
          <Link
            key={link}
            to={`/${link.toLowerCase()}`}
            className={`nav-pill ${active === link ? "active" : ""}`}
            onClick={() => setActive(link)}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}
