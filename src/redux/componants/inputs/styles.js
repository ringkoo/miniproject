import styled from "styled-components"

// 깃터짐 테스트용 주석

const InputStyle = styled.input`
  width: ${props => props.widthinput};
  height: ${props => props.height};
  border: none;
  background-color:#CEE1F2;
  border-radius: 5px;
`;

const InputWrapper = styled.div`
  display:flex;
  width: ${props => props.width};
  height: auto;
  border-radius: 5px;
  margin-bottom: ${props => props.marginbottom};
`;

const Label = styled.span`
  margin-right: 0.5em;
  font-weight:700;
`;

export { InputStyle, InputWrapper, Label }