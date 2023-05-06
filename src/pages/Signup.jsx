import React from "react";
import { useNavigate } from "react-router-dom";
import Sginbox from "../redux/componants/login/login";



function Signup() {

    return (
        <>
            <Sginbox title='회원가입' loginPage={false}/>
        </>
    );
}

export default Signup;
