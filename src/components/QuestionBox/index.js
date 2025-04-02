import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { answersState } from "../../stores/answers/atom";
import { questionsState } from "../../stores/questions/atom";
import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

function QuestionBox() {
  const params = useParams();
  const step = parseInt(params.step);
  const questionList = useRecoilValue(questionsState);
  const [answerList, setAnswerList] = useRecoilState(answersState);

  const question = questionList[step];
  const answer = answerList[step];
  const setAnswer = (newAnswer) => {
    const newAnswerList = [...answerList];
    newAnswerList[step] = newAnswer;

    return newAnswerList;
  };

  return (
    <QuestionBoxWrapper>
      <Title> {question.title} </Title> <Desc> {question.desc} </Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />{" "}
      <ActionButtons />{" "}
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
