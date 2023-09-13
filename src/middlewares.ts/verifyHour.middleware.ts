import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export async function verifyHour(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const hour: number = parseInt(req.body.hour);
  if (hour < 8 || hour >= 16) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  } else {
    next();
  }
}
