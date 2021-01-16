import React from "react";
import { Book } from "../../components/Book/Book";
import { StyledBookWrapper, StyledHome } from "./Home.style";
import { useStoreContext } from "../../store/StoreContext";

export interface HomeRouteProps {}

export const HomeRoute: React.FunctionComponent<HomeRouteProps> = () => {
  const {
    state: { books },
  } = useStoreContext();

  const { actions } = useStoreContext();

  React.useEffect(() => {
    actions.fetchBooks();
  }, []);

  return (
    <StyledHome>
      {books.map(({ id, name }) => (
        <StyledBookWrapper key={id}>
          <Book title={name!} bookId={id!} />
        </StyledBookWrapper>
      ))}
    </StyledHome>
  );
};
