import { Router } from "express";
import {
  createAvailableService,
  getAvailableService,
  getAvailableServiceById,
} from "../controllers/availableServices.vontroller";

const router = Router();

router.post("/availableServices", createAvailableService);
router.get("/availableServices", getAvailableService);
router.get("/availableServices/:id", getAvailableServiceById);

export default router;
