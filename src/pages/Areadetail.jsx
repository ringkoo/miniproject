import React from "react";
import Navbar from "../redux/componants/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import "swiper/css";
import "swiper/css/scrollbar";
// import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
// import "./styles.css";
// import { Navigation } from "swiper";
// import NavbarSecond from "../redux/componants/navbar/NavbarSecond";
import {
  Keyboard,
  // Scrollbar,
  Navigation,
  Pagination,
} from "swiper";
function Areadetail() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar isActive={true}>서울</Navbar>
      {/* <NavbarSecond /> */}
      <button onClick={() => navigate("/write")}>글쓰기</button>

      <Swiper
        style={{
          marginTop: "200px",
          height: "400px",
          border: "1px solid black",
        }}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        // grabCursor={false}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        // scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[
          Keyboard,
          // Scrollbar,
          Navigation,
          Pagination,
        ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ border: "1px solid black", width: "400px" }}>
            <div>Title</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
        <SwiperSlide>6</SwiperSlide>
        <SwiperSlide>7</SwiperSlide>
        <SwiperSlide>8</SwiperSlide>
        <SwiperSlide>9</SwiperSlide>
        <SwiperSlide>10</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Areadetail;
