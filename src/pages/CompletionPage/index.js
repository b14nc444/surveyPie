import axios from "axios";

function CompletionPage() {
  axios.get("http://localhost:3001/surveys").then((res) => {
    console.log("res", res.data);
  });
}

export default CompletionPage;
