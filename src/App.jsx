import Hero from "./components/Hero";
import ChatBot from "./components/ChatBot";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import ImageShowcase from "./components/ImageShowcase";
import Footer from "./components/Footer";
import DestinationMore from "./components/DestinationMore";
import ServicesMore from "./components/ServicesMore";
import AboutReadMore from "./components/AboutReadMore";
import ContactUs from "./components/ContactUs";
import Testimonial from "./components/Testimonial";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ScrollToTop from "./components/ScrollToTop";
import TravelLandingPage from "./components/TravelLandingPage";
import Mice from "./components/Mice";
import Customizedpac from "./components/Customizedpac";
import Visaservice from "./components/Visaservice";
import Git from "./components/Git";
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

  //   Navbar show/hide

  useEffect(() => {
    const sections = document.querySelectorAll(".page-section");
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!navbarRef.current) return;
  
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

  
  // Navbar Links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/destination-more", label: "Destination" },
    { path: "/service-more", label: "Our Service" },
    { path: "/contact", label: "Contact Us" },
   
  ];

  return (
    <>
      <ScrollToTop />

      {/* NAVBAR */}
      <nav className="navbar" ref={navbarRef}>
      <div
  className="logo"
  onClick={() => navigate("/")}
  style={{
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
   paddingLeft: "25px",
  }}
>
  <img
    src="/images/odyssey-logo.png"
    alt="Odyssey Logo"
    style={{ maxHeight: "55px",  }}
  />

<span
  style={{
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.1",
  }}
>
  <span
    style={{
      fontSize: "16px",        // smaller Odyssey
      fontWeight: "500",
      letterSpacing: "0.6px",
      color: "#ff8c00",        // 🔁 reversed color
    }}
  >
    Odyssey
  </span>

  <span
    style={{
      fontSize: "11px",        // smaller than Odyssey
      letterSpacing: "1.8px",
      color: "#1f2933",        // 🔁 reversed color
      textTransform: "uppercase",
    }}
  >
    Heritage
  </span>
</span>



</div>

<ul className="nav-links">
  {navLinks.map((link) => {
  const isActive =
    location.pathname === link.path ||
    (link.path === "/service-more" &&
      location.pathname.startsWith("/fit-travel")) || (link.path === "/service-more" &&
      location.pathname.startsWith("/mice")) || (link.path === "/service-more" &&
      location.pathname.startsWith("/customized-packages")) || (link.path === "/service-more" &&
      location.pathname.startsWith("/visa-service"));

  return (
    <li
      key={link.path}
      onClick={() => navigate(link.path)}
      onMouseEnter={() => setHovered(link.path)}
      onMouseLeave={() => setHovered(null)}
      style={{ cursor: "pointer", paddingRight: "25px" }}
    >
      <span
        style={{
          paddingBottom: "6px",
          display: "inline-block",
          color:
            hovered === link.path || isActive ? "orange" : "#000",
          borderBottom: isActive
            ? "2px solid orange"
            : "2px solid transparent",
          transition: "border-bottom 0.25s ease",
        }}
      >
        {link.label}
      </span>
    </li>
  );
})}
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
              <Testimonial />

            </>
          }
        />
       
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutReadMore />} />
        <Route path="/service-more" element={<ServicesMore />} />
        <Route path="/destination-more" element={<DestinationMore />} />
        <Route path="/fit-travel" element={<TravelLandingPage />} />
        <Route path="/mice" element={<Mice />} />
        <Route path="/customized-packages" element={<Customizedpac />} />
        <Route path="/visa-service" element={<Visaservice />} />
        <Route path="/git" element={<Git />} />


        
      </Routes>
      <ChatBot />

      <Footer className="page-section" />
    </>
  );
};

export default App;
