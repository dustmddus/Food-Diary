import { atom } from "recoil";

export interface User {
  email: string | null;
  id: number;
  latitude: number;
  longitude: number;
  nickname: string;
  profileImageUrl: string | null;
  role: string;
  searchDistance: number;
  username: string;
}

export const userInfo = atom<Partial<User>>({
  key: "userInfo",
  default: {},
});
