import Dropdown from "src/components/Dropdown";
import * as S from "./TeamCreatePage.style";
import { Category } from "../PostCreatePage/dummyData";

const TeamCreatePage = () => {
  return (
    <S.Container>
      <S.Title>팀 생성</S.Title>
      <S.Input placeholder="팀 이름" />
      <Dropdown placeholder="종목 선택" valueList={Category} />
      <S.Title>팀 소개</S.Title>
      <S.TextArea placeholder="팀을 소개해주세요!" />
      <S.SubmitButton>팀 생성</S.SubmitButton>
    </S.Container>
  );
};

export default TeamCreatePage;
