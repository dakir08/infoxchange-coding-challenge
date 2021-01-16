import { css } from "@emotion/react";
import React from "react";
import { StyledButton } from "../../shared/Button";
import { AuthorForm } from "../AuthorForm/AuthorForm";
import { BookForm } from "../BookForm/BookForm";
import { Portal } from "../Portal/Portal";
import {
  StyledNavbar,
  StyledNavbarLeftContainer,
  StyledNavbarRightContainer,
} from "./Navbar.style";

type PortalChildren = "book" | "author";

export interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const [openPortal, setOpenPortal] = React.useState(false);
  const [
    portalChildrenType,
    setPortalChildrenType,
  ] = React.useState<PortalChildren>();

  const handleButtonClicked = (type: PortalChildren) => {
    setOpenPortal(true);
    setPortalChildrenType(type);
  };

  const renderPortalChildren = () => {
    switch (portalChildrenType) {
      case "book":
        return <BookForm />;
      case "author":
        return <AuthorForm />;
    }
  };

  return (
    <>
      <StyledNavbar>
        <StyledNavbarLeftContainer>
          <span>My books</span>
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
