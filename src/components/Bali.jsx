import "./dubai.css";
import { useState } from "react";
import Usefulbali from "./Usefulbali";
const Bali=()=>{
const [showInfo, setShowInfo] = useState(false);
    return (
       <div className="bali-page">

      {/* 🔹 Hero Section */}
      <div className="hero">
        <img
          src="/images/Rectangle 32.jpg"
          alt="Bali"
        />
        <div className="hero-text">Bali</div>
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
         Framed by lush rice terraces, volcanic landscapes, and serene coastlines, Bali is a destination that harmonizes nature and spirituality. Known for its temples, artistic heritage, and wellness culture, the island offers a peaceful yet vibrant travel experience.
From beachside relaxation to cultural immersion and curated retreats, Bali provides diverse travel possibilities supported by strong hospitality services and experiential offerings. It is a destination where tradition and modern comfort coexist effortlessly.
        </p>
      </div>
       {/* 🔹 Image Cards */}
      <div className="gallery">
        <div className="card">
          <img src="/images/image 94.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 95.png" alt="" />
        </div>

        <div className="card">
          <img src="/images/image 96.png" alt="" />
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
{showInfo && <Usefulbali onClose={() => setShowInfo(false)}/>}
        <p className="explore">Explore More Destinations →</p>
      </div>
      </div>
    );
};
export default Bali;