import { atom } from "recoil";

export const experimentState = atom({
  key: "experimentState",
  default: {
    level: 0,
    totalEx: 0,
  },
});

export const nicknameState = atom({
  key: "nicknameState",
  default: "채널톡",
});
