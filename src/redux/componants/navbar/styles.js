import styled from "styled-components"

// 깃터짐 테스트용 주석

const Navhead = styled.div`
    width: auto;
    background-color: #A1BEFF;
    height: 50px;
    display:flex;
    justify-content: space-between;
    padding-left: 0%;
`

const Navtext = styled.span`
    font-weight: bold;
    font-size: 30px;
`

const Logintext = styled.span`
    display:flex;
    font-weight:700;
    align-items:center;
    border-radius:5px;
    margin-top: 10px;
    margin-right: 10px;
    height: 30px;
    background-color: #A1BEFF;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: lightgray;
    }
`

export { Navhead, Logintext, Navtext }