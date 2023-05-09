import React from "react";
import { InputStyle, InputWrapper, Label } from "./styles";

// 깃터짐 테스트용 주석

function Inputs({ id, label, value, onChange, width, height, minLength, maxLength, marginbottom, widthinput, type, massage, position, top, left }) {
    return (
        <InputWrapper
            width={width}
            marginbottom={marginbottom}
            position={position}
            top={top}
            left={left}>
            <div >
                <Label>
                    {label}
                </Label>
                <InputStyle
                    id={id}
                    value={value}
                    onChange={onChange}
                    minLength={minLength}
                    maxLength={maxLength}
                    height={height}
                    widthinput={widthinput}
                    type={type}
                    position={position}
                    top={top}
                    left={left}
                />
                <span>{massage}</span>
            </div>
        </InputWrapper>
    );
}

export default Inputs;