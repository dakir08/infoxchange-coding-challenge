import { Router } from "express";
import { getAllAuthors } from "./author.controllers";

const router = Router();

router.route("/").get(getAllAuthors);

export default router;
