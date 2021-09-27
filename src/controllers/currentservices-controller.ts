import { RequestHandler } from "express";
import CurrentService from "../models/currentservices-models";

// craeting current services

export const createCurrentService: RequestHandler = async (req, res) => {
  try {
    const currentService = await CurrentService.create(req.body);
    return res.status(201).json({ data: currentService });
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
/************************************************************************************************************* */

// Get all the users current services
export const getCurrentService: RequestHandler = async (req, res) => {
  try {
    const currentService = await CurrentService.find()
      .populate("author")
      .lean()
      .exec();

    return res.status(200).json({ data: currentService });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/************************************************************************************************************* */

// get current services based on  id

export const getCurrentServiceById: RequestHandler = async (req, res) => {
  try {
    const currentService = await CurrentService.findById(req.params.id)
      .populate("author")
      .lean()
      .exec();

    return res.status(200).json({ data: currentService });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
