import { getAllBook } from "../services/bookServices";
import { ActionTypes } from "./actionTypes";
import { Action } from "./reducers";
import { toast } from "react-hot-toast";
import {
  deleteAuthorById,
  getAllAuthor,
  modifyAuthorById,
} from "../services/authorServices";

export const applyMiddleware = (dispatch: (action: Action) => void) => (
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.GET_BOOKS:
      return getAllBook()
        .then((res) =>
          dispatch({ type: ActionTypes.GET_BOOKS_SUCCESS, payload: res })
        )
        .catch((_) => toast.error("cannot create new book, please try again"));
    case ActionTypes.GET_AUTHORS:
      return getAllAuthor()
        .then((res) =>
          dispatch({ type: ActionTypes.GET_AUTHORS_SUCCESS, payload: res })
        )
        .catch((_) =>
          toast.error("cannot create new author, please try again")
        );
    case ActionTypes.DELETE_AUTHOR:
      return deleteAuthorById(action.payload)
        .then((_) =>
          dispatch({
            type: ActionTypes.DELETE_AUTHOR_SUCCESS,
            payload: action.payload,
          })
        )
        .catch((_) => toast.error("cannot delete author"));
    case ActionTypes.UPDATE_AUTHOR:
      return modifyAuthorById(action.payload.id, action.payload)
        .then((_) =>
          dispatch({
            type: ActionTypes.UPDATE_AUTHOR_SUCCESS,
            payload: action.payload,
          })
        )
        .catch((_) => toast.error("cannot delete author"));
    default:
      dispatch(action);
  }
};
