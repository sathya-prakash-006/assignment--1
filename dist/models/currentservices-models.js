"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const createCurrentServices = new mongoose_1.default.Schema({
    currentAccount: [
        {
            url: { type: String, required: true },
            available: { type: Boolean, required: true },
        },
    ],
    payroll: [
        {
            url: { type: String, required: true },
            available: { type: Boolean, required: true },
        },
    ],
    payments: [
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
const CurrentService = mongoose_1.default.model("CurrentServices", createCurrentServices);
exports.default = CurrentService;
// interface User {
//   currentAccount: boolean;
//   payroll: boolean;
//   payments: boolean;
//   author: any;
// }
// const createCurrentServices = new mongoose.Schema<User>({
//   currentAccount: { type: Boolean, required: true },
//   payroll: { type: Boolean, required: true },
//   payments: { type: Boolean, required: true },
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
// });
// const CurrentService = mongoose.model<User>(
//   "CurrentServices",
//   createCurrentServices
// );
// export default CurrentService;
