import * as S from "./PersonalDetailPage.style";
import Avatar from "../../assets/avatar.svg";
import Best from "../../assets/best.svg";
import Good from "../../assets/good.svg";
import Bad from "../../assets/bad.svg";
import { dummyData, MatchData } from "./dummyData";
import Text from "src/components/Text";
import MatchResultChart from "src/components/MatchResultChart";
import { Link } from "react-router-dom";

const PersonalDetailPage = () => {
  const { data } = dummyData;
  return (
    <S.Container>
      <S.CoverImg />
      <S.Description>
        <S.ProfileImg src={Avatar} />
        <S.ProfileWrapper>
          <S.Info>
            <S.Title>{data.nickname}</S.Title>
            <S.LocalName>{data.localName}</S.LocalName>
          </S.Info>
          <S.EditBtn>프로필 수정</S.EditBtn>
        </S.ProfileWrapper>
      </S.Description>
      <S.MatchHistory>
        <Text size="24px" weight="600">
          나의 전적
        </Text>
        <MatchResultChart matchResult={MatchData.data} />
      </S.MatchHistory>
      <S.MatchReview>
        <Text size="24px" weight="600">
          나의 후기
        </Text>
        <S.ReviewWrapper>
          <S.ReviewItem>
            <S.ReviewImg src={Best} />
            <Text size="20px">최고예요</Text>
            <Text size="20px">{data.review.bestCount}</Text>
          </S.ReviewItem>
          <S.ReviewItem>
            <S.ReviewImg src={Good} />
            <Text size="20px">좋아요</Text>
            <Text size="20px">{data.review.likeCount}</Text>
          </S.ReviewItem>
          <S.ReviewItem>
            <S.ReviewImg src={Bad} />
            <Text size="20px">별로예요</Text>
            <Text size="20px">{data.review.dislikeCount}</Text>
          </S.ReviewItem>
        </S.ReviewWrapper>
      </S.MatchReview>
      <S.MemberList>
        <Text size="24px" weight="600">
          팀 목록
        </Text>
        {data.teams.map((i) => (
          <Link to={`/team/profile/${i.id}`}>
            <S.MemberProfile>
              <S.MemberImg src={Avatar} width="80px" />
              <Text size="20px">{i.name}</Text>
            </S.MemberProfile>
          </Link>
        ))}
      </S.MemberList>
    </S.Container>
  );
};

export default PersonalDetailPage;
