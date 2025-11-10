import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resources from "./components/Resources";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
