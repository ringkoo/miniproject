import React from "react";
import Navbar from "../redux/componants/navbar/Navbar";
import { MenuButton } from "../redux/componants/menu/styles";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "./styles.css";
import Menu from "../redux/componants/menu/menu";
import { Keyboard, Navigation, Pagination } from "swiper";

function Areadetail() {
  const navigate = useNavigate();

  // const [articles, setArticles] = useState([]); // 글 목록 상태

  // // 글 작성 후, 상태에 글을 추가.
  // const handleArticleSubmit = (article) => {
  //   setArticles([...articles, article]);
  // };

  //  useEffect(() => {
  //    fetch("/api/posts") // 스프링에서 작성한 API endpoint를 호출하여 데이터 가져오는 예시..react query 사용할거임
  //      .then((res) => res.json())
  //      .then((data) => setPosts(data))
  //      .catch((error) => console.error(error));
  //  }, []);

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
          marginTop: "100px",
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
        {/* 글 목록 상태를 바인딩
        // 맵으로 글 쓴 거 자동으로 slide 생성 
        {articles.map((article) => (
          <SwiperSlide>
            <div style={{ border: "1px solid black", width: "400px" }}>
              <h1 style={{ marginLeft: "10px" }}>{article.title}</h1>
              <p>{article.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}

        <SwiperSlide>
          <div
            style={{
              border: "1px solid black",
              width: "400px",
              height: "500px",
              borderRadius: "8px",
            }}
          >
            <h1 style={{ marginLeft: "10px" }}>
              title 1{/* {article.title} */}
            </h1>
            {/* <img src="" alt="Article Image" /> */}
            <div
              style={{ height: "300px", marginLeft: "10px" }}
              onClick={() => {
                navigate("/detailpage");
              }}
            >
              이미지
            </div>
            <p style={{ marginLeft: "10px" }}>좋아요 수 223</p>
            <p style={{ marginLeft: "10px" }}>작성시간 2023-05-06-11:37</p>
            <p style={{ marginLeft: "10px" }}>작성자 은빈</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            style={{
              border: "1px solid black",
              width: "400px",
              height: "500px",
              borderRadius: "8px",
            }}
          >
            <h1 style={{ marginLeft: "10px" }}>
              title 2 {/* {article.title} */}
            </h1>
            {/* <img src="" alt="Article Image" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            style={{
              border: "1px solid black",
              width: "400px",
              height: "500px",
              borderRadius: "8px",
            }}
          >
            <h1 style={{ marginLeft: "10px" }}>
              title 3{/* {article.title} */}
            </h1>
            {/* <img src="" alt="Article Image" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            style={{
              border: "1px solid black",
              width: "400px",
              height: "500px",
              borderRadius: "8px",
            }}
          >
            <h1 style={{ marginLeft: "10px" }}>
              title 4{/* {article.title} */}
            </h1>
            {/* <img src="" alt="Article Image" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            style={{
              border: "1px solid black",
              width: "400px",
              height: "500px",
              borderRadius: "8px",
            }}
          >
            <h1 style={{ marginLeft: "10px" }}>
              title 5 {/* {article.title} */}
            </h1>
            {/* <img src="" alt="Article Image" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            style={{
              border: "1px solid black",
              width: "400px",
              height: "500px",
              borderRadius: "8px",
            }}
          >
            <h1 style={{ marginLeft: "10px" }}>
              title 6{/* {article.title} */}
            </h1>
            {/* <img src="" alt="Article Image" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>7</SwiperSlide>
        <SwiperSlide>8</SwiperSlide>
        <SwiperSlide>9</SwiperSlide>
        <SwiperSlide>10</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Areadetail;
