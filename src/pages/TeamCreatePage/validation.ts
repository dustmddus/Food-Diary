export interface Team {
  name?: string;
  description?: string;
  sportsCategory?: string;
}

export const validation = ({ name, description, sportsCategory }: Team) => {
  const errors: Team = {};
  if (!name) {
    errors.name = "팀 이름을 입력해주세요.";
  } else if (name.length < 2 || name.length > 10) {
    errors.name = "팀 이름은 2자 이상 10자 이하입니다.";
  }

  if (!sportsCategory) {
    errors.sportsCategory = "종목을 선택해주세요.";
  }

  if (!description) {
    errors.description = "팀 소개를 작성해주세요.";
  } else if (description.length > 100) {
    errors.description = "100자 이하로 작성해주세요.";
  }

  return errors;
};
