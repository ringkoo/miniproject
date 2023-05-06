import React from "react";
import { InputStyle, InputWrapper, Label } from "./styles";



function Inputs({ label, value, onChange, width, height, minLength, maxLength, marginbottom, widthinput, type }) {
    return (
        <InputWrapper width={width} marginbottom={marginbottom} >
            <Label>{label}</Label>
            <InputStyle
                value={value}
                onChange={onChange}
                minLength={minLength}
                maxLength={maxLength}
                height={height}
                widthinput={widthinput}
                type={type}
            />
        </InputWrapper>
    );
}

export default Inputs;