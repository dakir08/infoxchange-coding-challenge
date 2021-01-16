import { Book } from "../models/book";
import { requests } from "./requestServices";

export const getAllBook = (): Promise<Book[]> => {
  return requests.get("books/");
};

export const getBookById = (id: number): Promise<Book> => {
  return requests.get(`book/${id}`);
};

export const createNewBook = (data: Book): Promise<{ message: string }> => {
  return requests.post("book", data);
};
