import React, {  useState,useEffect } from "react";
import Services from "./Services"; // What we are Creating
import ImageShowcase from "./ImageShowcase";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutReadMore = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);


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
    height: "90vh",
    background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
    url("/images/about-hero.jpg") center/cover`,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 80px",
  }}
>
  {/* Text wrapper */}
  <div style={{ marginTop: "100px" }}>
    <h1
      style={{
        marginBottom: "20px",
        fontSize: "64px",
        fontWeight: "600",
      }}
    >
      About Us
    </h1>

    <p
      style={{
        maxWidth: "560px",
        fontSize: "22px",
        lineHeight: "1.6",
        fontWeight: "500",
        margin: 0,
      }}
    >
      A destination management platform built to support travel partners
      with seamless operations, trusted expertise, and deep destination
      knowledge.
    </p>
  </div>
</section>



      
      
      {/* IMAGE GALLERY */}
      
<section
  className="about-whatwercreating"
  style={{
    padding: "80px 20px",
    color: "#000",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  }}
>
  {/* HEADING */}
  <h1
  style={{
    textAlign: "center",
    fontSize: "48px",   // ⬅ increase size here
    fontWeight: "600",
  }}
>
  What we are Creating
</h1>

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
  onMouseEnter={() => setHoveredCard(1)}
  onMouseLeave={() => setHoveredCard(null)}
  style={{
    width: "290px",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",

    /*  HOVER SCALE */
    transform: hoveredCard === 1 ? "scale(1.06)" : "scale(1)",
    transition: "transform 0.3s ease",
  }}
>

    <img
      src="/images/gallery-1.jpg"
      alt="Creating 1"
      style={{
        width: "100%",
        height: "240px",
        objectFit: "cover",
      }}
    />
    <div style={{ padding: "16px" }}>
      <h4 style={{ margin: "0 0 8px" ,  textAlign: "center",}}> Creating Trust</h4>
      <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
      
Consistency, honesty, believe building 3
pillars with peace
      </p>
    </div>
  </div>

  {/* CARD 2 */}
  <div
  onMouseEnter={() => setHoveredCard(2)}
  onMouseLeave={() => setHoveredCard(null)}
  style={{
    width: "290px",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",

    /*  SCALE ON HOVER */
    transform: hoveredCard === 2 ? "scale(1.06)" : "scale(1)",
    transition: "transform 0.3s ease",
  }}
>
    <img
      src="/images/gallery-2.jpg"
      alt="Creating 2"
      style={{
        width: "100%",
        height: "240px",
        objectFit: "cover",
      }}
    />
    <div style={{ padding: "16px" }}>
      <h4 style={{ margin: "0 0 8px",  textAlign: "center", }}> People First</h4>
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
  onMouseEnter={() => setHoveredCard(3)}
  onMouseLeave={() => setHoveredCard(null)}
  style={{
    width: "290px",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",

    /*  SCALE ON HOVER */
    transform: hoveredCard === 3 ? "scale(1.06)" : "scale(1)",
    transition: "transform 0.3s ease",
  }}
>
    <img
      src="/images/gallery-3.jpg"
      alt="Creating 3"
      style={{
        width: "100%",
        height: "240px",
        objectFit: "cover",
      }}
    />
    <div style={{ padding: "16px" }}>
      <h4 style={{ margin: "0 0 8px" ,  textAlign: "center",}}> Travel Freely</h4>
      <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
       
Because you are trusting us we treat
your journey as our own experience
offering safe travel
      </p>
    </div>
  </div>

  {/* CARD 4 */}
  <div
  onMouseEnter={() => setHoveredCard(4)}
  onMouseLeave={() => setHoveredCard(null)}
  style={{
    width: "290px",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",

    /* SCALE ON HOVER */
    transform: hoveredCard === 4 ? "scale(1.06)" : "scale(1)",
    transition: "transform 0.3s ease",
  }}
>
    <img
      src="/images/gallery-4.jpg"
      alt="Creating 4"
      style={{
        width: "100%",
        height: "240px",
        objectFit: "cover",
      }}
    />
    <div style={{ padding: "16px" }}>
      <h4 style={{ margin: "0 0 8px",
          textAlign: "center",
       }}>Crafting with d</h4>
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
    padding: "50px 80px",
    backgroundImage: `
      linear-gradient(rgba(10,30,30,0.75), rgba(10,30,60,0.75)),
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
      fontSize: "50px",
      fontWeight: "600",
      marginBottom: "100px",
      marginTop: "120px", 
      letterSpacing: "1px",
    }}
  >
    Our Story
  </h2>

  <h4
    style={{
      fontSize: "28px",
      fontWeight: "500",
      marginBottom: "30px",
      marginTop: "85px",
      opacity: "0.9",
    }}
  >
    We build our stories from your memories
  </h4>

  <p
    style={{
      maxWidth: "820px",
      margin: "0 auto",
      fontSize: "22px",
      lineHeight: "1.4",
      opacity: "0.9",
    }}
  >
    At Odyssey, every itinerary is designed with flow — from the moment a
    traveller steps out, to the moment they return with stories worth keeping.
    We think beyond destinations. We think about moments, about comfort, about
    peace of mind.
    Because when everything moves smoothly, the traveller is free to feel
    wonder again.
  </p>
</section>


     {/* OUR NETWORK */}
     <section
  className="network-section"
  style={{
    padding: "60px 80px",
    backgroundColor: "#ffffff",
    boxShadow:
      "0 -15px 30px rgba(0,0,0,0.08), 0 15px 30px rgba(0,0,0,0.08)",
  }}
>
  {/* SECTION TITLE */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "50px",
      fontWeight: "650",
      marginBottom: "30px",
      color: "#2f3a3f",
    }}
  >
    Our Network
  </h2>

  {/* CONTENT GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "50px",
      alignItems: "center",
    }}
  >
    {/* LEFT IMAGE */}
    <div
      style={{
        background: "#ffffff",
        padding: "14px",
        borderRadius: "18px",
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      }}
    >
      <img
        src="/images/network-map.jpg"
        alt="Network Map"
        style={{
          width: "100%",
          borderRadius: "12px",
          display: "block",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "500",
          marginBottom: "28px",
          color: "#2f3a3f",
        }}
      >
        Yes! we are pinning location for you with our network
      </p>

      <p
        style={{
          marginBottom: "20px",
          lineHeight: "1.6",
          fontSize: "20px",
          color: "#555",
        }}
      >
        Driven by trust and clarity, we simplify travel planning by connecting
        partners with reliable destination expertise — so the focus stays on
        delivering great journeys, not managing complexity.
      </p>

      <p
        style={{
          lineHeight: "1.6",
          fontSize: "20px",
          color: "#555",
        }}
      >
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
   
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    alignItems: "center",      // vertical center
    justifyContent: "center",  // horizontal center
    textAlign: "center",
   }}>  
  <h4
    style={{
      fontSize: "35px",
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
