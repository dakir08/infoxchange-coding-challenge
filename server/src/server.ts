import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import booksRouter from "./resources/book/books.router";
import bookRouter from "./resources/book/book.router";
import authorsRouter from "./resources/author/authors.router";
import authorRouter from "./resources/author/author.router";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/books", booksRouter);
app.use("/book", bookRouter);
app.use("/authors", authorsRouter);
app.use("/author", authorRouter);

export const start = () => {
  app.listen(config.port, () => {
    console.log(`server start at port: ${config.port}`);
  });
};
