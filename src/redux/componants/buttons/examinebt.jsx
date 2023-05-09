import React from "react";
import { Exambtstyle } from "./styles";



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