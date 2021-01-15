import { Request, Response } from "express";
import { books } from "../../static/data";
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
  const modifiedBook: Book = req.body;
  const id = +req.params.id;

  const modifyBookIndex = books.findIndex((book) => book.id === id);

  if (modifyBookIndex === -1 || Object.keys(modifiedBook).length === 0) {
    return res.status(400).send({
      message: "cannot find requested or invalid requested book data",
    });
  }

  books[modifyBookIndex] = { ...books[modifyBookIndex], ...modifiedBook };

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
