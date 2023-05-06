import React, { useState } from "react";
import { InputStyle, InputWrapper, Label, Titlestyle, Wrapbox, Backgroundbox } from './styles'
import styled from "styled-components";
import Inputs from "../inputs/inputs";
import Buttons from "../buttons/Buttons";
import { useNavigate } from "react-router-dom";



function Sginbox(props) {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    return (

        <Backgroundbox>
            {
                props.loginPage === true ?
                    <Wrapbox>
                        <Titlestyle>{props.title}</Titlestyle>
                        <div>
                            <Inputs label='ID' widthinput='200px' width='210px' height='30px' marginbottom='30px' />
                            <Inputs type="password" label='PW' widthinput='200px' width='210px' height='30px' marginbottom='30px' />
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }} >
                            <Buttons backgroundcolor='darkgray' onClick={() => { navigate('/Signup') }} >회원가입</Buttons>
                            <Buttons backgroundcolor='darkgray'>로그인</Buttons>
                        </div>
                    </Wrapbox>
                    :
                    <Wrapbox>
                        <Titlestyle>{props.title}</Titlestyle>
                        <div>
                            <Inputs type="text" label='Name' widthinput='200px' width='210px' height='30px' marginbottom='30px' />
                            <Inputs type="text" label='ID' widthinput='200px' width='210px' height='30px' marginbottom='30px' />
                            <Inputs type="password" label='PW' widthinput='200px' width='210px' height='30px' marginbottom='30px' />
                            <Inputs type="password" label='PW2' widthinput='200px' width='210px' height='30px' marginbottom='30px' />
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }} >
                            <div style={{position:'absolute', left: '42%' }}>관리자  <input
                                type="checkbox"
                                id="cb1"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                                {isChecked && <Inputs widthinput='60px' />}</div>
                            <Buttons backgroundcolor='darkgray'>가입</Buttons>
                        </div>
                    </Wrapbox>
            }
        </Backgroundbox >
    );
}

export default Sginbox;