import React from "react";
import { Book } from "../../components/Book/Book";
import { useHome } from "./Home.logic";
import { StyledBookWrapper, StyledHome } from "./Home.style";

export interface HomeRouteProps {}

export const HomeRoute: React.FunctionComponent<HomeRouteProps> = () => {
  const {
    models: { books },
  } = useHome();

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
