import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../index.css";

// import required modules
import { Pagination, Autoplay } from "swiper";


export default function Carousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        autoplay={
          {
            delay: 2500,

          }
        }
        modules={[Pagination, Autoplay]}
        className="mySwiper shadow animate__animated animate__fadeIn"
      >
        <SwiperSlide>


          <img src="./images/ironman.jpg" alt="..." />
          <div style={
            {
              color: 'white',
              background: 'rgba(0,0,0,0.3)',
              position: "absolute",
              top: '55%',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '20px',
              borderRadius: '10px'

            }
          }>
            <h2>IRONMAN III</h2>
            <p>"Sometimes you've gotta run before you can walk"</p>
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <img src="./images/wonderwoman.jpeg" alt="..." />
          <div style={
            {
              color: 'white',
              background: 'rgba(0,0,0,0.3)',
              position: "absolute",
              top: '55%',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '20px',
              borderRadius: '10px'

            }
          }>
            <h2>Wonder Woman 2023</h2>
            <blockquote>“You are stronger than you believe. You have greater powers than you know.”</blockquote>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="./images/batman.jpeg" alt="..." />
          <div style={
            {
              color: 'white',
              background: 'rgba(0,0,0,0.3)',
              position: "absolute",
              top: '55%',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '20px',
              borderRadius: '10px'

            }
          }>
            <h2>Bat Man 2023</h2>
            <p>"I am Vengeance"</p>
          </div>
        </SwiperSlide>



      </Swiper>
    </>
  );
}