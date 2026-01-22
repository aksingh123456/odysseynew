import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import ImageShowcase from "./components/ImageShowcase";
import Footer from "./components/Footer";
import DestinationMore from "./components/DestinationMore";
import ServicesMore from "./components/ServicesMore";
import AboutReadMore from "./components/AboutReadMore";
import { Routes, Route, useNavigate } from "react-router-dom";
import { initSmoothScroll } from "../smoothScroll";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    initSmoothScroll();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>Odyssey</div>

        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => navigate("/destination-more")}>Destination</li>
          <li onClick={() => navigate("/service-more")}>Our Service</li>
          <li onClick={() => scrollToSection("contact")}>Contact Us</li>
        </ul>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutSection />
              <Services />
              <ImageShowcase />
              <Footer />
            </>
          }
        />
        <Route path="/service-more" element={<ServicesMore />} />
        <Route path="/destination-more" element={<DestinationMore />} />
        <Route path="/about-readmore" element={<AboutReadMore />} />
       
      </Routes>
    </>
  );
};

export default App;
