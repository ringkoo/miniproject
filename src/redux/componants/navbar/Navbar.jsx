import React from "react";
import { Navhead, Logintext, Navtext } from "./styles";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  return (
    <>
      <Navhead>
        <Navtext>{props.children}</Navtext>
        {props.isActive === true ? (
          <Logintext
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </Logintext>
        ) : (
          <Logintext
            onClick={() => {
              navigate("/login");
            }}
          >
            로그아웃
          </Logintext>
        )}
      </Navhead>
    </>
  );
}

export default Navbar;
