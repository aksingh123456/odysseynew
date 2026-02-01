import React, { useEffect, useRef } from "react";
import Counter from "./Counter";
import { useNavigate, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section className="about-section" id="about" ref={sectionRef}>
       <div className="about-container">

    {/* LEFT SIDE */}
    <div className="about-left" style={{ position: "relative" }}>

      {/* ABOUT TAG */}
      <span className="about-tag"
        style={{
        
          top: "20px",
          left: "20px",
          zIndex: 2,
        }}
      >
        About Us
      </span>
      <h2
        style={{
         
          bottom: "40px",
          left: "50%",
          paddingLeft:"350px",
          color: "black",
          fontSize: "42px",
          fontWeight: "600",
          textAlign: "center",
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        Your Memory, Our Story
      </h2>
       <img
  src="/images/about-main.jpg"
  alt="Main Lake"
  className="about-main-img"
  style={{ marginTop: "38px" }}   //  YE ADD KARO
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
          

          <p style={{fontWeight:"bolder"}}>
            Odyssey Heritage is a destination management platform that blends
            local expertise with seamless travel operations. Discover curated
            itineraries, connect with trusted ground networks, and collaborate
            effortlessly as a travel partner.
          </p>

          <div className="about-stats" style={{fontWeight:"bold" ,marginBottom:"40px"}}>
            <div>
              <Counter start={100} end={200} />
              <span>Travel Experiences</span>
            </div>

            <div>
              <Counter start={0} end={12} />
              <span>Countries</span>
            </div>

            <div>
              <Counter start={900} end={1000} />
              <span>Partner-first Approach</span>
            </div>
          </div>
          
<p
  style={{
    marginBottom: "-100px",
    marginRight: "85px",
    paddingTop: "20px",
    paddingLeft: "81px",
    fontSize: "15px",
    fontWeight: "600",   // 👈 thoda bold
    color: "#333",   
    whiteSpace: "nowrap",    // 👈 darker like image
  }}
>
  Ease, trust, and journeys that unfold gently
</p>

          <Link
  to="/about"
  className="about-readmore"
  style={{
    position: "absolute",
    right: "-80px",
    bottom: "-200px",
    fontWeight: "600",
     fontSize: "10px", 
    color: "#000",
     textDecoration: "underline", 
  }}
>
  Read More
</Link>

        </div>

      </div>
    </section>
  
  );
};

export default AboutSection;