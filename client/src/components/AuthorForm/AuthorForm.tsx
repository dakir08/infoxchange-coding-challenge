import React from "react";
import { Author } from "../../models/author";
import { createNewAuthor } from "../../services/authorServices";
import { StyledButton } from "../../shared/Button";
import { StyledTextField } from "../../shared/TextField";
import { useRequest } from "../../utils/useRequest";
import { InputLabel } from "../InputLabel/InputLabel";

export interface AuthorFormProps {}

export const AuthorForm: React.FunctionComponent<AuthorFormProps> = () => {
  const { data, setData, makeRequest, makingRequest } = useRequest<Author>();

  const handleFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    makeRequest({
      request: () => createNewAuthor(data!),
      onError: () => {},
      onSuccess: () => {},
    });
  };

  if (makingRequest) return <div>loading...</div>;

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
            value={data?.firstName ?? ""}
            onChange={(e) =>
              setData({ ...data, firstName: e.currentTarget.value })
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
            value={data?.lastName ?? ""}
            onChange={(e) =>
              setData({ ...data, lastName: e.currentTarget.value })
            }
          />
        )}
      />

      <StyledButton>Add</StyledButton>
    </form>
  );
};
