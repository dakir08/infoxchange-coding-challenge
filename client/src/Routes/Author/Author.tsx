import { css } from "@emotion/react";
import React from "react";
import { StyledButton } from "../../shared/Button";

export interface AuthorRouteProps {}

export const AuthorRoute: React.FunctionComponent<AuthorRouteProps> = () => {
  return (
    <>
      <h3>List Author</h3>
      <table
        css={css`
          width: 100%;
        `}
      >
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Update Author</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>
              <StyledButton>Update</StyledButton>
            </td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>
              <StyledButton>Update</StyledButton>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
