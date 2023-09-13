import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import moment from "moment";

export async function verifyDateAvailable(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const date = req.body.date;
  const data = moment(date, "YYYY-DD-MM");
  if (data.isoWeekday() < 1 || data.isoWeekday() > 5) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  } else {
    next();
  }
}
