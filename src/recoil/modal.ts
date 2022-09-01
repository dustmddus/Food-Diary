import { atom } from "recoil";

export const LoginModal = atom({
  key: "LoginModal",
  default: false,
});

export const SignUpModal = atom({
  key: "SignUpModal",
  default: false,
});

export const SetDistanceModal = atom({
  key: "SetDistanceModal",
  default: false,
});
