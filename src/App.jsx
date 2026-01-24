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
  const [hovered, setHovered] = useState(null);

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
  onClick={() => navigate("/")}
  onMouseEnter={() => setHovered("/")}
  onMouseLeave={() => setHovered(null)}
  style={{
    cursor: "pointer",
    paddingBottom: "6px",

    color:
    hovered === "/" || location.pathname === "/"
      ? "orange"
       : "#000",

    borderBottom:
       location.pathname === "/"
        ? "2px solid orange"
        : "2px solid transparent",
    transition: "border-bottom 0.25s ease",
  }}
>
  Home
</li>


  <li
  onClick={() => navigate("/about")}
  onMouseEnter={() => setHovered("/about")}
  onMouseLeave={() => setHovered(null)}
  style={{
    cursor: "pointer",
    paddingBottom: "6px",

    color:
    hovered === "/about" || location.pathname === "/about"

      ? "orange"
      : "#000",

    borderBottom:
      location.pathname === "/about"
        ? "2px solid orange"
        : "2px solid transparent",
    transition: "border-bottom 0.25s ease",
  }}
>
  About
</li>


<li
  onClick={() => navigate("/destination-more")}
  onMouseEnter={() => setHovered("/destination-more")}
  onMouseLeave={() => setHovered(null)}
  style={{
    cursor: "pointer",
    paddingBottom: "6px",

      /*  TEXT COLOR */
      color:
      hovered === "/destination-more" || location.pathname === "/destination-more"

        ? "orange"
        : "#000",


    borderBottom:
    
      location.pathname === "/destination-more"
        ? "2px solid orange"
        : "2px solid transparent",
    transition: "border-bottom 0.25s ease",
  }}
>
  Destination
</li>


<li
  onClick={() => navigate("/service-more")}
  onMouseEnter={() => setHovered("/service-more")}
  onMouseLeave={() => setHovered(null)}
  style={{
    cursor: "pointer",
    paddingBottom: "6px",

      /*  TEXT COLOR */
      color:
      hovered === "/service-more" || location.pathname === "/service-more"

        ? "orange"
        : "#000",

    borderBottom:
     
      location.pathname === "/service-more"
        ? "2px solid orange"
        : "2px solid transparent",
    transition: "border-bottom 0.25s ease",
  }}
>
  Our Service
</li>


<li
  onClick={() => navigate("/contact")}
  onMouseEnter={() => setHovered("/contact")}
  onMouseLeave={() => setHovered(null)}
  style={{
    cursor: "pointer",
    paddingBottom: "6px",

      /*  TEXT COLOR */
      color:
      hovered === "/contact" || location.pathname === "/contact"

        ? "orange"
        : "#000",

    borderBottom:
     
      location.pathname === "/contact"
        ? "2px solid orange"
        : "2px solid transparent",
    transition: "border-bottom 0.25s ease",
  }}
>
  Contact Us
</li>


<li
  onClick={() => navigate("/login")}
  onMouseEnter={() => setHovered("/login")}
  onMouseLeave={() => setHovered(null)}
  style={{
    cursor: "pointer",
    paddingBottom: "6px",

      /*  TEXT COLOR */
      color:
      hovered === "/login" || location.pathname === "/login"

        ? "orange"
        : "#000",


    borderBottom:
       location.pathname === "/login"
        ? "2px solid orange"
        : "2px solid transparent",
    transition: "border-bottom 0.25s ease",
  }}
>
  Login / SignUp
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
