import React from "react";
import Counter from "./Counter";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import ReadMore from "./ReadMore";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutReadMore from "./AboutReadMore";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
     const navigate = useNavigate();
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT SIDE IMAGES */}
        <div className="about-left">
          <img
            src="/images/about-main.jpg"
            alt="Main Lake"
            className="about-main-img"
          />

          <div className="about-small-card">
            <img
              src="/images/about-small.jpg"
              alt="Small"
            />
            <p>
              And we snap it so that you can keep it in your frames forever
            </p>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-right">
          <span className="about-tag">About Us</span>
          <h2>Your Memory, Our Story</h2>

          <p>
            Odyssey Heritage is a destination management platform that blends
            local expertise with seamless travel operations. Discover curated
            itineraries, connect with trusted ground networks, and collaborate
            effortlessly as a travel partner.
          </p>

          <div className="about-stats">
  <div>
    <Counter start={50} end={111} />
    <span>Travel Experiences</span>
  </div>

  <div>
    <Counter start={0} end={12} />
    <span>Countries</span>
  </div>

  <div>
    <Counter start={80} end={100} />
    <span>Partner-first Approach</span>
  </div>
</div>


          <button className="about-btn">Read More</button>
        </div>

      </div>
      
       <button
      className="about-btn"
      onClick={() => navigate("/about-readmore")}
    >
      Read More
    </button>
    </section>
  );
};

export default AboutSection;
