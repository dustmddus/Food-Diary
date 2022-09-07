import * as S from "../TeamDetailPage/TeamDetailPage.style";
import Avatar from "../../assets/avatar.svg";
import Best from "../../assets/best.svg";
import Good from "../../assets/good.svg";
import Bad from "../../assets/bad.svg";
import { dummyData, MatchData } from "./dummyData";
import Text from "src/components/Text";
import MatchResultChart from "src/components/MatchResultChart";
import { Link } from "react-router-dom";
import Button from "src/components/Button";

const PersonalDetailPage = () => {
  const { data } = dummyData;
  return (
    <S.Container>
      <S.CoverImg />
      <S.Description>
        <S.ProfileWrapper>
          <S.ProfileImg src={Avatar} />
          <S.Info>
            <Text size="24px" weight="600">
              {data.nickname}
            </Text>
            <Text color="gray" size="16px">
              {data.localName}
            </Text>
          </S.Info>
        </S.ProfileWrapper>
      </S.Description>
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
      <S.InnerWrapper>
        <S.MatchHistory>
          <Text size="20px" weight="600">
            나의 전적
          </Text>
          <MatchResultChart matchResult={MatchData.data} />
        </S.MatchHistory>
        <S.MatchReview>
          <Text size="20px" weight="600">
            나의 후기
          </Text>
          <S.ReviewWrapper>
            <S.ReviewItem>
              <S.ReviewImg src={Best} />
              <Text size="18px">최고예요</Text>
              <Text size="18px">{data.review.bestCount}</Text>
            </S.ReviewItem>
            <S.ReviewItem>
              <S.ReviewImg src={Good} />
              <Text size="18px">좋아요</Text>
              <Text size="18px">{data.review.likeCount}</Text>
            </S.ReviewItem>
            <S.ReviewItem>
              <S.ReviewImg src={Bad} />
              <Text size="18px">별로예요</Text>
              <Text size="18px">{data.review.dislikeCount}</Text>
            </S.ReviewItem>
          </S.ReviewWrapper>
        </S.MatchReview>
        <S.MemberList>
          <S.TeamWrapper>
            <Text size="20px" weight="600">
              팀 목록
            </Text>
          </S.TeamWrapper>
          {data.teams.map((i) => (
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
  );
};

export default PersonalDetailPage;
