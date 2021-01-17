import React from "react";
import { toast } from "react-hot-toast";
import { useStoreContext } from "../../store/StoreContext";
import { useLocation } from "react-router-dom";
import { Author } from "../../models/author";
import { Book } from "../../models/book";
import { createNewAuthor } from "../../services/authorServices";
import { createNewBook } from "../../services/bookServices";
import { useRequest } from "../../utils/useRequest";

type PortalChildren = "book" | "author";

export const useNavbar = () => {
  const [openPortal, setOpenPortal] = React.useState(false);
  const [
    portalChildrenType,
    setPortalChildrenType,
  ] = React.useState<PortalChildren>();
  const { makeRequest } = useRequest<Author[]>();
  const { pathname } = useLocation();

  const {
    state: { authors },
    actions: { createBook, createAuthor },
  } = useStoreContext();

  const handleButtonClicked = (type: PortalChildren) => {
    setOpenPortal(true);
    setPortalChildrenType(type);
  };

  const submitNewBook = (book: Book) => {
    makeRequest({
      request: () => createNewBook(book),
      onError: () => toast.error("cannot create new book"),
      onSuccess: () => {
        toast.success("create book successfully!");
        setOpenPortal(false);
        createBook(book);
      },
    });
  };

  const submitNewAuthor = (author: Book) => {
    makeRequest({
      request: () => createNewAuthor(author),
      onError: () => toast.error("cannot create new author"),
      onSuccess: () => {
        toast.success("create author successfully!");
        setOpenPortal(false);
        createAuthor(author);
      },
    });
  };

  return {
    models: { openPortal, portalChildrenType, authors, pathname },
    operators: {
      submitNewAuthor,
      submitNewBook,
      handleButtonClicked,
      setOpenPortal,
    },
  };
};
