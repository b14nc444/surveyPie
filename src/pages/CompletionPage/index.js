import axios from "axios";

function CompletionPage() {
  axios.get("http://localhost:3001/surveys").then((res) => {
    console.log("res", res);
  });
  return <div> 완료 페이지 </div>;
}

export default CompletionPage;
