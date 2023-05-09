import styled from "styled-components";
import { Link } from "react-router-dom";

// 깃터짐 테스트용 주석

const TopMenu = styled.div`
  width: auto;
  display: flex;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const MenuButton = styled.button`
  margin-top: 50px;
  margin-left: 20px;
  color: white;
  background-color: #a1beff;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  line-height: 30px;
  padding: 5px;
  width: 100px;
  text-align: center;
  &:hover {
    color: #ffffff;
    background-color: #c2beff;
    cursor: pointer;
  }
`;
export { TopMenu, MenuLink, MenuButton };
