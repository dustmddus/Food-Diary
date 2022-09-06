interface Value {
  teamId?: number | string;
  content?: string;
  participants?: number;
  matchType?: string;
  memberNum?: number;
}

export const validation = ({
  teamId,
  content,
  matchType,
  participants,
  memberNum,
}: Value) => {
  const errors: Value = {};

  if (matchType === "TEAM_MATCH" && !teamId) {
    errors.teamId = "팀을 선택해주세요";
  } else if (
    matchType === "TEAM_MATCH" &&
    participants &&
    memberNum &&
    participants > memberNum
  ) {
    errors.teamId =
      "팀원 수가 부족합니다. 해당 공고의 경기 인원을 확인해주세요!";
  }
  if (!content) {
    errors.content = "요청 내용을 입력해주세요.";
  } else if (content.length < 2 || content.length > 30) {
    errors.content = "2자 이상 30자 이하로 작성해주세요.";
  }
  return errors;
};
