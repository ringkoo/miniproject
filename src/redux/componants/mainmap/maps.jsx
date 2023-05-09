import React from "react";
import { useNavigate } from "react-router-dom";
import { Map, SeoulButton, KIButton, KangwonButton, JejuButton, JyunlaButton, KyungsangButton, ChungcyungButton } from "./styles";



function Mainmap(props) {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", backgroundColor: 'white', width: "1000px" }}>
                <Map>
                    <SeoulButton name='서울' onClick={() => { navigate('/Areadetail') }}>서울</SeoulButton>
                    <KIButton name='경기' onClick={() => { navigate('/Areadetail') }}>경기</KIButton>
                    <KangwonButton name='강원' onClick={() => { navigate('/Areadetail') }}>강원</KangwonButton>
                    <JyunlaButton name='전라' onClick={() => { navigate('/Areadetail') }}>전라</JyunlaButton>
                    <KyungsangButton name='경상' onClick={() => { navigate('/Areadetail') }}>경상</KyungsangButton>
                    <ChungcyungButton name='충청' onClick={() => { navigate('/Areadetail') }}>충청</ChungcyungButton>
                    <JejuButton name='제주' onClick={() => { navigate('/Areadetail') }}>제주</JejuButton>
                </Map>
            </div>
        </>
    );
}

export default Mainmap;