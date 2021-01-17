import React from "react";
import { Route, Switch } from "react-router";
import { DetailRoute } from "../../Routes/Detail/Detail";
import { HomeRoute } from "../../Routes/Home/Home";
import { Navbar } from "../Navbar/Navbar";
import { StyledApp, StyledAppContainer } from "./App.style";
import { Toaster } from "react-hot-toast";
import { AuthorRoute } from "../../Routes/Author/Author";
import { useApp } from "./App.logic";

export interface AppProps {}

export const App: React.FunctionComponent<AppProps> = () => {
  useApp();
  return (
    <StyledApp>
      <Navbar />
      <StyledAppContainer>
        <Switch>
          <Route path="/detail/:id">
            <DetailRoute />
          </Route>
          <Route path="/author">
            <AuthorRoute />
          </Route>
          <Route path="/">
            <HomeRoute />
          </Route>
        </Switch>
      </StyledAppContainer>
      <Toaster position="bottom-left" reverseOrder={false} />
    </StyledApp>
  );
};
