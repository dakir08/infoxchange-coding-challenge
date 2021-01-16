import { css } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";
import { Author } from "../../models/author";
import { Book } from "../../models/book";
import { createNewAuthor, getAllAuthor } from "../../services/authorServices";
import { createNewBook } from "../../services/bookServices";
import { StyledButton } from "../../shared/Button";
import { useRequest } from "../../utils/useRequest";
import { AuthorForm } from "../AuthorForm/AuthorForm";
import { BookForm } from "../BookForm/BookForm";
import { Portal } from "../Portal/Portal";
import {
  StyledNavbar,
  StyledNavbarLeftContainer,
  StyledNavbarRightContainer,
} from "./Navbar.style";
import { toast } from "react-hot-toast";

type PortalChildren = "book" | "author";

export interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const [openPortal, setOpenPortal] = React.useState(false);
  const [
    portalChildrenType,
    setPortalChildrenType,
  ] = React.useState<PortalChildren>();
  const { data: authors, setData: setAuthors, makeRequest } = useRequest<
    Author[]
  >();

  React.useEffect(() => {
    makeRequest({
      request: getAllAuthor,
      onError: () => {},
      onSuccess: setAuthors,
    });
  }, []);

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
      },
    });
  };

  const renderPortalChildren = () => {
    switch (portalChildrenType) {
      case "book":
        return <BookForm authors={authors!} onSubmit={submitNewBook} />;
      case "author":
        return <AuthorForm onSubmit={submitNewAuthor} />;
    }
  };

  return (
    <>
      <StyledNavbar>
        <StyledNavbarLeftContainer>
          <Link to="/">
            <h1>My books</h1>
          </Link>
        </StyledNavbarLeftContainer>
        <StyledNavbarRightContainer>
          <StyledButton
            css={css`
              margin-right: 1rem;
            `}
            onClick={() => handleButtonClicked("book")}
          >
            Add book
          </StyledButton>
          <StyledButton
            css={css`
              background-color: #2ecc71;
              &:hover {
                background-color: #27ae60;
              }
            `}
            onClick={() => handleButtonClicked("author")}
          >
            Add author
          </StyledButton>
        </StyledNavbarRightContainer>
      </StyledNavbar>
      {openPortal && (
        <Portal onClose={() => setOpenPortal(false)}>
          {renderPortalChildren()}
        </Portal>
      )}
    </>
  );
};
