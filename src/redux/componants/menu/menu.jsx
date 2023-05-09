import { MenuButton, TopMenu } from "./styles";
import { useNavigate } from "react-router-dom";
import { MenuLink, MenuButton, TopMenu } from "./styles";
function Menu() {
  const navigate = useNavigate();
  return (
    <TopMenu>
      <MenuButton
        onClick={() => {
          navigate("/Areadetail", {
            state: { category: "" },
          });
        }}
      >
        전체보기
      </MenuButton>
      <MenuButton
        onClick={() => {
          navigate("/Areadetail", { state: { category: "맛집" } });
        }}
      >
        맛집
      </MenuButton>
      <MenuButton
        onClick={() => {
          navigate("/Areadetail", { state: { category: "관광지" } });
        }}
      >
        관광지
      </MenuButton>
      <MenuButton
        onClick={() => {
          navigate("/Areadetail", { state: { category: "축제" } });
        }}
      >
        축제
      </MenuButton>
    </TopMenu>
  );
}

export default Menu;
