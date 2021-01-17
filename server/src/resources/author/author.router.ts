import { Router } from "express";
import {
  authorsMiddleware,
  createNewAuthor,
  deleteAuthor,
  getOneAuthor,
  modifyAuthor,
} from "./author.controllers";

const router = Router();

router.route("/").post(createNewAuthor);

router
  .route("/:id")
  .get(getOneAuthor)
  .put(authorsMiddleware, modifyAuthor)
  .delete(authorsMiddleware, deleteAuthor);

export default router;
