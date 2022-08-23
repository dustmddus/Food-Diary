import * as S from "./NavigationBar.style";
import logo from "../../assets/textLogo.svg";
const NavigationBar = () => {
  return (
    <>
      <S.Continer>
        <S.ItemContainer>
          <S.Logo to="/">
            <img src={logo} alt="" />
          </S.Logo>
          <S.Nav>
            <S.NavItem to="/postList">공고 보기</S.NavItem>
            <S.NavItem to="/">팀 만들기</S.NavItem>
            <S.NavItem to="/">글쓰기</S.NavItem>
            <S.NavItem to="/">채팅방</S.NavItem>
          </S.Nav>
        </S.ItemContainer>
      </S.Continer>
    </>
  );
};

export default NavigationBar;
