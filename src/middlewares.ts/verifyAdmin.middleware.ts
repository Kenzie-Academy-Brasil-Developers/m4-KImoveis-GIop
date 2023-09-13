import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const verifyAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { decoded } = res.locals;
  if (decoded.admin == false) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
