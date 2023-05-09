import React from "react";
import { Navhead, Logintext, Navtext } from "./styles";
import { useNavigate } from "react-router-dom";
import { AiTwotoneHome, AiFillCaretLeft } from "react-icons/ai";

function Navbar(props) {
    const navigate = useNavigate();
    return (
        <>
            <Navhead>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', width:'4%' }}>
                    <AiTwotoneHome
                        style={{
                            fontSize: '30px'
                        }}
                        onClick={() => { navigate('/') }} />
                    <AiFillCaretLeft
                        onClick={() => { navigate(-1) }}
                        style={{ fontSize: '30px' }} />
                </div>
                <Navtext>{props.children}</Navtext>
                {
                    props.isActive === true ?
                        <Logintext onClick={() => { navigate('/login') }}>로그인</Logintext> :
                        <Logintext onClick={() => { navigate('/login') }}>로그아웃</Logintext>
                }
            </Navhead>


        </>
    )
}

export default Navbar;