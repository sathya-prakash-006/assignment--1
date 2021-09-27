import { RequestHandler } from "express";
import UserSummary from "../models/summary-models";
import UserModel from "../models/user-model";

// craeting summary

export const createSummary: RequestHandler = async (req, res) => {
  const { accountNumber, income, spends } = req.body;
  try {
    // If user already present then can't add another suumary
    const existingSummary = await UserSummary.findOne({ accountNumber });

    if (existingSummary)
      return res.status(404).json({ message: "User summary already present" });

    const summary = await UserSummary.create(req.body);
    return res.status(201).json({ data: summary });
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
/************************************************************************************************************* */

// Get all the users summary
export const getSummary: RequestHandler = async (req, res) => {
  try {
    const summary = await UserSummary.find().populate("author").lean().exec();

    return res.status(200).json({ data: summary });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/************************************************************************************************************* */

// get summary based on user id

export const getSummaryById: RequestHandler = async (req, res) => {
  try {
    const summary = await UserSummary.findById(req.params.id)
      .populate("author")
      .lean()
      .exec();

    return res.status(200).json({ data: summary });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
