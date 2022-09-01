import { useState, useCallback } from "react";
import * as S from "./NavigationBar.style";
import logo from "../../assets/textLogo.svg";
import Modal from "../Modal";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import Distance from "../Distance";
import DistanceModal from "../DistanceModal";
import { useRecoilState } from "recoil";
import { LoginModal, SignUpModal } from "src/recoil/modal";
const NavigationBar = () => {
  const [isOpenDistanceModal, setOpenDistanceModal] = useState<boolean>(false);
  const [isOpenLoginModal, setOpenLoginModal] = useRecoilState(LoginModal);
  const [isOpenSignUpModal, setOpenSignUpModal] = useRecoilState(SignUpModal);

  const setDistance = useCallback(() => {
    setOpenDistanceModal(!isOpenDistanceModal);
  }, [isOpenDistanceModal]);

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
            <S.Item onClick={setDistance}>내 동네 설정</S.Item>
            <S.NavItem to="/postList">공고 보기</S.NavItem>
            <S.NavItem to="/team/create">팀 만들기</S.NavItem>
            <S.NavItem to="/post/create">글쓰기</S.NavItem>
            <S.NavItem to="/">채팅방</S.NavItem>
          </S.Nav>
        </S.ItemContainer>
        {isOpenDistanceModal && (
          <DistanceModal onClickToggleModal={setDistance}>
            <Distance />
          </DistanceModal>
        )}
        {isOpenLoginModal && (
          <S.ModalContainer>
            <Modal onClickToggleModal={onClickLoginButton}>
              <LoginForm />
            </Modal>
          </S.ModalContainer>
        )}
        {isOpenSignUpModal && (
          <S.ModalContainer>
            <Modal onClickToggleModal={onClickSignUpButton}>
              <SignUpForm />
            </Modal>
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
