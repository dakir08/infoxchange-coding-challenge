import { css } from "@emotion/react";
import React from "react";
import { Author } from "../../models/author";
import { StyledButton } from "../../shared/Button";
import { StyledTextField } from "../../shared/TextField";
import { useStoreContext } from "../../store/StoreContext";

export interface AuthorRouteProps {}

export const AuthorRoute: React.FunctionComponent<AuthorRouteProps> = () => {
  const {
    state: { authors },
    actions: { deleteAuthor, updateAuthor },
  } = useStoreContext();
  const [editMode, setEditMode] = React.useState(-1);
  const [editedAuthor, setEditedAuthor] = React.useState<Author>();

  const removeAuthor = (id: number) => {
    deleteAuthor(id);
  };

  const editAuthor = () => {
    updateAuthor(editedAuthor!);
    setEditMode(-1);
  };

  const enableEditMode = (id: number) => {
    setEditMode(id);
    const author = authors.find((author) => author.id === id);
    setEditedAuthor(author);
  };

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
      <table
        css={css`
          width: 100%;
        `}
      >
        <thead
          css={css`
            width: 100%;
          `}
        >
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Update Author</th>
            <th>RemoveAuthor</th>
          </tr>
        </thead>
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
                <StyledButton color="error" onClick={() => removeAuthor(id!)}>
                  Remove
                </StyledButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
