import { useHistory, useParams } from "react-router";
import { Book } from "../../models/book";
import { getBookById } from "../../services/bookServices";
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
    actions: { updateBook, deleteBook: deleteBookAction },
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
    deleteBookAction(book.id!);
    setDeletedBook(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!book) return;

    updateBook(book);
  };

  const closePortal = () => setOpenPortal(false);

  const changeSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const authorId = e.currentTarget.value;
    const author = authors?.find((author) => author.id === Number(authorId));

    setBook({ ...book, author });
  };

  const handleTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value, name },
    } = e;
    setBook({ ...book, [name]: value });
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
      deleteBook,
      handleSubmit,
      closePortal,
      setOpenPortal,
      setEditMode,
      changeSelectValue,
      handleTextChanged,
    },
  };
};
