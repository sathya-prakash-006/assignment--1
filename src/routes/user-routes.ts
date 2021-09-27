import { Router } from "express";
import { signup, signin } from "../controllers/user-controller";
import { body } from "express-validator";

const router = Router();

// CREATE ACCOUNT AND LOGIN

router.post(
  "/signup",
  body("fullname").isLength({ min: 1 }),
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  signup
);
router.post("/signin", signin);

export default router;

// interface User {
//     fullname: string;
//     date: string;
//     email: string;
//     password: string;
//     confirmpassword: string;
//     createdAt: any;
//   }
