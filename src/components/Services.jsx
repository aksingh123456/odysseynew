import { Link } from "react-router-dom";

const services = [
  {
    title: "Free Independent Services",
    desc: "Individual or small-group travelers who want customized, flexible trips.",
    img: "/images/service1.jpg",
  },
  {
    title: "MICE Service",
    desc: "Corporate and business travel + events providing the best incentive trips, trade shows and more.",
    img: "/images/service2.jpg",
  },
  {
    title: "Group Inclusive Tour",
    desc: "Pre-planned tours for large groups with fixed itineraries and hotels.",
    img: "/images/service3.jpg",
  },
  {
    title: "VISA Service",
    desc: "Assistance with travel visa and documentation for business & tourist visas.",
    img: "/images/service4.jpg",
  },
];

const Services = () => {
  return (
    <section className="services" style={{ position: "relative" }}>
      {/* Heading */}
      <h2 className="serviceshead">Our Services</h2>

      {/* Cards */}
      <div className="service-grid">
        {services.map((s, i) => (
          <Link
            to="/service-more"
            key={i}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            <div className="service-card">
              <img src={s.img} alt={s.title} />
              <div className="overlay">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Read More */}
      <Link
  to="/service-more"
  className="service-readmore"
  style={{
    position: "absolute",
    right: "30px",
    bottom: "20px",   // 👈 ab safe hai
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
