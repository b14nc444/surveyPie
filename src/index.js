import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <React.StrictMode>
        <App />
      </React.StrictMode>{" "}
    </RecoilRoot>{" "}
  </BrowserRouter>
);
