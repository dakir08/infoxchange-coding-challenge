import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App/App";
import { Global } from "@emotion/react";
import { globalStyle } from "./style/global";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./store/StoreContext";

ReactDOM.render(
  <React.Fragment>
    <Global styles={globalStyle} />
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
