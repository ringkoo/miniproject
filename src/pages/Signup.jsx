import React from "react";
import { useNavigate } from "react-router-dom";
import Signbox from "../redux/componants/signup/signup";



function Signup() {

    return (
        <>
            <Signbox title='회원가입'/>
        </>
    );
}

export default Signup;
