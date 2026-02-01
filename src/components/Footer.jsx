const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">

        <div>
          <img
    src="/images/odyssey-logo.png"   // <-- apna logo ka path yaha
    alt="Odyssey Logo"
    style={{
      height: "150px",   // size adjust kar sakta hai
      width: "auto",
      background: "#gray",
    }}
  />
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Our Experiences</li>
            <li>Our Services</li>
            <li>Payment Links</li>
          </ul>
        </div>

        <div>
          <h4>Destinations</h4>
          <ul>
            <li>Thailand</li>
            <li>Bali</li>
            <li>Vietnam</li>
            <li>Dubai</li>
            <li>Georgia</li>
          </ul>
        </div>
        <div>
          <h4>Our Services</h4>
          <ul>
            <li>FIT</li>
            <li>GIT</li>
            <li>Customized Packages</li>
            <li>MCE</li>
            <li>VISA</li>
          </ul>
        </div>

       <div>
  <h4 style={{ marginBottom: "14px" }}>Let’s Connect</h4>

  <p
    style={{
      marginBottom: "10px",
      fontWeight: "600",
      fontSize: "14px",
      letterSpacing: "0.3px",
    }}
  >
    Odyssey Heritage
  </p>

  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
    <a
      href="tel:+918130659133"
      style={{
        color: "#e5e5e5",
        textDecoration: "none",
        fontSize: "13px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span style={{ fontSize: "14px" }}>📞</span>
      +91 81306 59133
    </a>

    <a
      href="mailto:info@odysseyheritage.co.in"
      style={{
        color: "#e5e5e5",
        textDecoration: "none",
        fontSize: "13px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span style={{ fontSize: "14px" }}>📩</span>
      info@odysseyheritage.co.in
    </a>

    <a
      href="mailto:sales@odysseyheritage.co.in"
      style={{
        color: "#e5e5e5",
        textDecoration: "none",
        fontSize: "13px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span style={{ fontSize: "14px" }}>📩</span>
      sales@odysseyheritage.co.in
    </a>
  </div>
</div>

      </div>

 {/*  COPYRIGHT BAR */}
 <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          marginTop: "40px",
          padding: "15px 0",
          textAlign: "center",
          fontSize: "13px",
          color: "#ccc",
        }}
      >
        © {2024} Odyssey Heritage. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
