import React from "react";
import { Buttonstyle } from "./styles";



function Buttons(props) {
    return (
        <>
            <Buttonstyle
                backgroundcolor={props.backgroundcolor}
                color={props.color}
            >{props.children}</Buttonstyle>
        </>
    );
}

export default Buttons;