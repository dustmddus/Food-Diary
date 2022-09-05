export interface Values {
  title?: string;
  matchDate?: string;
  matchType?: string;
  teamId?: number | string;
  participants?: number | string;
  sportsCategory?: string;
  content?: string;
  memberCount?: string | number;
}

export const validation = ({
  title,
  matchType,
  participants,
  content,
  teamId,
  sportsCategory,
  matchDate,
  memberCount,
}: Values) => {
  const errors: Values = {};

  if (!title) {
    errors.title = "제목을 입력해주세요.";
  } else if (title.length < 2 || title.length > 50) {
    errors.title = "제목은 2자 이상 50자 이하입니다.";
  }

  if (!matchDate) {
    errors.matchDate = "경기일을 선택해주세요.";
  }

  if (!matchType) {
    errors.matchType = "개인전/팀전을 선택해주세요.";
  }

  if (!participants) {
    errors.participants = "인원을 입력해주세요.";
  } else if (memberCount && memberCount < participants) {
    errors.participants = "팀원 수 보다 모집 인원이 많습니다.";
  }

  if (!content) {
    errors.content = "공고 내용을 입력해주세요.";
  } else if (content.length < 2 || content.length > 100) {
    errors.content = "2자 이상 100자 이하로 입력해주세요.";
  }

  if (matchType === "TEAM_MATCH" && !teamId) {
    errors.teamId = "팀은 선택해주세요.";
  }

  if (matchType === "INDIVIDUAL_MATCH" && !sportsCategory) {
    errors.sportsCategory = "종목을 선택해주세요.";
  }

  return errors;
};
