import "./Useful.css";

const Usefulazerbaijan = ({ onClose }) => {
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
              Located between Eastern Europe and Western Asia along the Caspian Sea.
            </p>
          </div>

          <div>
            <strong>Size</strong>
            <p>Approx. 86,600 square kilometres.</p>
          </div>

          <div>
            <strong>Visa</strong>
            <p>
             E-visa available for many nationalities via online application.
            </p>
          </div>

          <div>
            <strong>Local Time</strong>
            <p>GMT +4</p>
          </div>

          <div>
            <strong>Currency</strong>
            <p>Azerbaijani Manat (AZN)</p>
          </div>

          <div>
            <strong>Telephone code</strong>
            <p>+994</p>
          </div>

          <div>
            <strong>Vaccinations</strong>
            <p>Routine vaccinations recommended.</p>
          </div>

          <div>
            <strong>Language</strong>
            <p>Azerbaijani; English spoken in major urban areas.</p>
          </div>
        </div>

        <p className="best-time">
          Best time to visit –  April to June and September to October for mild weather.
        </p>

      </div>
    </div>
  );
};

export default Usefulazerbaijan