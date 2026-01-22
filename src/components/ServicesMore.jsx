import "./ServicesMore.css";

const ServicesMore = () => {
  return (
    <div className="services-more" id="services">

      {/* HERO */}
      <section className="services-hero">
        <img
          src="https://your-hero-image.jpg"
          alt="Our Services"
          className="services-hero-img"
        />
        <div className="services-hero-overlay">
          <h1>Our Services</h1>
          <p>Odyssey Heritage</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="services-grid">

          <div className="service-card">
            <img src="https://your-image.jpg" alt="FIT" />
            <h3>Free Independent Services</h3>
            <p>
              Individual or small‑group travelers who want customized,
              flexible trips.
            </p>
          </div>

          <div className="service-card">
            <img src="https://your-image.jpg" alt="MICE" />
            <h3>MICE Service</h3>
            <p>
              Corporate and business travel, incentive trips, trade shows
              and conferences.
            </p>
          </div>

          <div className="service-card">
            <img src="https://your-image.jpg" alt="Packages" />
            <h3>Customized Packages</h3>
            <p>
              Tailor‑made travel programs designed around specific client
              needs.
            </p>
          </div>

          <div className="service-card">
            <img src="https://your-image.jpg" alt="VISA" />
            <h3>VISA Service</h3>
            <p>
              Assistance with travel visas and documentation with business
              visa support.
            </p>
          </div>

          <div className="service-card">
            <img src="https://your-image.jpg" alt="GIT" />
            <h3>Group Inclusive Tour</h3>
            <p>
              Pre‑planned tours for large groups with fixed itineraries.
            </p>
          </div>

          <div className="service-card">
            <img src="https://your-image.jpg" alt="Cruise" />
            <h3>Cruise Service</h3>
            <p>
              Cruise vacations with shore excursions and port transfers.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <p>Looking to see you soon!</p>
        <button>Explore Now</button>
      </section>

    </div>
  );
};

export default ServicesMore;
