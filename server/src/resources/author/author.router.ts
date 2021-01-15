import { Router } from "express";
import {
  createNewAuthor,
  deleteAuthor,
  getOneAuthor,
  modifyAuthor,
} from "./author.controllers";

const router = Router();

router.route("/").post(createNewAuthor);

router.route("/:id").get(getOneAuthor).put(modifyAuthor).delete(deleteAuthor);

export default router;
