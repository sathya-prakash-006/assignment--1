import { Router } from "express";
import {
  createRating,
  getRating,
  getRatingById,
} from "../controllers/rating-controller";

const router = Router();

router.post("/rating", createRating);
router.get("/rating", getRating);
router.get("/rating/:id", getRatingById);

export default router;
