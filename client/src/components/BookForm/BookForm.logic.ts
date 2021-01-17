import React from "react";
import toast from "react-hot-toast";
import { Book } from "../../models/book";
import { BookFormProps } from "./BookForm";

export const useBookForm = ({ authors, onSubmit }: BookFormProps) => {
  const [newBook, setNewBook] = React.useState<Book>();

  const handleSubmitBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newBook?.author) {
      return toast.error("please select author!");
    }

    onSubmit(newBook!);
  };

  const changedAuthor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.currentTarget.value;

    const author = authors?.find((author) => author.id === Number(id));

    setNewBook({ ...newBook, author });
  };

  return {
    models: { newBook },
    operators: { setNewBook, handleSubmitBook, changedAuthor },
  };
};
