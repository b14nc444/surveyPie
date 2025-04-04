import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import useAnswers from "../../hooks/useAnswers";
import useStep from "../../hooks/useStep";
import useSurveyId from "../../hooks/useSurveyId";
import postAnswers from "../../services/postAnswers";
import questionsLengthState from "../../stores/survey/questionsLengthState";
import Button from "../Button";

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const answers = useAnswers();
  const questionLength = useRecoilValue(questionsLengthState);

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
            postAnswers(surveyId, answers);
            navigate("/done");
          }}
        >
          {" "}
          제출{" "}
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
