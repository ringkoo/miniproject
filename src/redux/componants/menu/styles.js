import styled from "styled-components";
import { Link } from "react-router-dom";
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
  background-color: #009774;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  line-height: 30px;
  padding: 5px;
  width: 100px;
  text-align: center;
  &:hover {
    color: #ffffff;
    background-color: #016a52;
    cursor: pointer;
  }
`;
export { TopMenu, MenuLink, MenuButton };
