import { Router } from "express";
import { getWords } from "./controller";

const router = Router();

router.get("/", getWords);
// router.post("/view", getWord);
// router.get("/search", searchWord);

export { router as word_routes };
