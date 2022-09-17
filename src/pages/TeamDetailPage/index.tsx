import * as S from "./TeamDetailPage.style";
import Avatar from "../../assets/avatar.svg";
import Best from "../../assets/best.svg";
import Good from "../../assets/good.svg";
import Bad from "../../assets/bad.svg";
import Text from "src/components/Text";
import MatchResultChart from "src/components/MatchResultChart";
import { Link, useLocation } from "react-router-dom";
import Badge from "src/components/Badge";
import Button from "src/components/Button";
import { useEffect, useState } from "react";
import { TeamProfile } from "./type";
import { useRecoilValue } from "recoil";
import { userInfo } from "src/recoil/user";
import { SPORTS_CATEGORY_TEXT } from "src/constants/category";
import { getTeamDetail } from "src/apis/team";

const TeamDetailPage = () => {
  const user = useRecoilValue(userInfo);
  const location = useLocation();
  const [state, setState] = useState<TeamProfile>();
  const [isLeader, setIsLeader] = useState(false);

  const teamId = location.pathname.split("/")[3];
  useEffect(() => {
    const getTeamProfile = async () => {
      try {
        const data = await getTeamDetail(teamId);
        setState(data);
        if (data.leader.id === user.id) {
          setIsLeader(true);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getTeamProfile();
  }, []);

  return (
    state !== undefined && (
      <S.Container>
        <S.CoverImg />
        <S.Description>
          <S.ProfileWrapper>
            <S.ProfileImg src={Avatar} />
            <S.Info>
              <Text size="24px" weight="600">
                {state.name}
              </Text>
              <Badge>{SPORTS_CATEGORY_TEXT[state.sportsCategory]}</Badge>
            </S.Info>
          </S.ProfileWrapper>
        </S.Description>
        {isLeader && (
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
          <S.Content>{state.description}</S.Content>
          <S.MatchHistory>
            <Text size="20px" weight="600">
              팀 전적
            </Text>
            <MatchResultChart matchResult={state.matchRecord} />
          </S.MatchHistory>
          <S.MatchReview>
            <Text size="20px" weight="600">
              팀 후기
            </Text>
            <S.ReviewWrapper>
              <S.ReviewItem>
                <S.ReviewImg src={Best} />
                <Text size="18px">최고예요</Text>
                <Text size="18px">{state.matchReview.bestCount}</Text>
              </S.ReviewItem>
              <S.ReviewItem>
                <S.ReviewImg src={Good} />
                <Text size="18px">좋아요</Text>
                <Text size="18px">{state.matchReview.likeCount}</Text>
              </S.ReviewItem>
              <S.ReviewItem>
                <S.ReviewImg src={Bad} />
                <Text size="18px">별로예요</Text>
                <Text size="18px">{state.matchReview.dislikeCount}</Text>
              </S.ReviewItem>
            </S.ReviewWrapper>
          </S.MatchReview>
          <S.MemberList>
            <S.TeamWrapper>
              <Text size="20px" weight="600">
                팀원
              </Text>
              {isLeader && (
                <Link to={`/invite/${teamId}`}>
                  <Button
                    buttonType="SUBMIT"
                    width="100px"
                    height="35px"
                    fontSize="14px"
                    borderRadius="5px"
                  >
                    팀원 추가
                  </Button>
                </Link>
              )}
            </S.TeamWrapper>
            {state.members.map((i) => (
              <Link to={`/personal/profile/${i.userId}`}>
                <S.MemberProfile key={i.userId}>
                  <S.MemberImg src={Avatar} width="80px" />
                  <Text size="18px">{i.nickname}</Text>
                </S.MemberProfile>
              </Link>
            ))}
          </S.MemberList>
        </S.InnerWrapper>
      </S.Container>
    )
  );
};

export default TeamDetailPage;
