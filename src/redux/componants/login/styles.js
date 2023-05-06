import styled from "styled-components";

const Titlestyle = styled.div`
    display:flex;
    justify-content:center;
    font-weight: 700;
    font-size: 30px;
`

const Wrapbox = styled.div`
    width: 500px;
    height: 500px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    padding-bottom: 100px;
`

const Backgroundbox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    padding-top:150px;
`

export { Titlestyle, Wrapbox, Backgroundbox }
