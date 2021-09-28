import { RequestHandler } from "express";
import RatingModel from "../models/rating-model";
import { validationResult } from "express-validator";

// creating rating

export const createRating: RequestHandler = async (req, res) => {
  try {
    //validation number should be range 1 to 5

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const rating = await RatingModel.create(req.body);
    return res.status(201).json({ data: rating });
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
/************************************************************************************************************* */

// Get all the rating
export const getRating: RequestHandler = async (req, res) => {
  try {
    const summary = await RatingModel.find().lean().exec();

    return res.status(200).json({ data: summary });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/************************************************************************************************************* */

// get rating based on user id

export const getRatingById: RequestHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const summary = await RatingModel.find({ author: { $eq: id } })
      .populate("author")
      .lean()
      .exec();

    return res.status(200).json({ data: summary });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
