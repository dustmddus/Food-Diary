import * as S from "./TeamDetailPage.style";
import Avatar from "../../assets/avatar.svg";
import Best from "../../assets/best.svg";
import Good from "../../assets/good.svg";
import Bad from "../../assets/bad.svg";
import { dummyData } from "./dummyData";
import Text from "src/components/Text";
import MatchResultChart from "src/components/MatchResultChart";

const TeamDetailPage = () => {
  const { data } = dummyData;
  return (
    <S.Container>
      <S.CoverImg />
      <S.Description>
        <S.ProfileImg src={Avatar} />
        <S.ProfileWrapper>
          <S.Info>
            <S.Title>{data.name}</S.Title>
            <S.CategoryBadge>{data.sportsCategory}</S.CategoryBadge>
          </S.Info>
          <S.EditBtn>프로필 수정</S.EditBtn>
        </S.ProfileWrapper>
      </S.Description>
      <S.Content>{data.description}</S.Content>
      <S.MatchHistory>
        <Text size="24px" weight="600">
          팀 전적
        </Text>
        <MatchResultChart matchResult={data.matchRecord} />
      </S.MatchHistory>
      <S.MatchReview>
        <Text size="24px" weight="600">
          팀 후기
        </Text>
        <S.ReviewWrapper>
          <S.ReviewItem>
            <S.ReviewImg src={Best} />
            <Text size="20px">최고예요</Text>
            <Text size="20px">{data.matchReview.bestCount}</Text>
          </S.ReviewItem>
          <S.ReviewItem>
            <S.ReviewImg src={Good} />
            <Text size="20px">좋아요</Text>
            <Text size="20px">{data.matchReview.likeCount}</Text>
          </S.ReviewItem>
          <S.ReviewItem>
            <S.ReviewImg src={Bad} />
            <Text size="20px">별로예요</Text>
            <Text size="20px">{data.matchReview.dislikeCount}</Text>
          </S.ReviewItem>
        </S.ReviewWrapper>
      </S.MatchReview>
      <S.MemberList>
        <Text size="24px" weight="600">
          팀원
        </Text>
        <S.AddMember>팀원 추가</S.AddMember>
        {data.members.map((i) => (
          <S.MemberProfile>
            <S.MemberImg src={Avatar} width="80px" />
            <Text size="20px">{i.nickname}</Text>
          </S.MemberProfile>
        ))}
      </S.MemberList>
    </S.Container>
  );
};

export default TeamDetailPage;
