import { useRecoilState } from "recoil";

import answersState from "../stores/answers/atom";
import useStep from "./useStep";

function useCurrentAnswer() {
  const step = useStep();
  const [answerList, setAnswerList] = useRecoilState(answersState);

  const answer = answerList[step];
  const setAnswer = (newAnswer) => {
    const newAnswerList = [...answerList];
    newAnswerList[step] = newAnswer;

    return newAnswerList;
  };

  return { answer, setAnswer };
}

export default useCurrentAnswer;
