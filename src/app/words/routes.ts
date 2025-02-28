import { Router } from "express";
import { getWords } from "./controller";

const router = Router();

router.get("/", getWords);

export { router as word_routes };
