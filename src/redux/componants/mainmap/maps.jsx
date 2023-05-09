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
              navigate("/Areadetail", { state: { region: "서울" } });
            }}
          >
            서울
          </SeoulButton>
          <KIButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "경기" } });
            }}
          >
            경기
          </KIButton>
          <KangwonButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "강원" } });
            }}
          >
            강원
          </KangwonButton>
          <JyunlaButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "전라" } });
            }}
          >
            전라
          </JyunlaButton>
          <KyungsangButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "경상" } });
            }}
          >
            경상
          </KyungsangButton>
          <ChungcyungButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "충청" } });
            }}
          >
            충청
          </ChungcyungButton>
          <JejuButton
            onClick={() => {
              navigate("/Areadetail", { state: { region: "제주" } });
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
