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
      <button
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
      </button>

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
        <p style={{ maxWidth: "520px" }}>
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
    <img
      src="/images/gallery-1.jpg"
      alt="Creating 1"
      style={{
        width: "250px",
        borderRadius: "14px",
        objectFit: "cover",
      }}
    />

    <img
      src="/images/gallery-2.jpg"
      alt="Creating 2"
      style={{
        width: "250px",
        borderRadius: "14px",
        objectFit: "cover",
      }}
    />

    <img
      src="/images/gallery-3.jpg"
      alt="Creating 3"
      style={{
        width: "250px",
        borderRadius: "14px",
        objectFit: "cover",
      }}
    />

    <img
      src="/images/gallery-4.jpg"
      alt="Creating 4"
      style={{
        width: "250px",
        borderRadius: "14px",
        objectFit: "cover",
      }}
    />
  </div>
</section>


      {/* OUR STORY */}
      <section
        className="story-section"
        style={{
          padding: "120px 80px",
          background: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)),
          url("/images/story-bg.jpg") center/cover`,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2>Our Story</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          We build our stories from your memories. Odyssey Heritage helps you
          relive every travel experience through curated journeys and meaningful
          moments.
        </p>
      </section>

      {/* OUR NETWORK */}
      <section
        className="network-section"
        style={{ padding: "100px 80px", textAlign: "center" }}
      >
        <h2>Our Network</h2>
        <p>
          We are growing trusted networks across global destinations with strong
          local partnerships.
        </p>

        <img
          src="/images/network-map.jpg"
          alt="Network Map"
          style={{
            width: "80%",
            marginTop: "40px",
            borderRadius: "14px",
          }}
        />
      </section>

      <Footer />
    </div>
  );
};

export default AboutReadMore;
