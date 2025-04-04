import mainApi from "./axiosInstances/mainApi";

function postAnswers(surveyId, data) {
  mainApi.post("/answers", { surveyId, data });
}

export default postAnswers;
