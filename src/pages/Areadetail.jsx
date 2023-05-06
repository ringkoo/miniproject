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
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
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
        <SwiperSlide>14</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>21</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>good</SwiperSlide>
        <SwiperSlide>hi</SwiperSlide>
        <SwiperSlide>hello</SwiperSlide>
        <SwiperSlide>nice</SwiperSlide>
        <SwiperSlide>wow</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Areadetail;
