import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "theme"}>
      <React.StrictMode>
        <App />
      </React.StrictMode>{" "}
    </StyleSheetManager>{" "}
  </BrowserRouter>
);
