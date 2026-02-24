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
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
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
          Where tradition meets ambition, Dubai stands as a city of striking
          contrasts. Rising from the desert landscape, it blends futuristic
          architecture with deep-rooted Arabian heritage. From the serene dunes
          and historic souks to world-class shopping districts and iconic
          skylines, Dubai offers a dynamic experience for every traveler.
        </p>
      </div>
       {/* 🔹 Image Cards */}
      <div className="gallery">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60f" alt="" />
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1548013146-72479768bada" alt="" />
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" alt="" />
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29" alt="" />
        </div>
      </div>
      {/* 🔹 Button */}
      <div className="btn-wrap">
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
  Useful Information +
</button>
{showInfo && <Usefulazerbaijan />}
        <p className="explore">Explore More Destinations →</p>
      </div>
      </div>
    );
};
export default Azerbaijan;