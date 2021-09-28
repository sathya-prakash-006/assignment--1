import { Router } from "express";
import {
  createRating,
  getRating,
  getRatingById,
} from "../controllers/rating-controller";
import { body } from "express-validator";

const router = Router();

router.post(
  "/rating",
  body("rating").isInt({ min: 1, max: 5 }).withMessage("Should be 1 to 5"),
  createRating
);
router.get("/rating", getRating);
router.get("/rating/:id", getRatingById);

export default router;
