import styled from "styled-components";

// 깃터짐 테스트용 주석

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  max-width: 100%;
`;

const LeftContainer = styled.div`
  flex: 1;
  margin-left: 50px;
  margin-right: 50px;
  height: 720px;
`;

const ImageDiv = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  position: relative;
  width: 600px; // div박스 크기 설정
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const ImagePreview = styled.img`
  width: 100%; // 미리보기 창을 div박스와 같은 크기로 설정
  height: 100%;
  max-width: 100%;
`;

const RightContainer = styled.div`
  flex: 2;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 0 auto 0 46px;
  width: 46%;
  padding: 10px;
  font-size: 16px;
  /* border: none; */
  border: 1px solid #ccc;
  /* border-bottom: 1px solid #ccc; */
  /* margin-bottom: 20px; */
  border-radius: 8px;
`;

const ImageBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
  color: #999595;
`;

const Textarea = styled.textarea`
  margin-left: 180px;
  margin-top: 20px;
  margin-right: auto;
  width: 70%;
  height: 500px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  /* border: none; */
  margin-bottom: 40px;
  border-radius: 8px;
  resize: none;
`;

const Select = styled.select`
  width: 20%;
  margin-left: 180px;
  padding: 10px;
  font-size: 16px;
  /* border: none; */
  border: 1px solid #ccc;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 120px;
  margin-right: 150px;
  padding: 5px 10px;
  font-size: 18px;
  background-color: #4e5257;
  /* float: right; */
  color: #fff;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  /* text-align: right; */
  transition: background-color 0.2s ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: #1a1b1d;
  }
`;

export {
  Container,
  LeftContainer,
  ImageDiv,
  Form,
  RightContainer,
  ImagePreview,
  Input,
  Textarea,
  Select,
  Button,
  ImageBox,
};
