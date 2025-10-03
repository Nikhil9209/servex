import React, { useState, useEffect } from "react";

export default function SearchBar() {
  const placeholders = [
    "Searching for Plumber...",
    "Searching for Engineer...",
    "Searching for Painter...",
    "Searching for Electrician...",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000); // change text every 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <input
      type="text"
      className="nav-search"
      placeholder={placeholders[index]}
    />
  );
}
