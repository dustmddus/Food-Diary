interface Text {
  [key: string]: string;
}

export const SPORTS_CATEGORY_DROPDOWN = [
  { id: 0, text: "축구", value: { sportsCategory: "SOCCER" } },
  { id: 1, text: "야구", value: { sportsCategory: "BASEBALL" } },
  { id: 2, text: "농구", value: { sportsCategory: "BASKETBALL" } },
  { id: 3, text: "배드민턴", value: { sportsCategory: "BADMINTON" } },
  { id: 4, text: "테니스", value: { sportsCategory: "TENNIS" } },
  { id: 5, text: "볼링", value: { sportsCategory: "BOWLING" } },
  { id: 6, text: "골프", value: { sportsCategory: "GOLF" } },
];

export const MATCH_STATUS_DROPDOWN = [
  { id: 0, text: "모집 중", value: { status: "WAITING" } },
  { id: 1, text: "모집 완료", value: { status: "IN_GAME" } },
];

export const SPORTS_CATEGORY_TEXT: Text = {
  SOCCER: "축구",
  BASEBALL: "야구",
  BASKETBALL: "농구",
  BADMINTON: "배드민턴",
  BOWLING: "볼링",
  TENNIS: "테니스",
  GOLF: "골프",
};

export const MATCH_TYPE_TEXT: Text = {
  TEAM_MATCH: "팀전",
  INDIVIDUAL_MATCH: "개인전",
};

export const MATCH_STATUS_TEXT: Text = {
  WAITING: "모집 중",
  IN_GAME: "모집 완료",
  END: "경기 완료",
};
