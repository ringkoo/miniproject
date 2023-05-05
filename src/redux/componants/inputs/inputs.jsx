import React from "react";
import { InputStyle, InputWrapper, Label } from "./styles";



function Inputs({ label, value, onChange, width, height, minLength, maxLength }) {
    return (
        <InputWrapper width={width} height={height}>
            <Label>{label}</Label>
            <InputStyle
                value={value}
                onChange={onChange}
                minLength={minLength}
                maxLength={maxLength}
            />
        </InputWrapper>
    );
}

export default Inputs;