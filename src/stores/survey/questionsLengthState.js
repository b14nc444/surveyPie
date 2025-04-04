import { selector } from "recoil";

import surveyState from "./atom";

const questionsLengthState = selector({
  key: "questionsLengthState",
  get: ({ get }) => {
    const questionList = get(surveyState).questions;

    return questionList.length;
  },
});

export default questionsLengthState;
