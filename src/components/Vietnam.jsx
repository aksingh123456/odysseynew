import "./dubai.css";
import Usefulvietnam from "./Usefulvietnam";
import { useState } from "react";
const Vietnammore=()=>{
  const [showInfo, setShowInfo] = useState(false);
    return (
       <div className="vietnam-page">

      {/* 🔹 Hero Section */}
      <div className="hero">
        <img
          src="/images/Rectangle 30.jpg"
          alt="Vietnam"
        />
        <div className="hero-text">Vietnam</div>
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
         Vietnam unfolds as a journey through history, landscapes, and living traditions. From the limestone karsts of Ha Long Bay to the lantern-lit streets of Hoi An and the dynamic energy of Ho Chi Minh City, the country offers depth and diversity.
Rich in heritage, cuisine, and scenic beauty, Vietnam supports a wide range of travel programs including cultural tours, nature exploration, and urban experiences. Its growing infrastructure and authentic local character make it an increasingly sought-after destination.
        </p>
      </div>
       {/* 🔹 Image Cards */}
      <div className="gallery">
        <div className="card">
          <img src="/images/image 97.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 98.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 99.png" alt="" />
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" alt="" />
        </div>
      </div>
       {/* 🔹 Button */}
      <div className="btn-wrap">
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
  Useful Information +
</button>
{showInfo && <Usefulvietnam />}
        <p className="explore">Explore More Destinations →</p>
      </div>
      </div>
    );
};
export default Vietnammore;