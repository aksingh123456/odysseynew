import React from "react";
import "./DestinationMore.css";

const DestinationMore = () => {
  return (
    <div className="destination-more" id="destination">

      {/* HERO SECTION */}
      <section className="dest-hero">
        <img
          src="https://your-image-link-here.jpg"
          alt="Destination Hero"
          className="dest-hero-img"
        />
        <div className="dest-hero-overlay">
          <h1>Destinations</h1>
          <p>Odyssey Heritage</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="dest-intro">
        <h2>Choose Your Destination</h2>
        <p>
          Each destination is supported by trusted local networks, ensuring
          smooth planning, coordination, and execution for travel partners.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="dest-content">

        {/* LEFT */}
        <div className="dest-left">
          <img
            src="https://your-dubai-image.jpg"
            alt="Dubai"
          />
          <h3>Dubai</h3>
          <p>
            A modern global city combining luxury, innovation, and cultural
            experiences. Dubai is well suited for premium leisure travel,
            corporate programs, and large-scale events.
          </p>

          <div className="dest-icons">
            <div>🏙 Capital City</div>
            <div>🍽 Cuisine</div>
            <div>📜 History</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="dest-right">

          <div className="dest-card">
            <img src="https://your-thailand.jpg" alt="Thailand" />
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
            <img src="https://your-bali.jpg" alt="Bali" />
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
            <img src="https://your-vietnam.jpg" alt="Vietnam" />
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
        <p>
          As a full-service destination management company, Odyssey Heritage
          ensures seamless coordination from planning to execution.
        </p>
        <button>Contact Us</button>
      </section>

    </div>
  );
};

export default DestinationMore;
