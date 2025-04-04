import { useRecoilValue } from "recoil";

import answersState from "../stores/answers/atom";
import useStep from "./useStep";

function useCurrentAnswer() {
  const step = useStep();
  const answerList = useRecoilValue(answersState);

  const answer = answerList[step];
  const setAnswer = (newAnswer) => {
    setAnswerList((answerList) => {
      const newAnswerList = [...answerList];
      newAnswerList[step] = newAnswer;

      return newAnswerList;
    });
  };

  return { answer, setAnswer };
}

export default useCurrentAnswer;
