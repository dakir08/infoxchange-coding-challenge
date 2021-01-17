import React from "react";
import { StyledButton } from "../../shared/Button";
import { StyledTextField } from "../../shared/TextField";
import { useAuthor } from "./Author.logic";
import {
  StyledAuthorTable,
  StyledAuthorTableWrapper,
  StyledTableHead,
} from "./Author.style";

export interface AuthorRouteProps {}

export const AuthorRoute: React.FunctionComponent<AuthorRouteProps> = () => {
  const {
    models: { editedAuthor, authors, editMode },
    operators: { setEditedAuthor, editAuthor, enableEditMode, removeAuthor },
  } = useAuthor();
  const renderTextField = (field: "firstName" | "lastName") => {
    if (!editedAuthor) return;

    return (
      <StyledTextField
        value={editedAuthor[field]}
        onChange={(e) =>
          setEditedAuthor({
            ...editedAuthor,
            [field]: e.currentTarget.value,
          })
        }
      />
    );
  };

  return (
    <>
      <h3>List Author</h3>
      <StyledAuthorTableWrapper>
        <StyledAuthorTable>
          <StyledTableHead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Update Author</th>
              <th>Remove Author</th>
            </tr>
          </StyledTableHead>
          <tbody>
            {authors.map(({ firstName, lastName, id }) => (
              <tr key={id}>
                <td>
                  {editMode === id ? renderTextField("firstName") : firstName}
                </td>
                <td>
                  {editMode === id ? renderTextField("lastName") : lastName}
                </td>
                <td>
                  {editMode !== -1 && editMode === id ? (
                    <StyledButton onClick={editAuthor}>Finish</StyledButton>
                  ) : (
                    <StyledButton onClick={() => enableEditMode(id!)}>
                      Update
                    </StyledButton>
                  )}
                </td>
                <td>
                  <StyledButton
                    color="error"
                    onClick={() => removeAuthor(id!)}
                    disabled={editMode !== -1}
                  >
                    Remove
                  </StyledButton>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledAuthorTable>
      </StyledAuthorTableWrapper>
    </>
  );
};
