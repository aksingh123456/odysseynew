import "./Useful.css";

const Usefulmalaysia = ({ onClose }) => {
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
            Located in Southeast Asia, divided into Peninsular Malaysia and East Malaysia (on Borneo Island), featuring tropical rainforests, coastlines, and modern cities.
            </p>
          </div>

          <div>
            <strong>Size</strong>
            <p>Approx. 330,803 square kilometres.</p>
          </div>

          <div>
            <strong>Visa</strong>
            <p>
              Many nationalities enjoy visa-free entry for short stays; visa requirements depend on nationality.
            </p>
          </div>

          <div>
            <strong>Local Time</strong>
            <p>GMT +8</p>
          </div>

          <div>
            <strong>Currency</strong>
            <p>Malaysian Ringgit (MYR)</p>
          </div>

          <div>
            <strong>Telephone code</strong>
            <p>+60</p>
          </div>

          <div>
            <strong>Vaccinations</strong>
            <p>Routine vaccinations recommended for travelers.</p>
          </div>

          <div>
            <strong>Language</strong>
            <p>Malay (Bahasa Malaysia) is the official language; English is widely spoken.</p>
          </div>
        </div>

        <p className="best-time">
          Best time to visit –  Generally May to September for the west coast; travel seasons vary by region due to monsoons.
        </p>

      </div>
    </div>
  );
};

export default Usefulmalaysia;