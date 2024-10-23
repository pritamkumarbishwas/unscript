import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div> {/* Background overlay */}
      <div className="hero-content">
        <h1 className="hero-title">
          Create <span className="highlight">Professional Videos</span> in Minutes with AI Avatars
        </h1>
        <p className="hero-subtitle">
          Transform your text into engaging video content instantly, while saving time and cutting costs.
        </p>
        <div className="demo">
          <input type="email" className="form-control" placeholder="Email" />
          <button className="cta-button">Get a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
