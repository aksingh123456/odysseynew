import "./Useful.css";

const Usefulsingapur = ({ onClose }) => {
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
             A sovereign island city-state located in Southeast Asia, at the southern tip of the Malay Peninsula, known for its modern skyline and green urban spaces.
            </p>
          </div>

          <div>
            <strong>Size</strong>
            <p>Approx. 734 square kilometres.</p>
          </div>

          <div>
            <strong>Visa</strong>
            <p>
             Visa requirements vary by nationality. Many travelers may enter visa-free for short stays; others may require prior visa approval.
            </p>
          </div>

          <div>
            <strong>Local Time</strong>
            <p>GMT +8</p>
          </div>

          <div>
            <strong>Currency</strong>
            <p>Singapore Dollar (SGD)</p>
          </div>

          <div>
            <strong>Telephone code</strong>
            <p>+65</p>
          </div>

          <div>
            <strong>Vaccinations</strong>
            <p>No mandatory vaccinations for most travelers; routine vaccinations recommended.</p>
          </div>

          <div>
            <strong>Language</strong>
            <p>English, Malay, Mandarin, and Tamil are official languages. English is widely used.</p>
          </div>
        </div>

        <p className="best-time">
          Best time to visit – Year-round destination; February to April generally offers slightly drier weather.
        </p>

      </div>
    </div>
  );
};

export default Usefulsingapur;