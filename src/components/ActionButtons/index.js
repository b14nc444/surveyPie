/* eslint-disable simple-import-sort/imports */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import Button from "../Button";
import useAnswers from "../../hooks/useAnswers";
import useRequiredOption from "../../hooks/useRequiredOption";
import useSurveyId from "../../hooks/useServeyId";
import useStep from "../../hooks/useStep";
import postAnswers from "../../services/postAnswers";
import questionsLengthState from "../../stores/survey/questionsLengthState";

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const answerList = useAnswers();
  const questionLength = useRecoilValue(questionsLengthState);
  const isRequired = useRequiredOption();

  const [isPosting, setIsPosting] = useState(false);
  const isLastStep = step === questionLength - 1;
  const navigate = useNavigate();

  const cantMoveNext = isRequired && (!answerList[step] || answerList[step].length === 0);

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
          disabled={isPosting || cantMoveNext}
        >
          {isPosting ? "제출중..." : "제출"}{" "}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => navigate(`${step + 1}`)}
          disabled={isPosting || cantMoveNext}
        >
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
