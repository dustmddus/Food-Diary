import * as S from "./SignUpForm.style";
const SignUpForm = () => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

export default SignUpForm;
