"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const createAvailableServices = new mongoose_1.default.Schema({
    wallet: [
        {
            url: { type: String, required: true },
            available: { type: Boolean, required: true },
        },
    ],
    investment: [
        {
            url: { type: String, required: true },
            available: { type: Boolean, required: true },
        },
    ],
    taxPayment: [
        {
            url: { type: String, required: true },
            available: { type: Boolean, required: true },
        },
    ],
    loans: [
        {
            url: { type: String, required: true },
            available: { type: Boolean, required: true },
        },
    ],
    author: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});
const AvailableService = mongoose_1.default.model("AvailableServices", createAvailableServices);
exports.default = AvailableService;
