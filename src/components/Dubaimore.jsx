import "./dubai.css";
import { useState } from "react";
import Usefuldubai from "./Usefuldubai";
import { useNavigate } from "react-router-dom";
const Dubaimore=()=>{
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
    return (
       <div className="dubai-page">

      {/* 🔹 Hero Section */}
      <div className="hero">
        <img
          src="/images/Rectangle 3.jpg"
          alt="Dubai"
        />
        <div className="hero-text">Dubai</div>
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
         Where tradition meets ambition, Dubai stands as a city of striking contrasts. Rising from the desert landscape, it blends futuristic architecture with deep-rooted Arabian heritage. From the serene dunes and historic souks to world-class shopping districts and iconic skylines, Dubai offers a dynamic experience for every traveler.
Beyond its modern appeal, the city preserves its cultural identity through museums, heritage neighborhoods, and traditional cuisine. Whether it’s luxury travel, desert adventures, corporate events, or curated leisure programs, Dubai delivers a seamless blend of innovation, hospitality, and global connectivity.
        </p>
      </div>
       {/* 🔹 Image Cards */}
      <div className="gallery">
        <div className="card">
          <img src="/images/image 86.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 87.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 88.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 85.png" alt="" />
        </div>
      </div>
         {/* 🔹 Button */}
      <div className="btn-wrap">
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
  Useful Information +
</button>
{showInfo && <Usefuldubai onClose={() => setShowInfo(false)}/>}
        <p className="explore" style={{cursor:"pointer"}} onClick={()=>navigate("/destination-more")}>Explore More Destinations →</p>
      </div>
      </div>
    );
};
export default Dubaimore;