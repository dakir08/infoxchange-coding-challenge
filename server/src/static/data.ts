import { Author } from "../resources/author/author.model";
import { Book } from "../resources/book/book.model";

export const authors: Author[] = [
  { id: 1, firstName: "William", lastName: "Shakespeare" },
  { id: 2, firstName: "Ernest", lastName: "Hemingway" },
  { id: 3, firstName: "Mark", lastName: "Twain" },
  { id: 4, firstName: "Charles", lastName: "Dickens" },
  { id: 5, firstName: "Leo", lastName: "Tolstoy" },
];

export const books: Book[] = [
  {
    id: 1,
    name: "The Grass is Always Greener",
    isbn: "1-86092-049-7",
    author: authors[0],
  },
  {
    id: 2,
    name: "Murder!",
    isbn: "1-86092-012-8",
    author: authors[0],
  },
  {
    id: 3,
    name: "An Occurrence at Owl Creek Bridge One of the Missing",
    isbn: "	1-86092-006-3",
    author: authors[1],
  },
  {
    id: 4,
    name: "A Boy at Seven",
    isbn: "1-86092-022-5",
    author: authors[2],
  },
  {
    id: 5,
    name: "The Higgler",
    isbn: "1-86092-010-1",
    author: authors[2],
  },
  {
    id: 6,
    name: "The Open Boat",
    isbn: "	1-86092-025-x",
    author: authors[1],
  },
  {
    id: 7,
    name: "The Great Switcheroo",
    isbn: "1-86092-034-9",
    author: authors[3],
  },
  {
    id: 8,
    name: "The Speckled Band",
    isbn: "1-86092-003-9",
    author: authors[4],
  },
  {
    id: 9,
    name: "The Signalman",
    isbn: "1-86092-038-1",
    author: authors[4],
  },
  {
    id: 10,
    name: "The Five Orange Pips",
    isbn: "1-86092-031-4",
    author: authors[2],
  },
];
