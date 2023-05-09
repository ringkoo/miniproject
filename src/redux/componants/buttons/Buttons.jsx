import React from "react";
import { Buttonstyle } from "./styles";

// 깃터짐 테스트용 주석

function Buttons(props) {
    return (
        <>
            <Buttonstyle
                type={props.type}
                backgroundcolor={props.backgroundcolor}
                color={props.color}
                onClick={props.onClick}
            >{props.children}</Buttonstyle>
        </>
    );
}

export default Buttons;