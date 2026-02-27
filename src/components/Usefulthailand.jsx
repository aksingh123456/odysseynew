import "./Useful.css";

const Usefulthailand = ({ onClose }) => {
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
              Located in Southeast Asia, bordered by Myanmar, Laos, Cambodia, and Malaysia, with coastlines along the Andaman Sea and Gulf of Thailand.
            </p>
          </div>

          <div>
            <strong>Size</strong>
            <p>Approx. 513,120 square kilometres.</p>
          </div>

          <div>
            <strong>Visa</strong>
            <p>
             Many nationalities receive visa exemption or visa-on-arrival for short stays.
            </p>
          </div>

          <div>
            <strong>Local Time</strong>
            <p>GMT +7</p>
          </div>

          <div>
            <strong>Currency</strong>
            <p>Thai Baht (THB)</p>
          </div>

          <div>
            <strong>Telephone code</strong>
            <p>+66</p>
          </div>

          <div>
            <strong>Vaccinations</strong>
            <p>No mandatory vaccinations; routine travel vaccines recommended.</p>
          </div>

          <div>
            <strong>Language</strong>
            <p>Thai is the official language; English is spoken in tourist areas.</p>
          </div>
        </div>

        <p className="best-time">
         Best time to visit – November to February, during the cooler and drier season.
        </p>

      </div>
    </div>
  );
};

export default Usefulthailand;