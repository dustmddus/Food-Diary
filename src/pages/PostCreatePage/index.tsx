import { useState, useEffect } from "react";
import * as React from "react";
import * as S from "./PostCreatePage.style";
import Dropdown from "src/components/Dropdown";
import {
  SPORTS_CATEGORY_DROPDOWN,
  SPORTS_CATEGORY_TEXT,
} from "../../constants/category";
import { Content, Team } from "./type";
import "react-datepicker/dist/react-datepicker.css";
import { validation } from "./validation";
import { useNavigate } from "react-router-dom";
import Button from "src/components/Button";
import { getTeamLeader } from "src/apis/api/user";
import { createPost } from "src/apis/api/post";

const teamDropdownItem = (teams: Team[]) =>
  teams.map(({ id, name, sportsCategory, memberCount }, idx) => ({
    id: idx,
    text: name,
    value: { id, sportsCategory, memberCount },
  }));

const PostCreatePage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [errors, setErrors] = useState<Partial<Content>>({});
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fisrtSubmit, setFirstSubmit] = useState(true);
  const [memberNum, setMemberNum] = useState(0);
  const [state, setState] = useState<Content>({
    title: "",
    matchType: "",
    sportsCategory: "",
    matchDate: "",
    participants: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "matchType") {
      setState({
        ...state,
        [name]: value,
        participants: value === "INDIVIDUAL_MATCH" ? "1" : "",
      });
      return;
    }
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const category = Object.keys(SPORTS_CATEGORY_TEXT).find(
      (key) => SPORTS_CATEGORY_TEXT[key] === value
    );
    setState({ ...state, sportsCategory: category || "" });
  };

  const handleSelectTeam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTeam = teams.filter(
      (item) => item.name === e.target.value
    )[0];
    setState({
      ...state,
      teamId: selectedTeam.id,
      sportsCategory: selectedTeam.sportsCategory,
    });
    setMemberNum(selectedTeam.memberCount);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFirstSubmit(false);
    const error = validation({ ...state, memberCount: memberNum });
    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }
    try {
      const res = await createPost(state);
      if (res.status === 200) {
        alert("공고 작성 완료!");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!fisrtSubmit) {
      setErrors(validation({ ...state, memberCount: memberNum }));
    }
  }, [state]);

  useEffect(() => {
    const getTeam = async () => {
      try {
        setIsLoading(true);
        const data = await getTeamLeader();
        setTeams(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getTeam();
  }, []);

  return (
    <S.Container>
      <S.Title>공고 작성</S.Title>

      <S.Input
        name="title"
        onChange={handleChange}
        value={state.title}
        placeholder="제목"
      />
      {errors.title && <S.ErrorText>{errors.title}</S.ErrorText>}
      <S.MatchContent>
        <S.MatchType>
          <S.Label>개인전</S.Label>
          <S.MatchTypeInput
            name="matchType"
            type="radio"
            value="INDIVIDUAL_MATCH"
            checked={state.matchType === "INDIVIDUAL_MATCH"}
            onChange={handleChange}
          />
          <S.Label>팀전</S.Label>
          <S.MatchTypeInput
            name="matchType"
            type="radio"
            value="TEAM_MATCH"
            checked={state.matchType === "TEAM_MATCH"}
            onChange={handleChange}
          />
        </S.MatchType>
        {errors.matchType && <S.ErrorText>{errors.matchType}</S.ErrorText>}
        {state.matchType === "INDIVIDUAL_MATCH" && (
          <>
            <Dropdown
              onChange={handleSelectCategory}
              valueList={SPORTS_CATEGORY_DROPDOWN}
              placeholder="종목 선택"
            />
            {errors.sportsCategory && (
              <S.ErrorText>{errors.sportsCategory}</S.ErrorText>
            )}
          </>
        )}
        {state.matchType === "TEAM_MATCH" && (
          <>
            <Dropdown
              disabled={teams.length === 0}
              onChange={handleSelectTeam}
              valueList={teamDropdownItem(teams)}
              placeholder="팀 선택"
            />
            {errors.teamId && <S.ErrorText>{errors.teamId}</S.ErrorText>}
            {teams.length === 0 && (
              <S.TeamWrapper>
                <S.AlertText>
                  현재 운영 중인 팀이 없습니다! 새로운 팀을 만들어보세요
                </S.AlertText>
                <S.TeamCreateButton>새 팀 만들기</S.TeamCreateButton>
              </S.TeamWrapper>
            )}
            {teams.length !== 0 && (
              <>
                <S.Input
                  type="number"
                  name="participants"
                  min="1"
                  max={memberNum}
                  onChange={handleChange}
                  value={state.participants as number}
                  placeholder="경기 인원"
                />
                {errors.participants && (
                  <S.ErrorText>{errors.participants}</S.ErrorText>
                )}
              </>
            )}
          </>
        )}
      </S.MatchContent>
      <S.DateWrapper>
        <S.Text>경기일자</S.Text>
        <S.SDatePicker
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          selected={startDate}
          onChange={(date: any) => {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            let dateString = year + "-";
            if (month < 10) {
              dateString += "0";
            }
            dateString += month + "-";
            if (day < 10) {
              dateString += "0";
            }
            dateString += day;
            setStartDate(date);
            setState({ ...state, matchDate: dateString });
          }}
          startDate={startDate}
        />
      </S.DateWrapper>
      {errors.matchDate && <S.ErrorText>{errors.matchDate}</S.ErrorText>}
      <S.TextArea
        name="content"
        onChange={handleChange}
        placeholder="공고 내용을 작성해주세요!"
      />
      {errors.content && <S.ErrorText>{errors.content}</S.ErrorText>}
      {/* <S.SubmitButton onClick={handleSubmit}>작성 완료</S.SubmitButton> */}
      <Button buttonType="SUBMIT" onClick={handleSubmit}>
        작성 완료
      </Button>
    </S.Container>
  );
};

export default PostCreatePage;
