import styled from "styled-components"

// 깃터짐 테스트용 주석

const Map = styled.div`
  position: absolute;
  background-image: url('/map_0.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  top: 6%;
  left : 33%;
  width: 650px;
  height: 1000px;
`;

const SeoulButton = styled.div`
    position: absolute;
    top: 15%;
    left: 27%;
    font-size: 18px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid black;
    background-color: white;
    border-radius:50px;
    width:45px;
    height:45px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: #BFADFF;
    }
    cursor: pointer;
`;

const KIButton = styled.div`
    position: absolute;
    top: 20%;
    left: 35%;
    font-size: 18px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid black;
    background-color: white;
    border-radius:50px;
    width:45px;
    height:45px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: #BFADFF;
    }
    cursor: pointer;
`;

const KangwonButton = styled.div`
    position: absolute;
    top: 10%;
    left: 60%;
    font-size: 18px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid black;
    background-color: white;
    border-radius:50px;
    width:45px;
    height:45px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: #BFADFF;
    }
    cursor: pointer;
`;

const ChungcyungButton = styled.div`
    position: absolute;
    top: 35%;
    left: 35%;
    font-size: 18px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid black;
    background-color: white;
    border-radius:50px;
    width:45px;
    height:45px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: #BFADFF;
    }
    cursor: pointer;
`;

const KyungsangButton = styled.div`
    position: absolute;
    top: 50%;
    left: 60%;
    font-size: 18px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid black;
    background-color: white;
    border-radius:50px;
    width:45px;
    height:45px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: #BFADFF;
    }
    cursor: pointer;
`;

const JyunlaButton = styled.div`
    position: absolute;
    top: 55%;
    left: 22%;
    font-size: 18px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid black;
    background-color: white;
    border-radius:50px;
    width:45px;
    height:45px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: #BFADFF;
    }
    cursor: pointer;
`;

const JejuButton = styled.div`
    position: absolute;
    top: 80%;
    left: 25%;
    font-size: 18px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid black;
    background-color: white;
    border-radius:50px;
    width:45px;
    height:45px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: #BFADFF;
    }
    cursor: pointer;
`;


export { Map, SeoulButton, KIButton, KangwonButton, JejuButton, JyunlaButton, KyungsangButton, ChungcyungButton }