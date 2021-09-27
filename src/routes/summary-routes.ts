import { Router } from "express";
import {
  createSummary,
  getSummary,
  getSummaryById,
} from "../controllers/summary-controller";

const router = Router();

router.post("/summary", createSummary);
router.get("/summary", getSummary);
router.get("/summary/:id", getSummaryById);

export default router;
