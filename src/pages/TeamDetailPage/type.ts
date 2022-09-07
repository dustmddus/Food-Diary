export interface TeamProfile {
  id: number;
  name: string;
  description: string;
  sportsCategory: string;
  members: [
    {
      userId: number;
      nickname: string;
      profileImageUrl: string;
      role: string;
    }
  ];
  matchRecord: {
    win: number;
    draw: number;
    lose: number;
  };
  matchReview: {
    bestCount: number;
    likeCount: number;
    dislikeCount: number;
  };
  leader: {
    id: number;
    username: string;
    nickname: string;
    userSettings: {
      location: {
        latitude: number;
        longitude: number;
      };
      searchDistance: number;
    };
    email: string;
    profileImageUrl: string;
    role: "USER";
  };
  logoImageUrl: string;
}
