import "./dubai.css";
import { useState } from "react";
import Usefulthailand from "./Usefulthailand";
const Thailand=()=>{
  const [showInfo, setShowInfo] = useState(false);
    return (
       <div className="thailand-page">

      {/* 🔹 Hero Section */}
      <div className="hero">
        <img
          src="/images/Rectangle 31.jpg"
          alt="Thailand"
        />
        <div className="hero-text">Thailand</div>
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
         A land of warm hospitality and diverse landscapes, Thailand captivates with its balance of vibrant cities, tranquil beaches, and spiritual heritage. From bustling Bangkok to the serene islands and ancient temples, the country offers a rich mix of cultural and leisure experiences.
Thailand’s well-developed travel infrastructure, culinary diversity, and welcoming atmosphere make it ideal for leisure travel, group tours, and incentive programs. With experiences ranging from tropical retreats to cultural exploration, Thailand remains one of Asia’s most versatile destinations.
        </p>
      </div>
       {/* 🔹 Image Cards */}
      <div className="gallery">
        <div className="card">
          <img src="/images/image 90.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 91.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 92.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 93.png" alt="" />
        </div>
      </div>
        {/* 🔹 Button */}
      <div className="btn-wrap">
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
  Useful Information +
</button>
{showInfo && <Usefulthailand onClose={() => setShowInfo(false)}/>}
        <p className="explore">Explore More Destinations →</p>
      </div>
      </div>
    );
};
export default Thailand;