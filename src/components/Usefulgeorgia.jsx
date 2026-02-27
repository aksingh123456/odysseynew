import "./Useful.css";
const Usefulgeorgia = ({ onClose }) => {
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
              Located at the crossroads of Europe and Asia, bordered by Russia, Turkey, Armenia, and Azerbaijan.
            </p>
          </div>

          <div>
            <strong>Size</strong>
            <p>Approx. 69,700 square kilometres.</p>
          </div>

          <div>
            <strong>Visa</strong>
            <p>
              Many nationalities can enter visa-free for short stays.
            </p>
          </div>

          <div>
            <strong>Local Time</strong>
            <p>GMT +4</p>
          </div>

          <div>
            <strong>Currency</strong>
            <p>Georgian Lari (GEL)</p>
          </div>

          <div>
            <strong>Telephone code</strong>
            <p>+995</p>
          </div>

          <div>
            <strong>Vaccinations</strong>
            <p>Routine vaccinations recommended.</p>
          </div>

          <div>
            <strong>Language</strong>
            <p>Georgian; English increasingly spoken in urban areas.</p>
          </div>
        </div>

        <p className="best-time">
         Best time to visit –  May to October for pleasant weather and mountain access.
        </p>

      </div>
    </div>
  );
};

export default Usefulgeorgia;