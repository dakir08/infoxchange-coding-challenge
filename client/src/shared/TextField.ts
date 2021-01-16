import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  DEFAULT_BORDER_RADIUS,
  DEFAULT_TRANSITION_TIME,
} from "../style/global-style-constants";

export const InputBaseStyle = css`
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  border: 1px solid rgba(111, 111, 111, 0.4);
  transition: ${DEFAULT_TRANSITION_TIME}s all ease;
  padding: 0.2rem 0.5rem;

  &:focus {
    outline: none;
    border: 1px solid rgba(52, 152, 219, 0.8);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.6);
  }
`;

export const StyledTextField = styled.input`
  ${InputBaseStyle}
`;
