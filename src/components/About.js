import React from "react";

export default function About() {
  return (
    <section id="about" className="section about">
      <h2>About Us</h2>
      <p>
        MindEase is an AI-driven mental wellness platform built for India. Our
        mission is to reach Tier 2, and rural communities where mental health
        awareness is limited and English is not the primary language. We deliver
        affordable and stigma-free support in regional languages — including
        Hindi, Marathi, Tamil, Telugu, and Bengali.
      </p>

      <div className="vision-mission">
        <div>
          <h3>Our Vision</h3>
          <p>
            To build a mentally healthy India where every person, regardless of
            city or language, can access therapy and emotional support in a
            culturally sensitive way.
          </p>
        </div>
        <div>
          <h3>Our Mission</h3>
          <p>
            To make mental health care accessible and affordable by combining AI
            efficiency with human compassion, breaking stigma in every home and
            community.
          </p>
        </div>
      </div>

      <div className="stats">
        <div>
          <h3>8+</h3>
          <p>Regional Languages</p>
        </div>
        <div>
          <h3>24/7</h3>
          <p>Care Support</p>
        </div>
        <div>
          <h3>10,000+</h3>
          <p>Active Users</p>
        </div>
      </div>
    </section>
  );
}
