import { Action } from "./reducers";

export const applyMiddleware = (dispatch: (action: Action) => void) => (
  action: Action
) => {
  switch (action.type) {
    default:
      dispatch(action);
  }
};
