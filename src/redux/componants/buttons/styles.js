import styled from "styled-components"

const Buttonstyle = styled.button`
    background-color:#A1BEFF;
    border:none;
    color:black;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
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
  background-color: #CEE1F2;
  color: black;
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
  padding:1px;
  &:hover {
    background-color: lightgray;
  }
`

export { Buttonstyle, Exambtstyle }