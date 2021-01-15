import React from "react";
import { Book as BookModel } from "../../models/book";
import { Book } from "../../components/Book/Book";
import { getAllBook } from "../../services/bookServices";
import { StyledBookWrapper, StyledHome } from "./Home.style";
import { useRequest } from "../../utils/useRequest";

export interface HomeRouteProps {}

export const HomeRoute: React.FunctionComponent<HomeRouteProps> = () => {
  const {
    data: books,
    setData: setBooks,
    makingRequest: fetchingBooks,
    makeRequest: fetchBooks,
  } = useRequest<BookModel[]>();

  React.useEffect(() => {
    fetchBooks({
      request: getAllBook,
      onSuccess: setBooks,
      onError: () => {},
    });
  }, []);

  if (fetchingBooks || !books) return <div>Loading...</div>;
  return (
    <StyledHome>
      {books.map(({ id, name }) => (
        <StyledBookWrapper key={id}>
          <Book title={name} bookId={id} />
        </StyledBookWrapper>
      ))}
    </StyledHome>
  );
};
