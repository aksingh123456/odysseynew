const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">

        <div>
          <h3>Odyssey Heritage</h3>
          <p>Ease, trust, and journeys that unfold gently.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Destinations</h4>
          <ul>
            <li>Thailand</li>
            <li>Bali</li>
            <li>Dubai</li>
            <li>Georgia</li>
          </ul>
        </div>

        <div>
          <h4>Let’s Connect</h4>
          <input placeholder="Email" />
          <input placeholder="Ask your question" />
          <button>Submit</button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
