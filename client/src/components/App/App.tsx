import React from "react";
import { Route, Switch } from "react-router";
import { DetailRoute } from "../../Routes/Detail/Detail";
import { HomeRoute } from "../../Routes/Home/Home";
import { Navbar } from "../Navbar/Navbar";
import { StyledApp, StyledAppContainer } from "./App.style";
import { Toaster } from "react-hot-toast";
import { AuthorRoute } from "../../Routes/Author/Author";
import { useStoreContext } from "../../store/StoreContext";
import { useRequest } from "../../utils/useRequest";
import { Book } from "../../models/book";
import { getAllBook } from "../../services/bookServices";
import { getAllAuthor } from "../../services/authorServices";

export interface AppProps {}

export const App: React.FunctionComponent<AppProps> = () => {
  const { makingRequest, makeRequest } = useRequest<Book[]>();
  const { actions } = useStoreContext();

  React.useEffect(() => {
    makeRequest({
      request: getAllBook,
      onSuccess: actions.fetchBooks,
      onError: () => {},
    });

    makeRequest({
      request: getAllAuthor,
      onSuccess: actions.fetchAuthors,
      onError: () => {},
    });
  }, []);

  if (makingRequest) return <div>Loading...</div>;
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
