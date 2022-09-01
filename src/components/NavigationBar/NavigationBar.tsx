import * as S from "./NavigationBar.style";
import logo from "../../assets/textLogo.svg";
import Modal from "../Modal";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import Distance from "../Distance";
import DistanceModal from "../DistanceModal";
import { useRecoilState } from "recoil";
import { LoginModal, SignUpModal, SetDistanceModal } from "src/recoil/modal";
import { loginStatus } from "src/recoil/authentication";
import PrivacyBlock from "./PrivacyBlock";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavigationBar = () => {
  const location = useLocation();
  const [isOpenDistanceModal, setOpenDistanceModal] =
    useRecoilState(SetDistanceModal);
  const [isOpenLoginModal, setOpenLoginModal] = useRecoilState(LoginModal);
  const [isOpenSignUpModal, setOpenSignUpModal] = useRecoilState(SignUpModal);
  const [isLogin, setIsLogin] = useRecoilState(loginStatus);

  const setDistance = () => {
    setOpenDistanceModal(!isOpenDistanceModal);
  };

  const onClickLoginButton = () => {
    setOpenLoginModal(!isOpenLoginModal);
  };

  const onClickSignUpButton = () => {
    setOpenSignUpModal(!isOpenSignUpModal);
  };

  useEffect(() => {
    setOpenDistanceModal(false);
    setOpenLoginModal(false);
    setOpenSignUpModal(false);
  }, [location]);
  return (
    <>
      <S.Continer>
        <S.ItemContainer>
          <S.Logo to="/">
            <img src={logo} alt="" width="150px" />
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
          {isLogin ? (
            <PrivacyBlock />
          ) : (
            <>
              <S.Button onClick={onClickLoginButton}>로그인</S.Button>
              <S.Button onClick={onClickSignUpButton}>회원가입</S.Button>
            </>
          )}
        </S.UserButton>
      </S.Continer>
    </>
  );
};

export default NavigationBar;
