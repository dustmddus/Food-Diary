export interface PersonalProfile {
  nickname: string;
  profileImageUrl: string;
  email: string;
  localName: string;
  review: {
    bestCount: number;
    likeCount: number;
    dislikeCount: number;
  };
  teams: [
    {
      id: number;
      name: string;
      sportsCategory: string;
      logoImageUrl: string;
    }
  ];
}

export interface MatchRecord {
  win: number;
  draw: number;
  lose: number;
}
