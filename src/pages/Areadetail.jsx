import React from "react";
import Navbar from "../redux/componants/navbar/Navbar";
import { MenuButton } from "../redux/componants/menu/styles";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "../redux/componants/slide/styles.css";
import Menu from "../redux/componants/menu/menu";
import { Keyboard, Navigation, Pagination } from "swiper";
import { getArticles } from "../api/articles";
import { useQuery } from "react-query";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Areadetail() {
  const location = useLocation();
  const region = location.state?.region;
  const category = location.state?.category;
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("getArticles", getArticles);
  const localStorageRegion = localStorage.getItem("region");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function checkLogin() {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     setIsLoggedIn(true);
  //     navigate("/write");
  //   } else {
  //     alert("로그인이 필요합니다.");
  //     navigate("/login");
  //   }
  // }

  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }
  let filteredData = data;
  if (region) {
    filteredData = data.filter((posts) => posts.region === region);
  }
  if (category) {
    filteredData = filteredData.filter(
      (posts) =>
        posts.category === category && posts.region === localStorageRegion
    );
  }
  if (category === "") {
    filteredData = filteredData.filter(
      (posts) => posts.region === localStorageRegion
    );
  }

  return (
    <>

      <Navbar isActive={false} > {`${localStorageRegion} 게시판`}</Navbar>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Menu />

        <MenuButton
          style={{
            background: "#0d0c0c",
            color: "#fff",
            marginRight: "40px",
          }}
          onClick={() => {
            // checkLogin();
            navigate("/write");
          }}
        >
          글 작성
        </MenuButton>
      </div>
      <Swiper
        style={{
          marginTop: "50px",
          height: "600px",
        }}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Navigation, Pagination]}
        className="mySwiper"
      >
        {filteredData
          .slice()
          .reverse()
          .map((posts) => (
            <SwiperSlide key={posts.id}>
              <div
                style={{
                  border: "3px solid  #a1beff",
                  width: "400px",
                  height: "500px",
                  borderRadius: "8px",
                }}
                onClick={() => {
                  navigate(`/detailpage/${posts.id}`);
                }}
              >
                <h1 style={{ marginLeft: "10px" }}>
                  {" "}
                  {posts.category} /{posts.title}
                </h1>
                <div
                  style={{
                    height: "300px",
                  }}
                >
                  {/* //   <img */}
                  {/* // src={`http://서버주소/uploads/${data.id}.jpg`} */}
                  {/* // alt="example" // /> */}
                </div>

                <p style={{ marginLeft: "10px" }}>지역 {posts.region}</p>
                <p style={{ marginLeft: "10px" }}>작성시간{posts.createdAt}</p>
                <p style={{ marginLeft: "10px" }}>작성자 {posts.nickname}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Areadetail;