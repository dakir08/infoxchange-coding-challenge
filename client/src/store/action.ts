import { Author } from "../models/author";
import { Book } from "../models/book";
import { ActionTypes } from "./actionTypes";
import { Action, State } from "./reducers";

export interface Actions {
  fetchBooks: () => void;
  fetchAuthors: () => void;
  createBook: (data: Book) => void;
  createAuthor: (data: Author) => void;
}

export const useActions = (
  state: State,
  dispatch: (action: Action) => void
): Actions => ({
  fetchBooks: () => {
    dispatch({ type: ActionTypes.GET_BOOKS });
  },
  fetchAuthors: () => {
    dispatch({ type: ActionTypes.GET_AUTHORS });
  },
  createBook: (data) => {
    dispatch({
      type: ActionTypes.CREATE_NEW_BOOK,
      payload: { ...data, id: state.books.length + 1 } as Book,
    });
  },
  createAuthor: (data) => {
    dispatch({
      type: ActionTypes.CREATE_NEW_AUTHOR,
      payload: { ...data, id: state.authors.length + 1 } as Author,
    });
  },
});
