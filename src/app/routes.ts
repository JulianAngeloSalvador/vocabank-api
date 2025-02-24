import { Router } from "express";
import { getHomepage } from "./controller";

const router = Router();

router.get("/", getHomepage);

export { router as app_routes };
