import { Router } from "express";
import {
  getOneBook,
  createNewBook,
  deleteBook,
  modifyBook,
} from "./book.controllers";

const router = Router();

router.route("/").post(createNewBook);

router.route("/:id").get(getOneBook).put(modifyBook).delete(deleteBook);

export default router;
