import * as S from "./TeamDetailPage.style";
import Avatar from "../../assets/avatar.svg";
import Best from "../../assets/best.svg";
import Good from "../../assets/good.svg";
import Bad from "../../assets/bad.svg";
import { dummyData } from "./dummyData";
import Text from "src/components/Text";
import MatchResultChart from "src/components/MatchResultChart";
import { Link } from "react-router-dom";
import Badge from "src/components/Badge";
import Button from "src/components/Button";

const TeamDetailPage = () => {
  const { data } = dummyData;
  return (
    <S.Container>
      <S.CoverImg />
      <S.Description>
        <S.ProfileWrapper>
          <S.ProfileImg src={Avatar} />
          <S.InfoWrapper>
            <S.Info>
              <Text size="24px" weight="600">
                {data.name}
              </Text>
              <Badge>{data.sportsCategory}</Badge>
            </S.Info>
          </S.InfoWrapper>
        </S.ProfileWrapper>
      </S.Description>
      <S.ButtonWrapper>
        <Button
          buttonType="SUBMIT"
          width="120px"
          height="40px"
          fontSize="16px"
          borderRadius="5px"
        >
          프로필 수정
        </Button>
      </S.ButtonWrapper>
      <S.InnerWrapper>
        <S.Content>{data.description}</S.Content>
        <S.MatchHistory>
          <Text size="20px" weight="600">
            팀 전적
          </Text>
          <MatchResultChart matchResult={data.matchRecord} />
        </S.MatchHistory>
        <S.MatchReview>
          <Text size="20px" weight="600">
            팀 후기
          </Text>
          <S.ReviewWrapper>
            <S.ReviewItem>
              <S.ReviewImg src={Best} />
              <Text size="18px">최고예요</Text>
              <Text size="18px">{data.matchReview.bestCount}</Text>
            </S.ReviewItem>
            <S.ReviewItem>
              <S.ReviewImg src={Good} />
              <Text size="18px">좋아요</Text>
              <Text size="18px">{data.matchReview.likeCount}</Text>
            </S.ReviewItem>
            <S.ReviewItem>
              <S.ReviewImg src={Bad} />
              <Text size="18px">별로예요</Text>
              <Text size="18px">{data.matchReview.dislikeCount}</Text>
            </S.ReviewItem>
          </S.ReviewWrapper>
        </S.MatchReview>
        <S.MemberList>
          <S.TeamWrapper>
            <Text size="20px" weight="600">
              팀원
            </Text>
            <Button
              buttonType="SUBMIT"
              width="100px"
              height="35px"
              fontSize="14px"
              borderRadius="5px"
            >
              팀원 추가
            </Button>
          </S.TeamWrapper>
          {data.members.map((i) => (
            <Link to={`/personal/profile/${i.userId}`}>
              <S.MemberProfile>
                <S.MemberImg src={Avatar} width="80px" />
                <Text size="18px">{i.nickname}</Text>
              </S.MemberProfile>
            </Link>
          ))}
        </S.MemberList>
      </S.InnerWrapper>
    </S.Container>
  );
};

export default TeamDetailPage;
