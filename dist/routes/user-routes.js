"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user-controller");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
// CREATE ACCOUNT AND LOGIN
router.post("/signup", (0, express_validator_1.body)("fullname").isLength({ min: 3 }).withMessage("name should be length greater than 3"), (0, express_validator_1.body)("email").isEmail().withMessage("Must be valid email address"), (0, express_validator_1.body)("password").isLength({ min: 6 }).withMessage("Must be at least 6 characters"), user_controller_1.signup);
router.post("/signin", user_controller_1.signin);
exports.default = router;
