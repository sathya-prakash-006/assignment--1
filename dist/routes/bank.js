"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bank_1 = require("../controllers/bank");
const login_1 = require("../controllers/login");
const router = (0, express_1.Router)();
// CREATE ACCOUNT AND LOGIN
router.post("/createaccount", login_1.createAccount);
// router.post("./login");
router.post("/loginaccount", login_1.loginAccount);
router.get("/currentservices", bank_1.currentServices);
router.get("/availableservices", bank_1.availableservices);
exports.default = router;
