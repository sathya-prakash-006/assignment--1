"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = async (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        let decodedData;
        if (token) {
            decodedData = jsonwebtoken_1.default.verify(token, "test");
            req.userId = decodedData === null || decodedData === void 0 ? void 0 : decodedData.id;
        }
    }
    catch (error) {
        console.log(error);
    }
};
