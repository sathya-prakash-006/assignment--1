"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetailsById = exports.getDetails = exports.createDetails = void 0;
const details_model_1 = __importDefault(require("../models/details-model"));
// craeting tranactions
const createDetails = async (req, res) => {
    try {
        const details = await details_model_1.default.create(req.body);
        return res.status(201).json({ data: details });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong...." });
    }
};
exports.createDetails = createDetails;
/************************************************************************************************************* */
// Get all the tranactions
const getDetails = async (req, res) => {
    try {
        const details = await details_model_1.default.find().populate("author").lean().exec();
        return res.status(200).json({ data: details });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getDetails = getDetails;
/************************************************************************************************************* */
// get tranactions based on  id
const getDetailsById = async (req, res) => {
    const id = req.params.id;
    try {
        const details = await details_model_1.default.find({ author: { $eq: id } }).populate("author").lean().exec();
        return res.status(200).json({ data: details });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getDetailsById = getDetailsById;
