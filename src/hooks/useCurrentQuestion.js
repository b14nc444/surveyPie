import { useRecoilValue } from "recoil";

import surveyState from "../stores/survey/surveyState";
import useStep from "./useStep";

function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questionList = (surveyData && surveyData.questions) || [];

  return questionList[step];
}

export default useCurrentQuestion;
