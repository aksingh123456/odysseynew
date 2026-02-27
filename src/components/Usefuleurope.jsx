import "./Useful.css";

const Usefuleurope = ({ onClose }) => {
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
             Europe is a diverse continent located in the Northern Hemisphere, bordered by the Atlantic Ocean, Arctic Ocean, Mediterranean Sea, and Asia. It features varied landscapes including mountains, coastlines, plains, and historic cities.
            </p>
          </div>

          <div>
            <strong>Size</strong>
            <p>Approx. 10.18 million square kilometres.</p>
          </div>

          <div>
            <strong>Visa</strong>
            <p>
              Many European countries are part of the Schengen Area, allowing travel across member states with a single Schengen visa. Visa requirements vary by nationality
            </p>
          </div>

          <div>
            <strong>Local Time</strong>
            <p>GMT +8</p>
          </div>

          <div>
            <strong>Currency</strong>
            <p>Euro (EUR) is widely used; some countries use their own currencies (e.g., Swiss Franc, British Pound).</p>
          </div>

          <div>
            <strong>Telephone code</strong>
            <p>Varies by country.</p>
          </div>

          <div>
            <strong>Vaccinations</strong>
            <p>No mandatory vaccinations for most travelers; routine travel vaccinations recommended.</p>
          </div>

          <div>
            <strong>Language</strong>
            <p>Multiple official languages across countries; English is widely spoken in major cities and tourism areas.</p>
          </div>
        </div>

        <p className="best-time">
          Best time to visit –  April to June and September to October offer pleasant weather and fewer crowds. Summer (June–August) is peak season; winter is ideal for alpine and festive travel experiences.
        </p>

      </div>
    </div>
  );
};

export default Usefuleurope