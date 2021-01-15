import { Author } from "../model/author";
import { Book } from "../model/book";

export const authors: Author[] = [
  { firstName: "William", lastName: "Shakespeare" },
  { firstName: "Ernest", lastName: "Hemingway" },
  { firstName: "Mark", lastName: "Twain" },
  { firstName: "Charles", lastName: "Dickens" },
  { firstName: "Leo", lastName: "Tolstoy" },
];

export const books: Book[] = [
  {
    name: "The Grass is Always Greener",
    isbn: "1-86092-049-7",
    author: authors[0],
  },
  {
    name: "Murder!",
    isbn: "1-86092-012-8",
    author: authors[0],
  },
  {
    name: "An Occurrence at Owl Creek Bridge One of the Missing",
    isbn: "	1-86092-006-3",
    author: authors[1],
  },
  {
    name: "A Boy at Seven",
    isbn: "1-86092-022-5",
    author: authors[2],
  },
  {
    name: "The Higgler",
    isbn: "1-86092-010-1",
    author: authors[2],
  },
  {
    name: "The Open Boat",
    isbn: "	1-86092-025-x",
    author: authors[1],
  },
  {
    name: "The Great Switcheroo",
    isbn: "1-86092-034-9",
    author: authors[3],
  },
  {
    name: "The Speckled Band",
    isbn: "1-86092-003-9",
    author: authors[4],
  },
  {
    name: "The Signalman",
    isbn: "1-86092-038-1",
    author: authors[4],
  },
  {
    name: "The Five Orange Pips",
    isbn: "1-86092-031-4",
    author: authors[2],
  },
];
