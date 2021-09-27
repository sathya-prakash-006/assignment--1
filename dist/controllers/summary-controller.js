"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummaryById = exports.getSummary = exports.createSummary = void 0;
const summary_models_1 = __importDefault(require("../models/summary-models"));
// craeting summary
const createSummary = async (req, res) => {
    const { accountNumber, income, spends } = req.body;
    try {
        // If user already present then can't add another suumary
        const existingSummary = await summary_models_1.default.findOne({ accountNumber });
        if (existingSummary)
            return res.status(404).json({ message: "User summary already present" });
        const summary = await summary_models_1.default.create(req.body);
        return res.status(201).json({ data: summary });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.createSummary = createSummary;
/************************************************************************************************************* */
// Get all the users summary
const getSummary = async (req, res) => {
    try {
        const summary = await summary_models_1.default.find().populate("author").lean().exec();
        return res.status(200).json({ data: summary });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getSummary = getSummary;
/************************************************************************************************************* */
// get summary based on user id
const getSummaryById = async (req, res) => {
    try {
        const summary = await summary_models_1.default.findById(req.params.id)
            .populate("author")
            .lean()
            .exec();
        return res.status(200).json({ data: summary });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getSummaryById = getSummaryById;
