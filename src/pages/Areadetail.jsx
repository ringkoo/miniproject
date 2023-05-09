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

import { useLocation } from "react-router-dom";
function Areadetail() {
  const location = useLocation();
  ////  route state를 받아옴. 전달된 region 정보가 있는지 확인
  const region = location.state?.region;
  const category = location.state?.category;
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("getArticles", getArticles);
  const localStorageRegion = localStorage.getItem("region");
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
    //   console.log(filteredData);
  }
  if (category === "") {
    filteredData = filteredData.filter(
      (posts) => posts.region === localStorageRegion
    );
  }

  return (
    <>
      <Navbar isActive={false} >동네 게시판</Navbar>

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
        {/* slice() 함수를 사용해서 배열을 복사하여 새로운 배열을 반환
        reverse() 함수로 새 배열의 순서를 뒤집기. 그 후 map() 함수를 호출해서 최신순으로 정렬함 */}
        {/* 받아온 region 정보를 이용해서 data를 필터링 */}
        {filteredData
          .slice()
          .reverse()
          .map((posts) => (
            <SwiperSlide>
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
                  <img
                    src={`http://서버주소/uploads/${data.id}.jpg`}
                    alt="example"
                  />
                </div>
                {/* <p style={{ marginLeft: "10px" }}>좋아요 수{posts.goodCount}</p> */}
                <p style={{ marginLeft: "10px" }}>지역 {posts.region}</p>
                <p style={{ marginLeft: "10px" }}>작성시간{posts.createdAt}</p>
                <p style={{ marginLeft: "10px" }}>작성자 {posts.nickname}</p>
              </div>
            </SwiperSlide>
          ))
          }
      </Swiper>
    </>
  );
}

export default Areadetail;
