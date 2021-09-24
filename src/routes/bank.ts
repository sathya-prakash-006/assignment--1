import { Router } from "express";
import { availableservices, currentServices } from "../controllers/bank";
import { createAccount, loginAccount } from "../controllers/login";

const router = Router();

// CREATE ACCOUNT AND LOGIN

router.post("/createaccount", createAccount);
// router.post("./login");
router.post("/loginaccount", loginAccount);

router.get("/currentservices", currentServices);
router.get("/availableservices", availableservices);

export default router;
