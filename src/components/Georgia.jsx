import "./dubai.css";
import { useState } from "react";
import Usefulgeorgia from "./Usefulgeorgia";
const Georgia=()=>{
  const [showInfo, setShowInfo] = useState(false);
    return (
       <div className="georgia-page">

      {/* 🔹 Hero Section */}
      <div className="hero">
        <img
          src="/images/Rectangle 28.jpg"
          alt="Georgia"
        />
        <div className="hero-text">Georgia</div>
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
         Nestled between Europe and Asia, Georgia is a land of mountain ranges, ancient monasteries, and timeless hospitality. Its cobblestone towns and scenic valleys reflect centuries of history blended with modern vibrancy.
From the Caucasus Mountains to the historic streets of Tbilisi, Georgia offers immersive cultural experiences and picturesque landscapes. With its emerging travel infrastructure and unique identity, the country presents strong potential for curated and group travel programs.
        </p>
      </div>
       {/* 🔹 Image Cards */}
      <div className="gallery">
        <div className="card">
          <img src="/images/image 100.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 101.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 102.png" alt="" />
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=80" alt="" />
        </div>
      </div>
       {/* 🔹 Button */}
      <div className="btn-wrap">
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
  Useful Information +
</button>
{showInfo && <Usefulgeorgia  onClose={() => setShowInfo(false)}/>}
        <p className="explore">Explore More Destinations →</p>
      </div>
      </div>
    );
};
export default Georgia;