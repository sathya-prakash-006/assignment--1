"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const createAccount = new mongoose_1.default.Schema({
    fullname: { type: String, required: true },
    date: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    confirmpassword: { type: String },
});
const UserModel = mongoose_1.default.model("User", createAccount);
exports.default = UserModel;
