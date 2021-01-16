import React from "react";
import { reducer, initialState } from "./reducers";
import { useActions } from "./action";
import { applyMiddleware } from "./middleware";

export const StoreContext = React.createContext({ authors: [], books: [] });

export const StoreProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  if (!state) return null;

  const enhancedDispatch = applyMiddleware(dispatch);
  const actions = useActions(state, enhancedDispatch);

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStoreContext must be used within a StoreProvider");
  }
  return context;
};
