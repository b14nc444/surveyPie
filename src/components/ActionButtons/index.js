import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import useAnswers from "../../hooks/useAnswers";
import useSurveyId from "../../hooks/useServeyId";
import useStep from "../../hooks/useStep";
import postAnswers from "../../services/postAnswers";
import questionsLengthState from "../../stores/survey/questionsLengthState";
import Button from "../Button";

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const answerList = useAnswers();
  const questionLength = useRecoilValue(questionsLengthState);

  const [isPosting, setIsPosting] = useState(false);
  const isLastStep = step === questionLength - 1;
  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {" "}
      {step > 0 && (
        <Button type="TERTIARY" onClick={() => navigate(`${step - 1}`)}>
          {" "}
          이전{" "}
        </Button>
      )}{" "}
      {isLastStep ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            setIsPosting(true);
            console.log(postAnswers);
            postAnswers(surveyId, answerList)
              .then(() => {
                navigate(`/done/${surveyId}`);
              })
              .catch((e) => {
                alert("에러가 발생했습니다. 다시 시도해주세요.");
                setIsPosting(false);
              });
          }}
          disabled={isPosting}
        >
          {isPosting ? "제출중..." : "제출"}{" "}
        </Button>
      ) : (
        <Button type="PRIMARY" onClick={() => navigate(`${step + 1}`)}>
          {" "}
          다음{" "}
        </Button>
      )}{" "}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 72px;
  justify-content: center;
`;

export default ActionButtons;
