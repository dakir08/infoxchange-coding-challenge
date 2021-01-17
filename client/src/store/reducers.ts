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

    case ActionTypes.CREATE_NEW_BOOK:
      return { ...state, books: [...state.books, action.payload] };

    case ActionTypes.UPDATE_BOOK_SUCCESS:
      const clonedBooks = [...state.books];
      const booksIndex = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      clonedBooks[booksIndex] = action.payload;
      return { ...state, books: clonedBooks };

    case ActionTypes.DELETE_BOOK_SUCCESS:
      const filteredBooks = state.books.filter(
        (book) => book.id !== action.payload
      );
      return { ...state, books: filteredBooks };

    case ActionTypes.GET_AUTHORS_SUCCESS:
      return { ...state, authors: action.payload as Author[] };

    case ActionTypes.CREATE_NEW_AUTHOR:
      return { ...state, authors: [...state.authors, action.payload] };

    case ActionTypes.UPDATE_AUTHOR_SUCCESS:
      const clonedAuthors = [...state.authors];
      const authorIndex = state.authors.findIndex(
        (author) => author.id === action.payload.id
      );
      clonedAuthors[authorIndex] = action.payload;
      // change author exiting book
      const updatedBooksWithNewAuthor = [...state.books];

      if (updatedBooksWithNewAuthor.length > 0) {
        updatedBooksWithNewAuthor.forEach((book) => {
          if (book.author?.id === action.payload.id) {
            book.author = action.payload;
          }
        });
      }

      return {
        ...state,
        authors: clonedAuthors,
        books: updatedBooksWithNewAuthor,
      };

    case ActionTypes.DELETE_AUTHOR_SUCCESS:
      const authors = state.authors.filter(
        (author) => author.id !== action.payload
      );
      return { ...state, authors };

    default:
      return state;
  }
};
