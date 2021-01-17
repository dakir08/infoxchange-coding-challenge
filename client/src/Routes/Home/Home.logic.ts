import React from "react";
import { useStoreContext } from "../../store/StoreContext";

export const useHome = () => {
  const {
    state: { books },
    actions: { fetchBooks },
  } = useStoreContext();

  React.useEffect(() => {
    if (books.length > 0) return;
    fetchBooks();
  }, []);

  return { models: { books } };
};
