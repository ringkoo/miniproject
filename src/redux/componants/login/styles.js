import styled from "styled-components";

// 깃터짐 테스트용 주석

const Titlestyle = styled.div`
    display:flex;
    justify-content:center;
    font-weight: 700;
    font-size: 30px;
`

const Wrapbox = styled.div`
    width: 400px;
    height: 550px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    padding-bottom: 100px;
`

const Backgroundbox = styled.div`
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    padding-top:150px;
`

export { Titlestyle, Wrapbox, Backgroundbox }
