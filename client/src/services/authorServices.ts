import { Author } from "../models/author";
import { requests } from "./requestServices";

export const getAllAuthor = (): Promise<Author[]> => {
  return requests.get("authors/");
};

export const getAuthorById = (id: number): Promise<Author> => {
  return requests.get(`author/${id}`);
};

export const createNewAuthor = (data: Author): Promise<{ message: string }> => {
  return requests.post("author", data);
};
