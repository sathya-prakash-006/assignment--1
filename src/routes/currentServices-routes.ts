import { Router } from "express";
import {
  createCurrentService,
  getCurrentService,
  getCurrentServiceById,
} from "../controllers/currentservices-controller";

const router = Router();



router.post("/currentServices", createCurrentService);
router.get("/currentServices", getCurrentService);
router.get("/currentServices/:id", getCurrentServiceById);

export default router;
