import React, { useState } from "react";
import { InputStyle, InputWrapper, Label, Titlestyle, Wrapbox, Backgroundbox } from './styles'
import Secects from "../selects/Selects";
import Inputs from "../inputs/inputs";
import Buttons from "../buttons/Buttons";
import Exbuttons from "../buttons/examinebt";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addUsers } from "../../../api/users";




function Sginbox(props) {
  const navigate = useNavigate();


  //입력값을 받을 state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [authKey, setAuthKey] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(addUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries("newUsers")
      console.log("성공하였습니다!")
    }
  });

  // 에러 메시지 발생 함수
  const getErrorMsg = (errorCode, params) => {
    switch (errorCode) {
      case "01":
        return alert(
          `오류 내용`
        );
      case "02":
        return alert(
          `오류 내용`
        );
      default:
        return `시스템 내부 오류가 발생하였습니다.`;
    }
  };

  // username 변경을 감지하는 함수
  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  // password 변경을 감지하는 함수
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  // password 변경을 감지하는 함수
  const changePassword2 = (event) => {
    setPassword2(event.target.value);
  };

  // nickname 변경을 감지하는 함수
  const changeNickname = (event) => {
    setNickname(event.target.value);
  };

  // address 변경을 감지하는 함수
  const changeAddress = (event) => {
    setPassword(event.target.value);
  };

  // isChecked 변경을 감지하는 함수
  const changeIsChecked = (event) => {
    setIsChecked(event.target.value);
  };

  // authKey 변경을 감지하는 함수
  const changeAuthKey = (event) => {
    setPassword(event.target.value);
  };

  // form 태그 내부에서의 submit이 실행된 경우 호출되는 함수
  const handleSubmitButtonClick = (event) => {
    // submit의 고유 기능인, 새로고침(refresh)을 막아주는 역함
    event.preventDefault();

    // 제목과 내용이 모두 존재해야만 정상처리(하나라도 없는 경우 오류 발생)
    // "01" : 필수 입력값 검증 실패 안내
    // if (!username || !password || !nickname || !address || isAdmin === true || !authKey) {
    //   return getErrorMsg("01", { username });
    // }

    // // "02" : 내용 중복 안내
    // if (validationArr.length > 0) {
    //   return getErrorMsg("02", { title, contents });
    // }


    const newUsers = {
      username,
      password,
      nickname,
      address,
      isAdmin: false,
      authKey,
    };

    mutation.mutate(newUsers);

    setUsername("");
    setPassword("");
    setPassword2("");
    setNickname("");
    setAddress("");
    setIsChecked("");
    setAuthKey("");
  }
  return (

    <Backgroundbox>
      {
        props.loginPage === true ?
          // 로그인
          <form onSubmit={handleSubmitButtonClick}>
            <Wrapbox>
              <Titlestyle>{props.title}</Titlestyle>
              <div>
                {/* ID input */}
                <Inputs value={username} onChange={changeUsername} type='email' label='ID' widthinput='200px' width='210px' height='30px' marginbottom='30px' />
                {/* PW input */}
                <Inputs value={password} onChange={changePassword} type="password" label='PW' widthinput='200px' width='210px' height='30px' marginbottom='30px' />
              </div>
              <div style={{ display: 'flex', gap: '10px' }} >
                <Buttons backgroundcolor='darkgray' onClick={() => { navigate('/Signup') }} >회원가입</Buttons>
                <Buttons backgroundcolor='darkgray'>로그인</Buttons>
              </div>
            </Wrapbox>
          </form>
          :
          // 회원가입
          <form onSubmit={handleSubmitButtonClick}>
            <Wrapbox>
              <Titlestyle>{props.title}</Titlestyle>
              <div>
                {/* ID */}
                <div style={{ display: "flex", alignItems: 'center', justifyContent: 'right' }}>
                  <Inputs value={username} onChange={changeUsername} type="email" label='ID' widthinput='250px' width='250px' height='30px' marginbottom='30px'></Inputs>
                  <div style={{ position: 'relative', left: '40%' }}>
                    {/* ID 중복확인 버튼*/}
                    <Exbuttons>확인</Exbuttons>
                  </div>
                </div>
                {/* 비밀번호 */}
                <Inputs value={password} onChange={changePassword} type="password" label='Password' widthinput='250px' width='250px' height='30px' marginbottom='30px' />
                {/* 비밀번호 확인 */}
                <Inputs value={password2} onChange={changePassword2} type="password" label='Password Check' widthinput='250px' width='250px' height='30px' marginbottom='30px' />
                {/* 닉네임 */}
                <div style={{ display: "flex", alignItems: 'center', justifyContent: 'right' }}>
                  <Inputs value={nickname} onChange={changeNickname} type="text" label='Nickname' widthinput='250px' width='250px' height='30px' marginbottom='30px' />
                  <div style={{ position: 'relative', left: '40%' }}>
                    {/* 닉네임 중복확인 버튼 */}
                    <Exbuttons>확인</Exbuttons>
                  </div>
                </div>
                {/* 지역 선택 */}
                <Secects value={address} onChange={changeAddress} >City</Secects>
              </div>
              {/* 관리자 선택 */}
              <div  >
                <div style={{ position: 'relative', top: '20%', right: '100%' }}>관리자
                  <input

                    style={{ position: 'relative' }}
                    type="checkbox"
                    id="cb1"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}

                  />
                  {/* 관리자 인증 키 */}
                  {isChecked && <Inputs type='text' value={authKey} onChange={changeAuthKey} width='70px' widthinput='70px' />}</div>
                {/* 가입 버튼 */}
                <Buttons backgroundcolor='darkgray' type="submit" onClick={() => console.log('가입버튼눌림')}>가입</Buttons>
              </div>
            </Wrapbox>
          </form>
      }
    </Backgroundbox >
  );
}

export default Sginbox;