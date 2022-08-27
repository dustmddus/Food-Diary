import Dropdown from "src/components/Dropdown";
import * as S from "./ProposalPage.style";
import { TeamList } from "../PostCreatePage/dummyData";

interface Team {
  id: number;
  sportsCategory: string;
  name: string;
  logoImageUrl: string | null;
  memberCount: number;
}

const teamDropdownItem = (teams: Team[]) =>
  teams.map(({ id, name, sportsCategory, memberCount }, idx) => ({
    id: idx,
    text: name,
    value: { id, sportsCategory, memberCount },
  }));

const ProposalPage = () => {
  return (
    <S.Container>
      <S.Title>신청하기</S.Title>
      <Dropdown
        placeholder="팀 선택"
        valueList={teamDropdownItem(TeamList.data)}
      />
      <S.TextArea placeholder="요청 내용을 입력해주세요~!!" />
      <S.SubmitButton>신청하기</S.SubmitButton>
    </S.Container>
  );
};

export default ProposalPage;
