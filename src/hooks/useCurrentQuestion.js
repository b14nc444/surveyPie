import { useRecoilValue } from "recoil";

import surveyState from "../stores/survey/atom";
import useStep from "./useStep";

function useCurrentQuestion() {
  const step = useStep();
  const questionList = useRecoilValue(surveyState).questions;

  return questionList[step];
}

export default useCurrentQuestion;
