import "./Useful.css";

const Usefulvietnam = ({ onClose }) => {
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
              Located in Southeast Asia, stretching along the South China Sea with diverse landscapes including mountains, rivers, and coastline.
            </p>
          </div>

          <div>
            <strong>Size</strong>
            <p>Approx. 331,212 square kilometres.</p>
          </div>

          <div>
            <strong>Visa</strong>
            <p>
             E-visa available for many nationalities; visa requirements vary.
            </p>
          </div>

          <div>
            <strong>Local Time</strong>
            <p>GMT +7</p>
          </div>

          <div>
            <strong>Currency</strong>
            <p>Vietnamese Dong (VND)</p>
          </div>

          <div>
            <strong>Telephone code</strong>
            <p>+84</p>
          </div>

          <div>
            <strong>Vaccinations</strong>
            <p>Routine vaccinations recommended.</p>
          </div>

          <div>
            <strong>Language</strong>
            <p>Vietnamese; English spoken in major cities and tourism areas.</p>
          </div>
        </div>

        <p className="best-time">
         Best time to visit –  Varies by region; generally October to April offers pleasant weather.
        </p>

      </div>
    </div>
  );
};

export default Usefulvietnam;