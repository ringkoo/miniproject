import React from "react";
import { Buttonstyle } from "./styles";



function Buttons(props) {
    return (
        <>
            <Buttonstyle
                backgroundcolor={props.backgroundcolor}
                color={props.color}
                onClick={props.onClick}
            >{props.children}</Buttonstyle>
        </>
    );
}

export default Buttons;