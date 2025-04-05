import mainApi from "./axiosInstances/mainApi";

function postAnswers(surveyId, data) {
  return mainApi.post("/answers", { surveyId, data });
}

export default postAnswers;
