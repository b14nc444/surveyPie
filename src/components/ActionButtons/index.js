import { useNavigate } from "react-router-dom";

function ActionButtons({ questionLength, step }) {
    const isLastStep = step === questionLength - 1;
    const navigate = useNavigate();
    const surveyId = "1";

    return ( <
        div > {
            step > 0 && < button onClick = {
                () => navigate(`/survey/${surveyId}/${step - 1}`) } > 이전 < /button>} {
                isLastStep ? ( <
                    button onClick = {
                        () => navigate("/done") } > 제출 < /button>
                ) : ( <
                    button onClick = {
                        () => navigate(`/survey/${surveyId}/${step + 1}`) } > 다음 < /button>
                )
            } <
            /div>
        );
    }

    export default ActionButtons;