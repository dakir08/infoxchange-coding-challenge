import { useHistory, useParams } from "react-router";
import { Book } from "../../models/book";
import {
  deleteBookById,
  getBookById,
  modifyBookById,
} from "../../services/bookServices";
import { useRequest } from "../../utils/useRequest";
import { toast } from "react-hot-toast";
import { useStoreContext } from "../../store/StoreContext";
import React from "react";

export const useDetail = () => {
  const params = useParams<{ id: string }>();
  const history = useHistory();
  const {
    data: book,
    setData: setBook,
    makingRequest,
    makeRequest,
  } = useRequest<Book>();
  const {
    state: { authors, books },
  } = useStoreContext();
  const [editMode, setEditMode] = React.useState(false);
  const [openPortal, setOpenPortal] = React.useState(false);
  const [deletedBook, setDeletedBook] = React.useState(false);

  React.useEffect(() => {
    const existingBook = books.find((book) => book.id === Number(params.id));
    if (existingBook) {
      setBook(existingBook);
    } else {
      makeRequest({
        request: () => getBookById(Number(params.id)),
        onSuccess: setBook,
        onError: () => {
          toast.error(
            "cannot find detail book, redirecting into homepage after 3secs..."
          );
          setTimeout(() => history.push("/"), 3000);
        },
      });
    }
  }, []);

  const deleteBook = () => {
    if (!book) return;
    makeRequest({
      request: () => deleteBookById(book.id!),
      onSuccess: () => setDeletedBook(true),
      onError: () => toast.error("delete book error :(, please try again"),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!book) return;

    makeRequest({
      request: () => modifyBookById(book.id!, book),
      onError: () => toast.error("modify book error :(, please try again"),
      onSuccess: () => toast.success("modify book success"),
    });
  };

  const closePortal = () => setOpenPortal(false);

  const changeSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const authorId = e.currentTarget.value;
    const author = authors?.find((author) => author.id === Number(authorId));

    setBook({ ...book, author });
  };

  return {
    models: {
      authors,
      book,
      editMode,
      openPortal,
      history,
      makingRequest,
      deletedBook,
    },
    operators: {
      setBook,
      deleteBook,
      handleSubmit,
      closePortal,
      setOpenPortal,
      setEditMode,
      changeSelectValue,
    },
  };
};
