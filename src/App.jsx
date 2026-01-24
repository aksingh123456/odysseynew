import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import ImageShowcase from "./components/ImageShowcase";
import Footer from "./components/Footer";
import DestinationMore from "./components/DestinationMore";
import ServicesMore from "./components/ServicesMore";
import AboutReadMore from "./components/AboutReadMore";
import ContactUs from "./components/ContactUs";
import { Routes, Route, useNavigate ,useLocation } from "react-router-dom";
import { initSmoothScroll } from "../smoothScroll";
import { useState, useEffect, useRef } from "react";
import LoginModal from "./components/LoginModal";


import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navbarRef = useRef(null);

  useEffect(() => {
    initSmoothScroll();

    const sections = document.querySelectorAll(".page-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navbarRef.current.classList.add("show-navbar");
        } else {
          navbarRef.current.classList.remove("show-navbar");
        }
      },
      { threshold: 0.1 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar" ref={navbarRef}>
        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/images/odyssey-logo.png"
            alt="Odyssey Logo"
            style={{ height: "40px" }}
          />
        </div>

       <ul className="nav-links">
  <li
    className={location.pathname === "/" ? "active" : ""}
    onClick={() => navigate("/")}
  >
    Home
  </li>

  <li
    className={location.pathname === "/about" ? "active" : ""}
    onClick={() => navigate("/about")}
  >
    About
  </li>

  <li
    className={location.pathname === "/destination-more" ? "active" : ""}
    onClick={() => navigate("/destination-more")}
  >
    Destination
  </li>

  <li
    className={location.pathname === "/service-more" ? "active" : ""}
    onClick={() => navigate("/service-more")}
  >
    Our Service
  </li>

  <li
    className={location.pathname === "/contact" ? "active" : ""}
    onClick={() => navigate("/contact")}
  >
    Contact Us
  </li>

  <li
    className={location.pathname === "/login" ? "active" : ""}
    onClick={() => navigate("/login")}
  >
    Login/SignUp
  </li>
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
        <Route path="/login" element={<LoginModal />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutReadMore />} />
        <Route path="/service-more" element={<ServicesMore />} />
        <Route path="/destination-more" element={<DestinationMore />} />
      </Routes>

      <Footer className="page-section" />
    </>
  );
};

export default App;
