import { css } from "@emotion/react";
import { normalizedCss } from "./normalize-css";

export const globalStyle = css`
  ${normalizedCss};
  a {
    text-decoration: none;
  }
`;
