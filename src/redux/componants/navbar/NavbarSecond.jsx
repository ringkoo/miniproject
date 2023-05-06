import styled from "styled-components";
import { Link } from "react-router-dom";
const TopMenu = styled.div`
  height: 50px;
  width: auto;
  display: flex;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: block;
  width: 150px;

  &:hover {
    color: #ffffff;
    background-color: #016a52;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  color: white;
  background-color: #009774;
  float: left;
  line-height: 30px;
  text-align: center;
`;

function NavbarSecond() {
  return (
    <TopMenu>
      <ul style={{ padding: 0, margin: 0 }}>
        <MenuItem>
          <MenuLink to="/Areadetail">전체보기</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/food">맛집</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/festival">축제</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/tour">관광지</MenuLink>
        </MenuItem>
      </ul>
    </TopMenu>
  );
}

export default NavbarSecond;
