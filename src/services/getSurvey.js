import mainApi from "./axiosInstances/mainApi";

function getSurvey(surveyId) {
  return mainApi.get(`/surveys/${surveyId}`);
}

export default getSurvey;
