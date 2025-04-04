import { useRecoilState } from "recoil";

import surveyState from "../stores/survey/surveyState";
import useSurveyId from "./useServeyId";
import useStep from "./useStep";

function useCurrentQuestion() {
  const step = useStep();
  const surveyId = useSurveyId();
  const [surveyData, setSurveyData] = useRecoilState(surveyState);
  const questionList = (surveyData && surveyData.questions) || [];

  return questionList[step];
}

export default useCurrentQuestion;
