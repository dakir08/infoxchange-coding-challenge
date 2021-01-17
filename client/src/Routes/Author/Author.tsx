import React from "react";
import { StyledButton } from "../../shared/Button";
import { StyledTextField } from "../../shared/TextField";
import { useAuthor } from "./Author.logic";
import {
  StyledAuthorTable,
  StyledAuthorTableWrapper,
  StyledTableHead,
} from "./Author.style";

export const AuthorRoute = () => {
  const {
    models: { editedAuthor, authors, editingAuthorId },
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
            {authors.map(({ firstName, lastName, id: authorId }) => (
              <tr key={authorId}>
                <td>
                  {editingAuthorId === authorId
                    ? renderTextField("firstName")
                    : firstName}
                </td>
                <td>
                  {editingAuthorId === authorId
                    ? renderTextField("lastName")
                    : lastName}
                </td>
                <td>
                  {editingAuthorId !== -1 && editingAuthorId === authorId ? (
                    <StyledButton onClick={editAuthor}>Finish</StyledButton>
                  ) : (
                    <StyledButton onClick={() => enableEditMode(authorId!)}>
                      Update
                    </StyledButton>
                  )}
                </td>
                <td>
                  <StyledButton
                    color="error"
                    onClick={() => removeAuthor(authorId!)}
                    disabled={editingAuthorId !== -1}
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
