import React from "react";

export default function Services() {
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="cards">
        <div className="card">
          <h3>AI Chatbot Therapy</h3>
          <p>
            Chat in your own language anytime, anywhere. MindEase’s chatbot
            provides cognitive-behavioral support 24/7.
          </p>
        </div>
        <div className="card">
          <h3>Live Counselling + Hybrid Care</h3>
          <p>
            Our licensed therapists offer affordable one-on-one sessions,
            integrated with AI assistance for better care.
          </p>
        </div>
        <div className="card">
          <h3>Mood Tracking & Journaling</h3>
          <p>
            Keep track of your emotions, record daily reflections, and monitor
            your progress using simple, local-language tools.
          </p>
        </div>
      </div>
    </section>
  );
}
