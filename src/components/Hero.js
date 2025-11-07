import React, { useEffect, useState } from "react";

export default function Hero() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
      title: "Bridging India's Mental Health Gap",
      text: "Affordable, regional-language mental wellness support for every Indian — powered by AI & compassion.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=927",
      title: "In Your Language, At Your Comfort",
      text: "Designed for Tier 1, Tier 2 & rural users who deserve therapy in their mother tongue.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663100213985-212f6f1af5da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      title: "Empowering Minds, Breaking Stigma",
      text: "MindEase combines AI tools and human experts to make mental health accessible to everyone.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <a href="#services" className="hero-btn">
              Explore Services
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
