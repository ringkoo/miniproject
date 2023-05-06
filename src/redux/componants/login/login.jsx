import React from "react";
import { InputStyle, InputWrapper, Label, Titlestyle, Wrapbox, Backgroundbox } from './styles'
import styled from "styled-components";
import Inputs from "../inputs/inputs";
import Buttons from "../buttons/Buttons";



function Sginbox() {
    return (
        <Backgroundbox>
            <Wrapbox>
                <Titlestyle>로그인</Titlestyle>
                <div>
                    <Inputs label='ID' widthinput='200px' width='200px' height='30px' marginbottom='30px' />
                    <Inputs label='PW' widthinput='200px' width='200px' height='30px' marginbottom='30px' />
                </div>
                <div style={{display:'flex', gap:'10px'}}>
                    <Buttons backgroundcolor='darkgray'>회원가입</Buttons>
                    <Buttons backgroundcolor='darkgray'>로그인</Buttons>
                </div>
            </Wrapbox>
        </Backgroundbox>
    );
}

export default Sginbox;