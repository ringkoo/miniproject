import React from "react";
import { Exambtstyle } from "./styles";



function Exbuttons(props) {
    return (
        <>
            <Exambtstyle
                onClick={props.onClick}
            >{props.children}</Exambtstyle>
        </>
    );
}

export default Exbuttons;