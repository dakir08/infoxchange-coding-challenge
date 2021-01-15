import React from "react";
import { Route, Switch } from "react-router";
import { DetailRoute } from "../../Routes/Detail/Detail";
import { HomeRoute } from "../../Routes/Home/Home";
import { Navbar } from "../Navbar/Navbar";
import {
  StyledApp,
  StyledAppContainer,
  StyledNavbarWrapper,
} from "./App.style";

export interface AppProps {}

export const App: React.FunctionComponent<AppProps> = () => {
  return (
    <StyledApp>
      <Navbar />

      <StyledAppContainer>
        <Switch>
          <Route path="/detail/:id">
            <DetailRoute />
          </Route>
          <Route path="/">
            <HomeRoute />
          </Route>
        </Switch>
      </StyledAppContainer>
    </StyledApp>
  );
};
