import React from 'react'
import "./Packages.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"
const services = [
  { title: "Customized luxury safaris", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { title: "Private tours & experiences", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { title: "Honeymoon getaways", img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98" },
  { title: "Local food & cultural tours", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
  { title: "Budget friendly holidays", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }
];
const services1 = [
  { title: "Customized luxury safaris", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { title: "Private tours & experiences", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { title: "Honeymoon getaways", img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98" },
  { title: "Local food & cultural tours", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
  { title: "Budget friendly holidays", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }
];
const services2 = [
  { title: "Customized luxury safaris", img: "/images/image 67.jpg" },
  { title: "Private tours & experiences", img: "/images/image 68.jpg" },
  { title: "Honeymoon getaways", img: "/images/image 69.jpg" },
  { title: "Local food & cultural tours", img: "/images/image 70.jpg" },
  { title: "Budget friendly holidays", img: "/images/image 71.jpg" }
];
const services3 = [
  { title: "Customized luxury safaris", img: "/images/image 67.jpg" },
  { title: "Private tours & experiences", img: "/images/image 68.jpg" },
  { title: "Honeymoon getaways", img: "/images/image 69.jpg" },
  { title: "Local food & cultural tours", img: "/images/image 70.jpg" },
  { title: "Budget friendly holidays", img: "/images/image 71.jpg" }
];
const destinations = [
  {
    title: "Thailand",
    img: "/images/your-thailand.jpg",
    desc: " Thailand offers a strong balance of leisure, wellness, and experiential travel supported by well-developed tourism infrastructure.."
  },
  {
    title: "Bali",
    img: "/images/your-bali.jpg",
    desc: "A serene island destination celebrated for its landscapes, spirituality, and wellness culture."
  },
  {
    title: "Dubai",
    img:"/images/your-dubai-image.jpg",
    desc:"A modern global city combining luxury, innovation, and cultural experiences."
  },
  {
    title: "Vietnam",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    desc: "A culturally rich destination offering historic cities, scenic landscapes, and authentic experiences.."
  },
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
];
const Packages = () => {
   return (
    <div className="page">
    

      {/* Navbar */}
     

      {/* Hero */}
      <div className="hero-wrapper">
      <div className="hero">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2200 }}
        loop={true}
          className="hero-swiper"
      >
        <SwiperSlide>
          <img src="/images/image 72.jpg" alt="hero1" />
        </SwiperSlide>

        {/* Yahan tum apni 2 aur images add kar dena */}
        <SwiperSlide>
          <img src="/images/image 115.jpg" alt="hero2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/image 116.jpg" alt="hero3" />
          
        </SwiperSlide>
      </Swiper>


  {/* Overlay Layer */}


      <div className="hero-text">Our Packages</div>
    </div>
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

      {/* Intro */}
      <div className="section">
        <h2>FIT-Free Independent Travel</h2>
        <p>
          Free Independent Travel (FIT) is designed for individual travelers and small groups seeking customized, flexible itineraries. Our team manages the planning, coordination, and ground operations to ensure smooth execution across destinations.
        </p>
      </div>

      {/* Services */}
      <div className="section">
        <h2>What We Offer:</h2>
        <div className="grid services">
          {services1.map((s, i) => (
            <div key={i} className="card small">
              <img src={s.img} alt={s.title} />
              <div className="card-content">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
       {/* Intro */}
      <div className="section">
        <h2>Group Inclusive Tours</h2>
        <p>
         Structured travel programs designed for groups, supported by coordinated logistics, reliable supplier networks, and seamless on-ground execution.
        </p>
      </div>

      {/* Services */}
      <div className="section">
        <h2>What We Offer:</h2>
        <div className="grid services">
          {services2.map((s, i) => (
            <div key={i} className="card small">
              <img src={s.img} alt={s.title} />
              <div className="card-content">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
       {/* Intro */}
      <div className="section">
        <h2>MICE:Meetings, Incentives, Conferences & Exhibitions</h2>
        <p>
          Our MICE services are designed to support corporate clients and event planners with structured planning, logistical coordination, and smooth on-ground execution. From small executive meetings to large incentive groups, we manage every operational detail with clarity and precision
        </p>
      </div>

      {/* Services */}
      <div className="section">
        <h2>What We Offer:</h2>
        <div className="grid services">
          {services3.map((s, i) => (
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

  <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  loop={true}
  speed={700}
  spaceBetween={20}
  slidesPerView={4}
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
    {destinations.map((d, i) => (
      <SwiperSlide key={i}>
        <div className="card large">
          <img src={d.img} alt={d.title} />
          <div className="card-content">
            <h4>{d.title}</h4>
            <p>{d.desc}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
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
   
   )
      
}


export default Packages