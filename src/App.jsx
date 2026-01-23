import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import ImageShowcase from "./components/ImageShowcase";
import Footer from "./components/Footer";
import DestinationMore from "./components/DestinationMore";
import ServicesMore from "./components/ServicesMore";
import AboutReadMore from "./components/AboutReadMore";
import ContactUs from "./components/ContactUs";
import { Routes, Route, useNavigate } from "react-router-dom";
import { initSmoothScroll } from "../smoothScroll";
import { useState } from "react";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
   const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);


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
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/destination-more")}>Destination</li>
          <li onClick={() => navigate("/service-more")}>Our Service</li>
          <li onClick={() => navigate("/contact")}>Contact Us</li>
          <li onClick={() => navigate("/login")}>Login/SignUp</li>
          <li></li>
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
             
            </>
          }
        />
        <Route path="/login" element={<LoginModal/>} />
        <Route path="/contact" element={<ContactUs />} />
         <Route path="/about" element={<AboutReadMore />} />
        <Route path="/service-more" element={<ServicesMore />} />
        <Route path="/destination-more" element={<DestinationMore />} />
        <Route path="/about-readmore" element={<AboutReadMore />} />
       
      </Routes>
      
      <Footer />
    </>
  );
};

export default App;
