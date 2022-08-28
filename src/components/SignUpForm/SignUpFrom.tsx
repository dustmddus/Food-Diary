import { useForm } from "src/hooks/useForm";
import * as S from "./SignUpForm.style";

interface Values {
  username?: string;
  nickname?: string;
  password?: string;
  passwordCheck?: string;
}

const SignUpForm = () => {
  // const { values, errors, success, handleChange, handleSubmit } =
  //   useForm<Values>({
  //     initialValue: {
  //       username: "",
  //       nickname: "",
  //       password: "",
  //       passwordCheck: "",
  //     },
  //     initialError: {
  //       username: "",
  //       nickname: "",
  //       password: "",
  //       passwordCheck: "",
  //     },
  //     initialSuccess: {
  //       username: "",
  //       nickname: "",
  //     },
  //     onSubmit,
  //     validate: "",
  //   });

  return (
    <S.Container>
      {/* <form onSubmit={handleSubmit}> */}
      <S.Title>회원가입</S.Title>
      <S.FormWrapper>
        <S.ConfirmInput placeholder="아이디(이메일)" />
        <S.ConfirmButton>중복 확인</S.ConfirmButton>
      </S.FormWrapper>
      <S.FormWrapper>
        <S.ConfirmInput placeholder="닉네임" />
        <S.ConfirmButton>중복 확인</S.ConfirmButton>
      </S.FormWrapper>
      <S.Input placeholder="비밀번호(8자 이상)" />
      <S.Input placeholder="비밀번호 확인" />
      <S.SignUpButton>회원가입</S.SignUpButton>
      {/* </form> */}
    </S.Container>
  );
};

export default SignUpForm;
