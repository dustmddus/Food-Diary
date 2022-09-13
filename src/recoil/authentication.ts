import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom}=recoilPersist({
  key:'loginStatus',
})


export const loginStatus = atom({
  key: "loginStatus",
  default: false,
  effects_UNSTABLE:[persistAtom]
});
