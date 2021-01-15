import { Book } from "../models/book";
import { requests } from "./requestServices";

export const getAllBook = (): Promise<Book[]> => {
  return requests.get("books/");
};
