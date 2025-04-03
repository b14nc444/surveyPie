import { useRecoilValue } from "recoil";

import { questionsState } from "../stores/questions/atom";
import useStep from "./useStep";

function useCurrentQuestion() {
  const step = useStep();
  const questionList = useRecoilValue(questionsState);

  return questionList[step];
}

export default useCurrentQuestion;
