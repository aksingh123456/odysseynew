import "./dubai.css";
import { useState } from "react";
import Usefulsingapur from "./Usefulsingapur";
import { useNavigate } from "react-router-dom";
const Singapur=()=>{
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
    return (
       <div className="singapur-page">

      {/* 🔹 Hero Section */}
      <div className="hero">
        <img
          src="/images/Rectangle 27.jpg"
          alt="Singapur"
        />
        <div className="hero-text">Singapore</div>
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
          Compact in size yet global in presence, Singapore is a destination where innovation, culture, and nature exist in seamless harmony. Known for its futuristic skyline, waterfront promenades, and vibrant neighborhoods, the city-state offers a refined blend of tradition and modernity.
Beyond its architectural marvels and world-class infrastructure, Singapore celebrates a rich multicultural identity reflected in its cuisine, festivals, and heritage districts. From luxury leisure travel to corporate programs and curated urban experiences, Singapore delivers efficiency, sophistication, and reliability in every journey
        </p>
      </div>
       {/* 🔹 Image Cards */}
      <div className="gallery">
        <div className="card">
          <img src="/images/image 106.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 107.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 108.png" alt="" />
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1600&q=80" alt="" />
        </div>
      </div>
        {/* 🔹 Button */}
      <div className="btn-wrap">
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
  Useful Information +
</button>
{showInfo && <Usefulsingapur onClose={() => setShowInfo(false)}/>}
        <p className="explore" style={{cursor:"pointer"}} onClick={()=>navigate("/destination-more")}>Explore More Destinations →</p>
      </div>
      </div>
    );
};
export default Singapur;