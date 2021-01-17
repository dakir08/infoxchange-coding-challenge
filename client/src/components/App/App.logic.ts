import React from "react";
import { useStoreContext } from "../../store/StoreContext";

export const useApp = () => {
  const { actions } = useStoreContext();

  React.useEffect(() => {
    actions.fetchAuthors();
  }, []);

  return { models: {}, operators: {} };
};
