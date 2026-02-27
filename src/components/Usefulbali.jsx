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
              An island province of Indonesia located between Java and Lombok, known for beaches, volcanic mountains, and rice terraces.
            </p>
          </div>

          <div>
            <strong>Size</strong>
            <p>Indonesia: Approx. 1.9 million square kilometres.</p>
          </div>

          <div>
            <strong>Visa</strong>
            <p>
              Visa-on-arrival available for many nationalities for short stays.
            </p>
          </div>

          <div>
            <strong>Local Time</strong>
            <p>GMT +8 (Bali)</p>
          </div>

          <div>
            <strong>Currency</strong>
            <p>Indonesian Rupiah (IDR)</p>
          </div>

          <div>
            <strong>Telephone code</strong>
            <p>+62</p>
          </div>

          <div>
            <strong>Vaccinations</strong>
            <p>Routine vaccinations recommended.</p>
          </div>

          <div>
            <strong>Language</strong>
            <p>Indonesian (Bahasa Indonesia); English widely spoken in tourism areas.</p>
          </div>
        </div>

        <p className="best-time">
         Best time to visit – April to October (dry season).
        </p>

      </div>
    </div>
  );
};

export default Usefulbali