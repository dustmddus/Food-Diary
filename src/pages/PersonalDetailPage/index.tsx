import * as S from "../TeamDetailPage/TeamDetailPage.style";
import Avatar from "../../assets/avatar.svg";
import Best from "../../assets/best.svg";
import Good from "../../assets/good.svg";
import Bad from "../../assets/bad.svg";
import Text from "src/components/Text";
import MatchResultChart from "src/components/MatchResultChart";
import { Link, useLocation } from "react-router-dom";
import Button from "src/components/Button";
import { useEffect, useState } from "react";
import { MatchRecord, PersonalProfile } from "./type";
import { useRecoilValue } from "recoil";
import { userInfo } from "src/recoil/user";
import { getMatchRecord, getUserInfo } from "src/apis/user";

const PersonalDetailPage = () => {
  const user = useRecoilValue(userInfo);
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [state, setState] = useState<PersonalProfile>();
  const [isUser, setIsUser] = useState(false);
  const [matchRecord, setMatchRecord] = useState<MatchRecord>();

  useEffect(() => {
    const getPersonalProfile = async () => {
      try {
        const data = await getUserInfo(id);
        setState(data);
        if (id === String(user.id)) {
          setIsUser(true);
        }
      } catch (e) {
        console.log(e);
      }
    };
    const getRecord = async () => {
      try {
        const data = await getMatchRecord(id);
        setMatchRecord(data);
      } catch (e) {
        console.log(e);
      }
    };
    getPersonalProfile();
    getRecord();
  }, []);
  return (
    state !== undefined &&
    matchRecord && (
      <S.Container>
        <S.CoverImg />
        <S.Description>
          <S.ProfileWrapper>
            <S.ProfileImg src={Avatar} />
            <S.Info>
              <Text size="24px" weight="600">
                {state.nickname}
              </Text>
              <Text color="gray" size="16px">
                {state.localName}
              </Text>
            </S.Info>
          </S.ProfileWrapper>
        </S.Description>
        {isUser && (
          <S.ButtonWrapper>
            <Button
              buttonType="SUBMIT"
              width="100px"
              height="35px"
              fontSize="14px"
              borderRadius="5px"
            >
              프로필 수정
            </Button>
          </S.ButtonWrapper>
        )}
        <S.InnerWrapper>
          <S.MatchHistory>
            <Text size="20px" weight="600">
              경기 전적
            </Text>
            <MatchResultChart matchResult={matchRecord} />
          </S.MatchHistory>
          <S.MatchReview>
            <Text size="20px" weight="600">
              후기
            </Text>
            <S.ReviewWrapper>
              <S.ReviewItem>
                <S.ReviewImg src={Best} />
                <Text size="18px">최고예요</Text>
                <Text size="18px">{state.review.bestCount}</Text>
              </S.ReviewItem>
              <S.ReviewItem>
                <S.ReviewImg src={Good} />
                <Text size="18px">좋아요</Text>
                <Text size="18px">{state.review.likeCount}</Text>
              </S.ReviewItem>
              <S.ReviewItem>
                <S.ReviewImg src={Bad} />
                <Text size="18px">별로예요</Text>
                <Text size="18px">{state.review.dislikeCount}</Text>
              </S.ReviewItem>
            </S.ReviewWrapper>
          </S.MatchReview>
          <S.MemberList>
            <S.TeamWrapper>
              <Text size="20px" weight="600">
                팀 목록
              </Text>
            </S.TeamWrapper>
            {state.teams.map((i) => (
              <Link to={`/team/profile/${i.id}`}>
                <S.MemberProfile>
                  <S.MemberImg src={Avatar} width="80px" />
                  <Text size="18px">{i.name}</Text>
                </S.MemberProfile>
              </Link>
            ))}
          </S.MemberList>
        </S.InnerWrapper>
      </S.Container>
    )
  );
};

export default PersonalDetailPage;
