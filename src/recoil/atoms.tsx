import { atom, selector } from "recoil";

export const experimentState = atom({
  key: "experimentState",
  default: 0,
});

export const nicknameState = atom({
  key: "nicknameState",
  default: "채널톡",
});

export const experimentSelector = selector({
  key: "experimentSelector",
  get: ({ get }) => {
    const experiment = get(experimentState);
    return Math.ceil(Math.sqrt(experiment));
  },
});
