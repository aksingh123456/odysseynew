import React from "react";
import "./DestinationMore.css";

const DestinationMore = () => {
  return (
    <div className="destination-more" id="destination">

      {/* HERO SECTION */}
      <section className="dest-hero">
        <img
          src="/images/your-image-link-here.jpg"
          alt="Destination Hero"
          className="dest-hero-img"
        />
        <div className="dest-hero-overlay">
          <h1>Destinations</h1>
          <p>Odyssey Heritage</p>
        </div>
      </section>

      {/* INTRO */}
       <div className="dest-intro">
        <h2>Choose Your Destination</h2>
        <p style={{fontWeight:"bold",letterSpacing:"-0.9px"}}>
          Each destination is supported by trusted local networks, ensuring
          smooth planning, coordination, and execution for travel partners.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <section className="dest-content">

        {/* LEFT */}
        <div className="dest-left">
          <img
            src="/images/your-dubai-image.jpg"
            alt="Dubai"
          />
          <h3 style={{marginBottom: "10px"}}>Dubai</h3>
          <p style={{fontSize: "26px", color: "#555"}}>
            A modern global city combining luxury, innovation, and cultural
            experiences. Dubai is well suited for premium leisure travel,
            corporate programs, and large-scale eventssupported by world-class infrastructure and services.
          </p>

          <div className="dest-icons" style={{fontSize:"25px"}}>
            <div>🏙 Capital City</div>
            <div>🍽 Cuisine</div>
            <div>📜 History</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="dest-right">

          <div className="dest-card">
            <img src="/images/your-thailand.jpg" alt="Thailand" />
            <div>
              <h4>Thailand</h4>
              <p>
                A versatile destination known for vibrant cities, tropical
                beaches, and rich cultural heritage.
              </p>
              <span>Read More →</span>
            </div>
          </div>

          <div className="dest-card">
            <img src="/images/your-bali.jpg" alt="Bali" />
            {/* <img
          src="/images/hero-img1.jpg"
          alt="Our Services"
          className="services-hero-img"
        /> */}
            <div>
              <h4>Bali</h4>
              <p>
                A serene island destination celebrated for its landscapes,
                spirituality, and wellness culture.
              </p>
              <span>Read More →</span>
            </div>
          </div>

          <div className="dest-card">
            <img src="/images/your-vietnam.jpg" alt="Vietnam" />
            <div>
              <h4>Vietnam</h4>
              <p>
                A culturally rich destination offering historic cities, scenic
                landscapes, and authentic experiences.
              </p>
              <span>Read More →</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
    <section className="dest-cta">
  <div className="dest-cta-overlay">
    <p>
 As a full-service destination management company, Odyssey Heritage works closely with
travel agents and tour operators to deliver seamless, end-to-end travel solutions. We
manage every detail on the ground, ensuring smooth coordination from planning to
execution. We look forward to collaborating with you and sharing our destination expertise.
  <br />
  <span className="highlight-text">
    Explore the world with Odyssey Heritage.
  </span>


    </p>
    <button>Contact Us</button>
  </div>
</section>


    </div>
  );
};

export default DestinationMore;
