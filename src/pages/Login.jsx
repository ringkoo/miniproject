import React from "react";
import { useNavigate } from "react-router-dom";
import Loginbox from "../redux/componants/login/login";



function Login() {

    return (
        <>
            <Loginbox title='로그인'/>
        </>
    );
}

export default Login;
