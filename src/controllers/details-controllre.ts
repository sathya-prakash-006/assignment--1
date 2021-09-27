import { RequestHandler } from "express";
import Details from "../models/details-model";

// creating tranactions

export const createDetails: RequestHandler = async (req, res) => {
  try {
    const details = await Details.create(req.body);
    return res.status(201).json({ data: details });
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong...." });
  }
};
/************************************************************************************************************* */

// Get all the tranactions
export const getDetails: RequestHandler = async (req, res) => {
  try {
    const details = await Details.find().populate("author").lean().exec();

    return res.status(200).json({ data: details });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/************************************************************************************************************* */

// get tranactions based on  id

export const getDetailsById: RequestHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const details = await Details.find({ author: { $eq: id } })
      .populate("author")
      .lean()
      .exec();

    return res.status(200).json({ data: details });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
