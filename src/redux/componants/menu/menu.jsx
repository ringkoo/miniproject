import { MenuLink, MenuButton, TopMenu } from "./styles";

function Menu() {
  return (
    <TopMenu>
      <MenuButton>
        <MenuLink to="/Areadetail">전체보기</MenuLink>
      </MenuButton>
      <MenuButton>
        <MenuLink to="/food">맛집</MenuLink>
      </MenuButton>
      <MenuButton>
        <MenuLink to="/tour">관광지</MenuLink>
      </MenuButton>
      <MenuButton>
        <MenuLink to="/festival">축제</MenuLink>
      </MenuButton>
    </TopMenu>
  );
}

export default Menu;
