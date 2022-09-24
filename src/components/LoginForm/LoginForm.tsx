import * as S from "./LoginForm.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LoginModal, SignUpModal, LocationModal } from "src/recoil/modal";
import { useForm } from "src/hooks/useForm";
import { Values, ErrorResponse } from "./types";
import { FormEvent } from "react";
import { userInfo } from "src/recoil/user";
import { AxiosError } from "axios";
import { loginStatus } from "src/recoil/authentication";
import { userLogin } from "src/apis/api/auth";

const LoginForm = () => {
  const setUser = useSetRecoilState(userInfo);
  const [isOpenLocationModal, setOpenLocationModal] =
    useRecoilState(LocationModal);
  const [isOpenLoginModal, setOpenLoginModal] = useRecoilState(LoginModal);
  const [isOpenSignUpModal, setOpenSignUpModal] = useRecoilState(SignUpModal);
  const [isLogin, setIsLogin] = useRecoilState(loginStatus);

  const onSubmit = async (values: Values, e?: FormEvent<HTMLFormElement>) => {
    const { userId, password } = values;
    e?.preventDefault();
    try {
      const userInfo = await userLogin(userId, password);
      setUser(userInfo);
      if (userInfo.searchDistance === null) {
        console.log(userInfo.searchDistance);
        setOpenLoginModal(!isOpenLoginModal);
        setOpenLocationModal(!isOpenLocationModal);
      } else {
        setOpenLoginModal(!isOpenLoginModal);
      }
      setIsLogin(true);
    } catch (error) {
      const { response } = error as AxiosError;
      const errorCode = (response?.data as ErrorResponse).code;
      if (errorCode === "A0001" || errorCode === "V0001") {
        window.alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    }
  };

  const handleSignUpClick = () => {
    setOpenLoginModal(!isOpenLoginModal);
    setOpenSignUpModal(!isOpenSignUpModal);
  };

  const { values, handleChange, handleSubmit } = useForm<Values>({
    initialValue: {
      userId: "",
      password: "",
    },
    initialError: {
      userId: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>로그인</S.Title>

        <S.Input
          name="userId"
          value={values.userId}
          onChange={handleChange}
          placeholder="아이디를 입력하세요"
        />
        <S.Input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력하세요"
        />
        <S.LoginButton>로그인</S.LoginButton>
      </S.Form>
      <S.Text>아직 SFAM의 회원이 아니신가요?</S.Text>
      <S.SignUpButton onClick={handleSignUpClick}>회원가입</S.SignUpButton>
    </S.Container>
  );
};

export default LoginForm;
