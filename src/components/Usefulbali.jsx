import "./Useful.css";

const Usefulbali = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">

        {/* ❌ Close button */}
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Useful Information</h2>

        <div className="info-grid">
          <div>
            <strong>Geography</strong>
            <p>
              Located in the United Arab Emirates along the Arabian Gulf,
              surrounded by desert landscapes and modern urban development.
            </p>
          </div>

          <div>
            <strong>Size</strong>
            <p>UAE: Approx. 83,600 square kilometres</p>
          </div>

          <div>
            <strong>Visa</strong>
            <p>
              Visa requirements vary by nationality. Many countries receive
              visa-on-arrival. Advance visa may be required for others.
            </p>
          </div>

          <div>
            <strong>Local Time</strong>
            <p>GMT +4</p>
          </div>

          <div>
            <strong>Currency</strong>
            <p>UAE Dirham (AED)</p>
          </div>

          <div>
            <strong>Telephone code</strong>
            <p>+971</p>
          </div>

          <div>
            <strong>Electricity</strong>
            <p>220-240V. Type G plug (British-style).</p>
          </div>

          <div>
            <strong>Language</strong>
            <p>Arabic is the official language; English is widely spoken.</p>
          </div>
        </div>

        <p className="best-time">
          Best time to visit – November to March, when temperatures are cooler
          and more comfortable.
        </p>

      </div>
    </div>
  );
};

export default Usefulbali