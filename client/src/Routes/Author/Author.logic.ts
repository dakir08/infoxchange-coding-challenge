import React from "react";
import { Author } from "../../models/author";
import { useStoreContext } from "../../store/StoreContext";

export const useAuthor = () => {
  const {
    state: { authors },
    actions: { deleteAuthor, updateAuthor },
  } = useStoreContext();
  const [editingAuthorId, setEditingAuthorId] = React.useState(-1);
  const [editedAuthor, setEditedAuthor] = React.useState<Author>();

  const removeAuthor = (id: number) => {
    deleteAuthor(id);
  };

  const editAuthor = () => {
    updateAuthor(editedAuthor!);
    setEditingAuthorId(-1);
  };

  const enableEditMode = (id: number) => {
    setEditingAuthorId(id);
    const author = authors.find((author) => author.id === id);
    setEditedAuthor(author);
  };

  return {
    models: { editedAuthor, authors, editingAuthorId },
    operators: { setEditedAuthor, editAuthor, removeAuthor, enableEditMode },
  };
};
