import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Mr. Mujib",
    text:
      "We would like to thank you for your support and appreciate your quick actions and responses during our trip, even when we faced an issue.",
    image: "/images/mujib.jpg"
  },
  {
    name: "Mr. Ahmed",
    text:
      "Thank you so much for your wonderful hospitality and excellent arrangements. Our travelers shared their experience and described it as amazing.",
    image: "/images/ahmed.jpg"
  },
  {
    name: "Ms. Nis",
    text:
      "Thank you for the fantastic job you did organizing the Dubai tour for our clients. They had an incredible time.",
    image: "/images/nis.jpg"
  },
  {
    name: "Mr. Ali",
    text:
      "Best service, cooperative team and very easy-to-handle process. Looking forward to more trips.",
    image: "/images/ali.jpg"
  }
];


const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2>What people say</h2>
      <p className="subtitle">
        Our customer are our top priority, let’s hear what they have to say.
      </p>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        loopedSlides={testimonials.length}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="testimonial-swiper"
      >
        {testimonials.concat(testimonials).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div
                className="avatar"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
              <p className="text">“{item.text}”</p>
              <span className="name">— {item.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
