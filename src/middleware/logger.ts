import express, { Request, Response, NextFunction } from "express";

// Error handling Middleware
const logger = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({ message: err.message });
};

export default logger;
