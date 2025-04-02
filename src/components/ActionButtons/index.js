import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

function ActionButtons({ questionLength, step }) {
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
