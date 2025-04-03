import { selector } from "recoil";

import { questionsState } from "./atom";

export const questionsLengthState = selector({
  key: "questionsLength",
  get: ({ get }) => {
    const questionList = get(questionsState);

    return questionList.length;
  },
});
