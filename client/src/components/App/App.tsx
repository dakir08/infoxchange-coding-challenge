import React from "react";
import { Route, Switch } from "react-router";
import { DetailRoute } from "../../Routes/Detail/Detail";
import { HomeRoute } from "../../Routes/Home/Home";

export interface AppProps {}

export const App: React.FunctionComponent<AppProps> = () => {
  return (
    <>
      <Switch>
        <Route path="/detail/:id">
          <DetailRoute />
        </Route>
        <Route path="/">
          <HomeRoute />
        </Route>
      </Switch>
    </>
  );
};
