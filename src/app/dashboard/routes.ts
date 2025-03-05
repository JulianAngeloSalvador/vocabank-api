import { Router } from "express";
import { getDashboard } from "./controller";

const router = Router();

router.get("/", getDashboard);

export { router as dashboard_routes };
