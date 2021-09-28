"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRatingById = exports.getRating = exports.createRating = void 0;
const rating_model_1 = __importDefault(require("../models/rating-model"));
const express_validator_1 = require("express-validator");
// creating rating
const createRating = async (req, res) => {
    try {
        //validation number should be range 1 to 5
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array() });
        }
        const rating = await rating_model_1.default.create(req.body);
        return res.status(201).json({ data: rating });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.createRating = createRating;
/************************************************************************************************************* */
// Get all the rating
const getRating = async (req, res) => {
    try {
        const summary = await rating_model_1.default.find().lean().exec();
        return res.status(200).json({ data: summary });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getRating = getRating;
/************************************************************************************************************* */
// get rating based on user id
const getRatingById = async (req, res) => {
    const id = req.params.id;
    try {
        const summary = await rating_model_1.default.find({ author: { $eq: id } })
            .populate("author")
            .lean()
            .exec();
        return res.status(200).json({ data: summary });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getRatingById = getRatingById;
