import { css } from "@emotion/react";
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
  padding?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${ButtonBaseStyle};
  background-color: #3498db;
  color: #ecf0f1;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  padding: ${({ padding }) => padding ?? "1rem 0.5rem"};

  &:hover {
    background-color: #2980b9;
  }
  &:focus {
    outline: none;
  }
`;
