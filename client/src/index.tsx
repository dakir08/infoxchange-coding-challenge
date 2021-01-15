import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App/App";
import { Global } from "@emotion/react";
import { globalStyle } from "./style/global";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
