import { css, Interpolation, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  DEFAULT_BORDER_RADIUS,
  DEFAULT_TRANSITION_TIME,
} from "../style/global-style-constants";

export const ButtonBaseStyle = css`
  border: none;
  outline: none;
  display: inline-flex;
  cursor: pointer;
  padding: 0;
  vertical-align: middle;
  text-decoration: none;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: ${DEFAULT_TRANSITION_TIME}s ease all;
`;

interface StyledButtonProps {
  css?: Interpolation<Theme>;
  color?: "primary" | "error";
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${ButtonBaseStyle};
  background-color: ${({ color = "primary" }) =>
    color === "primary" ? "rgba(52, 152, 219,1.0)" : "rgba(231, 76, 60,1.0)"};
  color: #ecf0f1;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  padding: 0.2rem 1rem;
  text-transform: capitalize;

  &:hover {
    background-color: ${({ color = "primary" }) =>
      color === "primary" ? "rgba(41, 128, 185,1.0)" : "rgba(192, 57, 43,1.0)"};
  }
  &:focus {
    outline: none;
  }
  ${({ css }) => css};
`;
