import React from "react";
import { useStoreContext } from "../../store/StoreContext";

export const useHome = () => {
  const {
    state: { books },
    actions: { fetchBooks },
  } = useStoreContext();

  React.useEffect(() => {
    fetchBooks();
  }, []);

  return { models: { books } };
};
