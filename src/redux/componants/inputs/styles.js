import styled from "styled-components"

const InputStyle = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: green;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.5em;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.5em;
`;

export { InputStyle, InputWrapper, Label }