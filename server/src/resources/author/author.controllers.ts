import { Request, Response } from "express";
import { authors } from "../../static/data";
import { Author } from "./author.model";

export const getAllAuthors = (_: Request, res: Response) => {
  return res.json(authors).end();
};

export const getOneAuthor = (req: Request, res: Response) => {
  const id = +req.params.id;

  const author = authors.find((author) => author.id === id);

  if (!author) {
    return res.status(404).send({ message: "cannot find author" });
  }

  res.send(author);
};

export const createNewAuthor = (req: Request, res: Response) => {
  const newAuthor: Author = req.body;

  if (!newAuthor) {
    return res.status(404).send({ message: "requested blank data" });
  }

  newAuthor.id = authors.length + 1;

  authors.push(newAuthor);

  res.status(200).send({ message: "created new author" });
};

export const modifyAuthor = (req: Request, res: Response) => {
  const id = +req.params.id;

  const modifiedAuthor = authors.find((author) => author.id === id);

  if (!modifiedAuthor) {
    return res
      .status(400)
      .send({ message: "cannot find author or empty requested data" });
  }

  modifiedAuthor.firstName = req.body.firstName;
  modifiedAuthor.lastName = req.body.lastName;

  res.send({ message: "modified author" });
};

export const deleteAuthor = (req: Request, res: Response) => {
  const id = +req.params.id;

  const deletedAuthorIndex = authors.findIndex((author) => author.id === id);

  if (deletedAuthorIndex === -1) {
    return res.status(404).send({ message: "cannot find author" });
  }

  authors.splice(deletedAuthorIndex, 1);

  res.status(200).send({ message: "deleted author", id });
};
