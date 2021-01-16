/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Author } from "../../models/author";
import { Book } from "../../models/book";
import { createNewAuthor } from "../../services/authorServices";
import { createNewBook } from "../../services/bookServices";
import { StyledButton } from "../../shared/Button";
import { useRequest } from "../../utils/useRequest";
import { AuthorForm } from "../AuthorForm/AuthorForm";
import { BookForm } from "../BookForm/BookForm";
import { Portal } from "../Portal/Portal";
import {
  NavbarNavActiveItem,
  StyledNavbar,
  StyledNavbarLeftContainer,
  StyledNavbarNav,
  StyledNavbarNavHeader,
  StyledNavbarNavItem,
  StyledNavbarNavItemLink,
  StyledNavbarRightContainer,
} from "./Navbar.style";
import { toast } from "react-hot-toast";
import { useStoreContext } from "../../store/StoreContext";

type PortalChildren = "book" | "author";

export interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const [openPortal, setOpenPortal] = React.useState(false);
  const [
    portalChildrenType,
    setPortalChildrenType,
  ] = React.useState<PortalChildren>();
  const { makeRequest } = useRequest<Author[]>();
  const history = useHistory();
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

  const renderPortalChildren = () => {
    switch (portalChildrenType) {
      case "book":
        return <BookForm authors={authors!} onSubmit={submitNewBook} />;
      case "author":
        return <AuthorForm onSubmit={submitNewAuthor} />;
    }
  };

  return (
    <React.Fragment>
      <StyledNavbar>
        <StyledNavbarLeftContainer>
          <StyledNavbarNavHeader>Book Challenge</StyledNavbarNavHeader>
          <StyledNavbarNav>
            <StyledNavbarNavItem>
              <StyledNavbarNavItemLink
                to="/"
                css={pathname === "/" && NavbarNavActiveItem}
              >
                Home
              </StyledNavbarNavItemLink>
            </StyledNavbarNavItem>
            <StyledNavbarNavItem>
              <StyledNavbarNavItemLink
                to="/author"
                css={pathname === "/author" && NavbarNavActiveItem}
              >
                Author
              </StyledNavbarNavItemLink>
            </StyledNavbarNavItem>
          </StyledNavbarNav>
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
              margin-right: 1rem;
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
    </React.Fragment>
  );
};
