import React from "react";
import { Author } from "../../models/author";
import { AuthorFormProps } from "./AuthorForm";

export const useAuthorForm = ({ onSubmit }: AuthorFormProps) => {
  const [newAuthor, setNewAuthor] = React.useState<Author>();

  const handleFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(newAuthor!);
  };

  return {
    models: { newAuthor },
    operators: { setNewAuthor, handleFormSubmitted },
  };
};
