import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

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

const { persistAtom } = recoilPersist({
  key: 'userInfo',
});

export const userInfo = atom<Partial<User>>({
  key: "userInfo",
  default: {},
  effects_UNSTABLE:[persistAtom]
});

export const userLocation = atom({
  key: "userLocation",
  default: "",
});
