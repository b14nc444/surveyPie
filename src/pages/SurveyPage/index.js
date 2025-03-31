import { useState } from "react";
import { useParams } from "react-router-dom";

import ProgressIndicator from "../../components/ProgressIndicator";
import QuestionBox from "../../components/QuestionBox";

function SurveyPage() {
  const params = useParams();
  const questionList = [
    {
      title: "질문 1입니다.",
      desc: "설명 1입니다.",
      type: "select",
      required: false,
      options: {
        items: ["옵션1", "옵션2", "옵션3"],
      },
    },
    {
      title: "질문 2입니다.",
      desc: "설명 2입니다.",
      type: "text",
      required: true,
      options: {
        placeholder: "답변을 입력해주세요",
      },
    },
    {
      title: "질문 3입니다.",
      desc: "설명 3입니다.",
      type: "textarea",
      required: true,
      options: {
        placeholder: "400자 이내로 입력해주세요",
      },
    },
  ];

  const step = parseInt(params.step);

  const [answerList, setAnswerList] = useState(Array(questionList.length).fill(""));

  console.log(answerList);

  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questionList[step]}
        questionLength={questionList.length}
        step={step}
        answer={answerList[step]}
        setAnswer={(newAnswer) => {
          setAnswerList((answerList) => {
            const newAnswerList = [...answerList];
            newAnswerList[step] = newAnswer;
            return newAnswerList;
          });
        }}
      />{" "}
    </div>
  );
}

export default SurveyPage;
