import styled from "styled-components";

const CompletionPageContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  padding: 4em;
`;

function CompletionPage() {
    return <CompletionPageContainer > 완료 페이지 < /CompletionPageContainer>;
}

export default CompletionPage;