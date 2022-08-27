import { useState } from "react";
import * as React from "react";
import * as S from "./PostCreatePage.style";
import Dropdown from "src/components/Dropdown";
import { Category, TeamList } from "./dummyData";

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

const PostCreatePage = () => {
  const [type, setType] = useState("");

  const handleRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  return (
    <S.Container>
      <S.Title>공고 작성</S.Title>
      <S.Input placeholder="제목" />
      <S.MatchType>
        <S.Label>개인전</S.Label>
        <S.MatchTypeInput
          type="radio"
          value="solo"
          checked={type === "solo"}
          onChange={handleRadioButton}
        />
        <S.Label>팀전</S.Label>
        <S.MatchTypeInput
          type="radio"
          value="team"
          checked={type === "team"}
          onChange={handleRadioButton}
        />
      </S.MatchType>

      {type === "solo" && (
        <>
          <Dropdown valueList={Category} placeholder="종목 선택" />
        </>
      )}
      {type === "team" && (
        <>
          <Dropdown
            valueList={teamDropdownItem(TeamList.data)}
            placeholder="팀 선택"
          />
          <S.Input placeholder="인원" />
        </>
      )}
      <S.Title>상세 설명</S.Title>
      <S.TextArea placeholder="내용을 입력해주세요" />
      <S.SubmitButton>작성 완료</S.SubmitButton>
    </S.Container>
  );
};

export default PostCreatePage;
