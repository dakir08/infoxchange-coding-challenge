import React from "react";
import { Author } from "../../models/author";
import { StyledButton } from "../../shared/Button";
import { StyledTextField } from "../../shared/TextField";
import { InputLabel } from "../InputLabel/InputLabel";
import { useAuthorForm } from "./AuthorForm.logic";

export interface AuthorFormProps {
  onSubmit: (author: Author) => void;
}

export const AuthorForm: React.FunctionComponent<AuthorFormProps> = (props) => {
  const {
    models: { newAuthor },
    operators: { handleFormSubmitted, setNewAuthor },
  } = useAuthorForm(props);

  return (
    <form onSubmit={handleFormSubmitted}>
      <h3>Add new author</h3>
      <InputLabel
        id="firstname"
        labelName="first name:"
        renderInput={(id) => (
          <StyledTextField
            id={id}
            required
            value={newAuthor?.firstName ?? ""}
            onChange={(e) =>
              setNewAuthor({ ...newAuthor, firstName: e.currentTarget.value })
            }
          />
        )}
      />
      <InputLabel
        id="lastname"
        labelName="last name:"
        renderInput={(id) => (
          <StyledTextField
            id={id}
            required
            value={newAuthor?.lastName ?? ""}
            onChange={(e) =>
              setNewAuthor({ ...newAuthor, lastName: e.currentTarget.value })
            }
          />
        )}
      />

      <StyledButton>Add</StyledButton>
    </form>
  );
};
