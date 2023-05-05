import React from "react";
import { useNavigate } from "react-router-dom";
import Inputs from "../redux/componants/inputs/inputs";



function Login() {

    return (
        <>
            <div>로그인</div>
            <Inputs label="ID" minLength={10} maxLength={100} width="300px" height='20px' />
            <Inputs label="PW" minLength={10} maxLength={100} width="300px" height='20px' />
        </>
    );
}

export default Login;
