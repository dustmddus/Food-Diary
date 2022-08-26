import * as S from "./LoginForm.style";
const LoginForm = () => {
  return (
    <S.Container>
      <S.Title>로그인</S.Title>

      <S.Input placeholder="아이디(이메일)를 입력하세요" />
      <S.Input placeholder="비밀번호를 입력하세요" />

      <S.LoginButton>로그인</S.LoginButton>
      <S.Text>아직 SFAM의 회원이 아니신가요?</S.Text>
      <S.SignUpButton>회원가입</S.SignUpButton>
    </S.Container>
  );
};

export default LoginForm;
