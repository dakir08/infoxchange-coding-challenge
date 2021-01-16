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
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${ButtonBaseStyle};
  background-color: #3498db;
  color: #ecf0f1;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  padding: 0.2rem 1rem;

  &:hover {
    background-color: #2980b9;
  }
  &:focus {
    outline: none;
  }
  ${({ css }) => css};
`;
