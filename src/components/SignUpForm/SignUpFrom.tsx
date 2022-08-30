import { FormEvent, useState } from "react";
import { axiosDefaultInstance } from "src/apis/axiosInstances";
import { useForm } from "src/hooks/useForm";
import * as S from "./SignUpForm.style";
import { Values } from "./types";
import validation from "./validation";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

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
          navigate("/signin");
        }
      } catch (err) {
        console.log(err);
      }
    };
    signup();
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setIsDuplicate({
      ...isDuplicate,
      [name]: false,
    });
  };

  const handleUsernameCheck = () => {
    const usernameCheck = async () => {
      const { username: usernameValidation } = validation({ username });

      if (usernameValidation) {
        errors.username = usernameValidation;
        return;
      }

      const res = await axiosDefaultInstance({
        method: "get",
        url: `/api/users/username/duplication?input=${
          values.username as string
        }`,
      });
      if ((res.data as { data: object }).data) {
        success.username = "";
        errors.username = "이미 사용중인 아이디입니다!";
      } else {
        errors.username = "";
        success.username = "사용 가능한 아이디입니다!";
        setIsDuplicate({
          ...isDuplicate,
          username: true,
        });
      }
    };
    if (username?.length === 0) {
      success.username = "";
      errors.username = "아이디를 입력해주세요.";
      return;
    }
    usernameCheck();
  };

  const handleNicknameCheck = () => {
    const nicknameCheck = async () => {
      const res = await axiosDefaultInstance({
        method: "get",
        url: `/api/users/nickname/duplication?input=${
          values.nickname as string
        }`,
      });
      if ((res.data as { data: object }).data) {
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
    };
    if (nickname?.length === 0) {
      success.nickname = "";
      errors.nickname = "닉네임을 입력해주세요.";
      return;
    }
    nicknameCheck();
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

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.Title>회원가입</S.Title>
        <S.FormWrapper>
          <S.ConfirmInput
            name="username"
            placeholder="아이디"
            onChange={(e) => {
              // 왜 여기선 handleChange를 하고 닉네임에선 안했냐
              handleUsernameChange(e);
              handleChange(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleUsernameCheck();
              }
            }}
          />
          <S.ConfirmButton onClick={handleUsernameCheck}>
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
            onChange={handleChange}
            placeholder="닉네임"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleNicknameCheck();
              }
            }}
          />
          <S.ConfirmButton onClick={handleNicknameCheck}>
            중복 확인
          </S.ConfirmButton>
          {errors.nickname ? (
            <S.ErrorText>{errors.nickname}</S.ErrorText>
          ) : (
            <S.SuccessText>{success.nickname}</S.SuccessText>
          )}
        </S.FormWrapper>
        <S.Input placeholder="비밀번호" />
        <S.Input placeholder="비밀번호 확인" />
        <S.SignUpButton>회원가입</S.SignUpButton>
      </form>
    </S.Container>
  );
};

export default SignUpForm;
