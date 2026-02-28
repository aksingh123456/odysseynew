import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

const services = [
  { title: "Guidance on required documentation", img: "/images/image 77.png" },
  { title: "Application form assistance", img: "/images/image 78.png" },
  { title: "Appointment scheduling support", img: "/images/image 79.png" },
  { title: "Coordination with visa centers", img: "/images/image 80.png" },
  { title: "Status tracking assistance", img: "/images/image 81.png" }
];

const destinations = [
  {
    title: "Dubai",
    desc: " Dubai is well suited for premium leisure travel, corporate programs, and large-scale events, supported by world-class infrastructure and services.",
    img: "/images/your-dubai-image.jpg",
    link: "/dubai",
  },
  {
    title: "Thailand",
    desc: " Thailand offers a strong balance of leisure, wellness, and experiential travel supported by well-developed tourism infrastructure.",
    img: "/images/your-thailand.jpg",
    link: "/thailand",
  },
  {
    title: "Bali",
    desc: "A serene island destination celebrated for its landscapes, spirituality, and wellness culture. Bali is ideal for leisure travel, retreats, and customized programs, with diverse experiences across beaches, villages, and nature.",
    img: "/images/your-bali.jpg",
    link: "/bali",
  },
  {
    title: "Vietnam",
    desc: "A culturally rich destination offering historic cities, scenic landscapes, and authentic local experiences. Vietnam supports a wide range of itineraries, from heritage and culinary travel to nature-based and urban exploration.",
    img: "/images/your-vietnam.jpg",
    link: "/vietnam",
  },
  // 3 placeholders
  {
    title: "Azerbaijan",
    desc: "A unique blend of modern architecture and ancient traditions, with scenic landscapes and rich cultural heritage.",
    img: "/images/azerbaijan.jpg",
    link: "/azerbaijan",
  },
  {
    title: "Georgia",
    desc: "A land of stunning mountains, ancient monasteries, and vibrant culture, perfect for history and nature enthusiasts.",
    img: "/images/georgia.jpg",
    link: "/georgia",
  },
  {
    title: "Europe",
    desc: "A diverse continent offering historic cities, iconic landmarks, and rich cultural experiences for all travelers.",
    img: "/images/europe.jpg",
    link: "/europe",
  },
  {
    title: "Singapore",
    desc: " Known for its futuristic skyline, waterfront promenades, and vibrant neighborhoods, the city-state offers a refined blend of tradition and modernity.",
    img: "/images/image 107.png",
    link: "/singapore",
  },
  {
    title: "Malaysia",
    desc: " It is a destination where tradition, biodiversity, and contemporary comfort come together effortlessly..",
    img: "/images/image 111.png",
    link: "/malaysia",
  },
  
];

export default function Visaservice() {
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
        <img src="/images/image 83.png" alt="hero" />
        <div className="hero-text">Cruise Travel Services</div>
      </div>

      {/* Intro */}
      <div className="section">
        <h2>Cruise Travel Services</h2>
        <p>
        Comprehensive cruise travel coordination supported by seamless pre- and post-cruise arrangements, reliable ground handling, and destination expertise.
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
     <Swiper
               modules={[Autoplay]}
               loop
               autoplay={{ delay: 2500, disableOnInteraction: false }}
               spaceBetween={30}
               breakpoints={{
                 320: { slidesPerView: 1 },
                 768: { slidesPerView: 2 },
                 1024: { slidesPerView: 4 },
               }}
             >
               {destinations.map((d, i) => (
                <SwiperSlide key={i}>
       <Link to={d.link} style={{ textDecoration: "none", color: "inherit" }}>
         <div className="dest-service-card">
           <div className="dest-image-wrap"> <img src={d.img} alt="destination" /></div>
           {/* CONTENT BELOW IMAGE */}
           <div className="dest-card-content">
             {d.title && <h3>{d.title}</h3>}
             {d.desc && <p>{d.desc}</p>}
           </div>
         </div>
       </Link>
     </SwiperSlide>
     
               ))}
             </Swiper>
      {/* CTA */}
      <div className="cta">
        <img src="/images/cta-bg.jpg" alt="connect" />
        <div className="cta-content">
          <h3>Lets Connect!</h3>
          <button>Reach Us</button>
        </div>
      </div>
    </div>
  );
}
