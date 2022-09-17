import Dropdown from "src/components/Dropdown";
import * as S from "./ProposalPage.style";
import { useEffect, useState } from "react";
import { axiosAuthInstance } from "src/apis/axiosInstances";
import { useNavigate, useParams } from "react-router-dom";
import { PostDetail } from "../PostDetailPage/type";
import { validation } from "./validation";
import { getTeamLeader } from "src/apis/user";
import { getPostDetail } from "src/apis/post";

interface Team {
  id: number;
  sportsCategory: string;
  name: string;
  logoImageUrl: string | null;
  memberCount: number;
}

interface Proposal {
  teamId?: string | number;
  content?: string;
}

const teamDropdownItem = (teams: Team[]) =>
  teams.map(({ id, name, sportsCategory, memberCount }, idx) => ({
    id: idx,
    text: name,
    value: { id, sportsCategory, memberCount },
  }));

const ProposalPage = () => {
  const param = useParams();
  const [teams, setTeams] = useState<Team[]>([]);
  const [postDetail, setPostDetail] = useState<PostDetail>();
  const [state, setState] = useState<Proposal>();
  const [firstSubmit, setFirstSubmit] = useState(true);
  const [memberNum, setMemberNum] = useState<number>();
  const [errors, setErrors] = useState<Partial<Proposal>>({});

  const navigation = useNavigate();

  const handleSelectTeam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTeam = teams?.filter(
      (item) => item.name === e.target.value
    )[0];
    setState({ ...state, teamId: selectedTeam.id });
    setMemberNum(selectedTeam.memberCount);
  };

  useEffect(() => {
    const getMyTeam = async () => {
      try {
        const res = await getPostDetail(param.ID);
        setPostDetail(res.data.data);
        (async () => {
          const data = await getTeamLeader();
          setTeams(
            data.filter(
              (item: { sportsCategory: string }) =>
                item.sportsCategory === res.data.data.sportsCategory
            )
          );
        })();
      } catch (e) {
        console.log(e);
      }
    };
    getMyTeam();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setState({ ...state, content: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFirstSubmit(false);
    const error = validation({
      ...state,
      participants: postDetail?.participants,
      memberNum,
      matchType: postDetail?.matchType,
    });
    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }
    const submit = async () => {
      try {
        const res = await axiosAuthInstance.post(
          `/api/matches/${param.ID}/proposals`,
          state
        );
        if (res.status === 200) {
          alert("신청 완료!");
          navigation("/");
        }
      } catch (e) {
        console.log(e);
      }
    };
    submit();
  };

  useEffect(() => {
    if (!firstSubmit) {
      setErrors(
        validation({
          ...state,
          participants: postDetail?.participants,
          memberNum,
          matchType: postDetail?.matchType,
        })
      );
    }
  }, [state]);

  return (
    <S.Container>
      <S.Title>신청하기</S.Title>
      <S.ItemWrapper>
        {postDetail?.matchType === "TEAM_MATCH" && teams && (
          <>
            <Dropdown
              width="600px"
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
          </>
        )}
      </S.ItemWrapper>
      <S.TextArea
        onChange={handleChange}
        maxLength={30}
        placeholder="요청 내용을 입력해주세요~!!"
      />
      {errors.content && <S.ErrorText>{errors.content}</S.ErrorText>}
      <S.SubmitButton onClick={handleSubmit}>신청하기</S.SubmitButton>
    </S.Container>
  );
};

export default ProposalPage;
