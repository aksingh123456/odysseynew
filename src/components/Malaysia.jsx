import "./dubai.css";
import { useState } from "react";
import Usefulmalaysia from "./Usefulmalaysia";
const Malaysia=()=>{
  const [showInfo, setShowInfo] = useState(false);
    return (
       <div className="malaysia-page">

      {/* 🔹 Hero Section */}
      <div className="hero">
        <img
          src="/images/Rectangle 23.jpg"
          alt="Malaysia"
        />
        <div className="hero-text">Malaysia</div>
      <div className="scroll-down">
          <span>Scroll Down to Explore</span>
          <div className="v-shape"></div>
        </div>
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
         Diverse in landscape and culture, Malaysia is a destination shaped by rainforest canopies, tropical islands, historic towns, and dynamic cities. From the modern skyline of Kuala Lumpur to the heritage streets of Penang and the tranquil beaches of Langkawi, the country offers a balanced mix of nature and urban exploration.
With its multicultural influences, culinary richness, and well-developed tourism infrastructure, Malaysia supports a wide range of travel programs including leisure, group tours, and experiential itineraries. It is a destination where tradition, biodiversity, and contemporary comfort come together effortlessly.
        </p>
      </div>
       {/* 🔹 Image Cards */}
      <div className="gallery">
        <div className="card">
          <img src="/images/image 109.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 110.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 111.png" alt="" />
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80" alt="" />
        </div>
      </div>
       {/* 🔹 Button */}
      <div className="btn-wrap">
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
  Useful Information +
</button>
{showInfo && <Usefulmalaysia  onClose={() => setShowInfo(false)}/>}
        <p className="explore">Explore More Destinations →</p>
      </div>
      </div>
    );
};
export default Malaysia;