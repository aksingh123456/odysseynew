import React from "react";
import ChatBot from "./ChatBot";


const Hero = () => {
  return (
    <section
      id="hero-section"
      className="hero-section"
      style={{ position: "relative" }}
    >
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
        <p>Seamless travel experiences built on care, calm, and trust.</p>

        <button className="hero-btn">Know More</button>

        <div className="scroll-down">
          <span>Scroll Down</span>
          <div className="v-shape"></div>
        </div>
      </div>
      <ChatBot />
    </section>
  );
};

export default Hero;

