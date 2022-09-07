import * as S from "./LoginForm.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LoginModal, SignUpModal, LocationModal } from "src/recoil/modal";
import { useForm } from "src/hooks/useForm";
import { Values, Response, User, ErrorResponse } from "./types";
import { FormEvent } from "react";
import { axiosAuthInstance } from "src/apis/axiosInstances";
import { userInfo } from "src/recoil/user";
import { AxiosError } from "axios";
import { loginStatus } from "src/recoil/authentication";

const LoginForm = () => {
  const setUser = useSetRecoilState(userInfo);
  const [isOpenLocationModal, setOpenLocationModal] =
    useRecoilState(LocationModal);
  const [isOpenLoginModal, setOpenLoginModal] = useRecoilState(LoginModal);
  const [isOpenSignUpModal, setOpenSignUpModal] = useRecoilState(SignUpModal);
  const [isLogin, setIsLogin] = useRecoilState(loginStatus);

  const onSubmit = (values: Values, e?: FormEvent<HTMLFormElement>) => {
    const { username, password } = values;
    e?.preventDefault();
    const signin = async () => {
      try {
        const {
          data: { data: user },
        } = await axiosAuthInstance.post<Response<User>>("/api/users/signin", {
          username,
          password,
        });
        console.log(user);
        setUser(user);
        if (user.searchDistance === null) {
          console.log(user.searchDistance);
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
    signin();
  };

  const handleSignUpClick = () => {
    setOpenLoginModal(!isOpenLoginModal);
    setOpenSignUpModal(!isOpenSignUpModal);
  };

  const { values, handleChange, handleSubmit } = useForm<Values>({
    initialValue: {
      username: "",
      password: "",
    },
    initialError: {
      username: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>로그인</S.Title>

        <S.Input
          name="username"
          value={values.username}
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
