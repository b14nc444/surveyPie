import "./App.css";

import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CompletionPage from "./pages/CompletionPage";
import SurveyPage from "./pages/SurveyPage";

function App() {
  return (
    <AppWrapper>
      <Container>
        <Routes>
          <Route path="/done" element={<CompletionPage />} />{" "}
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />{" "}
          </Route>{" "}
        </Routes>{" "}
      </Container>{" "}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
`;

const Container = styled.div`
  width: 720px;
  min-height: 500px;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
`;

export default App;
