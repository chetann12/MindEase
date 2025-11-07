import React from "react";
import atharva from "../assets/team/athrva.jpg";
import abhijeet from "../assets/team/abhijeet.jpg";
import chetan from "../assets/team/chetani.jpg";
import shivam from "../assets/team/shivam.jpg";

export default function Team() {
  const members = [
    { name: "Dr. Atharva Angre", role: "CEO & Co-founder", img: atharva },
    { name: "Dr. Abhijeet Jadhav", role: "CTO & Co-founder", img: abhijeet },
    { name: "Dr. Chetan Ghadi", role: "COO", img: chetan },
    { name: "Dr. Shivam Darekar", role: "CMO", img: shivam },
  ];

  return (
    <section id="team" className="section">
      <h2>Our Team</h2>
      <div className="cards">
        {members.map((m, i) => (
          <div key={i} className="card team-card">
            <img src={m.img} alt={m.name} className="avatar" />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
