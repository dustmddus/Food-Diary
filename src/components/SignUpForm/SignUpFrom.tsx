import { FormEvent, useState } from "react";
import { axiosDefaultInstance } from "src/apis/utils/axiosInstances";
import { useForm } from "src/hooks/useForm";
import * as S from "./SignUpForm.style";
import { Values } from "./types";
import validation from "./validation";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginModal, SignUpModal } from "src/recoil/modal";

const SignUpForm = () => {
  const [isOpenSignUpModal, setOpenSignUpModal] = useRecoilState(SignUpModal);
  const [isOpenLoginModal, setOpenLoginModal] = useRecoilState(LoginModal);

  const navigate = useNavigate();
  //리렌더링 위한 상태
  const [checked, setChecked] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState({
    username: false,
    nickname: false,
  });

  const onSubmit = (values: Values, e?: FormEvent<HTMLFormElement>) => {
    if (!isDuplicate.username || !isDuplicate.nickname) {
      window.alert("아이디/닉네임 중복 확인을 해주세요!");
      return;
    }
    const { username, nickname, password } = values;
    e?.preventDefault();
    const signup = async () => {
      try {
        const res = await axiosDefaultInstance({
          method: "post",
          url: "/api/users/signup",
          data: {
            username,
            nickname,
            password,
          },
        });
        if (res.status === 200) {
          window.alert("스팸에 오신걸 환영합니다~!");
          setOpenSignUpModal(!isOpenSignUpModal);
          setOpenLoginModal(!isOpenLoginModal);
        }
      } catch (err) {
        console.log(err);
      }
    };
    signup();
  };

  const { values, errors, success, handleChange, handleSubmit } =
    useForm<Values>({
      initialValue: {
        username: "",
        nickname: "",
        password: "",
        passwordCheck: "",
      },
      initialError: {
        username: "",
        nickname: "",
        password: "",
        passwordCheck: "",
      },
      initialSuccess: {
        username: "",
        nickname: "",
      },
      onSubmit,
      validate: validation,
    });

  const { username, nickname, password, passwordCheck } = values;

  const handleUsernameCheck = () => {
    const usernameCheck = async () => {
      const { username: usernameValidation } = validation({ username });

      if (usernameValidation) {
        errors.username = usernameValidation;
        setChecked((state) => !state);
        return;
      }

      const res = await axiosDefaultInstance({
        method: "get",
        url: `/api/users/username/duplication?input=${
          values.username as string
        }`,
      });
      if ((res.data as { data: boolean }).data) {
        success.username = "";
        errors.username = "이미 사용중인 아이디입니다.";
      } else {
        errors.username = "";
        success.username = "사용 가능한 아이디입니다.";
        setIsDuplicate({
          ...isDuplicate,
          username: true,
        });
      }
      setChecked((state) => !state);
    };
    if (username?.length === 0) {
      success.username = "";
      errors.username = "아이디를 입력해주세요.";
      setChecked((state) => !state);
      return;
    }
    usernameCheck();
  };

  const handleNicknameCheck = () => {
    const nicknameCheck = async () => {
      const { nickname: nicknameValidation } = validation({
        nickname,
      });

      if (nicknameValidation) {
        errors.nickname = nicknameValidation;
        setChecked((state) => !state);
        return;
      }

      const res = await axiosDefaultInstance({
        method: "get",
        url: `/api/users/nickname/duplication?input=${
          values.nickname as string
        }`,
      });
      if ((res.data as { data: Boolean }).data) {
        success.nickname = "";
        errors.nickname = "이미 사용중인 닉네임입니다.";
      } else {
        errors.nickname = "";
        success.nickname = "사용 가능한 닉네임입니다.";
        setIsDuplicate({
          ...isDuplicate,
          nickname: true,
        });
      }
      setChecked((state) => !state);
    };
    if (nickname?.length === 0) {
      success.nickname = "";
      errors.nickname = "닉네임을 입력해주세요.";
      setChecked((state) => !state);
      return;
    }
    nicknameCheck();
  };
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>회원가입</S.Title>
      <S.FormWrapper>
        <S.ConfirmInput
          name="username"
          value={username}
          placeholder="아이디"
          onChange={(e) => {
            handleChange(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleUsernameCheck();
            }
          }}
        />
        <S.ConfirmButton type="button" onClick={handleUsernameCheck}>
          중복 확인
        </S.ConfirmButton>
      </S.FormWrapper>
      {errors.username ? (
        <S.ErrorText>{errors.username}</S.ErrorText>
      ) : (
        <S.SuccessText>{success.username}</S.SuccessText>
      )}

      <S.FormWrapper>
        <S.ConfirmInput
          name="nickname"
          value={nickname}
          onChange={handleChange}
          placeholder="닉네임"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleNicknameCheck();
            }
          }}
        />
        <S.ConfirmButton type="button" onClick={handleNicknameCheck}>
          중복 확인
        </S.ConfirmButton>
      </S.FormWrapper>
      {errors.nickname ? (
        <S.ErrorText>{errors.nickname}</S.ErrorText>
      ) : (
        <S.SuccessText>{success.nickname}</S.SuccessText>
      )}
      <S.Input
        name="password"
        value={password}
        type="password"
        onChange={handleChange}
        placeholder="비밀번호"
      />
      <S.ErrorText>{errors.password}</S.ErrorText>
      <S.Input
        name="passwordCheck"
        value={passwordCheck}
        onChange={handleChange}
        type="password"
        placeholder="비밀번호 확인"
      />
      <S.ErrorText>{errors.passwordCheck}</S.ErrorText>
      <S.SignUpButton>회원가입</S.SignUpButton>
    </S.Form>
  );
};

export default SignUpForm;
