import React, { useState } from "react";
import { axiosAuthInstance } from "src/apis/axiosInstances";
import * as S from "./InvitePage.style";
import { InviteProfile } from "./type";
import Avatar from "src/assets/avatar.svg";
import Button from "src/components/Button";
import { useRecoilValue } from "recoil";
import { userInfo } from "src/recoil/user";
import { useParams } from "react-router-dom";
import { getUserByNickname } from "src/apis/user";
import { InviteUser } from "src/apis/invitation";

const InvitePage = () => {
  const param = useParams();
  const [state, setState] = useState<InviteProfile[]>([]);
  const [nickname, setNickname] = useState("");
  const user = useRecoilValue(userInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleInvite = (userItem: InviteProfile) => {
    if (user.id === userItem.id) {
      alert("본인은 초대할 수 없습니다.");
      return;
    }
    if (window.confirm(`${userItem.nickname}을 초대하시겠습니까?`)) {
      const invitation = async () => {
        try {
          const res = await InviteUser(param.ID, userItem.id);
          if (res.status === 200) {
            alert("초대 완료!");
          }
        } catch (e) {
          console.log(e);
        }
      };
      invitation();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nickname === "") {
      alert("닉네임을 입력해주세요!");
      return;
    }
    const res = await getUserByNickname(nickname);
    setState(res);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.InnerWrapper>
          <S.Input onChange={handleChange} placeholder="닉네임을 입력하세요." />
          <Button
            width="60px"
            height="40px"
            fontSize="14px"
            borderRadius="5px"
            buttonType="yellow"
          >
            검색
          </Button>
        </S.InnerWrapper>
      </S.Form>

      <S.Result>
        {state.map((userItem) => (
          <S.ProfileWrapper
            onClick={(i) => handleInvite(userItem)}
            key={userItem.id}
          >
            {userItem.profileImageUrl ? (
              <S.Img src={userItem.profileImageUrl} />
            ) : (
              <img width="60px" src={Avatar} />
            )}
            <S.Name>{userItem.nickname}</S.Name>
          </S.ProfileWrapper>
        ))}
      </S.Result>
    </S.Container>
  );
};

export default InvitePage;
