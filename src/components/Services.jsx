import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    title: "Free Independent Services",
    desc: "Individual or small-group travelers who want customized, flexible trips.",
    img: "/images/service1.jpg",
    link: "/service-more",
  },
  {
    title: "MICE Service",
    desc: "Corporate and business travel + events providing the best incentive trips.",
    img: "/images/service2.jpg",
    link: "/service-more",
  },
  {
    title: "Group Inclusive Tour",
    desc: "Pre-planned tours for large groups with fixed itineraries and hotels.",
    img: "/images/service3.jpg",
    link: "/service-more",
  },
  {
    title: "VISA Service",
    desc: "Assistance with travel visa and documentation for business & tourist visas.",
    img: "/images/service4.jpg",
    link: "/service-more",
  },
  {
    title: "Cruise Service",
    desc: "Cruise vacations with shore excursions and port transfers.",
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
              <div className="service-card" style={{ position: "relative", overflow: "hidden", borderRadius: "10px" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", display: "block" }} />
                <div className="overlay" style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  padding: "10px",
                  textAlign: "center"
                }}>
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
          textDecoration: "none",
          color: "#000",
        }}
      >
        Read More
      </Link>
    </section>
  );
};

export default Services;
