import { axiosAuthInstance } from "../utils/axiosInstances";

export const InviteUser = async (teamId?: string, userId?: number) => {
  const res = await axiosAuthInstance.post(`/api/teams/${teamId}/invitations`, {
    targetUserId: userId,
  });
  return res;
};

export const getInvitationList = async () => {
  const {
    data: { data },
  } = await axiosAuthInstance.get("/api/teams/invitations", {
    params: {
      size: 10,
      status: "WAITING",
    },
  });
  return data;
};
