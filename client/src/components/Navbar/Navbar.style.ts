import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  background-color: #ecf0f1;
  min-height: 40px;
  justify-content: space-between;
  padding: 0 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledNavbarLeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNavbarNavHeader = styled.h1`
  font-size: 1.25rem;
  margin: 0;
  margin-right: 1rem;
  pointer-events: none;
`;

export const StyledNavbarNav = styled.ul`
  margin: 0;
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const StyledNavbarNavItem = styled.li`
  padding: 0.6rem 0.5rem;
  cursor: pointer;
`;

export const StyledNavbarNavItemLink = styled(Link)`
  color: rgba(0, 0, 0, 0.5);

  :hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const NavbarNavActiveItem = css`
  color: rgba(0, 0, 0, 0.8);
`;

export const StyledNavbarRightContainer = styled.div`
  padding: 0.5rem;
`;
