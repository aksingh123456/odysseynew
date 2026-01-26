import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import ImageShowcase from "./components/ImageShowcase";
import Footer from "./components/Footer";
import DestinationMore from "./components/DestinationMore";
import ServicesMore from "./components/ServicesMore";
import AboutReadMore from "./components/AboutReadMore";
import ContactUs from "./components/ContactUs";
import AdminPanel from "./components/AdminPanel"; // Tera separate file
import LoginModal from "./components/LoginModal"; // Tera separate file

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { initSmoothScroll } from "../smoothScroll";
import { useState, useEffect, useRef } from "react";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  const navbarRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 120);
  }, [location.pathname]);

  // Smooth scroll + Navbar show/hide
  useEffect(() => {
    initSmoothScroll();
    const sections = document.querySelectorAll(".page-section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) navbarRef.current.classList.add("show-navbar");
        else navbarRef.current.classList.remove("show-navbar");
      },
      { threshold: 0.1 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Navbar Links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/destination-more", label: "Destination" },
    { path: "/service-more", label: "Our Service" },
    { path: "/contact", label: "Contact Us" },
    { path: "/login", label: "Login / SignUp" },
    { path: "/admin", label: "Admin Panel" }, // optional
  ];

  return (
    <>
      <ScrollToTop />

      {/* NAVBAR */}
      <nav className="navbar" ref={navbarRef}>
        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src="/images/odyssey-logo.png" alt="Odyssey Logo" style={{ height: "40px" }} />
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li
              key={link.path}
              onClick={() => navigate(link.path)}
              onMouseEnter={() => setHovered(link.path)}
              onMouseLeave={() => setHovered(null)}
              style={{
                cursor: "pointer",
                paddingBottom: "6px",
                color:
                  hovered === link.path || location.pathname === link.path
                    ? "orange"
                    : "#000",
                borderBottom:
                  location.pathname === link.path
                    ? "2px solid orange"
                    : "2px solid transparent",
                transition: "border-bottom 0.25s ease",
              }}
            >
              {link.label}
            </li>
          ))}
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
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>

      <Footer className="page-section" />
    </>
  );
};

export default App;
