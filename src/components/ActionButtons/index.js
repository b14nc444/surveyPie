import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { questionsState } from "../../stores/questions/atom";
import Button from "../Button";

function ActionButtons() {
  const params = useParams();
  const step = parseInt(params.step);
  const questionList = useRecoilValue(questionsState);
  const questionLength = questionList.length;

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
        <Button type="PRIMARY" onClick={() => navigate("/done")}>
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
