import "./ServicesMore.css";
import { Link } from "react-router-dom";
const services = [
  {
    img: "/images/serviceimg1.jpg",
    title: "Our Packages",
    desc: "Our Package involves various services such as solo traveling, group travelling, customized packages etc",
    link: "/packages",
  },
  // {
  //   img: "/images/serviceimg2.jpg",
  //   title: "MICE Service",
  //   desc: "Corporate and business travel, incentive trips, trade shows and conferences.",
  // },
  // {
  //   img: "/images/serviceimg3.jpg",
  //   title: "Customized Packages",
  //   desc: "Tailor‑made travel programs designed around specific client needs.",
  // },
  {
    img: "/images/serviceimg4.jpg",
    title: "VISA Service",
    desc: "Assistance with travel visas and documentation along with Business visas, tourist visa assistance and many more",
    link: "/visa-service",
  },
  // {
  //   img: "/images/serviceimg5.jpg",
  //   title: "Group Inclusive Tour",
  //   desc: "Pre‑planned tours for large groups with fixed itineraries.",
  // },
  {
    img: "/images/serviceimg6.jpg",
    title: "Cruise Service",
    desc: "Travel arrangements involving cruise vacations along with shore excursions, port transfer and many more",
    link: "/cts",
  },
];

const ServicesMore = () => {
  return (
    <div className="services-more" id="services">

      {/* HERO */}
      <section className="services-hero">
        <img
          src="/images/hero-img1.jpg"
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
    {services.map((s, i) => (
      <Link
        to={s.link}
        key={i}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="service-card">
          <img src={s.img} alt={s.title} />
          <div className="service-overlay">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* CTA */}
      <section
  className="services-cta"
  style={{
    backgroundImage: 'url("/images/cta-bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px", // section ka height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // vertical center
    alignItems: "center",     // horizontal center
    textAlign: "center",
    color: "#fff",
    borderRadius: "12px",
  }}
>
  <p
    style={{
      fontSize: "28px",
      fontWeight: 600,
      color: "#fff",
      textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
      marginBottom: "30px",
    }}
  >
    Looking to see you soon!
  </p>
  {/* <button
    style={{
      background: "#ff8c00",
      border: "none",
      padding: "16px 36px",
      fontSize: "18px",
      fontWeight: 600,
      color: "#fff",
      cursor: "pointer",
      borderRadius: "8px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
    }}
  >
    Explore Now
  </button> */}
</section>
    </div>
  );
};

export default ServicesMore;
