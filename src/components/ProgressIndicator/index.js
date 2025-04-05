import { useRecoilValue } from "recoil";
import styled from "styled-components";

import useAnswers from "../../hooks/useAnswers";
import useStep from "../../hooks/useStep";
import questionsLengthState from "../../stores/survey/questionsLengthState";
import Bar from "../Bar";

function ProgressIndicator() {
  const length = useRecoilValue(questionsLengthState);
  const answerList = useAnswers();
  const step = useStep();

  const bars = [];
  for (let i = 0; i < length; i++) {
    let status = "pending";
    if (i === step) {
      status = "active";
    } else if (answerList[i]) {
      status = "completed";
    }

    bars.push(<Bar key={i} status={status} />);
  }

  return (
    <ProgressIndicatorWrapper>
      {" "}
      {bars}{" "}
      <PageCounter>
        <span> {step + 1} </span> / {length}{" "}
      </PageCounter>{" "}
    </ProgressIndicatorWrapper>
  );
}

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(100% + 24px);
  left: 0;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

const PageCounter = styled.div`
  margin-left: 8px;
  color: #636262;
  font-size: 16px;

  span {
    font-weight: bold;
    color: #121111;
  }
`;

export default ProgressIndicator;
