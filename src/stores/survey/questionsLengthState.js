import { selector } from "recoil";

import SurveyState from "./surveyState";

const questionsLengthState = selector({
  key: "questionsLength",
  get: ({ get }) => {
    const questionList = get(SurveyState).questions;

    return questionList.length;
  },
});

export default questionsLengthState;
