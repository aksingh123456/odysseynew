const ImageShowcase = () => {
  return (
    <section
      className="image-showcase"
      style={{
        position: "relative",
        padding: "120px 80px",
        backgroundImage: `url("/images/showcase-bg.jpg")`, // 👉 yaha apni image ka path dal dena
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     

      {/* CONTENT */}
      <h2>
        What offer the Best, so you can <br />
        create memory that last
      </h2>

      <div className="image-collage">
  <img src="/images/img1.jpg" className="card left" />
  <img src="/images/img2.jpg" className="card center" />
  <img src="/images/img3.jpg" className="card right" />
</div>
    </section>
  );
};

export default ImageShowcase;
