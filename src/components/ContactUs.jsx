import "./ContactUs.css";

const ContactUs = () => {
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
            F‑45, Noida Sector 51 Near Metro Station sector 51,
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
        <div className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="" />

          <label>Email:</label>
          <input type="email" placeholder="" />

          <label>Message:</label>
          <textarea rows="6"></textarea>

          <p className="terms">
            By proceeding ahead, you agree to our
            <span> terms of service </span>
            and acknowledge you have read our
            <span> privacy policy</span>.
          </p>
        </div>

      </section>

    </div>
  );
};

export default ContactUs;
