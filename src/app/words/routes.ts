import { Router } from "express";
import { getWords, getWord } from "./controller";

const router = Router();

router.get("/", getWords);
router.post("/view", getWord);

export { router as word_routes };
