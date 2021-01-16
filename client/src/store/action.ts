import { Author } from "../models/author";
import { Book } from "../models/book";
import { ActionTypes } from "./actionTypes";
import { Action, State } from "./reducers";

export interface Actions {
  fetchBooks: (data: Book[]) => void;
  fetchAuthors: (data: Author[]) => void;
}

export const useActions = (
  state: State,
  dispatch: (action: Action) => void
): Actions => ({
  fetchBooks: (data: Book[]) => {
    dispatch({ type: ActionTypes.GET_BOOKS, payload: data });
  },
  fetchAuthors: (data: Author[]) => {
    dispatch({ type: ActionTypes.GET_AUTHORS, payload: data });
  },
});
