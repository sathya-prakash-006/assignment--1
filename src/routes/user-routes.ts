import { Router } from "express";
import { signup, signin } from "../controllers/user-controller";

const router = Router();

// CREATE ACCOUNT AND LOGIN

router.post("/signup", signup);
router.post("/signin", signin);


export default router;
