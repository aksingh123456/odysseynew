import ReadMore from "./ReadMore";
import { Link } from "react-router-dom";
const services = [
  {
    title: "Free Independent Services",
    desc: "Individual or small-group travelers who want customized,flexible trips.",
    img: "/images/service1.jpg",
  },
  {
    title: "MICE Service",
    desc: "Corporate and business travel + events providing the best Incentive trips, Trade Shows and many more",
    img: "/images/service2.jpg",
  },
  {
    title: "Group Inclusive Tour",
    desc: "Pre-planned tours for large groups along with fixed itineraries, group hotels and many more",
    img: "/images/service3.jpg",
  },
  {
    title: "VISA Service",
    desc: "Assistance with travel visa and documentation along with Business Visas, tourist visa assistance more",
    img: "/images/service4.jpg",
  },
];

const Services = () => {
  return (
    <section className="services" >
      <h2 className="serviceshead">Our Services</h2>

      <div className="service-grid">
        {services.map((s, i) => (
          <Link
            to="/service-more"
            key={i}
            style={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }}
          >
          <div className="service-card" key={i}>
            <img src={s.img} alt={s.title} />
            <div className="overlay">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
           </Link>
        ))}
       
      </div>
 <Link to="/service-more">
    Read More
  </Link>
      
    </section>
  );
};

export default Services;
