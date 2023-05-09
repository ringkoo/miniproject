import React from "react";
import Navbar from "../redux/componants/navbar/Navbar";
import Mainmap from "../redux/componants/mainmap/maps";
import { useNavigate } from "react-router-dom";

// 깃터짐 테스트용 주석

function Main() {
    return (
        <>
            <Navbar isActive={true} >동네 어때?</Navbar>
            <Mainmap />
        </>
    );
}

export default Main;
