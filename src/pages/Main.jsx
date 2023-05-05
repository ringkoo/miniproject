import React from "react";
import Navbar from "../redux/componants/navbar/Navbar";
import { useNavigate } from "react-router-dom";



function Main() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />

        </>
    );
}

export default Main;
