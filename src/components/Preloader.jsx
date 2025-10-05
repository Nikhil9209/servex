import React, { useEffect, useState } from "react";
import "./Preloader.css";
import logo from "../assets/logo.png";

export default function Preloader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo-container">
          <img src={logo} alt="Logo" className="preloader-logo" />
        </div>
        <div className="preloader-text">ServeX</div>
        <div className="preloader-progress">
          <div className="preloader-progress-bar"></div>
        </div>
        <p className="preloader-subtext">Connecting you to trusted services...</p>
      </div>
    </div>
  );
}