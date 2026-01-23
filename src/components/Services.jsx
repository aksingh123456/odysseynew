import ReadMore from "./ReadMore";
import { Link } from "react-router-dom";
const services = [
  {
    // title: "Free Independent Services",
    // desc: "Individual or small-group travelers with customized trips.",
    img: "/images/service1.jpg",
  },
  {
    // title: "MICE Service",
    // desc: "Corporate and business travel & events.",
    img: "/images/service2.jpg",
  },
  {
    // title: "Group Inclusive Tour",
    // desc: "Pre-planned tours for large groups.",
    img: "/images/service3.jpg",
  },
  {
    // title: "VISA Service",
    // desc: "Complete visa assistance with documentation.",
    img: "/images/service4.jpg",
  },
];

const Services = () => {
  return (
    <section className="services" >
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={s.img} alt={s.title} />
            <div className="overlay">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
       
      </div>
 <Link to="/service-more">
    Read More
  </Link>
      
    </section>
  );
};

export default Services;
