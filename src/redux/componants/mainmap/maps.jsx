import React from "react";
import { useNavigate } from "react-router-dom";
import { Map, SeoulButton, KIButton, KangwonButton, JejuButton, JyunlaButton, KyungsangButton, ChungcyungButton } from "./styles";



function Mainmap() {
    const navigate = useNavigate();
    return (
        <>
            <Map>
                <SeoulButton onClick={() => { navigate('/Areadetail') }}>서울</SeoulButton>
                <KIButton onClick={() => { navigate('/Areadetail') }}>경기</KIButton>
                <KangwonButton onClick={() => { navigate('/Areadetail') }}>강원</KangwonButton>
                <JyunlaButton onClick={() => { navigate('/Areadetail') }}>전라</JyunlaButton>
                <KyungsangButton onClick={() => { navigate('/Areadetail') }}>경상</KyungsangButton>
                <ChungcyungButton onClick={() => { navigate('/Areadetail') }}>충청</ChungcyungButton>
                <JejuButton onClick={() => { navigate('/Areadetail') }}>제주</JejuButton>
            </Map>
        </>
    );
}

export default Mainmap;