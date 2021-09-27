"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user-controller");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
// CREATE ACCOUNT AND LOGIN
router.post("/signup", (0, express_validator_1.body)("fullname").isLength({ min: 1 }), (0, express_validator_1.body)("email").isEmail(), (0, express_validator_1.body)("password").isLength({ min: 6 }), user_controller_1.signup);
router.post("/signin", user_controller_1.signin);
exports.default = router;
// interface User {
//     fullname: string;
//     date: string;
//     email: string;
//     password: string;
//     confirmpassword: string;
//     createdAt: any;
//   }
