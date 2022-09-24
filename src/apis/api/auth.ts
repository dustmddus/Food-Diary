import { Response, User } from "src/components/LoginForm/types";
import { axiosAuthInstance } from "../utils/axiosInstances";

export const userLogin = async (username: string, password: string) => {
  const {
    data: { data: user },
  } = await axiosAuthInstance.post<Response<User>>("/api/users/signin", {
    username,
    password,
  });
  return user;
};

export const userLogout = async () => {
  const res = await axiosAuthInstance.delete(`/api/users/signout`);
  return res;
};
