import React from "react";
import { Exambtstyle } from "./styles";

// 깃터짐 테스트용 주석

function Exbuttons(props) {
    return (
        <>
            <Exambtstyle
                type={props.type}
                onClick={props.onClick}
            >{props.children}</Exambtstyle>
        </>
    );
}

export default Exbuttons;