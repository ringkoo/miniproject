import styled from "styled-components"

const InputStyle = styled.input`
  width: ${props => props.widthinput};
  height: ${props => props.height};
  border: none;
  background-color:darkgray;
  border-radius: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: ${props => props.width};
  height: auto;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: ${props => props.marginbottom};
`;

const Label = styled.span`
  position:absolute;
  left : 42%;
  margin-right: 0.5em;
  font-weight:700;
`;

export { InputStyle, InputWrapper, Label }