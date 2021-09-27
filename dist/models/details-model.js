"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const createDetails = new mongoose_1.default.Schema({
    transactionId: { type: Number, required: true },
    date: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    action: { type: String, required: true },
    author: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});
const UserDetails = mongoose_1.default.model("Details", createDetails);
exports.default = UserDetails;
