/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

import { StyledButton } from "../../shared/Button";
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
import { AuthorForm } from "../AuthorForm/AuthorForm";
import { BookForm } from "../BookForm/BookForm";
import { useNavbar } from "./Navbar.logic";

export interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const {
    models: { openPortal, portalChildrenType, authors, pathname },
    operators: {
      submitNewAuthor,
      submitNewBook,
      handleButtonClicked,
      setOpenPortal,
    },
  } = useNavbar();

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
