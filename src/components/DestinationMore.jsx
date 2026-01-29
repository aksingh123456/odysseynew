import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

import "./DestinationMore.css"; // CSS below

const destinations = [
  {
    title: "Dubai",
    desc: "A modern global city combining luxury, innovation, and cultural experiences.",
    img: "/images/your-dubai-image.jpg",
    link: "/destination-more",
  },
  {
    title: "Thailand",
    desc: "A versatile destination known for vibrant cities, tropical beaches, and rich cultural heritage.",
    img: "/images/your-thailand.jpg",
    link: "/destination-more",
  },
  {
    title: "Bali",
    desc: "A serene island destination celebrated for its landscapes, spirituality, and wellness culture.",
    img: "/images/your-bali.jpg",
    link: "/destination-more",
  },
  {
    title: "Vietnam",
    desc: "A culturally rich destination offering historic cities, scenic landscapes, and authentic experiences.",
    img: "/images/your-vietnam.jpg",
    link: "/destination-more",
  },
  // 3 placeholders
  {
    title: "Azerbaijan",
    desc: "A unique blend of modern architecture and ancient traditions, with scenic landscapes and rich cultural heritage.",
    img: "/images/azerbaijan.jpg",
    link: "/destination-more",
  },
  {
    title: "Georgia",
    desc: "A land of stunning mountains, ancient monasteries, and vibrant culture, perfect for history and nature enthusiasts.",
    img: "/images/georgia.jpg",
    link: "/destination-more",
  },
  {
    title: "Europe",
    desc: "A diverse continent offering historic cities, iconic landmarks, and rich cultural experiences for all travelers.",
    img: "/images/europe.jpg",
    link: "/destination-more",
  },
];

const DestinationMore = () => {
  return (
    <div className="destination-more" id="destination">

      {/* HERO */}
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
        <p>
          Each destination is supported by trusted local networks, ensuring smooth planning, coordination, and execution for travel partners.
        </p>
      </div>

      {/* SWIPER CARDS */}
      <section className="dest-content">
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
      </section>

      {/* CTA */}
      <section className="dest-cta">
        <div className="dest-cta-overlay">
          <p>
            As a full-service destination management company, Odyssey Heritage works closely with travel agents and tour operators to deliver seamless, end-to-end travel solutions. We manage every detail on the ground, ensuring smooth coordination from planning to execution. 
            <br/>
            <span className="highlight-text">Explore the world with Odyssey Heritage.</span>
          </p>
        
<Link to="/contact">
  <button>Contact Us</button>
</Link>
        </div>
      </section>

    </div>
  );
};

export default DestinationMore;
