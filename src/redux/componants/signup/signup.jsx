import React, { useState } from "react";
import { InputStyle, InputWrapper, Label, Titlestyle, Wrapbox, Backgroundbox } from './styles'
import Secects from "../selects/Selects";
import Inputs from "../inputs/inputs";
import Buttons from "../buttons/Buttons";
import Exbuttons from "../buttons/examinebt";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addUsers, getUsers } from "../../../api/users";
import SelectBox from "../selects/Selects";
import axios from "axios";
import Navbar from "../navbar/Navbar";

// 깃터짐 테스트용 주석

function Signbox(props) {
  const navigate = useNavigate();

  //입력값을 받을 state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [authKey, setAuthKey] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const queryClient = useQueryClient();
  const mutation = useMutation(addUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries("users")
      alert("회원가입이 완료되었습니다")
      navigate('/login')
    }
  });

  // const { isLoading, isError, data } = useQuery("users", getUsers)

  // if (isLoading) {
  //   return <h1>로딩중입니다...!</h1>
  // }

  // if (isError) {
  //   return <h1>오류가 발생하였습니다...!</h1>
  // }

  // // 에러 메시지 발생 함수
  const getErrorMsg = (errorCode) => {
    switch (errorCode) {
      case "01":
        return alert(
          `이메일 형식의 아이디를 입력해주세요`
        );
      case "02":
        return alert(
          `비밀번호를 입력해주세요`
        );
      case "03":
        return alert(
          `비밀번호가 같지 않습니다`
        );
      case "04":
        return alert(
          `한글 단어 10자 이내로 닉네임을 입력해주세요. `
        );
      case "05":
        return alert(
          `도시를 선택해주세요`
        );
      default:
        return `시스템 내부 오류가 발생하였습니다.`;
    }
  };

  // username 변경을 감지하는 함수
  const changeUsername = (event) => {
    const { value } = event.target
    const format = value.replace(/[^a-zA-Z0-9@.]+$/g, "")
    setUsername(format)
  };

  // password 변경을 감지하는 함수
  const changePassword = (event) => {
    const { value } = event.target
    const format = value.replace(/[^a-zA-Z0-9!@#$%^&*]+$/g, "")
    setPassword(format);
  };

  // password2 변경을 감지하는 함수
  const changePassword2 = (event) => {
    const { value } = event.target
    const format = value.replace(/[^a-zA-Z0-9!@#$%^&*]+$/g, "")
    setPassword2(format);

  };

  // nickname 변경을 감지하는 함수
  const changeNickname = (event) => {
    const { value } = event.target
    const format = value.replace(/[^ㄱ-힣]+$/, "")
    setNickname(format);
  };

  // address 변경을 감지하는 함수
  const changeAddress = (event) => {
    setAddress(event.target.value);
  };

  // isAdmin 변경을 감지하는 함수
  const changeIsAdmin = (event) => {
    setIsAdmin(event.target.checked);
  };

  // authKey 변경을 감지하는 함수
  const changeAuthKey = (event) => {
    setAuthKey(event.target.value);
  };

  // form 태그 내부에서의 submit이 실행된 경우 호출되는 함수
  const handleSubmitButtonClick = (event) => {
    // submit의 고유 기능인, 새로고침(refresh)을 막아주는 역함
    event.preventDefault();


    // "01" : 아이디 입력 없을 시 경고
    if (!username) {
      return getErrorMsg("01");
    }
    // "02" : 비밀번호 입력 없을 시 경고
    if (!password) {
      return getErrorMsg("02");
    }
    // "03" : 비밀번호 확인 다를 시 경고
    if (password !== password2) {
      return getErrorMsg("03")
    }
    // "04" : 닉네임 입력 없을 시 경고
    if (!nickname) {
      return getErrorMsg("04");
    }
    // "05" : 지역 입력 안할 시 경고
    if (!address) {
      return getErrorMsg("05");
    }


    const newUsers = {
      username,
      password,
      nickname,
      address,
      isAdmin,
      authKey,
    };

    //회원 가입을 위한 mutation 메소드
    mutation.mutate(newUsers);
    setUsername("");
    setPassword("");
    setPassword2("");
    setNickname("");
    setAddress("");
    setIsAdmin("");
    setAuthKey("");
  }

  return (
    <>
      <Navbar />
      <Backgroundbox>
        <div>
          {/* 회원가입 */}
          <form onSubmit={handleSubmitButtonClick}>
            <Wrapbox>
              <Titlestyle>{props.title}</Titlestyle>
              <div>
                {/* ID */}
                <div style={{ display: "flex", alignItems: 'center', justifyContent: 'right' }}>
                  <Inputs
                    value={username}
                    onChange={changeUsername}
                    type="email"
                    label='ID'
                    widthinput='250px'
                    width='250px'
                    height='30px'
                    marginbottom='30px'
                    maxLength='30'
                  />
                  <div style={{ position: 'relative', left: '40%' }}>
                    {/* ID 중복확인 버튼*/}
                    <Exbuttons
                      type='button'
                      onClick={() => {
                        try {
                          axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, username);
                        } catch (error) {
                          console.log(error)
                        }
                      }}
                    //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    //   const userExists = data.find(item => item.username === username);
                    //   if (!userExists) {
                    //     if (emailRegex.test(username)) {
                    //       return alert('사용 가능한 이메일 입니다.')
                    //     } else {
                    //       return alert('이메일 형식을 확인해주세요. ex)test@test.com')
                    //     }
                    //   } else {
                    //     setUsername('')
                    //     return alert('이미 가입된 이메일 입니다')
                    //   }
                    // }}
                    >확인</Exbuttons>
                  </div>
                </div>
                {/* 비밀번호 */}
                <Inputs
                  value={password}
                  onChange={changePassword}
                  type="password"
                  label='Password'
                  widthinput='250px'
                  width='250px'
                  height='30px'
                  marginbottom='30px'
                  maxLength='20' />
                {/* 비밀번호 확인 */}
                <Inputs
                  value={password2}
                  onChange={changePassword2}
                  type="password"
                  label='Password Check'
                  widthinput='250px'
                  width='250px'
                  height='30px'
                  marginbottom='30px' />
                {/* 닉네임 */}
                <div style={{ display: "flex", alignItems: 'center', justifyContent: 'right' }}>
                  <Inputs
                    value={nickname}
                    onChange={changeNickname}
                    type="text"
                    label='Nickname'
                    widthinput='250px'
                    width='250px'
                    height='30px'
                    marginbottom='30px'
                    minLength='4'
                    maxLength='10' />
                  <div style={{ position: 'relative', left: '40%' }}>
                    {/* 닉네임 중복확인 버튼 */}
                    <Exbuttons type='button'
                    // onClick={() => {
                    //   const nickNameRegex = /^[가-힣]+$/;
                    //   const nickExists = data.find(item => item.nickname === nickname);
                    //   if (!nickExists) {
                    //     if (nickNameRegex.test(nickname)) {
                    //       return alert('사용 가능한 닉네임 입니다.')
                    //     } else {
                    //       setNickname("")
                    //       return alert('닉네임은 한글 단어만 입력 가능합니다.')
                    //     }
                    //   } else {
                    //     setNickname("");
                    //     return alert('이미 가입된 닉네임 입니다')
                    //   }
                    // }}
                    >확인</Exbuttons>
                  </div>
                </div>
                {/* 지역 선택 */}
                <SelectBox
                  value={address}
                  onChange={changeAddress} >City</SelectBox>
              </div>
              {/* 관리자 선택 */}
              <div style={{ position: "relative", left: "-33%" }}>
                <div style={{ position: "relative", left: "40%" }}>
                  {/* 체크박스 */}
                  <input
                    style={{ position: 'relative' }}
                    type="checkbox"
                    id="cb1"
                    checked={isAdmin}
                    onChange={changeIsAdmin}
                  // onClick={changeIsAdmin}
                  />
                  {/* 관리자 인증 키 */}
                  {
                    isAdmin === true ? <Inputs
                      position='relative'
                      value={authKey}
                      onChange={changeAuthKey}
                      type="text"
                      label='Admin'
                      widthinput='70px'
                      width='70px'
                      height='20px'
                      marginbottom='30px' /> : null
                  }
                </div>
              </div>
              <div>
                {/* 가입 버튼 */}
                <Buttons
                  backgroundcolor='darkgray'
                  type="submit"
                >가입</Buttons>
              </div>
            </Wrapbox>

          </form>
        </div>
      </Backgroundbox >
      </>
  );
}

export default Signbox;