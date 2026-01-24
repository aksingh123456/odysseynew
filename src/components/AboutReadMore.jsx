import React, { useEffect } from "react";
import Services from "./Services"; // What we are Creating
import ImageShowcase from "./ImageShowcase";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutReadMore = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.utils.toArray(
      ".about-hero, .services, .image-showcase, .story-section, .network-section"
    ).forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      {/* BACK BUTTON */}
      {/* <button
        onClick={() => navigate(-1)}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
          padding: "10px 18px",
          borderRadius: "30px",
          background: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Back
      </button> */}

      {/* HERO SECTION */}
      <section
        className="about-hero"
        style={{
          height: "75vh",
          background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
          url("/images/about-hero.jpg") center/cover`,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        <h1>About Us</h1>
        <p style={{ maxWidth: "520px", fontWeight:"bolder",fontSize: "18px",}}>
          A destination management platform built to support travel partners with
          seamless operations, trusted expertise, and deep destination knowledge.
        </p>
      </section>

      
      
      {/* IMAGE GALLERY */}
      
<section
  className="about-whatwercreating"
  style={{
    padding: "80px",
    color: "#000",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  }}
>
  {/* HEADING */}
  <h1 style={{ textAlign: "center" }}>What we are Creating</h1>

  {/* IMAGES ROW */}
  <div
    style={{
      display: "flex",
      gap: "30px",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
  >
   <div
  style={{
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  }}
>
  {/* CARD 1 */}
  <div
    style={{
      width: "250px",
      borderRadius: "16px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    }}
  >
    <img
      src="/images/gallery-1.jpg"
      alt="Creating 1"
      style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
      }}
    />
    <div style={{ padding: "16px" }}>
      <h4 style={{ margin: "0 0 8px" }}> Creating Trust</h4>
      <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
      
Consistency, honesty, believe building 3
pillars with peace
      </p>
    </div>
  </div>

  {/* CARD 2 */}
  <div
    style={{
      width: "250px",
      borderRadius: "16px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    }}
  >
    <img
      src="/images/gallery-2.jpg"
      alt="Creating 2"
      style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
      }}
    />
    <div style={{ padding: "16px" }}>
      <h4 style={{ margin: "0 0 8px" }}> People First</h4>
      <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
Your itinerary, our plan
With believe of people first every
interaction with agents or partners is for
understanding your needs and building
trust
      </p>
    </div>
  </div>

  {/* CARD 3 */}
  <div
    style={{
      width: "250px",
      borderRadius: "16px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    }}
  >
    <img
      src="/images/gallery-3.jpg"
      alt="Creating 3"
      style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
      }}
    />
    <div style={{ padding: "16px" }}>
      <h4 style={{ margin: "0 0 8px" }}> Travel Freely</h4>
      <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
       
Because you are trusting us we treat
your journey as our own experience
offering safe travel
      </p>
    </div>
  </div>

  {/* CARD 4 */}
  <div
    style={{
      width: "250px",
      borderRadius: "16px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    }}
  >
    <img
      src="/images/gallery-4.jpg"
      alt="Creating 4"
      style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
      }}
    />
    <div style={{ padding: "16px" }}>
      <h4 style={{ margin: "0 0 8px" }}>Crafting with d</h4>
      <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
    
Crafting in a way that re
memory feels like
      </p>
    </div>
  </div>
</div>

  </div>
</section>


     {/* OUR STORY */}
<section
  className="story-section"
  style={{
    position: "relative",
    padding: "140px 80px",
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
      url("/images/story-bg.jpg")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      fontWeight: "600",
      marginBottom: "18px",
      letterSpacing: "1px",
    }}
  >
    Our Story
  </h2>

  <h4
    style={{
      fontSize: "18px",
      fontWeight: "400",
      marginBottom: "30px",
      opacity: "0.9",
    }}
  >
    We build our stories from your memories
  </h4>

  <p
    style={{
      maxWidth: "820px",
      margin: "0 auto",
      fontSize: "16px",
      lineHeight: "1.9",
      opacity: "0.9",
    }}
  >
    At Odyssey, every itinerary is designed with flow — from the moment a
    traveller steps out, to the moment they return with stories worth keeping.
    We think beyond destinations. We think about moments, about comfort, about
    peace of mind.
    <br />
    <br />
    Because when everything moves smoothly, the traveller is free to feel
    wonder again.
  </p>
</section>


     {/* OUR NETWORK */}
<section
  className="network-section"
  style={{
    padding: "100px 80px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "center",
    }}
  >
    {/* LEFT IMAGE */}
    <div>
      <img
        src="/images/network-map.jpg"
        alt="Network Map"
        style={{
          width: "100%",
          borderRadius: "14px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <h2 style={{ marginBottom: "20px" }}>Our Network</h2>

      <p style={{ marginBottom: "16px", lineHeight: "1.7", color: "#444" }}>
        Yes! we are pinning location for you with our network.
      </p>

      <p style={{ marginBottom: "16px", lineHeight: "1.7", color: "#444" }}>
        Driven by trust and clarity, we simplify travel planning by connecting
        partners with reliable destination expertise — so the focus stays on
        delivering great journeys, not managing complexity.
      </p>

      <p style={{ lineHeight: "1.7", color: "#444" }}>
        Our operations span key destinations including Dubai, Singapore, Bali,
        Thailand, Indonesia, and Malaysia, with a continuously expanding network
        designed to support seamless travel experiences.
      </p>
    </div>
  </div>
</section>
<section  style={{
    position: "relative",
    padding: "140px 80px",
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
      url("/images/image 47.jpg")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
   }}>  
  <h4
    style={{
      fontSize: "18px",
      fontWeight: "400",
      marginBottom: "30px",
      opacity: "0.9",
      
    }}
  >
    We are excited to see you to
    <br />
be a part of our memory
  </h4>
</section>


    
    </div>
  );
};

export default AboutReadMore;
