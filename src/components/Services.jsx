import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    title: "Free Independent Services",
    desc: "Individual or small-group travelers who want customized, flexible trips.",
    img: "/images/service1.jpg",
    link: "/fit-travel",
  },
  {
    title: "MICE Service",
    desc: "Corporate and business travel + events providing the best incentive trips.",
    img: "/images/service2.jpg",
    link: "/mice",
  },
  {
    title: "Group Inclusive Tour",
    desc: "Pre-planned tours for large groups with fixed itineraries and hotels.",
    img: "/images/service3.jpg",
    link: "/git",
  },
  {
    title: "VISA Service",
    desc: "Assistance with travel visa and documentation for business & tourist visas.",
    img: "/images/service4.jpg",
    link: "/visa-service",
  },
  {
    title: "Cruise Service",
    desc: "Best hotels at best prices worldwide.",
    img: "/images/serviceimg6.jpg",
    link: "/service-more",
  },
];

const Services = () => {
  return (
    <section className="services" style={{ position: "relative", padding: "40px 20px" }}>
      {/* Heading */}
      <h2 className="serviceshead">Our Services</h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
         style={{ paddingBottom: "10px" }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {services.map((s, i) => (
          <SwiperSlide key={i}>
            {/* Card Link */}
            <Link to={s.link} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="service-card">
                <img src={s.img} alt={s.title}  />
                <div className="overlay" >
                  <h3>{s.title}</h3>
                  <p style={{ fontSize: "0.9rem" }}>{s.desc}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Read More */}
      <Link
        to="/service-more"
        className="service-readmore"
        style={{
          position: "absolute",
          right: "30px",
          bottom: "20px",
          fontWeight: "600",
          fontSize: "10px", 
          color: "#000",
           textDecoration: "underline", 
        }}
      >
        Read More
      </Link>
    </section>
  );
};

export default Services;
