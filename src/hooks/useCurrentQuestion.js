import { useRecoilValue } from "recoil";

import SurveyState from "../stores/survey/surveyState";
import useStep from "./useStep";

function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useRecoilValue(SurveyState);
  const questionList = (surveyData && surveyData.questions) || [];

  return questionList[step];
}

export default useCurrentQuestion;
