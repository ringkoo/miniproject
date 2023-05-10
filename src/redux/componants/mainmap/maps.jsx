import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Map,
  SeoulButton,
  KIButton,
  KangwonButton,
  JejuButton,
  JyunlaButton,
  KyungsangButton,
  ChungcyungButton,
} from "./styles";

function Mainmap() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          width: "1000px",
        }}
      >
        <Map>
          <SeoulButton
            onClick={() => {
              //Mainmap 컴포넌트에서 클릭한 지역 정보를 route state에 담아서 Areadetail로 전달
              navigate("/Areadetail", { state: { region: "서울" } });
              localStorage.setItem("region", "서울");
            }}
          >
            서울
          </SeoulButton>
          <KIButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "경기" } });
              localStorage.setItem("region", "경기");
            }}
          >
            경기
          </KIButton>
          <KangwonButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "강원" } });
              localStorage.setItem("region", "강원");
            }}
          >
            강원
          </KangwonButton>
          <JyunlaButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "전라" } });
              localStorage.setItem("region", "전라");
            }}
          >
            전라
          </JyunlaButton>
          <KyungsangButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "경상" } });
              localStorage.setItem("region", "경상");
            }}
          >
            경상
          </KyungsangButton>
          <ChungcyungButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "충청" } });
              localStorage.setItem("region", "충청");
            }}
          >
            충청
          </ChungcyungButton>
          <JejuButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "제주" } });
              localStorage.setItem("region", "제주");
            }}
          >
            제주
          </JejuButton>
        </Map>
      </div>
    </>
  );
}

export default Mainmap;
