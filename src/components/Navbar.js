import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguages = () => setShowLanguages(!showLanguages);

  const changeLanguage = (langCode) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
      setShowLanguages(false);
    } else {
      alert("Google Translate not loaded yet. Please wait a moment.");
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* ✅ Logo */}
        <div className="logo-section">
          <img src={logo} alt="MindEase Logo" className="brand-logo" />
          <span className="brand-name">MindEase</span>
        </div>

        {/* 🌐 Translate Button */}
        <div className="translate-dropdown">
          <button className="translate-btn" onClick={toggleLanguages}>
            Translate
          </button>
          {showLanguages && (
            <ul className="language-list">
              <li onClick={() => changeLanguage("en")}>English</li>
              <li onClick={() => changeLanguage("hi")}>हिन्दी (Hindi)</li>
              <li onClick={() => changeLanguage("mr")}>मराठी (Marathi)</li>
              <li onClick={() => changeLanguage("ta")}>தமிழ் (Tamil)</li>
              <li onClick={() => changeLanguage("te")}>తెలుగు (Telugu)</li>
              <li onClick={() => changeLanguage("bn")}>বাংলা (Bengali)</li>
              <li onClick={() => changeLanguage("gu")}>ગુજરાતી (Gujarati)</li>
              <li onClick={() => changeLanguage("kn")}>ಕನ್ನಡ (Kannada)</li>
              <li onClick={() => changeLanguage("ml")}>മലയാളം (Malayalam)</li>
              <li onClick={() => changeLanguage("pa")}>ਪੰਜਾਬੀ (Punjabi)</li>
            </ul>
          )}
        </div>

        {/* ☰ Menu for Mobile */}
        <div
          className={`menu-icon ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#team">Our Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
