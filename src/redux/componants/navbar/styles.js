import styled from "styled-components"

const Navhead = styled.div`
    width: auto;
    background-color: gray;
    height: 50px;
    
    display:flex;
    justify-content: space-between;
    padding-left: 45%;
`

const Navtext = styled.span`
    font-weight: bold;
    font-size: 30px;
`

const Logintext = styled.span`
    display:flex;
    align-items:center;
    border-radius:50px;
    margin-top: 10px;
    margin-right: 10px;
    height: 30px;
    transition: color 0.3s ease;
    &:hover {
        color: skyblue;
    }
`

export { Navhead, Logintext, Navtext }