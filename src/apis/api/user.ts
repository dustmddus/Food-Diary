import { axiosAuthInstance } from "../utils/axiosInstances";

export const getUserByNickname = async (nickname: string) => {
  const {
    data: { data },
  } = await axiosAuthInstance.get(`/api/users`, {
    params: { nickname: nickname },
  });
  return data;
};

export const getUserInfo = async (id: string) => {
  const {
    data: { data },
  } = await axiosAuthInstance(`/api/users/${id}`);
  return data;
};

export const getMatchRecord = async (id: string) => {
  const {
    data: { data },
  } = await axiosAuthInstance.get("/api/matches/records", {
    params: { userId: id },
  });
  return data;
};

export const getTeamLeader = async () => {
  const {
    data: { data },
  } = await axiosAuthInstance.get("/api/teams/me/leader");
  return data;
};
