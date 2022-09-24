import { Team } from "src/pages/TeamCreatePage/type";
import { axiosAuthInstance } from "../utils/axiosInstances";

export const getTeamDetail = async (teamId: string) => {
  const {
    data: { data },
  } = await axiosAuthInstance.get(`/api/teams/${teamId}`);

  return data;
};

export const createTeam = async (content: Team) => {
  const data = await axiosAuthInstance.post("/api/teams", content);
  return data;
};
