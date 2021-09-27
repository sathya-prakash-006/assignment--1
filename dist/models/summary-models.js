"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const createSummary = new mongoose_1.default.Schema({
    income: { type: Number, required: true },
    accountNumber: { type: Number, required: true },
    spends: { type: Number, required: true },
    author: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});
const UserSummary = mongoose_1.default.model("Summary", createSummary);
exports.default = UserSummary;
