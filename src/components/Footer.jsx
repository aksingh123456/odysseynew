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
          <h4>Let’s Connect</h4>
          <input placeholder="Email" />
          <input placeholder="Ask your question" />
          <button>Submit</button>
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
        © {new Date().getFullYear()} Odyssey Heritage. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
