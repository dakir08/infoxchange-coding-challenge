import { ActionTypes } from "./actionTypes";
import { Author } from "../models/author";
import { Book } from "../models/book";

export interface State {
  authors: Author[];
  books: Book[];
}

export interface Action {
  type: ActionTypes;
  payload?: any;
}

export const initialState: State = {
  authors: [],
  books: [],
};

export const reducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload as Book[] };
    case ActionTypes.GET_AUTHORS_SUCCESS:
      return { ...state, authors: action.payload as Author[] };
    case ActionTypes.CREATE_NEW_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case ActionTypes.CREATE_NEW_AUTHOR:
      return { ...state, authors: [...state.authors, action.payload] };
    default:
      return state;
  }
};
