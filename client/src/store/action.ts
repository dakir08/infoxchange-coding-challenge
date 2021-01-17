import { Author } from "../models/author";
import { Book } from "../models/book";
import { ActionTypes } from "./actionTypes";
import { Action, State } from "./reducers";

export interface Actions {
  fetchBooks: () => void;
  createBook: (data: Book) => void;
  updateBook: (data: Book) => void;
  deleteBook: (id: number) => void;
  fetchAuthors: () => void;
  createAuthor: (data: Author) => void;
  updateAuthor: (data: Author) => void;
  deleteAuthor: (id: number) => void;
}

export const useActions = (
  state: State,
  dispatch: (action: Action) => void
): Actions => ({
  fetchBooks: () => {
    dispatch({ type: ActionTypes.GET_BOOKS });
  },
  createBook: (data) => {
    dispatch({
      type: ActionTypes.CREATE_NEW_BOOK,
      payload: { ...data, id: state.books.length + 1 } as Book,
    });
  },
  updateBook: (data) => {
    dispatch({
      type: ActionTypes.UPDATE_BOOK,
      payload: data,
    });
  },
  deleteBook: (id) => {
    dispatch({ type: ActionTypes.DELETE_BOOK, payload: id });
  },
  fetchAuthors: () => {
    dispatch({ type: ActionTypes.GET_AUTHORS });
  },
  createAuthor: (data) => {
    dispatch({
      type: ActionTypes.CREATE_NEW_AUTHOR,
      payload: { ...data, id: state.authors.length + 1 } as Author,
    });
  },
  updateAuthor: (data) => {
    dispatch({
      type: ActionTypes.UPDATE_AUTHOR,
      payload: data,
    });
  },
  deleteAuthor: (id) => {
    dispatch({ type: ActionTypes.DELETE_AUTHOR, payload: id });
  },
});
