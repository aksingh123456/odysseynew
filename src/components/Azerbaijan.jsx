import "./dubai.css";
import { useState } from "react";
import Usefulazerbaijan from "./Usefulazerbaijan";
const Azerbaijan=()=>{
  const [showInfo, setShowInfo] = useState(false);
    return (
       <div className="azerbaijan-page">

      {/* 🔹 Hero Section */}
      <div className="hero">
        <img
          src="/images/Rectangle 29.jpg"
          alt="Azerbaijan"
        />
        <div className="hero-text">Azerbaijan</div>
      </div>
        {/* 🔹 Tabs */}
      <div className="tabs">
        <span className="active">Overview</span>
        <span>Gallery</span>
        <span>Useful Information</span>
      </div>
       {/* 🔹 Overview Text */}
      <div className="overview">
        <h3>Overview</h3>
        <p>
          Azerbaijan bridges tradition and modernity along the historic Silk Road. From the medieval architecture of Baku’s Old City to contemporary landmarks rising along the Caspian Sea, the country showcases a distinctive blend of cultures.
Its diverse landscapes range from mountain villages to desert plains, offering varied experiences within a compact geography. Azerbaijan is well-suited for cultural exploration, leisure travel, and emerging group programs supported by growing tourism development.
        </p>
      </div>
       {/* 🔹 Image Cards */}
      <div className="gallery">
        <div className="card">
          <img src="/images/image 103.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 104.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 105.png" alt="" />
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=1600&q=80" alt="" />
        </div>
      </div>
      {/* 🔹 Button */}
      <div className="btn-wrap">
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
  Useful Information +
</button>
{showInfo && <Usefulazerbaijan onClose={() => setShowInfo(false)}/>}
        <p className="explore">Explore More Destinations →</p>
      </div>
      </div>
    );
};
export default Azerbaijan;