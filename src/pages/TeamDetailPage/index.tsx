import * as S from "./TeamDetailPage.style";
import Avatar from "../../assets/avatar.svg";
import { dummyData } from "./dummyData";
import Text from "src/components/Text";
import MatchResultChart from "src/components/MatchResultChart";

const TeamDetailPage = () => {
  const { data } = dummyData;
  return (
    <S.Container>
      <S.CoverImg></S.CoverImg>
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
    </S.Container>
  );
};

export default TeamDetailPage;
