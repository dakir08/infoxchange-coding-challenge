import { Request, Response } from "express";
import { authors, books } from "../../static/data";
import { Book } from "./book.model";

export const getAllBook = (_: Request, res: Response) => {
  res.status(200).send(books).end();
};

export const getOneBook = (req: Request, res: Response) => {
  const result = books.find((book) => book.id === +req.params.id);

  if (!result) {
    return res.status(404).send({ message: "cannot find requested book" });
  }

  res.status(200).json(result).end();
};

export const createNewBook = (req: Request, res: Response) => {
  const newBook: Book = req.body;

  if (!newBook) {
    return res.status(400).end();
  }

  newBook.id = books.length + 1;

  books.push(newBook);
  res.status(200).send({ message: "created new book" });
};

export const modifyBook = (req: Request, res: Response) => {
  const id = +req.params.id;

  const modifiedBook = books.find((book) => book.id === id);

  if (!modifiedBook) {
    return res.status(400).send({
      message: "cannot find requested or invalid requested book data",
    });
  }

  modifiedBook.author = req.body.author;
  modifiedBook.isbn = req.body.isbn;
  modifiedBook.name = req.body.name;

  res.status(200).send({ message: "modified book" });
};

export const deleteBook = (req: Request, res: Response) => {
  const id = +req.params.id;

  const deletedBookIndex = books.findIndex((book) => book.id === id);

  if (deletedBookIndex === -1) {
    return res.status(404).send({ message: "cannot find requested book" });
  }

  books.splice(deletedBookIndex, 1);
  res.status(200).send({ message: "Deleted book" });
};
