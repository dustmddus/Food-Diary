import * as S from "./RecentMatch.style";
import TeamProfile from "./TeamProfile";
import VS from "../../assets/VSimg.png";
const RecentMatch = () => {
  return (
    <S.Container>
      <S.Profile>
        <TeamProfile />
        <S.TeamInfoBtn>팀 정보</S.TeamInfoBtn>
      </S.Profile>
      <S.Info>
        <img src={VS} width="130px" />
        <S.InfoDetail>
          <S.DetailItem>장소: 잠실 주경기장</S.DetailItem>
          <S.DetailItem>날짜: 2022년 09월 15일</S.DetailItem>
          <S.DetailItem>시간: 오후 5시</S.DetailItem>
        </S.InfoDetail>
      </S.Info>
      <S.Profile>
        <TeamProfile />
        <S.TeamInfoBtn>팀 정보</S.TeamInfoBtn>
      </S.Profile>
    </S.Container>
  );
};

export default RecentMatch;
