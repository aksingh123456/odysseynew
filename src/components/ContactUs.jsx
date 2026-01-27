import { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

const [showSuccess, setShowSuccess] = useState(false);

  // ✅ API URL from ENV (generic)
  const API_URL = import.meta.env.VITE_MAILER_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${API_URL}/send-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setShowSuccess(true); 
        setStatus("");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }
  };

  return (
    <div className="contact-page">

      {/* HEADING */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Simply fill in the form providing your contact details and some
          information about your query and we'll do our best to get back to you
          as soon as we can.
        </p>
      </section>

      {/* CONTENT */}
      <section className="contact-content">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Address</h3>
          <p>
            F-45, Noida Sector 51 Near Metro Station sector 51,
            <br />
            Noida 201301
          </p>

          <h3>Email:</h3>
          <p className="email">
            info@odysseyheritage.co.in <br />
            sales@odysseyheritage.co.in
          </p>
        </div>

      {/* RIGHT FORM */}
{/* RIGHT FORM */}
<div className="contact-form">
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>

    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>

    <div className="form-group">
      <label>Query</label>
      <textarea
        rows="12"
        placeholder="Write your query..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
    </div>

    <button type="submit" className="send-btn">
      Send Message
    </button>

    <p className="terms">
      By proceeding ahead, you agree to our
      <span> terms of service </span>
      and acknowledge you have read our
      <span> privacy policy</span>.
    </p>
  </form>
</div>



      </section>



  {/*  SUCCESS MODAL GOES HERE */}

      {showSuccess && (
  <div className="success-overlay">
    <div className="success-modal">
      <div className="success-icon">
        <span>✓</span>
      </div>

      <h2>Thank you!</h2>
      <p>We will reach you soon.</p>

      <button onClick={() => setShowSuccess(false)}>
        Close
      </button>
    </div>
  </div>
)}


    </div>
  );
};

export default ContactUs;
