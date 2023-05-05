import React from "react";
import { useNavigate } from "react-router-dom";
import { Map, SeoulButton, KIButton, KangwonButton, JejuButton, JyunlaButton, KyungsangButton, ChungcyungButton } from "./styles";



function Mainmap() {
    const navigate = useNavigate();
    return (
        <>
            <Map>
                <SeoulButton>서울</SeoulButton>
                <KIButton>경기</KIButton>
                <KangwonButton>강원</KangwonButton>
                <JyunlaButton>전라</JyunlaButton>
                <KyungsangButton>경상</KyungsangButton>
                <ChungcyungButton>충청</ChungcyungButton>
                <JejuButton>제주</JejuButton>
            </Map>
        </>
    );
}

export default Mainmap;