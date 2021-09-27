import { Router } from "express";
import {
  createDetails,
  getDetails,
  getDetailsById,
} from "../controllers/details-controllre";

const router = Router();

router.post("/history", createDetails);
router.get("/history", getDetails);
router.get("/history/:id", getDetailsById);

export default router;
