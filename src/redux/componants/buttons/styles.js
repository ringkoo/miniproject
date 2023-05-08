import styled from "styled-components"

const Buttonstyle = styled.div`
    background-color:${props => props.backgroundcolor};
    border-radius: 5px;
    width: 80px;
    height: 40px;
    font-weight: bold;
    color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease;
    &:hover {
    background-color: skyblue;
}
cursor: pointer;
`

const Exambtstyle = styled.div`
  font-weight:700;
  background-color: darkgray;
  transition: background-color 0.5s ease;
  position: relative;
  right: 300%;
  bottom: 9px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  width:30px;
  height:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  &:hover {
    background-color: skyblue;
  }
`

export { Buttonstyle, Exambtstyle }