"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.signin = void 0;
const user_model_1 = __importDefault(require("../models/user-model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = "test";
// SIGN IN
const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        //checking user is already exist or not
        const existingUser = await user_model_1.default.findOne({ email });
        if (!existingUser)
            return res.status(404).json({ message: "User doesn't exost." });
        // comparing entered password and the password
        const isPasswordCorrect = await bcryptjs_1.default.compare(password, existingUser.password);
        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Invalid Credentials" });
        // If password and email proper then creating jwt token for frontend
        const token = jsonwebtoken_1.default.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    }
    catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
};
exports.signin = signin;
/************************************************************************************************************* */
// CREATE NEW ACCOUNT
const signup = async (req, res) => {
    const { fullname, date, email, password, confirmpassword } = req.body;
    try {
        // checking user is already exist or not
        const oldUser = await user_model_1.default.findOne({ email });
        if (oldUser)
            return res.status(400).json({ message: "User already exists" });
        // if the password and confirm password matching or not
        if (password !== confirmpassword)
            return res.status(404).json({ message: "Password don't match." });
        // Hashing the password
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        const result = await user_model_1.default.create({
            email,
            date,
            password: hashedPassword,
            fullname: fullname,
        });
        // creating jwt token
        const token = jsonwebtoken_1.default.sign({ email: result.email, id: result._id }, secret, {
            expiresIn: "1h",
        });
        res.status(201).json({ result, token });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.signup = signup;
