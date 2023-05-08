import styled from "styled-components";

const Titlestyle = styled.div`
    position:relative;
    justify-content:center;
    font-weight: 700;
    font-size: 30px;
`

const Wrapbox = styled.div`
    padding:25px 0px 25px 0px;
    width: 400px;
    height: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
`

const Backgroundbox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    width:100%;
    padding-top:150px;
`

export { Titlestyle, Wrapbox, Backgroundbox }
