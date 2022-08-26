export const dummyData = {
  data: {
    id: 0,
    name: "한사랑 농구팀",
    description: "안녕하세요~반갑슴다.ㅏ삼승연이올시다. ",
    sportsCategory: "농구",
    members: [
      {
        userId: 0,
        nickname: "연승연",
        profileImageUrl: "string",
        role: "LEADER",
      },
      {
        userId: 1,
        nickname: "삼승연",
        profileImageUrl: "string",
        role: "LEADER",
      },
    ],
    matchRecord: {
      win: 3,
      draw: 2,
      lose: 1,
    },
    matchReview: {
      bestCount: 5,
      likeCount: 3,
      dislikeCount: 1,
    },
    leader: {
      id: 0,
      username: "",
      nickname: "string",
      userSettings: {
        location: {
          latitude: 0,
          longitude: 0,
        },
        searchDistance: 0,
      },
      email: "string",
      profileImageUrl: "string",
      role: "USER",
    },
    logoImageUrl: "string",
  },
};
