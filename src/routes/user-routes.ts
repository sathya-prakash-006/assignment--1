import { Router } from "express";
import { signup, signin } from "../controllers/user-controller";
import { body } from "express-validator";

const router = Router();

// CREATE ACCOUNT AND LOGIN

router.post(
  "/signup",
  body("fullname").isLength({ min: 3 }).withMessage("name should be length greater than 3"),
  body("email").isEmail().withMessage("Must be valid email address"),
  body("password").isLength({ min: 6 }).withMessage("Must be at least 6 characters"),
  signup
);
router.post("/signin", signin);

export default router;
