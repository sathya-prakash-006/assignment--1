"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const createAccount = new mongoose_1.Schema({
    fullname: { type: String, required: true },
    date: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
});
const UserModel = (0, mongoose_1.model)("User", createAccount);
exports.default = UserModel;
