import { useNavigate } from "react-router-dom";

import Button from "../Button";

function ActionButtons({ questionLength, step }) {
  const isLastStep = step === questionLength - 1;
  const navigate = useNavigate();

  return (
    <div>
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
    </div>
  );
}

export default ActionButtons;
