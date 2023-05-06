import React, { useState } from "react";
import { InputStyle, InputWrapper, Label, Titlestyle, Wrapbox, Backgroundbox } from './styles'
import Secects from "../selects/Selects";
import Inputs from "../inputs/inputs";
import Buttons from "../buttons/Buttons";
import Exbuttons from "../buttons/examinebt";
import { useNavigate } from "react-router-dom";




function Sginbox(props) {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [signValue, setSignValue] = useState({

    })

    return (

        <Backgroundbox>
            {
                props.loginPage === true ?
                    // 로그인
                    <Wrapbox>
                        <Titlestyle>{props.title}</Titlestyle>
                        <div>
                            {/* ID input */}
                            <Inputs type='email' label='ID' widthinput='200px' width='210px' height='30px' marginbottom='30px' />
                            {/* PW input */}
                            <Inputs type="password" label='PW' widthinput='200px' width='210px' height='30px' marginbottom='30px' />
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }} >
                            <Buttons backgroundcolor='darkgray' onClick={() => { navigate('/Signup') }} >회원가입</Buttons>
                            <Buttons backgroundcolor='darkgray'>로그인</Buttons>
                        </div>
                    </Wrapbox>
                    :
                    // 회원가입
                    <Wrapbox>
                        <Titlestyle>{props.title}</Titlestyle>
                        <div>
                            {/* ID */}
                            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'right' }}>
                                <Inputs type="email" label='ID' widthinput='250px' width='250px' height='30px' marginbottom='30px'></Inputs>
                                <div style={{ position: 'relative', left: '40%' }}>
                                    {/* ID 중복확인 */}
                                    <Exbuttons>확인</Exbuttons>
                                </div>
                            </div>
                            {/* 비밀번호 */}
                            <Inputs type="password" label='Password' widthinput='250px' width='250px' height='30px' marginbottom='30px' />
                            {/* 비밀번호 확인 */}
                            <Inputs type="password" label='Password Check' widthinput='250px' width='250px' height='30px' marginbottom='30px' />
                            {/* 닉네임 */}
                            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'right' }}>
                                <Inputs type="text" label='Nickname' widthinput='250px' width='250px' height='30px' marginbottom='30px' />
                                <div style={{ position: 'relative', left: '40%' }}>
                                    {/* 닉네임 중복확인 */}
                                    <Exbuttons>확인</Exbuttons>
                                </div>
                            </div>
                            {/* 지역 선택 */}
                            <Secects>City</Secects>
                        </div>
                        {/* 관리자 선택 */}
                        <div  >
                            <div style={{ position: 'relative', top: '20%', right: '100%' }}>관리자
                                <input
                                    style={{position:'relative'}}
                                    type="checkbox"
                                    id="cb1"
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}

                                />
                                {isChecked && <Inputs width='70px' widthinput='70px' />}</div>
                            {/* 가입 버튼 */}
                            <Buttons backgroundcolor='darkgray'>가입</Buttons>
                        </div>
                    </Wrapbox>
            }
        </Backgroundbox >
    );
}

export default Sginbox;