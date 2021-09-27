"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user-controller");
const router = (0, express_1.Router)();
// CREATE ACCOUNT AND LOGIN
router.post("/signup", user_controller_1.signup);
router.post("/signin", user_controller_1.signin);
exports.default = router;
