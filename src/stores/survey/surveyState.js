import { selector } from "recoil";

import getSurvey from "../../services/apis/getSurvey";

const SurveyState = selector({
  key: "surveyState",
  get: async () => {
    const res = await getSurvey(window.location.pathname.split("/")[2]);

    return res.data;
  },
});

export default SurveyState;
