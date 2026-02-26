import "./dubai.css";
import { useState } from "react";
import Usefuleurope from "./Usefuleurope";
const  Europe=()=>{
  const [showInfo, setShowInfo] = useState(false);
    return (
       <div className="europe-page">

      {/* 🔹 Hero Section */}
      <div className="hero">
        <img
          src="/images/Rectangle 20.jpg"
          alt="Europe"
        />
        <div className="hero-text">Europe</div>
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
          A continent shaped by centuries of history, culture, and innovation, Europe offers an extraordinary diversity of experiences within a single region. From the timeless architecture of Rome and Paris to the alpine landscapes of Switzerland and the coastal charm of the Mediterranean, Europe blends heritage with modern vibrancy.
Each country presents its own identity—distinct traditions, cuisines, languages, and landscapes—yet together they form a seamless travel network supported by strong infrastructure and connectivity. Whether exploring historic cities, scenic countryside routes, luxury escapes, or curated group programs, Europe provides depth, elegance, and enduring appeal for every kind of journey.
        </p>
      </div>
       {/* 🔹 Image Cards */}
      <div className="gallery">
        <div className="card">
          <img src="/images/image 112.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 113.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 114.png" alt="" />
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80" alt="" />
        </div>
      </div>
         {/* 🔹 Button */}
      <div className="btn-wrap">
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
  Useful Information +
</button>
{showInfo && <Usefuleurope />}
        <p className="explore">Explore More Destinations →</p>
      </div>
      </div>
    );
};
export default Europe;