"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailableServiceById = exports.getAvailableService = exports.createAvailableService = void 0;
const availableService_model_1 = __importDefault(require("../models/availableService-model"));
// craeting available  services
const createAvailableService = async (req, res) => {
    try {
        const availableService = await availableService_model_1.default.create(req.body);
        return res.status(201).json({ data: availableService });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.createAvailableService = createAvailableService;
/************************************************************************************************************* */
// Get all the users available services
const getAvailableService = async (req, res) => {
    try {
        const availableService = await availableService_model_1.default.find()
            .populate("author")
            .lean()
            .exec();
        return res.status(200).json({ data: availableService });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getAvailableService = getAvailableService;
/************************************************************************************************************* */
// get available services based on  id
const getAvailableServiceById = async (req, res) => {
    const id = req.params;
    try {
        const availableService = await availableService_model_1.default.find({
            author: { $eq: id },
        })
            .populate("author")
            .lean()
            .exec();
        return res.status(200).json({ data: availableService });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getAvailableServiceById = getAvailableServiceById;
