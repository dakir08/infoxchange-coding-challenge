/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { Author } from "../../models/author";
import { Book } from "../../models/book";
import { StyledButton } from "../../shared/Button";
import { StyledOption, StyledSelect } from "../../shared/Select";
import { StyledTextField } from "../../shared/TextField";
import { InputLabel } from "../InputLabel/InputLabel";
import { useBookForm } from "./BookForm.logic";

export interface BookFormProps {
  authors: Author[];
  onSubmit: (book: Book) => void;
}

export const BookForm: React.FunctionComponent<BookFormProps> = (props) => {
  const { authors } = props;
  const {
    models: { newBook },
    operators: { changedAuthor, handleSubmitBook, setNewBook },
  } = useBookForm(props);

  return (
    <form onSubmit={handleSubmitBook}>
      <h3
        css={css`
          margin-bottom: 1rem;
        `}
      >
        Add new book
      </h3>
      <InputLabel
        id="name"
        labelName="book name:"
        renderInput={(id) => (
          <StyledTextField
            id={id}
            required
            value={newBook?.name ?? ""}
            onChange={(e) =>
              setNewBook({ ...newBook, name: e.currentTarget.value })
            }
          />
        )}
      />
      <InputLabel
        id="isbn"
        labelName="book isbn:"
        renderInput={(id) => (
          <StyledTextField
            id={id}
            required
            value={newBook?.isbn ?? ""}
            onChange={(e) =>
              setNewBook({ ...newBook, isbn: e.currentTarget.value })
            }
          />
        )}
      />
      <InputLabel
        id="author"
        labelName="book author:"
        renderInput={(id) => (
          <StyledSelect
            id={id}
            onChange={changedAuthor}
            required
            defaultValue="default"
          >
            <StyledOption disabled value="default">
              Select Author
            </StyledOption>
            {authors?.map((author) => (
              <StyledOption
                key={author.id}
                value={author.id}
              >{`${author.firstName} ${author.lastName}`}</StyledOption>
            ))}
          </StyledSelect>
        )}
      />
      <StyledButton>Add</StyledButton>
    </form>
  );
};
