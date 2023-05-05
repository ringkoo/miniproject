import styled from "styled-components"


const Map = styled.div`
  position: relative;
  background-image: url('/maps.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  left : 35%;
  width: 500px;
  height: 1000px;
`;

const SeoulButton = styled.div`
    position: absolute;
    top: 15%;
    left: 27%;
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 3px solid black;
    background-color: white;
    border-radius:50px;
    width:40px;
    height:40px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: skyblue;
    }
    pointer-events:cusor;
`;

const KIButton = styled.div`
    position: absolute;
    top: 20%;
    left: 30%;
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 3px solid black;
    background-color: white;
    border-radius:50px;
    width:40px;
    height:40px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: skyblue;
        
    }
`;

const KangwonButton = styled.div`
    position: absolute;
    top: 10%;
    left: 60%;
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 3px solid black;
    background-color: white;
    border-radius:50px;
    width:40px;
    height:40px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: skyblue;
        
    }
`;

const ChungcyungButton = styled.div`
    position: absolute;
    top: 30%;
    left: 35%;
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 3px solid black;
    background-color: white;
    border-radius:50px;
    width:40px;
    height:40px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: skyblue;
        
    }
`;

const KyungsangButton = styled.div`
    position: absolute;
    top: 45%;
    left: 70%;
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 3px solid black;
    background-color: white;
    border-radius:50px;
    width:40px;
    height:40px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: skyblue;
        
    }
`;

const JyunlaButton = styled.div`
    position: absolute;
    top: 50%;
    left: 30%;
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 3px solid black;
    background-color: white;
    border-radius:50px;
    width:40px;
    height:40px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: skyblue;
        
    }
`;

const JejuButton = styled.div`
    position: absolute;
    top: 75%;
    left: 15%;
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 3px solid black;
    background-color: white;
    border-radius:50px;
    width:40px;
    height:40px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: skyblue;
        
    }
`;


export { Map, SeoulButton, KIButton, KangwonButton, JejuButton, JyunlaButton, KyungsangButton, ChungcyungButton }