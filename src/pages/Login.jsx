import React from "react";
import { useNavigate } from "react-router-dom";
import Sginbox from "../redux/componants/login/login";



function Login() {

    return (
        <>
            <Sginbox title='로그인' loginPage={true} />
        </>
    );
}

export default Login;
