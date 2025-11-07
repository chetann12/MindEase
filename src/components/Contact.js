import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <p>📞 +91 20245 10001 | +91 20245 10021</p>
        <p>📧 info@mindease.in</p>
      </div>
    </section>
  );
}
