import React, { useEffect, useState } from "react";
import "./Preloader.css"; // We'll style it next
import logo from "../assets/logo.png"; // correct relative path

export default function Preloader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish(); // callback to hide preloader
    }, 3000); // show preloader for 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div className="preloader">
      <img src={logo} alt="Logo" className="preloader-logo" />
      <p className="preloader-text">Loading...</p>
    </div>
  );
}
