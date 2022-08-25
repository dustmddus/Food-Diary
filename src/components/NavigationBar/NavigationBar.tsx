import { useState, useCallback } from "react";
import * as S from "./NavigationBar.style";
import logo from "../../assets/textLogo.svg";
import Modal from "../Modal";
const NavigationBar = () => {
  const [isOpenLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [isOpenSignUpModal, setOpenSignUpModal] = useState<boolean>(false);

  const onClickLoginButton = useCallback(() => {
    setOpenLoginModal(!isOpenLoginModal);
  }, [isOpenLoginModal]);

  const onClickSignUpButton = useCallback(() => {
    setOpenSignUpModal(!isOpenSignUpModal);
  }, [isOpenSignUpModal]);

  return (
    <>
      <S.Continer>
        <S.ItemContainer>
          <S.Logo to="/">
            <img src={logo} alt="" />
          </S.Logo>
          <S.Nav>
            <S.NavItem to="/postList">공고 보기</S.NavItem>
            <S.NavItem to="/team/create">팀 만들기</S.NavItem>
            <S.NavItem to="/post/create">글쓰기</S.NavItem>
            <S.NavItem to="/">채팅방</S.NavItem>
          </S.Nav>
        </S.ItemContainer>
        {isOpenLoginModal && (
          <S.ModalContainer>
            <Modal onClickToggleModal={onClickLoginButton}>hello</Modal>
          </S.ModalContainer>
        )}
        {isOpenSignUpModal && (
          <S.ModalContainer>
            <Modal onClickToggleModal={onClickSignUpButton}>king</Modal>
          </S.ModalContainer>
        )}

        <S.UserButton>
          <S.Button onClick={onClickLoginButton}>로그인</S.Button>
          <S.Button onClick={onClickSignUpButton}>회원가입</S.Button>
        </S.UserButton>
      </S.Continer>
    </>
  );
};

export default NavigationBar;
