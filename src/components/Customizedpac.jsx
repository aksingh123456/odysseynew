import React from "react";

const services = [
  { title: "Customized luxury safaris", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { title: "Private tours & experiences", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { title: "Honeymoon getaways", img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98" },
  { title: "Local food & cultural tours", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
  { title: "Budget friendly holidays", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }
];

const destinations = [
  {
    title: "Thailand",
    img:"/images/your-thailand.jpg",
    desc: "Explore tropical beaches, vibrant nightlife and rich culture."
  },
  {
    title: "Bali",
    img: "/images/your-bali.jpg",
    desc: "A paradise with serene temples, rice terraces and sunsets."
  },
  {
    title: "Dubai",
    img: "/images/your-dubai-image.jpg",
    desc: "Luxury shopping, desert safaris and modern architecture."
  },
  {
    title: "Vietnam",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    desc: "Lush landscapes, rivers and cultural heritage."
  }
];

export default function Customizedpac() {
  return (
    <div className="page">
      <style>{`
       * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
        .page { background: #f3f4f6;   padding-bottom: 40px;}

        .hero { margin:0; border-radius:0; overflow: hidden; position: relative; }
        .hero img { width: 100%; height: 500px; object-fit: cover; }
        .hero-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 40px; font-weight: bold; background: rgba(0,0,0,0.25); }

        .section { padding: 0 20px; margin-top: 32px; }
        .section h2 { font-size: 20px; margin-bottom: 12px; color: #111; }
        .section p { font-size: 14px; color: #555;}

        .grid { display: grid; gap: 20px; margin-top: 16px; width : 100%; }
        .grid.services { grid-template-columns: repeat(5, 1fr); }
        .grid.destinations { grid-template-columns: repeat(4, 1fr); }

        .card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
        .card img { width: 100%; height: 100px; object-fit: cover; }
        .card.small img { height: 100px; }
        .card.large img { height: 160px; }
        .card-content { padding: 10px; font-size: 12px; color: #444; text-align: center; }
        .card-content h4 { font-size: 14px; margin-bottom: 4px; color: #111; text-align: left; }
        .card-content p { font-size: 12px; text-align: left; color: #666; }

        .cta { margin: 40px; border-radius: 16px; overflow: hidden; position: relative; }
        .cta img { width: 100%; height: 300px; object-fit: cover; }
        .cta-content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(0,0,0,0.35); color: #fff; }
        .cta button { margin-top: 8px; background: #f97316; border: none; padding: 10px 20px; border-radius: 6px; color: #fff; font-weight: 600; cursor: pointer; }
        .cta button:hover { background: #ea580c; }

        /* Responsive */
        @media (max-width: 1024px) {
          .grid.services { grid-template-columns: repeat(3, 1fr); }
          .grid.destinations { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .navbar { flex-direction: column; align-items: flex-start; gap: 10px; }
          .nav-links a { margin-left: 0; margin-right: 12px; }
          .hero img { height: 220px; }
          .hero-text { font-size: 28px; }
          .section { padding: 0 20px; }
          .hero { margin: 20px; }
          .cta { margin: 20px; }
          .grid.services { grid-template-columns: repeat(2, 1fr); }
          .grid.destinations { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Navbar */}
     

      {/* Hero */}
      <div className="hero">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="hero" />
        <div className="hero-text">Customized Travel Programs</div>
      </div>

      {/* Intro */}
      <div className="section">
        <h2>Customized Travel Programs</h2>
        <p>
          Customized Packages are flexible travel programs created to match individual or group requirements. From itinerary design to on-ground execution, we collaborate closely with travel partners to deliver journeys aligned with client expectations, budget, and travel purpose.
This service combines personalization with operational reliability.
        </p>
      </div>

      {/* Services */}
      <div className="section">
        <h2>What We Offer:</h2>
        <div className="grid services">
          {services.map((s, i) => (
            <div key={i} className="card small">
              <img src={s.img} alt={s.title} />
              <div className="card-content">{s.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Destinations */}
      <div className="section">
        <h2>Destinations We Offer:</h2>
        <div className="grid destinations">
          {destinations.map((d, i) => (
            <div key={i} className="card large">
              <img src={d.img} alt={d.title} />
              <div className="card-content">
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="connect" />
        <div className="cta-content">
          <h3>Lets Connect!</h3>
          <button>Reach Us</button>
        </div>
      </div>
    </div>
  );
}
