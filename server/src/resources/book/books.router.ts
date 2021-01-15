import { Router } from "express";
import { getAllBook } from "./book.controllers";

const router = Router();

router.route("/").get(getAllBook);

export default router;
