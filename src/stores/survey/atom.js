import { atom } from "recoil";

const surveyState = atom({
  key: "surveyState",
  default: {
    id: 1,
    title: "title",
    questions: [
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
    ],
  },
});

export default surveyState;
