import React from "react";
import { useHistory, useParams } from "react-router";
import { Book } from "../../models/book";
import { getBookById } from "../../services/bookServices";
import { useRequest } from "../../utils/useRequest";

export interface DetailRouteProps {}

export const DetailRoute: React.FunctionComponent<DetailRouteProps> = () => {
  const params = useParams<{ id: string }>();
  const {
    data: book,
    makingRequest: fetchingBook,
    makeRequest: fetchBook,
    setData: setBook,
  } = useRequest<Book>();

  React.useEffect(() => {
    fetchBook({
      request: () => getBookById(Number(params.id)),
      onSuccess: setBook,
      onError: () => {},
    });
  }, []);

  if (fetchingBook || !book) return <div>loading...</div>;

  const { id, author, isbn, name } = book;

  return (
    <>
      <h1>Detail</h1>
      <span>{id}</span>
      {/* <span>{author}</span> */}
      <span>{isbn}</span>
      <span>{name}</span>
    </>
  );
};
