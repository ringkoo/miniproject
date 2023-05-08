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

function Areadetail() {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("getArticles", getArticles);

  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <>
      <Navbar isActive={true}>서울</Navbar>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Menu />

        <MenuButton
          style={{
            background: "#0d0c0c",
            color: "#fff",
            marginRight: "40px",
          }}
          onClick={() => {
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
          // border: "1px solid black",
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
        {data.map((posts) => (
          <SwiperSlide>
            <div
              style={{
                border: "1px solid black",
                width: "400px",
                height: "500px",
                borderRadius: "8px",
              }}
              onClick={() => {
                navigate(`/detailpage/${posts.id}`);
              }}
            >
              <h1 style={{ marginLeft: "10px" }}>{posts.title}</h1>
              <div
                style={{
                  height: "300px",
                }}
              >
                <img src="" alt="Article Image" />
              </div>
              <p style={{ marginLeft: "10px" }}>좋아요 수{posts.goodCount}</p>
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
