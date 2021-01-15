import React from "react";
import { StyledNavbar } from "./Navbar.style";

export interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <StyledNavbar>
      <span>Nav</span>
    </StyledNavbar>
  );
};
