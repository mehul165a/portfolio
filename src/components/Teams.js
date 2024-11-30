import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Teams = () => {
  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">My Work</h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="card">
              <div className="box">
                <img src="/images/Justice_Link.png" alt="App Design" />
                <div className="text">App Design</div>
                <p>App made for Smart India Hackathon 2023.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="box">
                <img src="/images/Horizon.png" alt="Instagram Posts" />
                <div className="text">Instagram Posts</div>
                <p>Posts made for Horizon, AKGEC.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="box">
                <img src="/images/CCC.png" alt="App Design" />
                <div className="text">App Design</div>
                <p>App made for Cloud Computing Cell, AKGEC.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="box">
                <img src="/images/CCC_Post.png" alt="Instagram Posts" />
                <div className="text">Instagram Posts</div>
                <p>Instagram Post made for Cloud Computing Cell, AKGEC.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="box">
                <img src="/images/DM.png" alt="Instagram Posts" />
                <div className="text">Instagram Posts</div>
                <p>Instagram Post made for Digit Maestro, Gurugram.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="box">
                <img src="/images/Estilo.png" alt="Instagram Posts" />
                <div className="text">Instagram Posts</div>
                <p>Instagram Post made for Estilo, Gurugram.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Teams;
