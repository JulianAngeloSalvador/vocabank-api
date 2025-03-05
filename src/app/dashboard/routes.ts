import { Router } from "express";
import {
  getDashboard,
  getDashboardTranslations,
  getDashboardWords,
} from "./controller";

const router = Router();

router.get("/", getDashboard);
router.get("/words", getDashboardWords);
router.get("/translations", getDashboardTranslations);

export { router as dashboard_routes };
