import {
  deleteBookById,
  getAllBook,
  modifyBookById,
} from "../services/bookServices";
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
      return toast.promise(getAllBook(), {
        loading: "loading books...",
        success: (data) => {
          dispatch({ type: ActionTypes.GET_BOOKS_SUCCESS, payload: data });
          return "fetch books success!";
        },
        error: "cannot fetch books data, please try again",
      });
    case ActionTypes.UPDATE_BOOK:
      return modifyBookById(action.payload.id, action.payload)
        .then((_) => {
          dispatch({
            type: ActionTypes.UPDATE_BOOK_SUCCESS,
            payload: action.payload,
          });
          toast.success("modify book success");
        })
        .catch((_) => toast.error("modify book error :(, please try again"));
    case ActionTypes.DELETE_BOOK:
      return deleteBookById(action.payload)
        .then((_) => {
          dispatch({
            type: ActionTypes.DELETE_BOOK_SUCCESS,
            payload: action.payload,
          });
          toast.success("delete book success");
        })
        .catch((_) => toast.error("cannot delete author"));
    case ActionTypes.GET_AUTHORS:
      return toast.promise(getAllAuthor(), {
        loading: "loading authors...",
        success: (data) => {
          dispatch({ type: ActionTypes.GET_AUTHORS_SUCCESS, payload: data });
          return "fetch authors success!";
        },
        error: "cannot fetch authors data, please try again",
      });

    case ActionTypes.DELETE_AUTHOR:
      return deleteAuthorById(action.payload)
        .then((_) => {
          dispatch({
            type: ActionTypes.DELETE_AUTHOR_SUCCESS,
            payload: action.payload,
          });
          toast.success("delete author success");
        })
        .catch((_) => toast.error("cannot delete author"));
    case ActionTypes.UPDATE_AUTHOR:
      return modifyAuthorById(action.payload.id, action.payload)
        .then((_) => {
          dispatch({
            type: ActionTypes.UPDATE_AUTHOR_SUCCESS,
            payload: action.payload,
          });
          toast.success("update author success");
        })
        .catch((_) => toast.error("cannot delete author"));

    default:
      dispatch(action);
  }
};
