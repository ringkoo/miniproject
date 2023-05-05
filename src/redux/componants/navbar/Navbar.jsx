import React from "react";
import { Navhead, Logintext, Navtext } from "./styles";
import { useNavigate } from "react-router-dom";



function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <Navhead>
                <Navtext>동네 어때?</Navtext>
                <Logintext onClick={() => { navigate('/login') }}>로그인</Logintext>
            </Navhead>


        </>
    )
}

export default Navbar;