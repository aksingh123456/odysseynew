import React from "react";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Background Video */}
      <video
        className="hero-video"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Journeys That Unfold Gently</h1>
        <p>
          Seamless travel experiences built on care, calm, and trust.
        </p>

        <button className="hero-btn">Know More</button>

        <div className="scroll-down">
          <span>Scroll Down</span>
          <div className="arrow"></div>
          
        </div>
      </div>
       
    </section>
  );
};

export default Hero;
