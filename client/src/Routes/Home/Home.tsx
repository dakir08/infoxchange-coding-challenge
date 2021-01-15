import React from "react";
import { Book as BookModel } from "../../models/book";
import { Book } from "../../components/Book/Book";
import { getAllBook } from "../../services/bookServices";

export interface HomeRouteProps {}

export const HomeRoute: React.FunctionComponent<HomeRouteProps> = () => {
  const [books, setBooks] = React.useState<BookModel[]>([]);

  React.useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const result = await getAllBook();
      setBooks(result);
    } catch (error) {
      console.log(error);
    }
  };

  if (books.length === 0) return <div>Loading...</div>;
  return (
    <>
      <Book title={books[0].name} />
    </>
  );
};
