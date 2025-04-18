import styled from "styled-components";

const Bar = styled.div`
  width: 120px;
  height: 8px;
  border-radius: 16px;
  background-color: ${({ status }) => {
    if (status === "pending") {
      return "#e3e2e7";
    } else if (status === "active") {
      return "#6542f1";
    } else if (status === "completed") {
      return "#baa9ff";
    }
  }};
`;

export default Bar;
