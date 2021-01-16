import { getAllBook } from "../services/bookServices";
import { ActionTypes } from "./actionTypes";
import { Action } from "./reducers";
import { toast } from "react-hot-toast";
import { getAllAuthor } from "../services/authorServices";

export const applyMiddleware = (dispatch: (action: Action) => void) => (
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.GET_BOOKS:
      return getAllBook()
        .then((res) =>
          dispatch({ type: ActionTypes.GET_BOOKS_SUCCESS, payload: res })
        )
        .catch((err) =>
          toast.error("cannot create new book, please try again")
        );
    case ActionTypes.GET_AUTHORS:
      return getAllAuthor()
        .then((res) =>
          dispatch({ type: ActionTypes.GET_AUTHORS_SUCCESS, payload: res })
        )
        .catch((err) =>
          toast.error("cannot create new author, please try again")
        );
    default:
      dispatch(action);
  }
};
