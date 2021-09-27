import { RequestHandler } from "express";
import AvailableService from "../models/availableService-model";

// creating available  services

export const createAvailableService: RequestHandler = async (req, res) => {
  try {
    const availableService = await AvailableService.create(req.body);
    return res.status(201).json({ data: availableService });
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
/************************************************************************************************************* */

// Get all the users available services
export const getAvailableService: RequestHandler = async (req, res) => {
  try {
    const availableService = await AvailableService.find()
      .populate("author")
      .lean()
      .exec();

    return res.status(200).json({ data: availableService });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/************************************************************************************************************* */

// get available services based on  id

export const getAvailableServiceById: RequestHandler = async (req, res) => {
  const id = req.params;
  try {
    const availableService = await AvailableService.find({
      author: { $eq: id },
    })
      .populate("author")
      .lean()
      .exec();

    return res.status(200).json({ data: availableService });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
