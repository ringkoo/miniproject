import React from "react";
import { useNavigate } from "react-router-dom";
import Inputs from "../redux/componants/inputs/inputs";
import Sginbox from "../redux/componants/login/login";



function Login() {

    return (
        <>
            <Sginbox title='로그인' label='ID' width='200px' />
            
        </>
    );
}

export default Login;
