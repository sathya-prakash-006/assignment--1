"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentServiceById = exports.getCurrentService = exports.createCurrentService = void 0;
const currentservices_models_1 = __importDefault(require("../models/currentservices-models"));
// craeting current services
const createCurrentService = async (req, res) => {
    try {
        const currentService = await currentservices_models_1.default.create(req.body);
        return res.status(201).json({ data: currentService });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.createCurrentService = createCurrentService;
/************************************************************************************************************* */
// Get all the users current services
const getCurrentService = async (req, res) => {
    try {
        const currentService = await currentservices_models_1.default.find()
            .populate("author")
            .lean()
            .exec();
        return res.status(200).json({ data: currentService });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getCurrentService = getCurrentService;
/************************************************************************************************************* */
// get current services based on  id
const getCurrentServiceById = async (req, res) => {
    const id = req.params.id;
    try {
        const currentService = await currentservices_models_1.default.find({ author: { $eq: id } })
            .populate("author")
            .lean()
            .exec();
        return res.status(200).json({ data: currentService });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getCurrentServiceById = getCurrentServiceById;
