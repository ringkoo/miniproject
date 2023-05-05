import styled from "styled-components"

const Buttonstyle = styled.div`
    background-color:${props => props.backgroundcolor};
    border-radius: 5px;
    width: 90px;
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

export { Buttonstyle }