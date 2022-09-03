import * as S from "./NavigationBar.style";
import logo from "../../assets/textLogo.svg";
import Modal from "../Modal";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import { useRecoilValue, useRecoilState } from "recoil";
import { LocationModal, LoginModal, SignUpModal } from "src/recoil/modal";
import { loginStatus } from "src/recoil/authentication";
import PrivacyBlock from "./PrivacyBlock";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LocationForm from "../LocationForm";

const NavigationBar = () => {
  const location = useLocation();

  const [isOpenLoginModal, setOpenLoginModal] = useRecoilState(LoginModal);
  const [isOpenSignUpModal, setOpenSignUpModal] = useRecoilState(SignUpModal);
  const [isOpenLocationModal, setOpenLocationModal] =
    useRecoilState(LocationModal);
  const isLogin = useRecoilValue(loginStatus);

  const onClickLoginButton = () => {
    setOpenLoginModal(!isOpenLoginModal);
  };

  const onClickSignUpButton = () => {
    setOpenSignUpModal(!isOpenSignUpModal);
  };

  const handleAlertLogin = () => {
    alert("로그인이 필요합니다~!!");
    setOpenLoginModal(true);
  };

  useEffect(() => {
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
            {isLogin ? (
              <>
                <S.NavItem to="/postList">공고 보기</S.NavItem>
                <S.NavItem to="/team/create">팀 만들기</S.NavItem>
                <S.NavItem to="/post/create">글쓰기</S.NavItem>
                <S.NavItem to="/">채팅방</S.NavItem>
              </>
            ) : (
              <>
                <S.Item onClick={handleAlertLogin}>공고 보기</S.Item>
                <S.Item onClick={handleAlertLogin}>팀 만들기</S.Item>
                <S.Item onClick={handleAlertLogin}>글쓰기</S.Item>
                <S.Item onClick={handleAlertLogin}>채팅방</S.Item>
              </>
            )}
          </S.Nav>
        </S.ItemContainer>

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
        {/* 위치 설정 모달 */}
        {isOpenLocationModal && (
          <S.ModalContainer>
            <Modal>
              <LocationForm />
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
